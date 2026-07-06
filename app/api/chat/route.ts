import { NextRequest, NextResponse } from 'next/server';
import { retrieve } from '@/lib/chat-retrieval';
import { FACTS } from '@/lib/chat-knowledge/sales';
import { persistLead } from '@/lib/leads';
import { normalizeE164 } from '@/lib/phone';
import { notifyOwner } from '@/lib/notify';

/**
 * POST /api/chat — the scoped sales chatbot (retrieval, not generative).
 *
 * Flow:
 *   1. If the body carries a captured email/phone, persist the transcript as a
 *      lead (source 'chat') and notify the owner — the widget's real job is
 *      routing an interested visitor to the voice demo / a callback.
 *   2. Otherwise answer the message from the curated whitelist. No confident
 *      match → a deflection that offers the demo call (every reply is a CTA).
 *
 * $0: no LLM call, hallucination-proof by construction (can only emit curated
 * answers). See lib/chat-retrieval.ts for the (optional) embedding upgrade path.
 */

const DEV = process.env.NODE_ENV !== 'production';

const FALLBACK = `I want to get that exactly right rather than guess. The fastest answer is to hear the AI live — call ${FACTS.phoneDisplay} and it’ll answer you right now. Or leave your email/phone here and we’ll follow up. Meanwhile I can help with pricing, hours, the free trial, or how it works.`;

function clientIp(request: NextRequest): string | undefined {
  return (
    request.headers.get('CF-Connecting-IP') ||
    request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
    undefined
  );
}

interface ChatBody {
  message?: string;
  /** When the visitor hands over contact info mid-chat. */
  email?: string;
  phone?: string;
  /** Prior turns, for the owner-notification transcript. */
  history?: { role: 'user' | 'bot'; text: string }[];
  /** First-party journey keys — join the chat lead to the visitor path. */
  visitorId?: string;
  sessionId?: string;
}

export async function POST(request: NextRequest) {
  let body: ChatBody;
  try {
    body = (await request.json()) as ChatBody;
  } catch {
    return NextResponse.json({ ok: false, error: 'Invalid request.' }, { status: 400 });
  }

  const message = typeof body.message === 'string' ? body.message.trim() : '';
  const email = typeof body.email === 'string' ? body.email.trim() : '';
  const phone = normalizeE164(typeof body.phone === 'string' ? body.phone : '') || undefined;

  // ── Contact capture path — persist the chat as a lead + notify owner ──────
  if (email || phone) {
    const ip = clientIp(request);
    const transcript = (body.history ?? [])
      .map((t) => `${t.role === 'user' ? 'Visitor' : 'Bot'}: ${t.text}`)
      .join('\n');
    await persistLead({
      leadId: crypto.randomUUID(),
      phoneE164: phone,
      source: 'chat',
      status: 'submitted',
      ip,
      email: email || undefined,
      message: transcript || message || undefined,
      visitorId: typeof body.visitorId === 'string' ? body.visitorId : undefined,
      sessionId: typeof body.sessionId === 'string' ? body.sessionId : undefined,
    });
    await notifyOwner(
      `New chat lead — ${email || phone}`,
      `<p>A website chat visitor left contact info.</p>
       ${email ? `<p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>` : ''}
       ${phone ? `<p><strong>Phone:</strong> ${phone}</p>` : ''}
       ${transcript ? `<p><strong>Transcript:</strong><br/>${transcript.replace(/\n/g, '<br/>')}</p>` : ''}`,
      email || undefined,
    );
    return NextResponse.json({
      ok: true,
      reply: `Thanks — I’ve passed your info along and someone will reach out shortly. Want the AI to call you right now instead? Just call ${FACTS.phoneDisplay} and it’ll answer live.`,
      captured: true,
    });
  }

  // ── Answer path — curated retrieval only ──────────────────────────────────
  if (!message) {
    return NextResponse.json({ ok: false, error: 'Say something and I’ll help.' }, { status: 400 });
  }

  const match = retrieve(message);
  const reply = match ? match.entry.answer : FALLBACK;

  if (DEV) console.log('[chat]', { message, matched: match?.entry.id ?? null, score: match?.score ?? 0 });

  return NextResponse.json({
    ok: true,
    reply,
    matched: match?.entry.id ?? null,
    // Signal the widget to offer contact capture when we couldn't answer.
    offerCapture: !match,
  });
}

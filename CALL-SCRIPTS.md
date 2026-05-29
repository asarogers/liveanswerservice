# Live Answer — 10 Call Conversation Variations

Each script is the AI receptionist answering on behalf of a Live Answer customer.
**The goal of every call is the same: get the appointment booked** (or, where booking isn't possible, capture a qualified callback with name, number, address, and intent).

Conventions:
- `AI:` = Live Answer agent
- `C:` = caller
- `[bracketed]` = system action (tool call, SMS, CRM write, etc.)
- All recordings open with two-party-consent disclosure per CA Penal Code §632.

---

## 1. HVAC — After-hours emergency, no heat (winter)

**Vertical:** HVAC · **Time:** 8:47 PM · **Outcome target:** dispatch tonight OR first-slot tomorrow

AI: Thanks for calling Anderson Heating &amp; Air, this call may be recorded for service quality. This is the after-hours line — I can help you book a tech. What's going on?
C: My furnace just stopped. House is freezing and I've got a baby.
AI: Got it — no heat with an infant in the home, I'm marking this priority. Can I get your address?
C: 1428 Willow Lane, Modesto.
AI: Thank you. And the best number to reach you at — is the one you're calling from okay?
C: Yeah, this one.
AI: Perfect. Anderson has an on-call tech tonight; the dispatch fee after 8 PM is $189, applied to the repair if you move forward. Want me to send him out?
C: Yes please.
AI: Booking now. [creates job · ServiceTitan] Mike's about 35 minutes out, you'll get a text with his ETA and a photo so you know who's at the door. Anything else I should tell him before he heads over?
C: It's a Carrier, maybe 12 years old.
AI: Adding that. Mike's on his way — text confirmation coming in under a minute. Stay warm.

---

## 2. HVAC — Price shopper, summer A/C tune-up

**Vertical:** HVAC · **Time:** 10:12 AM Saturday · **Outcome target:** book tune-up this week

AI: Anderson Heating &amp; Air, this call may be recorded. How can I help?
C: Hi — how much is an A/C tune-up?
AI: Our 21-point summer tune-up is $89, includes refrigerant check and coil clean. Are you trying to get on the schedule before the heat hits, or is something acting up already?
C: Just preventive. AC's old.
AI: Smart. We've got Tuesday at 10 or Thursday at 2 still open this week — either work?
C: Thursday.
AI: Thursday at 2. Can I get your address and a good number?
C: 88 Acacia, Modesto. This number's fine.
AI: Booked — Thursday 2 PM, $89 tune-up, 88 Acacia. [writes to CRM · sends SMS confirmation] You'll get a reminder the morning of with the tech's name. Anything I should pass along about the system?
C: It's a 4-ton Trane, upstairs unit makes a clicking sound.
AI: Logged — clicking sound on upstairs Trane. Tech will look at that during the tune-up. Have a good one.

---

## 3. Dental — New patient, hot lead from Google search

**Vertical:** Dental · **Time:** 11:38 AM · **Outcome target:** new-patient exam booked + insurance captured

AI: Sunshine Dental, this call may be recorded for quality. This is the front desk — are you an existing patient?
C: No, I'm new. I think I have a cavity.
AI: Sorry to hear it — let's get you in. Our new-patient exam with X-rays is $189 if you're uninsured, or covered at most PPO plans. Are you using insurance?
C: Delta Dental PPO.
AI: Perfect, we're in-network with Delta PPO. Can I get your name, date of birth, and the member ID off your card?
C: Sarah Chen, 3/14/1991, member ID 88471122.
AI: Got it. [verifies eligibility · pVerify] You're showing active with $1,500 annual remaining. We have Wednesday 9 AM or Friday 3 PM for the new-patient visit — Dr. Patel will see you and we'll take care of the cavity at the follow-up.
C: Friday 3.
AI: Friday at 3 with Dr. Patel. [creates appt · Dentrix] What's the best email for the new-patient forms? I'll text them now so you can fill them out before you come in.
C: sarahc@gmail.com.
AI: Sent. See you Friday, Sarah.

---

## 4. Legal — PI lead, drunk-driver crash 2 hours ago

**Vertical:** Personal injury · **Time:** 11:55 PM · **Outcome target:** consult booked tomorrow + intake locked

AI: Reyes Law, this call may be recorded. Are you safe right now?
C: Yeah, I'm at the ER. I got hit by a drunk driver on the 99.
AI: I'm so sorry. First — are you being treated, and is anyone with you?
C: My wife is here. I have a broken wrist and they're checking my neck.
AI: Okay. We do these cases on contingency, so there's no fee unless we win. Let me grab the basics so Mr. Reyes can call you first thing — he handles every PI intake personally. Your full name?
C: Marcus Webb.
AI: Marcus, the best callback number?
C: 209-555-0142.
AI: The accident location — was it I-99, and roughly what mile?
C: Northbound near Salida.
AI: Did the police come, and do you have a report number?
C: They came. I don't have the number, the officer said it'd be ready in 48 hours.
AI: That's fine, we'll pull it. Mr. Reyes will call you at 9 AM tomorrow for a 30-minute consult — does that work?
C: Yes.
AI: Booked. [intake → Clio · SMS confirmation + ER follow-up checklist] You'll get a text with what to save: photos, the other driver's insurance card, every ER document. Anything you remember tomorrow, write down. Take care of yourself.

---

## 5. Real Estate — Buyer lead from Zillow at 11 PM

**Vertical:** Real estate · **Time:** 10:51 PM · **Outcome target:** showing booked within 24 hours (78% of leads go to first responder — MIT)

AI: Bay Group Realty, this call may be recorded. Are you calling about a listing?
C: Yeah, the one on 2240 Beachwood — is it still available?
AI: Let me check. [MLS query] Yes, 2240 Beachwood is active, listed at $1.295M, 3-bed 2-bath. Are you working with an agent already?
C: No, I just saw it on Zillow.
AI: Got it. Bay Group has the listing — I can get you in front of it. Tomorrow's open: 11 AM, 2 PM, or 5 PM. Which works?
C: 11 AM.
AI: 11 AM tomorrow. Can I get your name and a good number?
C: Dan O'Brien, 415-555-0918.
AI: Are you pre-approved, or would you like our lender to give you a free 24-hour pre-approval before the showing?
C: Not pre-approved yet.
AI: I'll have Tina from Bay Lending call you in the morning — free, no obligation, and it makes any offer way stronger. [creates lead in Follow Up Boss · books showing in agent calendar] You're confirmed for 11 AM at 2240 Beachwood with Agent Maria. Bring an ID. Anything else you want her to know?
C: I'm relocating from Austin.
AI: Logged. Maria will reach out tonight with parking and entry details. Talk soon, Dan.

---

## 6. Restaurant — Large group reservation, Saturday night

**Vertical:** Restaurant · **Time:** 6:14 PM Friday · **Outcome target:** booked + deposit captured for parties 8+

AI: Trattoria Marino, this call may be recorded. Looking to make a reservation?
C: Yeah, for tomorrow night, party of 12.
AI: Twelve, beautiful. For groups of 8 or more we hold the table with a $25-per-person deposit, applied to your bill. Time?
C: 7:30.
AI: Let me check. [OpenTable query] 7:30 is full but I can do 7:45 or 8:15 — both at our large round in the back room.
C: 7:45 works.
AI: Party of 12, 7:45 PM Saturday. Name on the reservation?
C: Lopez. It's a birthday.
AI: Wonderful — would you like us to do a candle plate for the birthday person, no charge?
C: Yes, my mom. Her name is Elena.
AI: Lovely. I'll need the $300 deposit to hold the table — I'll text a link, it takes 30 seconds. Best number?
C: 209-555-0331.
AI: [sends Stripe link] Text just went out. Once that hits, you'll get a confirmation. Any allergies in the group?
C: One peanut, one celiac.
AI: Noted — peanut allergy + celiac. Chef will be informed. Looking forward to celebrating Elena.

---

## 7. Cold caller / spam — Filter and protect the owner

**Vertical:** Any · **Time:** 2:08 PM · **Outcome target:** don't book; politely end without wasting the owner's time

AI: Anderson Heating &amp; Air, this call may be recorded.
C: Hi, this is Brad with Google Business — we noticed your listing isn't optimized…
AI: We handle marketing through our in-house team, so I won't be booking anything today. If you'd like to send information, you can email info@andersonhvac.com. Have a good one.
[call logged · CRM tag: solicitor · no notification to owner]

---

## 8. Bilingual — Spanish-only caller, plumbing emergency

**Vertical:** Plumbing · **Time:** 7:22 AM · **Outcome target:** dispatch tech same-day, in Spanish

AI: Plomería del Valle, esta llamada puede ser grabada. ¿En qué le puedo ayudar?
C: Tengo una fuga grande debajo del fregadero, está mojando todo.
AI: Lo siento — fuga activa debajo del fregadero. ¿Ya cerró la llave de paso?
C: Sí, ya la cerré.
AI: Perfecto, eso ayuda mucho. ¿Me da su dirección?
C: 412 East Street, Fresno.
AI: Gracias. Tenemos un técnico disponible entre las 10 y las 12 de hoy — la visita son $89 e incluye el diagnóstico. ¿Le funciona?
C: Sí, por favor.
AI: Listo. [crea trabajo · ServiceTitan · agrega "fuga bajo fregadero, llave cerrada"] Le voy a mandar un texto en español con el nombre del técnico y su foto. ¿Su número es este mismo?
C: Sí.
AI: Confirmado. Manuel llegará entre 10 y 12. Si la fuga vuelve a empezar, márqueme y mandamos a alguien antes. Que tenga un buen día.

---

## 9. Existing customer — Reschedule + upsell maintenance plan

**Vertical:** HVAC · **Time:** 9:03 AM · **Outcome target:** reschedule + convert to annual plan

AI: Anderson Heating &amp; Air, this call may be recorded. How can I help?
C: Hey, this is Janet Park — I have an appointment Thursday but I can't make it.
AI: Let me find you, Janet. [CRM lookup] Got it — Thursday 2 PM tune-up. What works better?
C: Maybe next Monday morning?
AI: I have Monday at 9 AM or 11 AM open.
C: 9.
AI: Done — Monday 9 AM, same $89 tune-up. [reschedules · ServiceTitan] One thing while I have you, Janet — you're our third visit this year. Our Comfort Club is $19/month, includes two tune-ups, 15% off repairs, and priority dispatch. Most members save more than they pay in year one. Want me to add it?
C: How does cancellation work?
AI: Cancel anytime, no fee, no contract. If you sign up today the Monday visit is included.
C: Sure, let's try it.
AI: Adding it. [enrolls · sends Stripe authorization SMS] Text just went out — tap the link to authorize $19/month. Once that's in, your Monday tune-up is comped. Anything else?
C: No, thanks.
AI: Talk Monday, Janet.

---

## 10. Tire-kicker — Wants info, not ready to book; capture the lead

**Vertical:** Dental · **Time:** 3:48 PM · **Outcome target:** capture lead + SMS quote + warm follow-up

AI: Sunshine Dental, this call may be recorded. How can I help?
C: I'm just calling around — how much is a crown?
AI: Totally fair to shop. A porcelain crown with us runs $1,150 cash, or roughly $400–$600 out of pocket on most PPO plans. Are you in pain or planning ahead?
C: Planning. I might need one but I'm comparing.
AI: Smart. Dr. Patel does a free 15-minute consult — she'll look at the tooth, tell you honestly if it needs a crown or if an inlay works, and you walk out with a written quote. No commitment.
C: Hmm, I don't know if I have time today.
AI: No pressure. Can I text you the price list and a link to book the free consult when you're ready? That way you have us next to whoever else you're calling.
C: Sure.
AI: What's the best number? And your first name so I can address the text.
C: Olivia, 415-555-0177.
AI: Sending now. [SMS: price sheet + booking link · CRM lead created · tagged "crown shopper, follow up in 3 days"] You'll see a text from Sunshine Dental in a second. If you have any questions, just reply to it — comes straight to us. Have a great afternoon, Olivia.

---

## What every script has in common (booking system)

1. **Consent disclosure** in the first sentence (CCPA §632).
2. **One qualifying question** to route urgency (emergency vs shopping vs existing).
3. **Anchor price stated proactively** — kills the "how much?" objection before it derails.
4. **Two time options, not "what works for you?"** — choice architecture, higher conversion.
5. **Capture name + callback number before letting the call end**, even if no booking.
6. **Tool call → CRM/scheduling system → SMS confirmation** all happen mid-call.
7. **One soft upsell or follow-up hook** at the end (maintenance plan, pre-approval, deposit, price sheet).
8. **Spam/solicitor filter** so owners never see junk leads.
9. **Spanish-native handling** when detected — no transfer, no fallback.
10. **Empathy on emergencies** (medical, accident, no heat with infant) — slow down, confirm safety, then book.

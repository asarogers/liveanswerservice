import { ImageResponse } from 'next/og';
import { getPostBySlug } from '@/lib/blog';

export const runtime = 'edge';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);

  const title = post?.title ?? 'Live Answer';
  const category = post?.category ?? '';
  const excerpt = post?.excerpt ?? '';

  // Clamp text to fit the image
  const displayTitle = title.length > 72 ? title.slice(0, 72) + '…' : title;
  const displayExcerpt =
    excerpt.length > 110 ? excerpt.slice(0, 110) + '…' : excerpt;
  const titleFontSize = title.length > 50 ? 50 : 58;

  return new ImageResponse(
    (
      <div
        style={{
          background: '#FAF9F5',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        {/* Sage left accent bar */}
        <div
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            width: 18,
            height: '100%',
            background: '#1A1A17',
          }}
        />

        {/* Decorative circle — top right */}
        <div
          style={{
            position: 'absolute',
            right: -100,
            top: -100,
            width: 380,
            height: 380,
            borderRadius: '50%',
            background: '#F2F0E8',
            opacity: 0.65,
          }}
        />

        {/* Main content */}
        <div
          style={{
            flex: 1,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            padding: '56px 96px 40px 100px',
          }}
        >
          {/* Category badge */}
          {category ? (
            <div style={{ display: 'flex', marginBottom: 28 }}>
              <div
                style={{
                  background: '#F2F0E8',
                  color: '#4A6B50',
                  fontSize: 18,
                  fontWeight: 700,
                  padding: '8px 20px',
                  borderRadius: 100,
                  letterSpacing: '0.07em',
                  textTransform: 'uppercase',
                }}
              >
                {category}
              </div>
            </div>
          ) : null}

          {/* Post title */}
          <div
            style={{
              fontSize: titleFontSize,
              fontWeight: 800,
              color: '#2C2C2C',
              lineHeight: 1.2,
              marginBottom: 24,
              maxWidth: 960,
            }}
          >
            {displayTitle}
          </div>

          {/* Excerpt */}
          {displayExcerpt ? (
            <div
              style={{
                fontSize: 22,
                color: '#5A5A5A',
                lineHeight: 1.6,
                maxWidth: 860,
              }}
            >
              {displayExcerpt}
            </div>
          ) : null}
        </div>

        {/* Sage bottom strip with branding */}
        <div
          style={{
            height: 76,
            background: '#1A1A17',
            display: 'flex',
            alignItems: 'center',
            padding: '0 100px',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              color: '#ffffff',
              fontSize: 20,
              fontWeight: 700,
              letterSpacing: '0.06em',
            }}
          >
            LIVE ANSWER
          </div>
          <div
            style={{
              color: '#F2F0E8',
              fontSize: 18,
              letterSpacing: '0.04em',
            }}
          >
            liveanswerservice.com
          </div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

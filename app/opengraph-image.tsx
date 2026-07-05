import { ImageResponse } from 'next/og';

// Dynamic share card for the bar-for-unframe application page, matching the
// page's look — Unframe's real brand, read live off unframe.ai: black
// surface, Poppins-style 600 display in white, the cyan-to-orange signature
// gradient as the only accent (as a glowing monolith bar and a hairline),
// white pill CTA. Rendered at build time by next/og (Satori), so it uses a
// flexbox-only subset of CSS and plain hex colours.

export const alt =
  'Bar Moshe for Unframe — Full Stack Software Engineer. Node.js, React, Vue, PostgreSQL, and LLM apps shipped end to end.';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

const GRAD =
  'linear-gradient(90deg, #00C5EA 0%, #3231DD 20%, #7800FF 40%, #DF00B4 60%, #FF0080 80%, #FF9600 100%)';

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px 56px',
          backgroundColor: '#000000',
          color: '#ffffff',
          fontFamily: 'sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
          <div
            style={{
              width: 46,
              height: 30,
              borderRadius: 4,
              backgroundImage: GRAD,
              boxShadow: '0 0 42px 10px rgba(120,0,255,0.55)',
              display: 'flex',
            }}
          />
          <div style={{ display: 'flex', fontSize: 30, fontWeight: 600 }}>
            bar for Unframe
          </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: 18 }}>
          <div
            style={{
              display: 'flex',
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-3px',
            }}
          >
            Full stack that ships AI-native. Fast.
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 28,
              color: '#c9c9c9',
              lineHeight: 1.4,
            }}
          >
            Bar Moshe, applying as a Full Stack Software Engineer. Node.js,
            React, Vue, PostgreSQL, LLM apps shipped end to end.
          </div>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              backgroundColor: '#ffffff',
              color: '#191919',
              borderRadius: 999,
              padding: '14px 30px',
              fontSize: 24,
              fontWeight: 600,
            }}
          >
            Let&apos;s connect
          </div>
          <div
            style={{
              display: 'flex',
              width: 420,
              height: 4,
              borderRadius: 2,
              backgroundImage: GRAD,
            }}
          />
        </div>
      </div>
    ),
    { ...size },
  );
}

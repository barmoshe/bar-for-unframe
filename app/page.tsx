import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import UnframeApp from "@/src/marketing/unframe/UnframeApp";

// Unframe's face (read live off unframe.ai, 2026-07-05) is Poppins across
// the board: 600 display headlines with tight (-3px at 72px) tracking,
// 400 body. Same family here, straight from Google Fonts.
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-uf",
  display: "swap",
});

// Ad-hoc, personalized application page for Bar Moshe's "Full Stack
// Software Engineer" application to Unframe (enterprise AI, Tel Aviv).
// Built in Unframe's own visual language, read live off unframe.ai:
// alternating black and white full-bleed bands, Poppins 600 display,
// the cyan-to-orange signature gradient as the only accent, a glowing
// gradient monolith scene, an exploded layer-stack centerpiece, white
// pill CTAs. Noindex, a shareable link for the Unframe team.
const ogTitle = "Bar Moshe × Unframe — Full Stack Software Engineer";
const ogDescription =
  "Bar Moshe, full-stack engineer in Tel Aviv. Node.js, React, TypeScript, PostgreSQL, and LLM apps shipped end to end. Real shipped work, production ownership, days not months.";

export const metadata: Metadata = {
  title: ogTitle,
  description: ogDescription,
  robots: { index: false, follow: false },
  openGraph: {
    type: "website",
    siteName: "Bar Moshe",
    title: ogTitle,
    description: ogDescription,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@barmoshe1",
    creator: "@barmoshe1",
    title: ogTitle,
    description: ogDescription,
  },
};

export default function UnframePage() {
  return (
    <div className={poppins.variable}>
      <UnframeApp />
    </div>
  );
}

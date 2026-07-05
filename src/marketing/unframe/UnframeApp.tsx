'use client';

import { useRef } from 'react';
import { gsap, useGSAP, FULL_MOTION_QUERY } from '../../lib/gsap';
import './marketing-base.css';
import './unframe.css';

/**
 * UnframeApp — an ad-hoc, personalized application page for Bar Moshe's
 * "Full Stack Software Engineer" application to Unframe (enterprise AI,
 * Tel Aviv). Built in Unframe's REAL visual language, read live off
 * unframe.ai (computed styles, 2026-07-05): Poppins everywhere (600
 * display, -0.04em tracking at display sizes, 400 body), alternating
 * full-bleed black (#000/#0f0f0f) and white (#fff/#f8f8f8) bands, ink
 * #191919, and ONE accent: the signature gradient
 * cyan → blue → purple → magenta → pink → orange. Their motifs, rebuilt
 * in CSS: the glowing gradient monolith in a dark ridge scene (hero +
 * close), the pinned exploded layer-stack ("Unframe AI OS" section),
 * thin gradient underline bars on stat cards, numbered badges in
 * gradient-bordered rounded squares, outlined pill badges, white pill
 * CTAs, gradient-filled headline text, and a logo-strip style stack row.
 *
 * Copy is terse CV register. Self-contained: mounts `.mp-root` only to
 * inherit the marketing reset (carried locally as marketing-base.css),
 * then overrides everything via `.uf-root`. All motion is gated on
 * prefers-reduced-motion; the page is fully legible with no JS.
 * Standalone sibling (the ADR-0132 pattern).
 */

const EMAIL =
  'mailto:1barmoshe1@gmail.com?subject=Full%20Stack%20Software%20Engineer%20-%20Bar%20Moshe';
const CV = '/Bar_Moshe_CV_Unframe.pdf';
const LINKEDIN = 'https://www.linkedin.com/in/barmoshe/';
const GITHUB = 'https://github.com/barmoshe';
const WHATSAPP = 'https://wa.me/972546561465';

/* ── Stack strip, where their customer-logo carousel sits. ───────────── */
const STACK = [
  'JavaScript',
  'TypeScript',
  'Node.js',
  'React',
  'Vue',
  'Next.js',
  'PostgreSQL',
  'MongoDB',
  'LLM apps',
  'MCP',
  'AWS',
  'Kubernetes',
  'CI/CD',
];

/* ── Stat cards, their "Proven outcomes" register. ───────────────────── */
const STATS = [
  {
    big: '6',
    unit: 'packages',
    line: 'released to npm as one TypeScript toolkit, docs site included',
    src: 'entailer',
  },
  {
    big: 'Days',
    unit: 'not months',
    line: 'from a client brief to a deployed, working MVP',
    src: 'solo delivery practice',
  },
  {
    big: '5',
    unit: 'person team',
    line: 'primary developer, full stack plus the DevOps that runs production',
    src: 'Joomsy',
  },
];

/* ── Numbered trio, their Prove value / Scale / Transform pattern. ───── */
const TRIO = [
  {
    n: '1',
    h: 'Ship end to end',
    p: 'Idea to production without handoffs. I own the frontend, the API, the schema and the deploy.',
  },
  {
    n: '2',
    h: 'Build with the customer',
    p: 'Years of support engineering at Wochit and live client sessions. I build against real users, in the room.',
  },
  {
    n: '3',
    h: 'Make AI production-grade',
    p: 'LLM pipelines with retries and evals, MCP servers others install. Working systems, not demos.',
  },
];

/* ── The layer stack: five plates, their AI OS exploded view. ────────── */
const PLATES = [
  { label: 'Product & UI', chips: ['React', 'Vue', 'Next.js'] },
  { label: 'APIs', chips: ['Node.js', 'TypeScript', 'REST'] },
  { label: 'AI layer', chips: ['LLM apps', 'MCP', 'agents'] },
  { label: 'Data', chips: ['PostgreSQL', 'MongoDB'] },
  { label: 'Run it', chips: ['AWS', 'Docker', 'K8s', 'CI/CD'] },
];

const PLATE_NOTES = [
  {
    h: 'Product & UI',
    p: 'Component model first, React and Vue. Interfaces users actually operate, shipped as products.',
  },
  {
    h: 'APIs on Node.js',
    p: 'Typed, tested services. The MIDI GPT REST API is one of them, running in public.',
  },
  {
    h: 'AI as a layer, not a feature',
    p: 'LLM pipelines with retries and evals, MCP servers on npm, agents with human gates.',
  },
  {
    h: 'PostgreSQL underneath',
    p: 'Schema owned end to end, from migration to query plan.',
  },
  {
    h: 'Runs on real infra',
    p: 'AWS, Docker, Kubernetes, CI/CD. Wix DevOps workshop trained, production proven.',
  },
];

/* ── Selected work. Credential = no link. ────────────────────────────── */
type Work = {
  tag: string;
  title: string;
  desc: string;
  href?: string;
  open?: string;
};

const WORK: Work[] = [
  {
    tag: 'Full stack · AI · npm',
    title: 'MDP',
    desc: 'Markdown to document and deck compiler on npm. MCP server plus Claude Code and Codex plugins others install.',
    href: 'https://barmoshe.github.io/mdp/',
    open: 'Open',
  },
  {
    tag: 'Full stack · live',
    title: 'apartment-hunter',
    desc: 'Apartment search, organized: listings, notes and statuses in one flow. Next.js, deployed on Vercel.',
    href: 'https://apartment-hunter-one.vercel.app',
    open: 'Open',
  },
  {
    tag: 'Full stack · live',
    title: 'trip-planner',
    desc: 'Trip planning with days, stops and the map in one view. Next.js, deployed on Vercel.',
    href: 'https://trip-planner-six-iota.vercel.app',
    open: 'Open',
  },
  {
    tag: 'Full stack · creative',
    title: 'Biome Synth',
    desc: 'Browser instrument with an AI DJ across five states. React, Tone.js, Three.js, Canvas2D.',
    href: 'https://biome-synth.lovable.app/',
    open: 'Play',
  },
  {
    tag: 'Agents · orchestration',
    title: 'temporal-plugin',
    desc: 'Temporal.io orchestration plugin for Claude Code. Durable, resumable workflows for agents.',
    href: 'https://github.com/Base67-AI/temporal-plugin',
    open: 'Code',
  },
  {
    tag: 'Node.js API · LLM pipeline',
    title: 'MIDI GPT REST API',
    desc: 'Multi-step generation pipeline calling OpenAI, with retries and validation at every step.',
    href: 'https://github.com/barmoshe/AI_MIDI_API',
    open: 'Code',
  },
  {
    tag: 'TypeScript · open source',
    title: 'entailer',
    desc: 'Logic-validity toolkit: checks whether a conclusion follows from its premises. Useful next to LLMs.',
    href: 'https://github.com/barmoshe/entailer',
    open: 'Code',
  },
  {
    tag: 'Current role · production',
    title: 'Joomsy',
    desc: 'Primary developer at a five-person startup: full stack plus the DevOps that runs it. Named, not linked.',
  },
];

/* ── On paper: the CV, compressed. ───────────────────────────────────── */
const CV_LINES: { h: string; lines: string[] }[] = [
  {
    h: 'Experience',
    lines: [
      'Software developer, Joomsy (2025-present). Primary developer, full stack + DevOps, team of five.',
      'Customer Support Engineer, Wochit (2021-present). Cloud video editor at scale; user issues into product fixes.',
    ],
  },
  {
    h: 'Education',
    lines: [
      'B.Sc. Computer Science, Afeka College of Engineering.',
      'Wix DevOps workshop (EKS, Kubernetes, Terraform). Coding Academy full-stack bootcamp.',
    ],
  },
];

/* ── The monolith scene: Unframe's real hero backdrop (their public CDN
      asset, HD snow ridges with the glowing gradient frame baked in),
      with a soft fade into the black band below. ─────────────────────── */
function MonolithScene({ compact = false }: { compact?: boolean }) {
  return (
    <div
      className={`uf-scene${compact ? ' uf-scene--compact' : ''}`}
      aria-hidden="true"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        className="uf-scene__img"
        src="/assets/bg-hero.webp"
        alt=""
        loading={compact ? 'lazy' : 'eager'}
      />
      <div className="uf-scene__floor" />
    </div>
  );
}

export default function UnframeApp() {
  const scope = useRef<HTMLDivElement | null>(null);

  /* Unframe's motion language: quiet rises on the hero, fade-ups on
     scroll, and the signature scroll-driven exploded layer stack
     (pinned on desktop, like their "AI OS" section). */
  useGSAP(
    () => {
      if (!matchMedia(FULL_MOTION_QUERY).matches) return;

      gsap.from('.uf-hero [data-rise]', {
        y: 26,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.out',
        stagger: 0.09,
        delay: 0.05,
      });

      gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((el) => {
        gsap.from(el, {
          y: 26,
          opacity: 0,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: el, start: 'top 88%' },
        });
      });

      /* The exploded stack. Desktop: pin the section and scrub the
         plates apart, their exact move. Narrow screens: simple reveal. */
      const mm = gsap.matchMedia();

      mm.add('(min-width: 901px)', () => {
        const plates = gsap.utils.toArray<HTMLElement>('.uf-plate');
        gsap.set(plates, { y: (i) => i * -46 });
        gsap.set('.uf-plate__label', { opacity: 0 });

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: '.uf-platform__pin',
            start: 'top 12%',
            end: '+=700',
            pin: true,
            scrub: 0.6,
          },
        });
        tl.to(plates, { y: 0, ease: 'none', stagger: 0.04 }, 0).to(
          '.uf-plate__label',
          { opacity: 1, ease: 'none', stagger: 0.05 },
          0.15,
        );
      });

      mm.add('(max-width: 900px)', () => {
        gsap.from('.uf-plate', {
          y: -18,
          opacity: 0,
          stagger: 0.08,
          duration: 0.5,
          scrollTrigger: { trigger: '.uf-stack3d', start: 'top 80%' },
        });
      });
    },
    { scope },
  );

  return (
    <div className="mp-root uf-root" ref={scope}>
      <a className="uf-skip" href="#main">Skip to content</a>

      {/* ── Announcement bar, their Swish-acquisition strip ──── */}
      <div className="uf-announce">
        <p>
          Bar Moshe is applying to Unframe. Full Stack Software Engineer, Tel Aviv.{' '}
          <a href="#work">
            See the work <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>

      {/* ── Top navigation: light strip, dark pill CTA ────────── */}
      <header className="uf-nav">
        <div className="uf-nav__inner">
          <a className="uf-brand" href="#main" aria-label="Bar Moshe for Unframe">
            <span className="uf-brand__b" aria-hidden="true">b</span>ar{' '}
            <span className="uf-brand__for">for</span> Unframe
          </a>
          <nav className="uf-nav__links" aria-label="Sections">
            <a className="uf-nav__link" href="#outcomes">Outcomes</a>
            <a className="uf-nav__link" href="#platform">Stack</a>
            <a className="uf-nav__link" href="#work">Work</a>
            <a className="uf-nav__link" href="#cv">CV</a>
          </nav>
          <a className="uf-btn uf-btn--dark uf-btn--sm" href={EMAIL}>
            Let&rsquo;s connect
          </a>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        {/* ── Hero: black, centered Poppins 600, monolith scene ── */}
        <section className="uf-hero">
          <div className="uf-hero__inner">
            <h1 className="uf-title" data-rise>
              Full stack that ships
              <br />
              AI-native. Fast.
            </h1>
            <p className="uf-lede" data-rise>
              I&rsquo;m Bar Moshe, applying to Unframe as a Full Stack Software
              Engineer. I build LLM-powered products end to end: Node.js, React,
              Vue, PostgreSQL, and the DevOps that runs them.
            </p>
            <p className="uf-triplet" data-rise>
              Real shipped work. Full ownership. Days, not months.
            </p>
            <div className="uf-hero__cta" data-rise>
              <a className="uf-btn uf-btn--white" href={EMAIL}>
                Let&rsquo;s connect
              </a>
              <a className="uf-btn uf-btn--ghost" href="#work">
                See the work
              </a>
            </div>
          </div>
          <MonolithScene />
          <div className="uf-strip" data-rise aria-label="Stack">
            <ul className="uf-strip__row">
              {STACK.map((s) => (
                <li key={s} className="uf-strip__item">{s}</li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── Outcomes: light band, stat cards + numbered trio ─── */}
        <section id="outcomes" className="uf-section uf-section--light">
          <div className="uf-wrap">
            <h2 className="uf-h2" data-reveal>
              Proven outcomes, in public
            </h2>
            <p className="uf-sub" data-reveal>
              Most of my work is live. Click through, everything below runs.
            </p>

            <div className="uf-stats">
              {STATS.map((s) => (
                <article key={s.src} className="uf-stat" data-reveal>
                  <p className="uf-stat__big">
                    {s.big}
                    <span className="uf-stat__unit">{s.unit}</span>
                  </p>
                  <p className="uf-stat__line">{s.line}</p>
                  <span className="uf-stat__bar" aria-hidden="true" />
                  <p className="uf-stat__src">{s.src}</p>
                </article>
              ))}
            </div>

            <div className="uf-trio">
              {TRIO.map((t) => (
                <article key={t.n} className="uf-trio__card" data-reveal>
                  <span className="uf-num" aria-hidden="true">
                    <span className="uf-num__dot">{t.n}</span>
                  </span>
                  <h3 className="uf-trio__h">{t.h}</h3>
                  <p className="uf-trio__p">{t.p}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── Platform: dark, pinned exploded layer stack ──────── */}
        <section id="platform" className="uf-section uf-section--dark">
          <div className="uf-platform__pin">
            <div className="uf-wrap">
              <div className="uf-platform__head">
                <span className="uf-pill-badge" data-reveal>The Bar stack</span>
                <h2 className="uf-h2 uf-h2--light uf-h2--center" data-reveal>
                  One stack powering every shipped win
                </h2>
                <p className="uf-sub uf-sub--light uf-sub--center" data-reveal>
                  Every project on this page runs on the same five layers.
                </p>
              </div>

              <div className="uf-platform__grid">
                <div className="uf-stack3d" data-reveal aria-hidden="true">
                  {PLATES.map((p) => (
                    <div key={p.label} className="uf-plate-wrap">
                      <p className="uf-plate__label">{p.label}</p>
                      <div className="uf-plate">
                        {p.chips.map((c) => (
                          <span key={c} className="uf-plate__chip">{c}</span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="uf-platform__list">
                  {PLATE_NOTES.map((n) => (
                    <div key={n.h} className="uf-feature" data-reveal>
                      <h3 className="uf-feature__h">{n.h}</h3>
                      <p className="uf-feature__p">{n.p}</p>
                    </div>
                  ))}
                  <a className="uf-btn uf-btn--white" href="#work" data-reveal>
                    Explore the work
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Work: light band, gradient headline + tile grid ──── */}
        <section id="work" className="uf-section uf-section--light">
          <div className="uf-wrap">
            <h2 className="uf-h2 uf-h2--grad" data-reveal>
              Meet Bar Moshe.
            </h2>
            <p className="uf-sub" data-reveal>
              Full-stack engineer in Tel Aviv. I take products from idea to
              production and keep them running. Live where possible; employer
              work is named, not shown.
            </p>

            <div className="uf-grid">
              {WORK.map((w) =>
                w.href ? (
                  <a
                    key={w.title}
                    className="uf-tile"
                    href={w.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-reveal
                  >
                    <span className="uf-tile__bar" aria-hidden="true" />
                    <span className="uf-tile__tag">{w.tag}</span>
                    <h3 className="uf-tile__title">{w.title}</h3>
                    <p className="uf-tile__desc">{w.desc}</p>
                    <span className="uf-tile__link">
                      {w.open} <span aria-hidden="true">→</span>
                    </span>
                  </a>
                ) : (
                  <article key={w.title} className="uf-tile uf-tile--static" data-reveal>
                    <span className="uf-tile__bar" aria-hidden="true" />
                    <span className="uf-tile__tag">{w.tag}</span>
                    <h3 className="uf-tile__title">{w.title}</h3>
                    <p className="uf-tile__desc">{w.desc}</p>
                  </article>
                ),
              )}
            </div>

            <div id="cv" className="uf-cv" data-reveal>
              {CV_LINES.map((col) => (
                <div key={col.h} className="uf-cv__col">
                  <h3 className="uf-cv__h">{col.h}</h3>
                  <ul className="uf-cv__list">
                    {col.lines.map((l) => (
                      <li key={l}>{l}</li>
                    ))}
                  </ul>
                </div>
              ))}
              <div className="uf-cv__col uf-cv__col--cta">
                <h3 className="uf-cv__h">Full CV</h3>
                <p className="uf-cv__note">One page, PDF.</p>
                <a
                  className="uf-btn uf-btn--dark uf-btn--sm"
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── Close: dark split, their "Bring AI in. Fast." ────── */}
        <section className="uf-close">
          <div className="uf-close__scene">
            <MonolithScene compact />
          </div>
          <div className="uf-close__copy" data-reveal>
            <h2 className="uf-h2 uf-h2--light">
              Bring Bar into your
              <br />
              operations. Fast.
            </h2>
            <p className="uf-close__sub">
              Tell me your hardest full-stack problem and I&rsquo;ll show up with
              something running. Production-grade in days. Within weeks, impact.
            </p>
            <div className="uf-close__cta">
              <a className="uf-btn uf-btn--white" href={EMAIL}>
                Let&rsquo;s connect
              </a>
              <a className="uf-btn uf-btn--ghost" href={WHATSAPP} target="_blank" rel="noopener noreferrer">
                WhatsApp
              </a>
              <a className="uf-btn uf-btn--ghost" href={LINKEDIN} target="_blank" rel="noopener noreferrer">
                LinkedIn
              </a>
              <a className="uf-btn uf-btn--ghost" href={GITHUB} target="_blank" rel="noopener noreferrer">
                GitHub
              </a>
              <a className="uf-btn uf-btn--ghost" href={CV} target="_blank" rel="noopener noreferrer">
                CV
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ── Footer ──────────────────────────────────────────── */}
      <footer className="uf-footer">
        <div className="uf-footer__inner">
          <span className="uf-footer__brand">
            <span className="uf-brand__b" aria-hidden="true">b</span>ar{' '}
            <span className="uf-brand__for">for</span> Unframe
          </span>
          <span className="uf-footer__note">
            An application page Bar Moshe built for the Full Stack Software
            Engineer role, in Unframe&rsquo;s design language. Not affiliated with
            Unframe.
          </span>
          <span className="uf-footer__meta">Tel Aviv · 2026</span>
        </div>
      </footer>
    </div>
  );
}

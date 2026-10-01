import Image from "next/image";
import Header from "@/components/Header";
import PackReveal from "@/components/PackReveal";

const PROFILES = [
  {
    name: "Bold",
    cocoa: "85%",
    line: "Deep, unapologetic cocoa with a firm bite and a long, dry finish.",
    notes: ["Intense cocoa", "Dark fruit hint", "Lingering bitterness"],
  },
  {
    name: "Roasted",
    cocoa: "85%",
    line: "Warm roasted notes — like coffee and toasted husk — before the melt softens.",
    notes: ["Toasted husk", "Espresso edge", "Warm spice"],
  },
  {
    name: "Silky",
    cocoa: "85%",
    line: "A slower melt that coats the palate — quiet intensity without harsh edges.",
    notes: ["Velvet melt", "Subtle sweetness", "Clean close"],
  },
] as const;

const RITUAL = [
  {
    step: "01",
    title: "Break",
    line: "Snap one square. Listen for the clean crack — a sign of well-tempered cocoa.",
  },
  {
    step: "02",
    title: "Warm",
    line: "Hold it on the tongue. Let body heat start the melt before you bite.",
  },
  {
    step: "03",
    title: "Melt",
    line: "Stay with the slow melt. Notice Bold, then Roasted, then Silky as it opens.",
  },
  {
    step: "04",
    title: "Finish",
    line: "Breathe out through the nose. The finish is the story — let it stay.",
  },
] as const;

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <div id="top">
        <Header />
      </div>

      <main id="main">
        {/* Hero */}
        <section className="hero" aria-labelledby="hero-heading">
          <div className="hero-bg-glow" aria-hidden="true" />
          <p className="hero-pct" aria-hidden="true">
            85%
          </p>

          <div className="hero-inner">
            <div className="hero-copy">
              <p className="eyebrow">Dark chocolate · 85% cocoa</p>
              <h1 id="hero-heading">GO DARK.</h1>
              <p className="hero-support">
                Deep cocoa. A slow melt. A finish that stays.
              </p>
              <div className="hero-actions">
                <a className="btn-primary" href="#bar">
                  Discover the bar
                  <span aria-hidden="true"> ↓</span>
                </a>
                <a className="btn-text" href="#tasting">
                  Tasting notes
                </a>
              </div>
              <p className="concept-chip">
                Self-initiated concept demo. Not a live store.
              </p>
            </div>

            <div className="hero-visual">
              <PackReveal />
              <p className="scroll-hint">
                <span className="scroll-arrow" aria-hidden="true">
                  ↓
                </span>
                Scroll to discover
              </p>
            </div>
          </div>
        </section>

        {/* The Bar */}
        <section id="bar" className="section bar-section" aria-labelledby="bar-heading">
          <div className="section-inner bar-grid">
            <div className="bar-media">
              <Image
                src="/demo-afterdark.jpg"
                alt="AFTERDARK 85% dark chocolate bar with gold foil and embossed cocoa squares"
                width={1200}
                height={750}
                className="bar-image"
                sizes="(max-width: 768px) 100vw, 55vw"
                priority
              />
            </div>
            <div className="bar-copy">
              <p className="section-label">The Bar</p>
              <h2 id="bar-heading">85% cocoa. Nothing louder than the chocolate.</h2>
              <p className="section-intro">
                AFTERDARK is a premium dark-chocolate concept built around one
                bar — product-first imagery, restrained type, and a story you
                feel as you scroll. No checkout in this demo; the invitation is
                to discover character, not to buy.
              </p>
              <ul className="bar-facts">
                <li>
                  <span className="fact-label">Cocoa</span>
                  <span className="fact-value">85% · concept blend</span>
                </li>
                <li>
                  <span className="fact-label">Character</span>
                  <span className="fact-value">Bold · Roasted · Silky</span>
                </li>
                <li>
                  <span className="fact-label">Price / stock</span>
                  <span className="fact-value">Omitted — concept only</span>
                </li>
              </ul>
              <a className="btn-primary" href="#tasting">
                Explore tasting notes
                <span aria-hidden="true"> →</span>
              </a>
            </div>
          </div>
        </section>

        {/* Tasting Notes */}
        <section
          id="tasting"
          className="section tasting-section"
          aria-labelledby="tasting-heading"
        >
          <div className="section-inner">
            <p className="section-label">Tasting Notes</p>
            <h2 id="tasting-heading">Three ways into the dark.</h2>
            <p className="section-intro tasting-intro">
              Distinct flavour profiles give visitors clear points of comparison
              — Bold, Roasted, and Silky — without competing with the product
              itself.
            </p>

            <div className="profile-grid">
              {PROFILES.map((p) => (
                <article key={p.name} className="profile-card">
                  <header className="profile-head">
                    <h3>{p.name}</h3>
                    <span className="profile-cocoa">{p.cocoa}</span>
                  </header>
                  <p className="profile-line">{p.line}</p>
                  <ul className="profile-notes">
                    {p.notes.map((n) => (
                      <li key={n}>{n}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* The Ritual */}
        <section
          id="ritual"
          className="section ritual-section"
          aria-labelledby="ritual-heading"
        >
          <div className="section-inner">
            <p className="section-label">The Ritual</p>
            <h2 id="ritual-heading">How to meet the bar.</h2>
            <p className="section-intro">
              A short tasting ritual — break, warm, melt, finish — so the story
              lands before anyone asks about a cart.
            </p>

            <ol className="ritual-list">
              {RITUAL.map((r) => (
                <li key={r.step} className="ritual-step">
                  <span className="ritual-num" aria-hidden="true">
                    {r.step}
                  </span>
                  <div>
                    <h3>{r.title}</h3>
                    <p>{r.line}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Concept disclaimer */}
        <section
          className="section disclaimer-section"
          aria-labelledby="disclaimer-heading"
        >
          <div className="section-inner disclaimer-card">
            <p className="section-label">Concept</p>
            <h2 id="disclaimer-heading">A product story you can feel as you scroll.</h2>
            <p>
              This is a <strong>self-initiated concept demo</strong> for
              portfolio use — not a live chocolate brand, not a store, and not a
              client endorsement. There is no checkout, payment, inventory, or
              measured results here. Design goals only: stronger product
              understanding and a memorable first impression.
            </p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="footer-inner">
          <p className="footer-brand">
            AFTERDARK<span className="logo-mark">®</span>
          </p>
          <p className="footer-note">
            Self-initiated concept demo. Not a live store. No purchase path in
            this build.
          </p>
          <nav className="footer-nav" aria-label="Footer">
            <a href="#bar">The Bar</a>
            <a href="#tasting">Tasting Notes</a>
            <a href="#ritual">The Ritual</a>
            <a href="#top">Back to top</a>
          </nav>
        </div>
      </footer>
    </>
  );
}

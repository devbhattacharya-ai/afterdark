import Image from "next/image";
import Header from "@/components/Header";
import PackReveal from "@/components/PackReveal";
import TastingNotes from "@/components/TastingNotes";
import MotionEngine from "@/components/MotionEngine";

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <Header />
      <MotionEngine />

      <main id="main">
        <section className="ad-hero hero" id="top" aria-labelledby="hero-title">
          <p className="kicker">DARK CHOCOLATE · 85% COCOA</p>
          <h1 id="hero-title">GO DARK.</h1>
          <PackReveal />
          <div className="hero-meta">
            <p>
              Deep cocoa. A slow melt.
              <br />A finish that stays.
            </p>
            <a className="button button-primary" href="#bar">
              Discover the bar <span aria-hidden="true">↘</span>
            </a>
            <p className="concept-chip">
              Self-initiated concept demo. Not a live store.
            </p>
          </div>
          <p className="scroll-cue">
            SCROLL TO DISCOVER <span aria-hidden="true">↓</span>
          </p>
        </section>

        <section className="snap-scene" id="bar" aria-labelledby="bar-title">
          <Image
            src="/snap-v3.webp"
            alt="A dark chocolate bar snapping into two pieces, with cocoa crumbs in the air"
            width={1672}
            height={941}
            className="scene-img"
            sizes="100vw"
          />
          <div className="snap-shade" aria-hidden="true" />
          <div className="snap-copy">
            <p className="kicker">01 · THE SIGNATURE BAR</p>
            <h2 id="bar-title">
              A CLEAN
              <br />
              BREAK.
            </h2>
            <p className="editorial-lead">
              One unapologetic cocoa hit, with just enough sweetness to pull you
              back for another square.
            </p>
          </div>
          <div className="bar-facts" aria-label="Product facts">
            <span>
              <strong>85%</strong> cocoa
            </span>
            <span>
              <strong>01</strong> signature bar
            </span>
            <span>
              <strong>∞</strong> character
            </span>
          </div>
        </section>

        <TastingNotes />

        <section className="story" aria-labelledby="story-title">
          <div className="story-text">
            <p className="kicker">03 · OUR DARK SIDE</p>
            <h2 id="story-title">
              SOME THINGS
              <br />
              ARE BETTER
              <br />
              <em>AFTER DARK.</em>
            </h2>
            <div className="story-columns">
              <p>
                One more email can wait. The washing-up can wait. This square,
                this moment, is all yours.
              </p>
              <p>
                AFTERDARK is a love letter to chocolate with an edge—made for
                slow evenings, strong coffee and the bitter side of sweet.
              </p>
            </div>
          </div>
          <div className="story-mark" aria-hidden="true">
            A
          </div>
        </section>

        <section
          className="ritual-scene ritual"
          id="ritual"
          aria-labelledby="ritual-title"
        >
          <Image
            src="/melt-v3.webp"
            alt="Glossy folds of melted dark chocolate with a dusting of cocoa"
            width={1672}
            height={941}
            className="scene-img"
            sizes="100vw"
          />
          <div className="ritual-shade" aria-hidden="true" />
          <div className="ritual-copy">
            <p className="kicker">04 · THE SLOW RITUAL</p>
            <h2 id="ritual-title">
              MAKE IT
              <br />A MOMENT.
            </h2>
            <div className="ritual-steps">
              <article>
                <span>01</span>
                <h3>SNAP.</h3>
                <p>Break off a square. Listen for the clean break.</p>
              </article>
              <article>
                <span>02</span>
                <h3>SLOW.</h3>
                <p>Let it soften. Give the cocoa time to open.</p>
              </article>
              <article>
                <span>03</span>
                <h3>STAY.</h3>
                <p>
                  Notice what lingers. Strong coffee makes a fine companion.
                </p>
              </article>
            </div>
          </div>
        </section>

        <section
          className="closing-scene closing"
          aria-labelledby="closing-title"
        >
          <div className="closing-copy">
            <p className="kicker">YOUR NEXT LITTLE OBSESSION</p>
            <h2 id="closing-title">
              GIVE IN TO
              <br />
              THE DARK.
            </h2>
            <a className="button button-primary" href="#bar">
              Discover 85% dark <span aria-hidden="true">↗</span>
            </a>
            <p className="concept-chip">
              Concept demo — no checkout, payment, or inventory.
            </p>
          </div>
          <Image
            src="/pack-v3.webp"
            alt="AFTERDARK 85% dark chocolate in a deep cocoa and antique-gold wrapper"
            width={1024}
            height={1536}
            className="closing-pack"
            sizes="(max-width: 768px) 60vw, 280px"
          />
        </section>
      </main>

      <footer className="site-footer ad-footer">
        <a className="brand" href="#top">
          AFTERDARK<sup>®</sup>
        </a>
        <p>85% COCOA. 100% CHARACTER.</p>
        <a href="#top">Back to top ↑</a>
        <small>
          AFTERDARK is a concept brand. Product imagery and tasting descriptions
          are illustrative. Self-initiated demo — not a live store.
        </small>
      </footer>
    </>
  );
}

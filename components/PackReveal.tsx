"use client";

import { useState } from "react";
import Image from "next/image";

export default function PackReveal() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`pack-reveal${open ? " is-open" : ""}`}>
      <button
        type="button"
        className="pack-hit"
        aria-expanded={open}
        aria-controls="pack-detail"
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src="/demo-afterdark.jpg"
          alt="AFTERDARK 85% dark chocolate pack — tap to reveal concept detail"
          width={720}
          height={900}
          className="pack-image"
          sizes="(max-width: 768px) 80vw, 360px"
          priority
        />
        <span className="pack-hint">
          {open ? "Close detail" : "Touch the dark. Tap the pack."}
        </span>
      </button>

      <div
        id="pack-detail"
        className="pack-detail"
        hidden={!open}
        role="region"
        aria-label="Bar concept detail"
      >
        <p className="pack-detail-title">AFTERDARK 85%</p>
        <p>
          Concept bar: deep cocoa, slow melt, finish that stays. Flavour
          profiles — Bold, Roasted, Silky — live further down the page.
        </p>
        <a className="btn-text" href="#bar">
          Continue to The Bar →
        </a>
      </div>
    </div>
  );
}

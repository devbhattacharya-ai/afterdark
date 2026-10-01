"use client";

import { useRef } from "react";
import Image from "next/image";

export default function PackReveal() {
  const imgRef = useRef<HTMLImageElement>(null);

  function bounce() {
    const el = imgRef.current;
    if (!el || !el.animate) return;
    if (document.documentElement.dataset.motion === "paused") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    el.animate(
      [
        { transform: "translateY(0) rotate(0deg) scale(1)" },
        {
          transform: "translateY(-20px) rotate(9deg) scale(1.055)",
          offset: 0.35,
        },
        {
          transform: "translateY(-6px) rotate(-4deg) scale(1.02)",
          offset: 0.7,
        },
        { transform: "translateY(0) rotate(0deg) scale(1)" },
      ],
      { duration: 760, easing: "cubic-bezier(.2,0,0,1)" }
    );
  }

  return (
    <div className="hero-product-wrap">
      <span className="hero-orbit" aria-hidden="true">
        85%
      </span>
      <button
        type="button"
        className="product-control"
        data-product
        aria-label="Animate the chocolate pack"
        aria-describedby="pack-hint"
        onClick={bounce}
      >
        <Image
          ref={imgRef}
          className="hero-product"
          src="/pack-v3.webp"
          alt="AFTERDARK 85% dark chocolate pack"
          width={1024}
          height={1536}
          priority
          sizes="(max-width: 600px) 78vw, 420px"
        />
      </button>
      <p className="pack-hint" id="pack-hint">
        TOUCH THE DARK. <span>Tap the pack.</span>
      </p>
    </div>
  );
}

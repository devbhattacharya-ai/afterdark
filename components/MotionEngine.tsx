"use client";

import { useEffect } from "react";

/**
 * Ports AFTERDARK ChatGPT script.js scroll choreography:
 * pack tilt/scale/opacity by hero progress, title/orbit parallax,
 * snap/ritual/closing image parallax. Respects data-motion=paused
 * and prefers-reduced-motion.
 */
export default function MotionEngine() {
  useEffect(() => {
    const hero = document.querySelector<HTMLElement>(".ad-hero");
    const product = document.querySelector<HTMLElement>("[data-product]");
    const title = document.querySelector<HTMLElement>(".ad-hero h1");
    const orbit = document.querySelector<HTMLElement>(".hero-orbit");
    const header = document.querySelector<HTMLElement>("[data-header]");
    if (!hero || !product) return;

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)");
    let tiltX = 0;
    let tiltY = 0;
    let frame = 0;
    let heroVisible = true;

    const clamp = (n: number, a = 0, b = 1) => Math.min(b, Math.max(a, n));
    const active = () =>
      document.documentElement.dataset.motion !== "paused" &&
      !reduced.matches &&
      !document.hidden;

    const scenes = [
      ...document.querySelectorAll<HTMLElement>(
        ".snap-scene, .ritual-scene, .closing-scene"
      ),
    ];

    function render() {
      frame = 0;
      const enabled = active();
      header?.classList.toggle("scrolled", window.scrollY > 30);
      document.body.classList.toggle("motion-off", !enabled);

      const rect = hero!.getBoundingClientRect();
      const p = clamp(-rect.top / Math.max(rect.height, 1));
      const mobile = window.innerWidth <= 600;

      if (enabled) {
        product!.style.transform = `translate3d(${tiltX * 14}px,${6 - p * 14}vh,0) perspective(900px) rotateX(${-tiltY * 7}deg) rotateY(${tiltX * 12}deg) rotate(${-7 + p * 17 + tiltX * 3}deg) scale(${0.94 + p * (mobile ? 0.05 : 0.12)})`;
        if (title) title.style.transform = `translate3d(0,${p * -32}px,0)`;
        if (orbit)
          orbit.style.transform = `rotate(${-12 + p * 28}deg) scale(${1 + p * 0.12})`;
        product!.style.opacity = String(1 - clamp((p - 0.64) / 0.32));
      } else {
        product!.style.transform = "";
        product!.style.opacity = "";
        if (title) title.style.transform = "";
        if (orbit) orbit.style.transform = "";
      }

      for (const scene of scenes) {
        const r = scene.getBoundingClientRect();
        const img = scene.querySelector<HTMLElement>(":scope > img");
        if (!img) continue;
        if (!enabled) {
          img.style.transform = "";
          continue;
        }
        if (r.bottom < 0 || r.top > window.innerHeight) continue;
        const s =
          clamp((window.innerHeight - r.top) / (window.innerHeight + r.height)) -
          0.5;
        img.style.transform = scene.classList.contains("closing-scene")
          ? `translate3d(0,${s * -48}px,0) rotate(${7 - s * 14}deg)`
          : `translate3d(0,${s * (mobile ? 28 : 64)}px,0) scale(1.08)`;
      }

      document.body.classList.toggle(
        "hero-resting",
        !heroVisible || !enabled
      );
    }

    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(render);
    };

    const onMove = (e: PointerEvent) => {
      if (!active() || (!fine.matches && e.buttons === 0)) return;
      const r = product!.getBoundingClientRect();
      tiltX = clamp(((e.clientX - r.left) / r.width) * 2 - 1, -1, 1);
      tiltY = clamp(((e.clientY - r.top) / r.height) * 2 - 1, -1, 1);
      schedule();
    };
    const resetTilt = () => {
      tiltX = tiltY = 0;
      schedule();
    };

    product.addEventListener("pointermove", onMove);
    product.addEventListener("pointerleave", resetTilt);
    product.addEventListener("pointerup", resetTilt);
    product.addEventListener("pointercancel", resetTilt);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule, { passive: true });
    document.addEventListener("visibilitychange", schedule);
    reduced.addEventListener("change", schedule);

    let io: IntersectionObserver | undefined;
    if ("IntersectionObserver" in window) {
      io = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            if (entry.target === hero) {
              heroVisible = entry.isIntersecting;
              schedule();
            } else if (entry.isIntersecting) {
              entry.target.classList.add("is-visible");
            }
          }
        },
        { threshold: 0.12 }
      );
      io.observe(hero);
      document
        .querySelectorAll(
          "main h2, .snap-copy, .bar-facts, .notes-top, .note-list, .story-columns p, .ritual-steps article, .closing-copy, footer"
        )
        .forEach((el) => {
          el.classList.add("ad-reveal");
          io!.observe(el);
        });
    }

    schedule();

    return () => {
      product.removeEventListener("pointermove", onMove);
      product.removeEventListener("pointerleave", resetTilt);
      product.removeEventListener("pointerup", resetTilt);
      product.removeEventListener("pointercancel", resetTilt);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      document.removeEventListener("visibilitychange", schedule);
      reduced.removeEventListener("change", schedule);
      io?.disconnect();
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return null;
}

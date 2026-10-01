"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);
  const [reducedLocked, setReducedLocked] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "on";
  }, [paused]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => {
      if (mq.matches) {
        setPaused(true);
        setReducedLocked(true);
      } else {
        setReducedLocked(false);
      }
    };
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <header className="site-header" data-header>
      <div className="nav-inner">
        <a href="#top" className="logo" onClick={close}>
          AFTERDARK<span className="logo-mark">®</span>
        </a>

        <nav className="nav-desktop" aria-label="Primary">
          <ul className="nav-links">
            <li>
              <a href="#bar">The Bar</a>
            </li>
            <li>
              <a href="#notes">Tasting Notes</a>
            </li>
            <li>
              <a href="#ritual">The Ritual</a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions nav-desktop">
          <button
            type="button"
            className="btn-ghost motion-toggle"
            aria-pressed={paused}
            disabled={reducedLocked}
            aria-label={
              reducedLocked
                ? "Motion disabled by your device preference"
                : paused
                  ? "Resume page animations"
                  : "Pause page animations"
            }
            onClick={() => setPaused((v) => !v)}
          >
            <span className="pause-icon" aria-hidden="true">
              {paused ? "▶" : "Ⅱ"}
            </span>
            <span className="motion-label">
              {paused || reducedLocked ? "Motion off" : "Pause motion"}
            </span>
          </button>
          <a href="#bar" className="btn-ghost btn-discover-85">
            Discover 85%
          </a>
        </div>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-controls="mobile-nav"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="menu-label">{open ? "Close" : "Menu"}</span>
        </button>
      </div>

      <nav
        id="mobile-nav"
        className={`nav-mobile${open ? " is-open" : ""}`}
        aria-label="Mobile"
        hidden={!open}
      >
        <ul>
          <li>
            <a href="#bar" onClick={close}>
              The Bar
            </a>
          </li>
          <li>
            <a href="#notes" onClick={close}>
              Tasting Notes
            </a>
          </li>
          <li>
            <a href="#ritual" onClick={close}>
              The Ritual
            </a>
          </li>
          <li>
            <a href="#bar" className="mobile-nav-cta" onClick={close}>
              Discover 85% <span aria-hidden="true">↘</span>
            </a>
          </li>
          <li>
            <button
              type="button"
              className="btn-ghost"
              aria-pressed={paused}
              disabled={reducedLocked}
              onClick={() => setPaused((v) => !v)}
            >
              {paused || reducedLocked ? "Motion off" : "Pause motion"}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}

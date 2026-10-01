"use client";

import { useEffect, useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [paused, setPaused] = useState(false);

  const close = () => setOpen(false);

  useEffect(() => {
    document.documentElement.dataset.motion = paused ? "paused" : "on";
  }, [paused]);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (mq.matches) {
      setPaused(true);
    }
  }, []);

  return (
    <header className="site-header">
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
              <a href="#tasting">Tasting Notes</a>
            </li>
            <li>
              <a href="#ritual">The Ritual</a>
            </li>
          </ul>
        </nav>

        <div className="nav-actions nav-desktop">
          <button
            type="button"
            className="btn-ghost"
            aria-pressed={paused}
            onClick={() => setPaused((v) => !v)}
          >
            <span className="pause-icon" aria-hidden="true">
              {paused ? (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <path d="M8 5v14l11-7z" />
                </svg>
              ) : (
                <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                  <rect x="6" y="5" width="4" height="14" rx="1" />
                  <rect x="14" y="5" width="4" height="14" rx="1" />
                </svg>
              )}
            </span>
            {paused ? "Play motion" : "Pause motion"}
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
          {open ? (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              aria-hidden="true"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      <div id="mobile-nav" className={`nav-mobile${open ? " open" : ""}`}>
        <nav aria-label="Mobile">
          <ul className="nav-links">
            <li>
              <a href="#bar" onClick={close}>
                The Bar
              </a>
            </li>
            <li>
              <a href="#tasting" onClick={close}>
                Tasting Notes
              </a>
            </li>
            <li>
              <a href="#ritual" onClick={close}>
                The Ritual
              </a>
            </li>
          </ul>
          <div className="nav-actions">
            <button
              type="button"
              className="btn-ghost"
              aria-pressed={paused}
              onClick={() => setPaused((v) => !v)}
            >
              {paused ? "Play motion" : "Pause motion"}
            </button>
            <a href="#bar" className="btn-ghost btn-discover-85" onClick={close}>
              Discover 85%
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}

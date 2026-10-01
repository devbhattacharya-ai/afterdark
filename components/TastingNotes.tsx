"use client";

import { useState, KeyboardEvent } from "react";

const NOTES = [
  {
    id: "bold",
    label: "BOLD",
    n: "01 / 03",
    title: "A proper cocoa opening.",
    copy: "Rich, direct and beautifully bitter. The first square makes its presence known.",
    intensity: 85,
  },
  {
    id: "roasted",
    label: "ROASTED",
    n: "02 / 03",
    title: "Warmth beneath the intensity.",
    copy: "Toasted cocoa and a quiet earthiness unfold through the middle of the melt.",
    intensity: 84,
  },
  {
    id: "silky",
    label: "SILKY",
    n: "03 / 03",
    title: "A finish that takes its time.",
    copy: "The texture gives way slowly, leaving a smooth cocoa note that stays with you.",
    intensity: 78,
  },
] as const;

export default function TastingNotes() {
  const [active, setActive] = useState(0);
  const note = NOTES[active];

  function onKey(e: KeyboardEvent, i: number) {
    let n: number | undefined;
    if (e.key === "ArrowDown" || e.key === "ArrowRight")
      n = (i + 1) % NOTES.length;
    if (e.key === "ArrowUp" || e.key === "ArrowLeft")
      n = (i + NOTES.length - 1) % NOTES.length;
    if (e.key === "Home") n = 0;
    if (e.key === "End") n = NOTES.length - 1;
    if (n !== undefined) {
      e.preventDefault();
      setActive(n);
      document.getElementById(`note-${NOTES[n].id}`)?.focus();
    }
  }

  return (
    <section
      className="notes"
      id="notes"
      aria-labelledby="notes-title"
      data-active-note={note.id}
    >
      <div className="notes-top">
        <p className="kicker">02 · TASTING NOTES</p>
        <p>TAKE YOUR TIME. LET IT OPEN.</p>
      </div>
      <h2 id="notes-title">
        WHAT
        <br />
        STAYS?
      </h2>
      <div className="notes-layout">
        <div
          className="note-list"
          role="tablist"
          aria-label="Dark chocolate tasting notes"
        >
          {NOTES.map((n, i) => (
            <button
              key={n.id}
              id={`note-${n.id}`}
              role="tab"
              type="button"
              aria-selected={i === active}
              aria-controls="note-detail"
              tabIndex={i === active ? 0 : -1}
              data-note={n.id}
              onClick={() => setActive(i)}
              onPointerEnter={(e) => {
                if (
                  window.matchMedia("(hover: hover) and (pointer: fine)")
                    .matches &&
                  e.pointerType === "mouse"
                )
                  setActive(i);
              }}
              onKeyDown={(e) => onKey(e, i)}
            >
              <span>{String(i + 1).padStart(2, "0")}</span>
              {n.label}
            </button>
          ))}
        </div>
        <div
          className="note-detail"
          id="note-detail"
          role="tabpanel"
          aria-labelledby={`note-${note.id}`}
          tabIndex={0}
        >
          <p className="note-number">{note.n}</p>
          <h3>{note.title}</h3>
          <p>{note.copy}</p>
          <div className="intensity">
            <span>COCOA INTENSITY</span>
            <i>
              <b style={{ width: `${note.intensity}%` }} />
            </i>
            <strong>{note.intensity}%</strong>
          </div>
        </div>
      </div>
    </section>
  );
}

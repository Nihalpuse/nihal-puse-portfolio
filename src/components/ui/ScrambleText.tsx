"use client";

import { useEffect, useRef, useState } from "react";
import { useReducedMotion } from "framer-motion";

const GLYPHS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789·/<>_".split("");

// Decodes its text with a left-to-right scramble when it scrolls into view.
// SSR-safe (renders the final text first) and accessible (aria-label carries
// the real text; the scrambling glyphs are visual only).
export function ScrambleText({ text, className }: { text: string; className?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(text);

  useEffect(() => {
    if (reduce) {
      setDisplay(text);
      return;
    }
    const el = ref.current;
    if (!el) return;

    let raf = 0;
    let frame = 0;
    let started = false;

    const run = () => {
      const revealed = Math.floor(frame / 2);
      setDisplay(
        text
          .split("")
          .map((ch, i) => {
            if (ch === " ") return " ";
            if (i < revealed) return ch;
            return GLYPHS[Math.floor(Math.random() * GLYPHS.length)];
          })
          .join(""),
      );
      frame++;
      if (revealed <= text.length) raf = requestAnimationFrame(run);
      else setDisplay(text);
    };

    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          started = true;
          io.disconnect();
          raf = requestAnimationFrame(run);
        }
      },
      { threshold: 0.6 },
    );
    io.observe(el);

    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
    };
  }, [text, reduce]);

  return (
    <span ref={ref} className={className} aria-label={text}>
      {display}
    </span>
  );
}

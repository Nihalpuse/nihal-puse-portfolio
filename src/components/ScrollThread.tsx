"use client";

import { useEffect, useRef, useState } from "react";

// Builds a smooth serpentine (curvy) path in px coordinates, descending from
// startY to the bottom and oscillating left/right of center. Each segment uses
// vertical-tangent cubic handles so the wave flows like a sine curve rather
// than sharp corners. Ends settled back at center.
function buildWave(w: number, h: number, startY: number): string {
  if (w <= 0 || h <= 0 || startY >= h) return "";
  const cx = w / 2;
  const amp = Math.min(w * 0.3, 240);
  const usable = h - startY;
  const n = Math.max(2, Math.round(usable / 300)); // ~300px per half-wave
  const step = usable / n;
  let prevX = cx;
  let prevY = startY;
  let d = `M ${cx.toFixed(1)} ${startY.toFixed(1)}`;
  for (let i = 1; i <= n; i++) {
    const y = startY + step * i;
    const x = i === n ? cx : cx + (i % 2 === 1 ? amp : -amp);
    const dy = (y - prevY) / 2;
    d += ` C ${prevX.toFixed(1)} ${(prevY + dy).toFixed(1)} ${x.toFixed(1)} ${(y - dy).toFixed(1)} ${x.toFixed(1)} ${y.toFixed(1)}`;
    prevX = x;
    prevY = y;
  }
  return d;
}

// A zig-zag line woven down the whole page that "draws" itself as you scroll,
// with a glowing head that tracks the current scroll position. Sits behind the
// content and is hidden from assistive tech. Honors prefers-reduced-motion
// (renders the full line, statically, no head).
export function ScrollThread() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const reducedRef = useRef(false);

  const [d, setD] = useState("");
  const [len, setLen] = useState(0);
  const [offset, setOffset] = useState(0);
  const [dot, setDot] = useState<{ x: number; y: number } | null>(null);

  // Measure the page box and (re)build the path on mount + size changes.
  useEffect(() => {
    reducedRef.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const measure = () => {
      const el = wrapRef.current;
      if (!el) return;
      // Start the thread just below the hero (top of the About section).
      const about = document.getElementById("about");
      const startY = about
        ? Math.max(0, about.getBoundingClientRect().top - el.getBoundingClientRect().top)
        : 0;
      setD(buildWave(el.offsetWidth, el.offsetHeight, startY));
    };
    measure();
    const ro = new ResizeObserver(measure);
    if (wrapRef.current) ro.observe(wrapRef.current);
    return () => ro.disconnect();
  }, []);

  // Recompute total length when the path changes; pre-set the draw state.
  useEffect(() => {
    const p = pathRef.current;
    if (!p || !d) return;
    const total = p.getTotalLength();
    setLen(total);
    setOffset(reducedRef.current ? 0 : total);
  }, [d]);

  // Scroll-tracked drawing (rAF-throttled).
  useEffect(() => {
    if (reducedRef.current || !len) return;
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const progress = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
      const drawn = len * progress;
      setOffset(len - drawn);
      const p = pathRef.current;
      if (p) {
        const pt = p.getPointAtLength(drawn);
        setDot({ x: pt.x, y: pt.y });
      }
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [len]);

  return (
    <div ref={wrapRef} aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <svg width="100%" height="100%" fill="none" style={{ display: "block" }}>
        <defs>
          <linearGradient id="thread-grad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {d && (
          <>
            {/* faint full track */}
            <path d={d} stroke="#1b2330" strokeWidth={2} />
            {/* soft glow under the drawn portion */}
            <path
              d={d}
              stroke="url(#thread-grad)"
              strokeWidth={7}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.16}
              style={{ strokeDasharray: len, strokeDashoffset: offset }}
            />
            {/* the drawn line */}
            <path
              ref={pathRef}
              d={d}
              stroke="url(#thread-grad)"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
              opacity={0.75}
              style={{ strokeDasharray: len, strokeDashoffset: offset }}
            />
            {/* tracking head */}
            {dot && !reducedRef.current && (
              <>
                <circle cx={dot.x} cy={dot.y} r={9} fill="#2dd4bf" opacity={0.18} />
                <circle cx={dot.x} cy={dot.y} r={3.5} fill="#2dd4bf" />
              </>
            )}
          </>
        )}
      </svg>
    </div>
  );
}

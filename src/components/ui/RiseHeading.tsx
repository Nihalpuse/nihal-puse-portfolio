"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.03 } },
};
const charV: Variants = {
  hidden: { y: "0.45em", opacity: 0 },
  show: { y: 0, opacity: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

// Heading whose characters rise up and fade in, staggered left to right, on
// scroll into view. Accessible: aria-label carries the whole word; the per-char
// spans are hidden from assistive tech. No-op under reduced motion.
export function RiseHeading({ text, id, className }: { text: string; id?: string; className?: string }) {
  const reduce = useReducedMotion();

  if (reduce) {
    return (
      <h2 id={id} className={className}>
        {text}
      </h2>
    );
  }

  return (
    <motion.h2
      id={id}
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
      aria-label={text}
    >
      {Array.from(text).map((ch, i) => (
        <motion.span key={i} variants={charV} aria-hidden className="inline-block whitespace-pre">
          {ch === " " ? " " : ch}
        </motion.span>
      ))}
    </motion.h2>
  );
}

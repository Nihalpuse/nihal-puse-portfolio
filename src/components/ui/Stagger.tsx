"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";

const containerV: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.06 } },
};

const itemV: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
};

/** Staggers its children into view on scroll. No-op under reduced motion. */
export function StaggerContainer({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div
      className={className}
      variants={containerV}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/** A single staggered child. Must be rendered inside a StaggerContainer. */
export function StaggerItem({ children, className }: { children: React.ReactNode; className?: string }) {
  const reduce = useReducedMotion();
  if (reduce) return <div className={className}>{children}</div>;
  return (
    <motion.div className={className} variants={itemV}>
      {children}
    </motion.div>
  );
}

"use client";

import { Agentation } from "agentation";

// Dev-only visual-feedback toolbar for AI coding agents. Rendered only in
// development (gated in layout.tsx), so it never ships to production.
export function DevAgentation() {
  return <Agentation />;
}

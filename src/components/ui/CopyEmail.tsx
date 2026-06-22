"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  }

  return (
    <button
      type="button"
      onClick={copy}
      aria-label="Copy email address"
      className="group inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 font-mono text-sm backdrop-blur-md transition-colors hover:border-accent/60 hover:bg-white/[0.08] hover:text-accent"
    >
      <span>{email}</span>
      {copied ? (
        <span className="inline-flex items-center gap-1 text-accent"><Check size={15} /> Copied!</span>
      ) : (
        <Copy size={15} className="text-subtle group-hover:text-accent" />
      )}
    </button>
  );
}

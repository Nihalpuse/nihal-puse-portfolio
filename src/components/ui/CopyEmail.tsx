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
      className="group inline-flex items-center gap-2 rounded-lg border border-border-strong bg-surface px-4 py-2.5 font-mono text-sm transition-colors hover:border-accent hover:text-accent"
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

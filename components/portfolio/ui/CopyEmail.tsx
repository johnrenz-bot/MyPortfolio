"use client";

import { useState } from "react";
import { Check, Copy } from "lucide-react";

export default function CopyEmail({ email }: { email: string }) {
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      setCopied(false);
    }
  };

  return (
    <button
      type="button"
      onClick={copy}
      aria-label={copied ? "Email copied" : `Copy email address ${email}`}
      className="inline-flex items-center gap-2 rounded-md border border-current/25 px-3 py-2 font-mono text-[9px] font-bold uppercase tracking-[0.12em] opacity-75 transition-opacity duration-300 hover:opacity-100"
    >
      {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      {copied ? "Copied" : "Copy email"}
    </button>
  );
}

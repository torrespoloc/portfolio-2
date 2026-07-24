"use client";

import { Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";

const EMAIL = "torrespoloc@gmail.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const [copyError, setCopyError] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopyError(true);
      setTimeout(() => setCopyError(false), 2000);
    }
  }, []);

  return (
    <div className="relative flex items-center gap-2 text-sm text-hero-text">
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-11 h-11 rounded-[12px] hover:bg-hero-border transition-colors"
        aria-label={copied ? "Copied" : "Copy email address"}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-hero-muted" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-hero-muted" />
        )}
      </button>
      <span>{EMAIL}</span>
      {copied && (
        <span className="absolute -top-7 left-8 text-xs text-hero-muted bg-background px-2 py-0.5 rounded-none border border-border shadow-sm animate-in fade-in slide-in-from-bottom-1 duration-200">
          Copied!
        </span>
      )}
      {copyError && (
        <span className="absolute -top-7 left-8 text-xs text-destructive bg-background px-2 py-0.5 rounded-none border border-border shadow-sm animate-in fade-in slide-in-from-bottom-1 duration-200">
          Couldn&apos;t copy. Select text instead
        </span>
      )}
    </div>
  );
}

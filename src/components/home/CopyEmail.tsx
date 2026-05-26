"use client";

import { Copy, Check } from "lucide-react";
import { useState, useCallback } from "react";

const EMAIL = "torrespoloc@gmail.com";

export function CopyEmail() {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(EMAIL);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API not available — fail silently
    }
  }, []);

  return (
    <div className="relative flex items-center gap-2 text-sm text-[#757575]">
      <button
        onClick={handleCopy}
        className="flex items-center justify-center w-7 h-7 rounded-md hover:bg-[#f0f0f0] transition-colors"
        aria-label={copied ? "Copied" : "Copy email address"}
      >
        {copied ? (
          <Check className="w-3.5 h-3.5 text-[#757575]" />
        ) : (
          <Copy className="w-3.5 h-3.5 text-[#757575]" />
        )}
      </button>
      <span>{EMAIL}</span>
      {copied && (
        <span className="absolute -top-7 left-8 text-[11px] text-[#757575] bg-white px-2 py-0.5 rounded border border-[#e5e5e5] shadow-sm animate-in fade-in slide-in-from-bottom-1 duration-200">
          Copied!
        </span>
      )}
    </div>
  );
}

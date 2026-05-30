"use client";

import * as React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { VideoCarousel } from "@/components/home/VideoCarousel";

interface CaseStudyCardProps {
  tag: string;
  headline: React.ReactNode;
  description: string;
  tags?: string[];
  year?: string;
  metric1Label: string;
  metric1Value: string;
  metric2Label: string;
  metric2Value: string;
  mediaSrc?: string;
  mediaSrcs?: string[];
  mediaType?: "image" | "video";
  mediaAlt?: string;
  href?: string;
  className?: string;
  builtForLogo?: string;
}

export function CaseStudyCard({
  tag,
  headline,
  description,
  tags,
  year,
  metric1Label,
  metric1Value,
  metric2Label,
  metric2Value,
  mediaSrc,
  mediaSrcs,
  mediaType = "image",
  mediaAlt = "",
  href,
  className,
  builtForLogo,
}: CaseStudyCardProps) {
  const isExternal = href?.startsWith("http");
  const Tag = href ? (isExternal ? "a" : Link) : "div";

  return (
    <Tag
      href={href ?? ""}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={cn(
        "group block w-[95%] mx-auto rounded-[24px] overflow-hidden bg-white shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),0_4px_10px_-6px_rgba(0,0,0,0.05)] transition-all duration-300",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Media area */}
      <div className="relative w-full aspect-video overflow-hidden bg-[#f1f5f9]">
        {mediaSrcs && mediaSrcs.length > 0 ? (
          <VideoCarousel
            videos={mediaSrcs}
            interval={4000}
            className="absolute inset-0 w-full h-full [&_video]:group-hover:scale-[1.04] [&_video]:transition-transform [&_video]:duration-700 [&_video]:ease-out"
          />
        ) : mediaSrc && mediaType === "video" ? (
          <video
            src={mediaSrc}
            autoPlay
            muted
            loop
            playsInline
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        ) : mediaSrc && mediaType === "image" ? (
          <Image
            src={mediaSrc}
            alt={mediaAlt}
            fill
            className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-[#f8fafc] text-[#94a3b8]">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </div>
        )}

        {/* Gradient overlay for tag readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

        {/* Tag + year on media */}
        <div className="absolute top-0 left-0 right-0 p-6 sm:p-8 flex items-start justify-between gap-4">
          {tag && (
            <span className="text-[16px] font-medium text-white/90 bg-white/15 backdrop-blur-md rounded-full px-4 py-1">
              {tag}
            </span>
          )}
          {year && (
            <span className="text-[14px] font-medium text-white/70 bg-white/10 backdrop-blur-md rounded-full px-3 py-1">
              {year}
            </span>
          )}
        </div>
      </div>

      {/* Info banner */}
      <div className="p-5 sm:p-6">
        <h3 className="text-[21px] sm:text-[24px] lg:text-[28px] font-bold leading-[1.25] text-[#2f2e31]">
          {headline}
        </h3>

        <p className="text-subtitle md:text-body leading-[1.5] text-[#4d4d4d] mt-2">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((t) => (
              <span
                key={t}
                className="text-[14px] font-medium text-[#757575] bg-[#f5f5f5] rounded-full px-2.5 py-0.5"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        <div className="flex items-center gap-6 mt-3 pt-3 border-t border-[#f0f0f0]">
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#757575]">
              {metric1Label}
            </span>
            <span className="text-[18px] sm:text-[20px] font-bold text-[#2f2e31] leading-none mt-0.5">
              {metric1Value}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#757575]">
              {metric2Label}
            </span>
            <span className="text-[18px] sm:text-[20px] font-bold text-[#2f2e31] leading-none mt-0.5">
              {metric2Value}
            </span>
          </div>

          {builtForLogo && (
            <div className="flex items-center gap-2 ml-auto">
              <span className="text-[14px] font-semibold uppercase tracking-[0.08em] text-[#757575]">
                Built for
              </span>
              <img src={builtForLogo} alt="" className="h-6 w-20 object-contain object-center" />
            </div>
          )}
        </div>
      </div>
    </Tag>
  );
}

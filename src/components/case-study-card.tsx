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
  ndaBadge?: boolean;
  badge?: string;
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
  ndaBadge,
  badge,
}: CaseStudyCardProps) {
  const isExternal = href?.startsWith("http");
  const Tag = href ? (isExternal ? "a" : Link) : "div";

  return (
    <Tag
      href={href ?? ""}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      aria-label={href && !isExternal ? `View case study: ${tag}` : undefined}
      className={cn(
        "group block w-full h-full min-h-0 rounded-none overflow-hidden bg-card flex flex-col shadow-[0_1px_3px_0_rgba(0,0,0,0.05),0_1px_2px_-1px_rgba(0,0,0,0.05)] hover:shadow-[0_10px_30px_-5px_rgba(0,0,0,0.1),0_4px_10px_-6px_rgba(0,0,0,0.05)] transition-all duration-300",
        href && "cursor-pointer",
        className
      )}
    >
      {/* Media area */}
      <div className="relative w-full aspect-video overflow-hidden bg-muted p-6 sm:p-7">
        <div className="relative w-full h-full overflow-hidden">
          {mediaSrcs && mediaSrcs.length > 0 ? (
            <VideoCarousel
              videos={mediaSrcs}
              interval={4000}
              className="absolute inset-0 w-full h-full [&_video]:group-hover:scale-[1.04] [&_video]:transition-transform [&_video]:duration-200 [&_video]:ease-out"
            />
          ) : mediaSrc && mediaType === "video" ? (
            <video
              src={mediaSrc}
              autoPlay
              muted
              loop
              playsInline
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-200 ease-out"
            />
          ) : mediaSrc && mediaType === "image" ? (
            <Image
              src={mediaSrc}
              alt={mediaAlt}
              fill
              className="object-cover group-hover:scale-[1.04] transition-transform duration-700 ease-out"
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center bg-muted text-muted-foreground">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="3" y="3" width="18" height="18" rx="3" />
                <circle cx="8.5" cy="8.5" r="1.5" />
                <path d="m21 15-5-5L5 21" />
              </svg>
            </div>
          )}

          {/* Gradient overlay for tag readability */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-transparent" />

          {/* Tag + badges on media, top-left */}
          <div className="absolute top-0 left-0 right-0 p-4 sm:p-5">
            <div className="flex items-center gap-2">
              {tag && (
                <span className="text-xs font-medium text-white/90 bg-white/15 backdrop-blur-md px-4 py-1">
                  {tag}
                </span>
              )}
              {ndaBadge && (
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-3 py-1">
                  NDA-friendly
                </span>
              )}
              {badge && (
                <span className="text-xs font-semibold uppercase tracking-[0.08em] text-chartreuse-foreground bg-chartreuse px-3 py-1">
                  {badge}
                </span>
              )}
            </div>
          </div>

          {/* Year badge, bottom-left of media */}
          {year && (
            <span className="absolute bottom-3 left-3 bg-black/55 px-2 py-1 text-xs font-mono uppercase tracking-wider text-white/85 sm:text-sm">
              {year}
            </span>
          )}
        </div>
      </div>

      {/* Info banner */}
      <div className="flex flex-col flex-1 p-6 sm:p-7">
        <h3 className="font-heading text-[18px] sm:text-[21px] lg:text-[28px] font-semibold leading-[1.25] text-hero-text-dark">
          {headline}
        </h3>

        <p className="text-xs sm:text-body-lg leading-[1.5] text-hero-text mt-2 flex-1">
          {description}
        </p>

        {tags && tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-3">
            {tags.map((t) => (
              <span
                key={t}
                className="text-xs font-medium text-hero-muted bg-muted px-2 py-1"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {/* Metrics */}
        <div className="mt-4 pt-4">
          <div className="flex items-start gap-6">
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-hero-muted">
                {metric1Label}
              </span>
              <span className="text-sm sm:text-body font-bold text-hero-text-dark leading-none mt-1">
                {metric1Value}
              </span>
            </div>
            <div className="flex flex-col min-w-0 flex-1">
              <span className="text-xs font-semibold uppercase tracking-[0.08em] text-hero-muted">
                {metric2Label}
              </span>
              <span className="text-sm sm:text-body font-bold text-hero-text-dark leading-none mt-1">
                {metric2Value}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Tag>
  );
}

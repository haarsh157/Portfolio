'use client';

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";
import React, { useEffect, useState } from "react";
import type { Project } from "@/data/resume"; // Import your Project type

export function ProjectCard({
  title,
  href,
  description,
  dates,
  technologies,
  links,
  image,
  video,
  images,
  className,
  themeColor,
  bgColor,
}: Project & { className?: string }) {
  // Slideshow state
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!images || images.length < 2) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images]);

  return (
    <Card
      className={cn(
        "group flex flex-col overflow-hidden rounded-2xl border shadow-md hover:shadow-2xl transition-all duration-500 ease-out h-full hover:-translate-y-2 w-full",
        bgColor || "bg-white dark:bg-slate-900/40",
        className
      )}
    >
      <Link href={href || "#"} className="block cursor-pointer">
        {/* Slideshow for images */}
        {images && images.length > 0 ? (
          <div className="relative h-64 w-full">
            {images.map((img, idx) => (
              <Image
                key={img}
                src={img}
                alt={`${title} screenshot ${idx + 1}`}
                width={700}
                height={400}
                className={cn(
                  "absolute left-0 top-0 h-full w-full object-cover object-top transition-opacity duration-700 rounded-t-2xl",
                  idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                )}
                priority={idx === 0}
              />
            ))}
            {/* Dots indicator */}
            <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, idx) => (
                <span
                  key={idx}
                  className={cn(
                    "block h-2 w-2 rounded-full transition-all duration-300",
                    idx === current
                      ? "bg-primary/90 scale-125 shadow"
                      : "bg-muted/70 scale-90"
                  )}
                />
              ))}
            </div>
          </div>
        ) : video ? (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-64 w-full object-cover object-top rounded-t-2xl"
          />
        ) : image ? (
          <Image
            src={image}
            alt={title}
            width={700}
            height={400}
            className="h-64 w-full object-cover object-top rounded-t-2xl"
          />
        ) : null}
      </Link>

      <CardHeader className="px-4 pt-4">
        <div className="space-y-2">
          <CardTitle className="mt-1 text-xl sm:text-2xl font-bold">
            {title}
          </CardTitle>
          <time className="font-sans text-sm sm:text-base text-muted-foreground">
            {dates}
          </time>
          <Markdown className="prose max-w-full text-pretty font-sans text-base sm:text-lg text-muted-foreground dark:prose-invert dark:group-hover:prose-p:text-white dark:group-hover:prose-a:text-white dark:group-hover:prose-strong:text-white">
            {description}
          </Markdown>
        </div>
      </CardHeader>

      <CardContent className="mt-auto flex flex-col px-4 pb-2">
        {technologies && technologies.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {technologies.map((tech) => (
              <Badge
                key={tech}
                className="px-3 py-1 text-sm sm:text-base font-medium"
                variant="secondary"
              >
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </CardContent>

      <CardFooter className="px-4 pb-4">
        {links && links.length > 0 && (
          <div className="flex flex-row flex-wrap items-start gap-2">
            {links.map((link, idx) => (
              <Link href={link.href} key={idx} target="_blank">
                <Badge className="flex gap-2 px-3 py-1 text-xs sm:text-sm font-medium hover:shadow">
                  {link.icon}
                  {link.type}
                </Badge>
              </Link>
            ))}
          </div>
        )}
      </CardFooter>
    </Card>
  );
}

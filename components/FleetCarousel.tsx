"use client";

import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function FleetCarousel({
  children,
  desktopVisible = 3,
}: {
  children: React.ReactNode[];
  desktopVisible?: 3 | 4;
}) {
  const trackRef = useRef<HTMLDivElement>(null);

  function scrollByCard(direction: 1 | -1) {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>("[data-carousel-item]");
    const step = card ? card.offsetWidth + 24 : 300; // card width + gap-6
    track.scrollBy({ left: direction * step, behavior: "smooth" });
  }

  const itemWidthClass =
    desktopVisible === 4
      ? "w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-72px)/4)]"
      : "w-[78%] shrink-0 snap-start sm:w-[46%] lg:w-[calc((100%-48px)/3)]";

  return (
    <div className="relative">
      <div
        ref={trackRef}
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {children.map((child, i) => (
          <div key={i} data-carousel-item className={itemWidthClass}>
            {child}
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => scrollByCard(-1)}
        aria-label="Previous"
        className="absolute left-0 top-1/2 hidden -translate-x-4 -translate-y-1/2 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-card sm:flex h-10 w-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => scrollByCard(1)}
        aria-label="Next"
        className="absolute right-0 top-1/2 hidden -translate-y-1/2 translate-x-4 items-center justify-center rounded-full border border-brand-100 bg-white text-brand-700 shadow-card sm:flex h-10 w-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </div>
  );
}

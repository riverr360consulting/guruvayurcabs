import Link from "next/link";
import { ArrowRight, Landmark } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";

export default function CtaBanner() {
  return (
    <section className="relative mt-16 overflow-hidden bg-brand-800 sm:mt-20">
      <span className="pointer-events-none absolute -right-6 -top-6 h-32 w-32 rounded-full bg-white/5" />
      <span className="pointer-events-none absolute -bottom-10 right-24 h-24 w-24 rounded-full bg-white/5" />

      <div className="relative mx-auto flex max-w-7xl flex-col items-center gap-6 px-4 py-10 text-center sm:flex-row sm:justify-between sm:px-6 sm:text-left lg:px-8">
        <div className="relative flex items-center gap-4">
          <span className="hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gold-500 text-brand-950 sm:flex">
            <Landmark className="h-7 w-7" />
          </span>
          <div>
            <h2 className="text-xl font-extrabold text-white sm:text-2xl">
              Safe Rides. Blessed Journeys.
            </h2>
            <p className="mt-1 max-w-md text-sm text-white/75">
              Travel with peace of mind. We ensure a safe and comfortable
              journey for you and your family.
            </p>
          </div>
        </div>

        <Link
          href="/contact"
          className={buttonVariants({
            variant: "gold",
            size: "lg",
            className: "relative shrink-0",
          })}
        >
          Book Now <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </section>
  );
}

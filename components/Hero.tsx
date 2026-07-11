import Image from "next/image";
import BookingForm from "@/components/BookingForm";
import { heroFeatures } from "@/lib/site-config";
import { Headset, ShieldCheck, UserRound } from "lucide-react";

const iconMap = {
  ShieldCheck,
  UserRound,
  Headset,
};

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden bg-brand-950">
        {/* Background photo — replace /public/images/hero.jpg with your own photo.
            If your car/subject sits low in the frame, adjust object position
            below (e.g. object-[center_20%] shifts the visible crop upward,
            keeping more of the top of the photo in view). */}
        <Image
          src="/images/hero.jpg"
          alt="Guruvayur temple with a Guruvayur Cabs taxi"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-950 via-brand-950/70 to-brand-950/10" />

        <div className="relative mx-auto max-w-7xl px-4 pb-44 pt-16 sm:px-6 sm:pb-56 sm:pt-20 lg:px-8">
          <div className="max-w-2xl">
            <h1 className="text-4xl font-extrabold leading-tight text-white sm:text-5xl">
              Your Trusted Cab Partner in Guruvayur
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/85 sm:text-lg">
              Book reliable and comfortable cabs for local rides, airport
              transfers, outstation trips and more.
            </p>

            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
              {heroFeatures.map((feature) => {
                const Icon = iconMap[feature.icon as keyof typeof iconMap];
                return (
                  <div key={feature.label} className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white">
                      <Icon className="h-4 w-4" />
                    </span>
                    <span className="text-sm font-medium text-white/90">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Booking form card: pulled up over the hero's bottom edge so it
          straddles the boundary — top half over the photo, bottom half
          over the page background, matching the reference design.
          Keep this overlap modest so it doesn't cover the car/subject
          in your photo — increase pb-* above instead if you need more
          breathing room before the card. */}
      <div className="relative z-10 mx-auto -mt-16 max-w-6xl px-4 sm:-mt-20 sm:px-6 lg:px-8">
        <BookingForm />
      </div>
    </>
  );
}

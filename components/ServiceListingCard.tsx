import Link from "next/link";
import {
  ArrowRight,
  CarFront,
  Headset,
  Landmark,
  MapPin,
  MapPinned,
  PlaneTakeoff,
  RadioTower,
  Receipt,
  ShieldCheck,
  Timer,
  TrainFront,
  UserRound,
  type LucideIcon,
} from "lucide-react";
import type { serviceListings, fleet } from "@/lib/site-config";
import FleetCard from "@/components/FleetCard";

const categoryIconMap: Record<string, LucideIcon> = {
  TrainFront,
  PlaneTakeoff,
  Landmark,
};

const featureIconMap: Record<string, LucideIcon> = {
  MapPin,
  Receipt,
  ShieldCheck,
  Headset,
  Timer,
  RadioTower,
  CarFront,
  UserRound,
  MapPinned,
  Landmark,
};

type Listing = (typeof serviceListings)[number];
type Fleet = typeof fleet;

export default function ServiceListingCard({
  listing,
  fleet,
}: {
  listing: Listing;
  fleet: Fleet;
}) {
  const CategoryIcon = categoryIconMap[listing.icon] ?? Landmark;

  return (
    <div className="rounded-2xl border border-brand-100 bg-white p-6 shadow-card sm:p-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)] lg:items-start">
        {/* Left: service details */}
        <div>
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700">
            <CategoryIcon className="h-6 w-6" />
          </span>

          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-600">
            {listing.category}
          </p>
          <h3 className="mt-1 text-xl font-extrabold text-brand-900 sm:text-2xl">
            {listing.title}
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-brand-950/60">
            {listing.description}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3">
            {listing.features.map((feature) => {
              const FeatureIcon = featureIconMap[feature.icon] ?? ShieldCheck;
              return (
                <div key={feature.label} className="flex items-start gap-2">
                  <FeatureIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                  <span className="text-xs font-medium text-brand-950/70">
                    {feature.label}
                  </span>
                </div>
              );
            })}
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
            >
              Book Now <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href={`/services/${listing.slug}`}
              className="inline-flex h-11 items-center gap-2 rounded-full border border-brand-200 px-6 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
            >
              View Details
            </Link>
          </div>
        </div>

        {/* Right: fleet + rates grid */}
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
          {fleet.map((car) => (
            <FleetCard key={car.name} car={car} />
          ))}
        </div>
      </div>
    </div>
  );
}

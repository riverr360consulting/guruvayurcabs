import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
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
import { fleet, serviceListings } from "@/lib/site-config";
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

export function generateStaticParams() {
  return serviceListings.map((listing) => ({ slug: listing.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const listing = serviceListings.find((l) => l.slug === slug);
  if (!listing) return {};
  return {
    title: `${listing.title} | Guruvayur Cabs`,
    description: listing.description,
  };
}

export default async function ServiceDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const listing = serviceListings.find((l) => l.slug === slug);
  if (!listing) notFound();

  const CategoryIcon = categoryIconMap[listing.icon] ?? Landmark;

  return (
    <>
      <section className="bg-brand-950">
        <div className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-white/10 text-white">
            <CategoryIcon className="h-6 w-6" />
          </span>
          <p className="mt-4 text-xs font-bold uppercase tracking-wide text-brand-300">
            {listing.category}
          </p>
          <h1 className="mt-1 text-3xl font-extrabold text-white sm:text-4xl">
            {listing.title}
          </h1>
          <p className="mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
            {listing.description}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 className="text-lg font-bold text-brand-900">
              About this service
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-brand-950/70">
              {listing.detail}
            </p>

            <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
              {listing.features.map((feature) => {
                const FeatureIcon = featureIconMap[feature.icon] ?? ShieldCheck;
                return (
                  <div
                    key={feature.label}
                    className="flex items-start gap-2 rounded-xl border border-brand-100 bg-white p-3"
                  >
                    <FeatureIcon className="mt-0.5 h-4 w-4 shrink-0 text-brand-600" />
                    <span className="text-xs font-medium text-brand-950/70">
                      {feature.label}
                    </span>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="inline-flex h-11 items-center gap-2 rounded-full bg-brand-700 px-6 text-sm font-semibold text-white transition-colors hover:bg-brand-800"
              >
                Book Now <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex h-11 items-center gap-2 rounded-full border border-brand-200 px-6 text-sm font-semibold text-brand-700 transition-colors hover:bg-brand-50"
              >
                Back to All Services
              </Link>
            </div>
          </div>

          <div>
            <h2 className="text-lg font-bold text-brand-900">
              Fleet & Rates for This Route
            </h2>
            <div className="mt-4 grid grid-cols-2 gap-4">
              {fleet.map((car) => (
                <FleetCard key={car.name} car={car} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

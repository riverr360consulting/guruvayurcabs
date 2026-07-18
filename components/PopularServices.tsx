import { Camera, Car, Gem, Landmark, MapPinned, PlaneTakeoff } from "lucide-react";
import { popularServices } from "@/lib/site-config";

const iconMap = {
  Car,
  PlaneTakeoff,
  Landmark,
  Camera,
  Gem,
  MapPinned,
};

export default function PopularServices() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <SectionHeading title="Popular Services" />

      <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {popularServices.map((service) => {
          const Icon = iconMap[service.icon as keyof typeof iconMap];
          return (
            <div
              key={service.title}
              className="group rounded-2xl border border-brand-100 bg-white p-6 text-center shadow-card transition-transform hover:-translate-y-1 hover:border-brand-300"
            >
              <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-50 text-brand-700 transition-colors group-hover:bg-brand-700 group-hover:text-white">
                <Icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-sm font-bold text-brand-900">
                {service.title}
              </h3>
              <p className="mt-1 text-xs text-brand-950/50">
                {service.description}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export function SectionHeading({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="h-px w-10 bg-brand-300" />
      <h2 className="text-2xl font-extrabold text-brand-900 sm:text-3xl">
        {title}
      </h2>
      <span className="h-px w-10 bg-brand-300" />
    </div>
  );
}

import Image from "next/image";
import { Snowflake, Users } from "lucide-react";
import { fleet } from "@/lib/site-config";
import { SectionHeading } from "@/components/PopularServices";

export default function OurFleet() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <SectionHeading title="Our Fleet" />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((car) => (
          <div
            key={car.name}
            className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card"
          >
            <div className="relative h-40 w-full bg-brand-50">
              <Image
                src={car.image}
                alt={car.name}
                fill
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-base font-bold text-brand-900">
                {car.name}
              </h3>
              <div className="mt-3 flex items-center justify-between">
                <div className="space-y-1 text-xs text-brand-950/60">
                  <p className="flex items-center gap-1.5">
                    <Users className="h-3.5 w-3.5" /> {car.seats}
                  </p>
                  <p className="flex items-center gap-1.5">
                    <Snowflake className="h-3.5 w-3.5" /> AC
                  </p>
                </div>
                <div className="text-right">
                  <p className="text-[10px] font-medium text-brand-950/40">
                    Starting from
                  </p>
                  <p className="text-lg font-extrabold text-brand-700">
                    ₹{car.rate}/km
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

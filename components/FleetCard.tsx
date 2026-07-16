import Image from "next/image";
import { Snowflake, Users } from "lucide-react";
import type { fleet } from "@/lib/site-config";

type Car = (typeof fleet)[number];

export default function FleetCard({ car }: { car: Car }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-brand-100 bg-white shadow-card">
      <div className="relative h-40 w-full bg-brand-50 p-3">
        <Image
          src={car.image}
          alt={car.name}
          fill
          sizes="(max-width: 768px) 100vw, 25vw"
          className="object-contain"
        />
      </div>
      <div className="p-5">
        <h3 className="text-base font-bold text-brand-900">{car.name}</h3>

        <div className="mt-3 flex items-center gap-4 text-xs text-brand-950/60">
          <span className="flex items-center gap-1.5">
            <Users className="h-3.5 w-3.5" /> {car.seats}
          </span>
          <span className="flex items-center gap-1.5">
            <Snowflake className="h-3.5 w-3.5" /> AC
          </span>
        </div>

        <div className="mt-3 flex items-baseline justify-between border-t border-brand-50 pt-3">
          <span className="text-[10px] font-medium text-brand-950/40">
            Starting from
          </span>
          <span className="text-lg font-extrabold text-brand-700">
            ₹{car.rate}/km
          </span>
        </div>
      </div>
    </div>
  );
}

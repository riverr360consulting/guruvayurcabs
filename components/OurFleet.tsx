import { fleet } from "@/lib/site-config";
import { SectionHeading } from "@/components/PopularServices";
import FleetCard from "@/components/FleetCard";

export default function OurFleet() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <SectionHeading title="Our Fleet" />

      <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {fleet.map((car) => (
          <FleetCard key={car.name} car={car} />
        ))}
      </div>
    </section>
  );
}

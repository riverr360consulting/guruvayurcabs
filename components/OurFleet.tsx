import { fleet } from "@/lib/site-config";
import { SectionHeading } from "@/components/PopularServices";
import FleetCard from "@/components/FleetCard";
import FleetCarousel from "@/components/FleetCarousel";

export default function OurFleet() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <SectionHeading title="Our Fleet" />

      <div className="mt-10">
        <FleetCarousel>
          {fleet.map((vehicle) => (
            <FleetCard key={vehicle.id} vehicle={vehicle} />
          ))}
        </FleetCarousel>
      </div>
    </section>
  );
}

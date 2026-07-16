import { fleet, serviceListings } from "@/lib/site-config";
import ServiceListingCard from "@/components/ServiceListingCard";

export default function ServiceFleetListing() {
  return (
    <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="space-y-6">
        {serviceListings.map((listing) => (
          <ServiceListingCard
            key={listing.title}
            listing={listing}
            fleet={fleet}
          />
        ))}
      </div>
    </section>
  );
}

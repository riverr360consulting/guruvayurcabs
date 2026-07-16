import PageHeader from "@/components/PageHeader";
import ServiceFleetListing from "@/components/ServiceFleetListing";
import WhyChooseUs from "@/components/WhyChooseUs";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Services & Rates"
        description="Every route, every vehicle, transparent pricing — all in one place"
      />
      <ServiceFleetListing />
      <div className="pb-16">
        <WhyChooseUs />
      </div>
    </>
  );
}

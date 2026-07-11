import PageHeader from "@/components/PageHeader";
import OurFleet from "@/components/OurFleet";

export default function FleetPage() {
  return (
    <>
      <PageHeader
        title="Our Fleet"
        description="Clean, well-maintained cars for every group size"
      />
      <div className="pb-16">
        <OurFleet />
      </div>
    </>
  );
}

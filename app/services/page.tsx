import PageHeader from "@/components/PageHeader";
import PopularServices from "@/components/PopularServices";

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        title="Our Services"
        description="Everything you need to get around Guruvayur and beyond"
      />
      <div className="pb-16">
        <PopularServices />
      </div>
    </>
  );
}

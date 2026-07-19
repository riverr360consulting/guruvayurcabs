import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import BookingRequestForm from "@/components/BookingRequestForm";

export const metadata: Metadata = {
  title: "Book Your Ride | Guruvayur Cabs",
  description:
    "Book a reliable, comfortable taxi in Guruvayur. Fill in your details and we'll confirm shortly.",
};

export default async function BookingPage({
  searchParams,
}: {
  searchParams: Promise<{ service?: string }>;
}) {
  const { service } = await searchParams;

  return (
    <>
      <PageHeader
        title="Book Your Ride"
        description="Fill in your details and we'll confirm shortly by phone or WhatsApp"
      />
      <section className="mx-auto max-w-2xl px-4 py-16 sm:px-6 lg:px-8">
        <BookingRequestForm serviceName={service} />
      </section>
    </>
  );
}

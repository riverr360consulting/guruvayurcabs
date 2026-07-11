import PageHeader from "@/components/PageHeader";
import { siteConfig } from "@/lib/site-config";

export default function AboutPage() {
  return (
    <>
      <PageHeader
        title="About Us"
        description="Getting to know your trusted cab partner in Guruvayur"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="space-y-5 text-sm leading-relaxed text-brand-950/70 sm:text-base">
          <p>
            {siteConfig.name} has been serving pilgrims, families and
            travellers in and around Guruvayur with safe, reliable and
            comfortable taxi services. Whether you&apos;re here for a temple
            visit, an airport transfer, or a longer outstation trip across
            Kerala, our drivers know the routes and the roads well.
          </p>
          <p>
            Every car in our fleet is cleaned and sanitized before each trip,
            and every driver is background-verified and trained to be
            courteous and safety-first. We keep our pricing transparent, with
            no hidden charges, so you always know what you&apos;re paying for.
          </p>
          <p>
            From a quick local ride to the temple, to a Kochi or Calicut
            airport transfer, to a full pilgrimage tour, we&apos;re available
            24/7 — just a call or WhatsApp away.
          </p>
        </div>
      </section>
    </>
  );
}

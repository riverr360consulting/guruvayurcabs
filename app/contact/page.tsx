import PageHeader from "@/components/PageHeader";
import BookingForm from "@/components/BookingForm";
import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig } from "@/lib/site-config";

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        description="Reach out to book a ride or ask a question"
      />
      <section className="mx-auto grid max-w-6xl grid-cols-1 gap-10 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div>
          <h2 className="text-xl font-bold text-brand-900">Get in Touch</h2>
          <ul className="mt-6 space-y-5 text-sm text-brand-950/70">
            <li className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-5 w-5 text-brand-600" />
              {siteConfig.address}
            </li>
            <li className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-brand-600" />
              <a href={siteConfig.phoneHref} className="hover:text-brand-700">
                {siteConfig.phone}
              </a>
            </li>
            <li className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-brand-600" />
              <a
                href={`mailto:${siteConfig.email}`}
                className="hover:text-brand-700"
              >
                {siteConfig.email}
              </a>
            </li>
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-brand-100">
            <iframe
              title="Guruvayur location map"
              src="https://maps.google.com/maps?q=Guruvayur%2C%20Kerala&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="260"
              loading="lazy"
              className="border-0"
            />
          </div>
        </div>

        <div>
          <BookingForm />
        </div>
      </section>
    </>
  );
}

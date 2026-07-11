import PageHeader from "@/components/PageHeader";
import { fleet } from "@/lib/site-config";
import { Snowflake, Users } from "lucide-react";

export default function RatesPage() {
  return (
    <>
      <PageHeader
        title="Rates"
        description="Transparent per-km pricing, no hidden charges"
      />
      <section className="mx-auto max-w-4xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-brand-100">
          <table className="w-full text-left text-sm">
            <thead className="bg-brand-50 text-brand-900">
              <tr>
                <th className="px-5 py-3 font-bold">Vehicle</th>
                <th className="px-5 py-3 font-bold">Capacity</th>
                <th className="px-5 py-3 font-bold">AC</th>
                <th className="px-5 py-3 text-right font-bold">Rate</th>
              </tr>
            </thead>
            <tbody>
              {fleet.map((car, i) => (
                <tr
                  key={car.name}
                  className={i % 2 === 0 ? "bg-white" : "bg-brand-50/40"}
                >
                  <td className="px-5 py-4 font-semibold text-brand-900">
                    {car.name}
                  </td>
                  <td className="px-5 py-4 text-brand-950/70">
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" /> {car.seats}
                    </span>
                  </td>
                  <td className="px-5 py-4 text-brand-950/70">
                    <Snowflake className="h-3.5 w-3.5" />
                  </td>
                  <td className="px-5 py-4 text-right font-bold text-brand-700">
                    ₹{car.rate}/km
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-4 text-xs text-brand-950/50">
          Fares are indicative starting rates and may vary based on waiting
          time, tolls, permits and time of travel. Call us for an exact quote.
        </p>
      </section>
    </>
  );
}

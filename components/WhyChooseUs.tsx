import { CarFront, ClipboardList, Headset, Timer } from "lucide-react";
import { whyChooseUs } from "@/lib/site-config";

const iconMap = {
  Timer,
  ClipboardList,
  CarFront,
  Headset,
};

export default function WhyChooseUs() {
  return (
    <section className="mx-auto max-w-7xl px-4 pt-16 sm:px-6 sm:pt-20 lg:px-8">
      <div className="rounded-3xl bg-brand-50 px-6 py-10 sm:px-10">
        <div className="flex items-center justify-center gap-3">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
          <h2 className="text-2xl font-extrabold text-brand-900 sm:text-3xl">
            Why Choose Guruvayur Cabs?
          </h2>
          <span className="h-1.5 w-1.5 rounded-full bg-brand-500" />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChooseUs.map((item) => {
            const Icon = iconMap[item.icon as keyof typeof iconMap];
            return (
              <div key={item.title} className="flex items-center gap-3">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-brand-700">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold text-brand-900">
                    {item.title}
                  </p>
                  <p className="text-xs text-brand-950/50">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

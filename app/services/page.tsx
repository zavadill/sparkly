import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  "Apartment Cleaning Services NYC",
  "House Cleaning Services NYC",
  "Deep Cleaning Services NYC",
  "Move In Cleaning Services NYC",
  "Move Out Cleaning Services NYC",
  "Post Construction Cleaning Services NYC",
  "Airbnb Cleaning Services NYC",
  "Same Day Cleaning Services NYC",
  "Office Cleaning Services NYC",
  "Extreme Deep Cleaning Services NYC",
  "Maid Service NYC",
  "Green Cleaning Services NYC",
];

export default function ServicesPage() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-svh w-full max-w-6xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Services</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">Services</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Professional cleaning solutions for apartments, houses, offices, and move-related needs
            across NYC.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-8 sm:px-6">
        <div className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:grid-cols-3 sm:p-6">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Avg. booking</p>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">2 mins</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Guarantee</p>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">48 hours</p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Coverage</p>
            <p className="mt-2 text-2xl font-bold text-slate-900 dark:text-slate-100">All NYC boroughs</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6">
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article
              key={service}
              className="group rounded-2xl border border-slate-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-xl font-semibold tracking-tight text-slate-900 group-hover:text-emerald-700 dark:text-slate-100">
                {service}
              </h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
                Tailored checklist, reliable pros, and high attention to detail.
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

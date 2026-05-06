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
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Services</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Professional cleaning for every type of space
        </h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Choose from recurring home cleaning, one-time deep cleaning, move-related packages, and
          specialty options for offices and Airbnb hosts.
        </p>
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          {services.map((service) => (
            <article key={service} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-xl font-semibold tracking-tight text-slate-900">{service}</h2>
              <p className="mt-2 text-base leading-relaxed text-slate-600">
                Tailored checklist, reliable pros, and high attention to detail.
              </p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

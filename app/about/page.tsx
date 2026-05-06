import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-5xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">About</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          NYC cleaning with a people-first approach
        </h1>
        <p className="mt-6 max-w-3xl text-base leading-relaxed text-slate-600 md:text-lg">
          Sparkly Maid NYC is focused on making daily life easier for busy professionals and
          families by delivering consistent, high-quality cleaning.
        </p>
        <div className="mt-10 grid gap-5 md:grid-cols-2 md:gap-6">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our mission</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Build a trustworthy team that cares for every home while creating real growth
              opportunities and a supportive workplace for cleaners.
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Our commitment</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Deliver punctual, detail-focused service with eco-friendly options, clear
              communication, and a 48-hour re-clean guarantee.
            </p>
          </article>
        </div>
      </section>
    </SiteShell>
  );
}

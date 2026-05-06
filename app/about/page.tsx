import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-svh w-full max-w-5xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">About</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">About Us</h1>
          <p className="mt-6 text-base leading-relaxed text-slate-600 md:text-lg">
            Learn how Sparkly Maid NYC combines trusted cleaners, quality standards, and friendly
            support to deliver reliable service in every home.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-8 sm:px-6">
        <div className="rounded-3xl bg-slate-900 p-6 text-white sm:p-8">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">How we work</p>
          <div className="mt-5 grid gap-4 sm:grid-cols-3">
            <div>
              <p className="text-sm text-slate-300">01</p>
              <p className="mt-1 font-semibold">Careful matching</p>
            </div>
            <div>
              <p className="text-sm text-slate-300">02</p>
              <p className="mt-1 font-semibold">Detail-first cleaning</p>
            </div>
            <div>
              <p className="text-sm text-slate-300">03</p>
              <p className="mt-1 font-semibold">Fast support after service</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <div className="grid gap-5 md:grid-cols-2 md:gap-6">
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

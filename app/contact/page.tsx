import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Contact",
};

export default function ContactPage() {
  return (
    <SiteShell>
      <section data-page-enter className="mx-auto flex min-h-svh w-full max-w-5xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Contact</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">Contact</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Reach out in seconds and share your preferred date, service type, and apartment details
            so we can match the right cleaner.
          </p>
        </div>
      </section>

      <section data-reveal className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div data-stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article data-stagger-item data-interactive-card className="min-w-0 rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Get in touch</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">(000) 000-0000</p>
            <p className="break-all text-base leading-relaxed text-slate-600 dark:text-slate-400">
              hello@yourcleaningcompany.com
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              123 Main Street
              <br />
              Suite 100, Your City, ST 00000
            </p>
          </article>
          <article data-stagger-item data-interactive-card className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Business hours</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">Monday-Friday: 7AM-6PM</p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">Saturday: 8AM-5PM</p>
            <p className="text-base leading-relaxed text-slate-600 dark:text-slate-400">Sunday: Closed</p>
            <a
              href="tel:+10000000000"
              className="mt-5 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white"
            >
              Call Now
            </a>
          </article>
          <article data-stagger-item data-interactive-card className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900 dark:text-slate-100">Satisfaction policy</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Not satisfied? Let us know within 48 hours and we will re-clean the area for free.
            </p>
          </article>
        </div>

        <div data-stagger className="mt-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <aside data-stagger-item data-interactive-card className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white dark:border-slate-700 sm:p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Before booking</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Share apartment size and preferred date.</li>
              <li>Tell us if you need standard or deep cleaning.</li>
              <li>Add special instructions for access.</li>
            </ul>
          </aside>

          <div data-stagger-item data-interactive-card className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Contact form</h2>
            <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Send us your request details and our team will follow up quickly.
            </p>
            <form className="mt-6 grid gap-4 sm:grid-cols-2" action="#">
              <div className="space-y-2">
                <Label htmlFor="fullName">Full name</Label>
                <Input id="fullName" name="fullName" placeholder="John Smith" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" name="email" type="email" placeholder="john@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="phone">Phone</Label>
                <Input id="phone" name="phone" placeholder="(000) 000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="service">Requested service</Label>
                <Input id="service" name="service" placeholder="Apartment cleaning" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="details">Details</Label>
                <Textarea
                  id="details"
                  name="details"
                  placeholder="Please include apartment size, preferred date, and any special instructions."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    name="privacyConsent"
                    required
                    className="mt-0.5 size-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>
                    I agree to the processing of my personal data for service inquiry purposes and I have read
                    the{" "}
                    <Link href="/privacy-policy" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-400">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700">
                  Submit Request
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

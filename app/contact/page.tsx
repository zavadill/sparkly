import type { Metadata } from "next";
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
      <section className="mx-auto flex min-h-svh w-full max-w-5xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Contact</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-6xl">Contact</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 md:text-lg">
            Reach out in seconds and share your preferred date, service type, and apartment details
            so we can match the right cleaner.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Get in touch</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">(646) 585-3515</p>
            <p className="text-base leading-relaxed text-slate-600">sparklymaidnychousecleaning@gmail.com</p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              447 Broadway 2nd floor
              <br />
              Suite 523, New York, NY 10013
            </p>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Business hours</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">Monday-Friday: 7AM-6PM</p>
            <p className="text-base leading-relaxed text-slate-600">Saturday: 8AM-5PM</p>
            <p className="text-base leading-relaxed text-slate-600">Sunday: Closed</p>
            <a
              href="tel:+16465853515"
              className="mt-5 inline-flex rounded-full bg-emerald-600 px-5 py-2.5 text-sm font-medium text-white"
            >
              Call Now
            </a>
          </article>
          <article className="rounded-2xl border border-slate-200 bg-white p-6">
            <h2 className="text-2xl font-semibold tracking-tight text-slate-900">Satisfaction policy</h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Not satisfied? Let us know within 48 hours and we will re-clean the area for free.
            </p>
          </article>
        </div>

        <div className="mt-8 grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <aside className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white sm:p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Before booking</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Share apartment size and preferred date.</li>
              <li>Tell us if you need standard or deep cleaning.</li>
              <li>Add special instructions for access.</li>
            </ul>
          </aside>

          <div className="rounded-3xl border border-slate-200 bg-white p-5 sm:p-6 md:p-8">
          <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact form</h2>
          <p className="mt-2 text-base leading-relaxed text-slate-600">
            Demo front-end form. Backend handling will be connected in the next step.
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
              <Input id="phone" name="phone" placeholder="(646) 585-3515" />
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
              <Button type="submit" className="rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700">
                Submit (No Backend Yet)
              </Button>
            </div>
          </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

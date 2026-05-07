import type { Metadata } from "next";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Booking",
};

export default function BookingPage() {
  return (
    <SiteShell>
      <section data-page-enter className="mx-auto flex min-h-svh w-full max-w-5xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Booking</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">
            Book Your Cleaning
          </h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Choose your service and preferred date. Our team will confirm your booking quickly.
          </p>
        </div>
      </section>

      <section data-reveal className="mx-auto w-full max-w-5xl px-4 pb-16 sm:px-6">
        <div data-stagger className="grid gap-5 md:grid-cols-[0.9fr_1.1fr]">
          <aside data-stagger-item data-interactive-card className="rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white dark:border-slate-700 sm:p-6 md:p-8">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Before booking</p>
            <ul className="mt-4 space-y-3 text-sm text-slate-200">
              <li>Pick the service type and preferred date.</li>
              <li>Add apartment size and access details.</li>
              <li>Share special requests for our cleaner.</li>
            </ul>
          </aside>

          <div data-stagger-item data-interactive-card className="rounded-3xl border border-slate-200 bg-white p-5 dark:border-slate-800 dark:bg-slate-900 sm:p-6 md:p-8">
            <h2 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">Booking form</h2>
            <p className="mt-2 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              Complete this form and we will follow up to confirm your appointment.
            </p>
            <form className="mt-6 grid gap-4 sm:grid-cols-2" action="#">
              <div className="space-y-2">
                <Label htmlFor="bookingName">Full name</Label>
                <Input id="bookingName" name="bookingName" placeholder="John Smith" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bookingEmail">Email</Label>
                <Input id="bookingEmail" name="bookingEmail" type="email" placeholder="john@email.com" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bookingPhone">Phone</Label>
                <Input id="bookingPhone" name="bookingPhone" placeholder="(000) 000-0000" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="bookingService">Requested service</Label>
                <Input id="bookingService" name="bookingService" placeholder="Deep cleaning" />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="bookingDetails">Details</Label>
                <Textarea
                  id="bookingDetails"
                  name="bookingDetails"
                  placeholder="Please include apartment size, preferred date, and any special instructions."
                />
              </div>
              <div className="sm:col-span-2">
                <label className="flex items-start gap-3 text-sm leading-relaxed text-slate-600 dark:text-slate-400">
                  <input
                    type="checkbox"
                    name="bookingPrivacyConsent"
                    required
                    className="mt-0.5 size-4 rounded border-slate-300 text-emerald-600 focus:ring-emerald-500"
                  />
                  <span>
                    I agree to the processing of my personal data for booking purposes and I have read the{" "}
                    <Link href="/privacy-policy" className="font-medium text-emerald-700 underline underline-offset-4 dark:text-emerald-400">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </label>
              </div>
              <div className="sm:col-span-2">
                <Button type="submit" className="rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-700">
                  Request Booking
                </Button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

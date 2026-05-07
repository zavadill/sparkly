import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for your cleaning company website.",
};

export default function TermsOfServicePage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-8 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Legal</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          Terms of Service
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: May 6, 2026</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            These Terms of Service govern the use of this cleaning website and service requests. By using
            this website, you agree to these terms.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Service Requests</h2>
            <p className="mt-3">
              Submitting a website form is a request for contact and scheduling. Final booking details,
              scope, and pricing are confirmed directly with our team.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Customer Responsibilities</h2>
            <p className="mt-3">
              Customers must provide accurate contact and service information and safe access to the location
              at the scheduled time.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Payments and Cancellations</h2>
            <p className="mt-3">
              Payment terms, cancellation policy, and any additional fees are communicated before service
              confirmation.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Website Use</h2>
            <p className="mt-3">
              You agree not to misuse the website, interfere with its operation, or submit unlawful content.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Liability</h2>
            <p className="mt-3">
              To the extent permitted by law, this company is not liable for indirect or consequential
              damages arising from website use.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Contact</h2>
            <p className="mt-3">
              For questions about these terms, please use our{" "}
              <Link className="text-emerald-700 underline underline-offset-4 dark:text-emerald-400" href="/contact">
                contact page
              </Link>
              .
            </p>
          </div>
        </div>
      </section>
    </SiteShell>
  );
}

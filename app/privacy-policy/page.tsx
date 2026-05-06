import type { Metadata } from "next";
import Link from "next/link";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Sparkly Maid NYC.",
};

export default function PrivacyPolicyPage() {
  return (
    <SiteShell>
      <section className="mx-auto w-full max-w-4xl px-4 pb-16 pt-8 sm:px-6">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Legal</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-5xl">
          Privacy Policy
        </h1>
        <p className="mt-4 text-sm text-slate-500 dark:text-slate-400">Last updated: May 6, 2026</p>

        <div className="mt-8 space-y-6 text-base leading-relaxed text-slate-700 dark:text-slate-300">
          <p>
            Sparkly Maid NYC (&quot;we&quot;, &quot;our&quot;, &quot;us&quot;) collects and uses personal information only as needed
            to provide cleaning services, communicate with customers, and operate our website.
          </p>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Information We Collect</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>Contact details such as name, email, phone number, and address.</li>
              <li>Service details such as requested cleaning type, date, and special instructions.</li>
              <li>Basic technical data such as IP address and browser information for security and analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">How We Use Information</h2>
            <ul className="mt-3 list-disc space-y-2 pl-6">
              <li>To respond to inquiries and schedule services.</li>
              <li>To send service updates and customer support messages.</li>
              <li>To improve website performance and service quality.</li>
              <li>To comply with legal obligations.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Data Sharing</h2>
            <p className="mt-3">
              We do not sell personal information. We may share data with service providers that help us run
              our business (for example hosting, communication, or payment tools), and only when necessary.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Your Rights</h2>
            <p className="mt-3">
              Depending on where you live, you may have rights to access, correct, or delete personal
              information, and to object to or limit certain processing. To submit a request, contact us at{" "}
              <a className="text-emerald-700 underline underline-offset-4 dark:text-emerald-400" href="mailto:sparklymaidnychousecleaning@gmail.com">
                sparklymaidnychousecleaning@gmail.com
              </a>
              .
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Data Security and Retention</h2>
            <p className="mt-3">
              We use reasonable administrative and technical safeguards and retain information only for as
              long as needed for service, support, legal, and operational purposes.
            </p>
          </div>

          <div>
            <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">Contact</h2>
            <p className="mt-3">
              Questions about this policy can be sent through our{" "}
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

import type { Metadata } from "next";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "FAQ",
};

const faqItems = [
  {
    q: "What payment methods do you accept?",
    a: "We accept Zelle, Venmo, CashApp, and cash.",
  },
  {
    q: "What if I'm not satisfied with the cleaning?",
    a: "Contact us within 48 hours and we will schedule a free re-clean of the area.",
  },
  {
    q: "Do I need to be home during the service?",
    a: "Not necessarily, but cleaners need guaranteed access to your home.",
  },
  {
    q: "Do you offer eco-friendly products?",
    a: "Yes. Green cleaning options are available for clients who request them.",
  },
];

export default function FaqPage() {
  return (
    <SiteShell>
      <section className="mx-auto flex min-h-svh w-full max-w-4xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">FAQ</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">FAQ</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Find quick answers about booking, access, payment, eco-friendly products, and our
            satisfaction policy.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-4xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div className="mt-8 rounded-3xl border border-slate-200 bg-slate-900 p-5 text-white dark:border-slate-700 sm:p-6">
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-300">Quick answer</p>
          <p className="mt-2 text-lg font-semibold">Yes, we offer eco-friendly options on request.</p>
        </div>

        <Accordion className="mt-6 rounded-2xl border border-slate-200 bg-white p-4 dark:border-slate-800 dark:bg-slate-900 sm:p-6" defaultValue={["item-0"]}>
          {faqItems.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline dark:text-slate-100">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-slate-600 dark:text-slate-400">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteShell>
  );
}

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
      <section className="mx-auto w-full max-w-4xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">FAQ</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Common questions from our NYC clients
        </h1>
        <Accordion className="mt-10 rounded-2xl border border-slate-200 bg-white p-4 sm:p-6" defaultValue={["item-0"]}>
          {faqItems.map((item, index) => (
            <AccordionItem key={item.q} value={`item-${index}`}>
              <AccordionTrigger className="text-lg font-semibold text-slate-900 hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-base leading-relaxed text-slate-600">{item.a}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </SiteShell>
  );
}

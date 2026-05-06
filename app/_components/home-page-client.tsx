"use client";

import gsap from "gsap";
import { ArrowRight, ArrowUpRight, Sparkles, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useLayoutEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const serviceCards = [
  "Apartment Cleaning",
  "Deep Cleaning",
  "Move In / Move Out",
  "Office Cleaning",
  "Airbnb Turnover",
  "Post Construction",
];

const processSteps = [
  "Choose your service and preferred date",
  "Get matched with a trusted cleaner",
  "Enjoy a spotless home and peace of mind",
];

const deepCleanHighlights = [
  "Kitchen degreasing and appliance wipe-down",
  "Bathroom scale and soap scum removal",
  "Baseboards, corners, and overlooked surfaces",
];

const testimonials = [
  {
    quote: "Fast, professional, and always reliable.",
    author: "Sarah Thomas, Manhattan",
  },
  {
    quote: "Booking is simple and the results are consistent.",
    author: "Jessica Miller, Queens",
  },
  {
    quote: "Best cleaning team we have worked with in NYC.",
    author: "Mark Lewis, Brooklyn",
  },
];

export function HomePageClient() {
  const rootRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const cleanupHandlers: Array<() => void> = [];
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".animate-in",
        { y: 20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.65, ease: "power2.out", stagger: 0.1 },
      );

      const ctaButtons = gsap.utils.toArray<HTMLElement>(".cta-gsap");
      ctaButtons.forEach((button) => {
        const enter = () => {
          gsap.to(button, {
            scale: 1.04,
            y: -2,
            duration: 0.25,
            ease: "power2.out",
            boxShadow: "0 14px 28px rgba(16, 185, 129, 0.25)",
          });
        };

        const leave = () => {
          gsap.to(button, {
            scale: 1,
            y: 0,
            duration: 0.25,
            ease: "power2.out",
            boxShadow: "0 0 0 rgba(0, 0, 0, 0)",
          });
        };

        button.addEventListener("mouseenter", enter);
        button.addEventListener("mouseleave", leave);
        button.addEventListener("focus", enter);
        button.addEventListener("blur", leave);

        cleanupHandlers.push(() => {
          button.removeEventListener("mouseenter", enter);
          button.removeEventListener("mouseleave", leave);
          button.removeEventListener("focus", enter);
          button.removeEventListener("blur", leave);
        });
      });
    }, rootRef);

    return () => {
      cleanupHandlers.forEach((handler) => handler());
      ctx.revert();
    };
  }, []);

  return (
    <div ref={rootRef} className="space-y-3">
      <section className="relative -mt-30 min-h-svh overflow-hidden bg-slate-950 pt-30 text-white md:-mt-26 md:pt-26">
        <div className="absolute -left-16 top-20 h-44 w-44 rounded-full bg-emerald-300/25 blur-2xl" />
        <div className="absolute bottom-12 right-10 h-52 w-52 rounded-full bg-cyan-300/30 blur-2xl" />
        <div className="mx-auto grid min-h-[calc(100svh-7.5rem)] w-full max-w-6xl gap-8 px-4 py-8 sm:px-6 md:min-h-[calc(100svh-6rem)] md:grid-cols-[1.05fr_0.95fr] md:items-center md:gap-10 md:py-12">
          <div className="animate-in">
            <p className="inline-flex -rotate-1 rounded-sm bg-emerald-300 px-3 py-1 text-xs font-semibold text-slate-900">
              Rated #1 Maid Service NYC
            </p>
            <h1 className="mt-5 text-3xl font-bold leading-[1.05] tracking-tight sm:text-4xl md:text-6xl">
              Modern cleaning service for busy NYC homes
            </h1>
            <p className="mt-5 max-w-xl text-base leading-relaxed text-emerald-100/90 md:text-lg">
              Trusted cleaners. Flexible booking. Spotless results.
            </p>
            <div className="mt-8 flex flex-wrap gap-2.5 sm:gap-3">
              <Button
                asChild
                size="lg"
                className="cta-gsap group rounded-full bg-emerald-400 px-5 text-slate-950 hover:bg-emerald-300 sm:px-6"
              >
                <Link href="/contact" className="inline-flex items-center gap-2">
                  Book a Cleaning
                  <ArrowUpRight className="size-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="cta-gsap rounded-full border-white/25 bg-white/5 px-5 text-white hover:bg-white/10 hover:text-white sm:px-6"
              >
                <a href="tel:+16465853515">(646) 585-3515</a>
              </Button>
            </div>
          </div>
          <Image
            src="/reference-home.png"
            alt="Sparkly Maid NYC homepage inspiration"
            width={1268}
            height={768}
            className="animate-in rounded-[1.5rem] border border-white/10 shadow-2xl sm:rounded-[2rem]"
            priority
          />
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <div className="animate-in mb-8 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">Cleaning services</h2>
          <Link href="/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-emerald-700">
            View all services
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
        <div className="grid gap-4 md:grid-cols-12">
          {serviceCards.map((service) => (
            <Card
              key={service}
              className="animate-in border-slate-200/80 bg-white/95 p-0 md:col-span-4 md:even:-translate-y-1 md:odd:translate-y-1"
            >
              <CardHeader className="px-5 pt-5 pb-2">
                <CardTitle className="text-xl font-semibold text-slate-900">{service}</CardTitle>
              </CardHeader>
              <CardContent className="px-5 pb-5 text-sm leading-relaxed text-slate-600">
                Tailored to your home and schedule.
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div className="animate-in grid gap-6 overflow-hidden rounded-[2rem] border border-slate-200 bg-white p-5 sm:p-8 md:grid-cols-[1.05fr_0.95fr] md:items-center">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700 ring-1 ring-slate-200">
              <Sparkles className="size-3.5" />
              Deep Clean Special
            </p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">
              The reset your home actually feels
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-relaxed text-slate-600">
              Perfect before guests, after renovations, or when your space needs a full refresh.
              We focus on the details most standard cleanings miss.
            </p>
            <ul className="mt-5 space-y-2.5">
              {deepCleanHighlights.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm leading-relaxed text-slate-700 sm:text-base">
                  <span className="mt-2 size-1.5 rounded-full bg-cyan-600" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <Button
              asChild
              className="cta-gsap mt-6 rounded-full bg-emerald-600 px-6 text-white hover:bg-emerald-500"
            >
              <Link href="/contact" className="inline-flex items-center gap-2">
                Book Deep Cleaning
                <ArrowUpRight className="size-4" />
              </Link>
            </Button>
          </div>
          <div className="relative">
            <Image
              src="https://images.unsplash.com/photo-1563453392212-326f5e854473?auto=format&fit=crop&w=1600&h=1000&q=80"
              alt="Professional deep cleaning in a modern home"
              width={1600}
              height={1000}
              className="rounded-2xl object-cover shadow-xl"
            />
            <div className="absolute -bottom-3 -left-3 rounded-xl bg-slate-950 px-3 py-2 text-xs font-semibold text-white sm:-bottom-4 sm:-left-4 sm:text-sm">
              Most requested add-on in NYC
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-10">
        <div className="animate-in grid gap-4 rounded-[2rem] bg-white p-5 ring-1 ring-slate-200 sm:p-8 md:grid-cols-3">
          {processSteps.map((step, index) => (
            <div key={step} className="rounded-2xl bg-slate-50 p-5 shadow-[inset_0_1px_0_rgba(255,255,255,0.8)]">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold tracking-[0.16em] text-emerald-700">STEP {index + 1}</p>
                {index < processSteps.length - 1 ? (
                  <ArrowRight className="size-4 text-cyan-600/80" />
                ) : (
                  <ArrowUpRight className="size-4 text-cyan-600/80" />
                )}
              </div>
              <p className="mt-3 text-lg font-semibold text-slate-900">{step}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-6 px-4 pb-14 sm:px-6 sm:pb-16 md:grid-cols-2 md:items-center md:gap-8">
        <Card className="animate-in border-slate-200 bg-white p-0 shadow-sm md:rotate-[-0.4deg]">
          <CardHeader className="px-6 pt-6 pb-2">
            <CardTitle className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl">
              Why clients choose us
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <ul className="space-y-3 text-base leading-relaxed text-slate-600">
              <li>Trusted and background-checked cleaners</li>
              <li>Online booking in under one minute</li>
              <li>Flexible scheduling for homes and offices</li>
              <li>Eco-conscious products available by request</li>
            </ul>
          </CardContent>
        </Card>
        <Card className="animate-in border-slate-200 bg-slate-100 p-0 md:rotate-[0.4deg]">
          <CardHeader className="px-6 pt-6 pb-2">
            <CardTitle className="text-xl font-bold tracking-tight text-slate-900">
              48-hour satisfaction guarantee
            </CardTitle>
          </CardHeader>
          <CardContent className="px-6 pb-6">
            <p className="text-base leading-relaxed text-slate-600">
              Not happy? Tell us within 48 hours and we will re-clean for free.
            </p>
            <Button asChild className="cta-gsap mt-6 rounded-full bg-emerald-600 px-5 text-white hover:bg-emerald-500">
              <Link href="/faq">Read FAQ</Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div className="animate-in mb-7 flex flex-col items-start justify-between gap-2 sm:flex-row sm:items-end">
          <h2 className="text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">Gallery</h2>
          <p className="text-sm font-medium text-slate-600">Internet photos in 19:6 ratio</p>
        </div>
        <div className="grid gap-5">
          <Card className="animate-in overflow-hidden border-slate-200 bg-white p-0">
            <Image
              src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=1900&h=600&q=80"
              alt="Professional cleaner working in modern apartment"
              width={1900}
              height={600}
              className="aspect-19/6 w-full object-cover"
            />
            <CardContent className="px-5 py-4 text-sm text-slate-600">Apartment deep cleaning</CardContent>
          </Card>
          <Card className="animate-in overflow-hidden border-slate-200 bg-white p-0">
            <Image
              src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=1900&h=600&q=80"
              alt="Cleaning tools arranged for home cleaning service"
              width={1900}
              height={600}
              className="aspect-19/6 w-full object-cover"
            />
            <CardContent className="px-5 py-4 text-sm text-slate-600">Tools and detail work</CardContent>
          </Card>
          <Card className="animate-in overflow-hidden border-slate-200 bg-white p-0">
            <Image
              src="https://images.unsplash.com/photo-1603712725038-e9334ae8f39f?auto=format&fit=crop&w=1900&h=600&q=80"
              alt="Minimal living room after professional cleaning"
              width={1900}
              height={600}
              className="aspect-19/6 w-full object-cover"
            />
            <CardContent className="px-5 py-4 text-sm text-slate-600">Fresh and minimal results</CardContent>
          </Card>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16">
        <h2 className="animate-in text-2xl font-bold tracking-tight text-slate-900 md:text-4xl">What clients say</h2>
        <div className="mt-7 grid gap-4 sm:grid-cols-2 md:grid-cols-3">
          {testimonials.map((item) => (
            <Card
              key={item.author}
              className="animate-in border-slate-200 bg-white p-0 shadow-sm md:odd:rotate-[-0.6deg] md:even:rotate-[0.6deg]"
            >
              <CardContent className="px-5 py-5">
                <div className="mb-3 flex items-center gap-1 text-amber-500">
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                  <Star className="size-4 fill-current" />
                </div>
                <p className="text-base leading-relaxed font-medium text-slate-800">&quot;{item.quote}&quot;</p>
                <p className="mt-4 text-sm font-bold tracking-wide text-emerald-700">{item.author}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-4 pb-16 sm:px-6 sm:pb-20">
        <div className="animate-in grid gap-6 rounded-[2rem] border border-slate-800 bg-slate-900 p-5 text-white sm:p-8 md:grid-cols-[0.9fr_1.1fr] md:gap-8 md:p-10">
          <div>
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-200">Quick Inquiry</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight md:text-4xl">Tell us about your space</h2>
            <p className="mt-4 max-w-xl text-base leading-relaxed text-cyan-100/90">
              Frontend demo form. Backend comes next.
            </p>
          </div>
          <form className="space-y-4 rounded-2xl bg-white p-5 text-slate-900 sm:p-6" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" placeholder="Jane Miller" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" placeholder="jane@email.com" required />
            </div>
            <div className="space-y-2">
              <Label htmlFor="service">Service type</Label>
              <Input id="service" name="service" placeholder="Deep cleaning" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="message">Message</Label>
              <Textarea id="message" name="message" placeholder="Apartment size, preferred date, special requests..." />
            </div>
            <Button type="submit" className="cta-gsap w-full rounded-full bg-emerald-600 text-white hover:bg-emerald-500">
              Send Request (Demo)
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}

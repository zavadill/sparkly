"use client";

import Link from "next/link";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { SiteInteractions } from "./site-interactions";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/faq", label: "FAQ" },
  { href: "/booking", label: "Booking" },
  { href: "/contact", label: "Contact" },
];

export function SiteShell({ children }: { children: React.ReactNode }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950">
      <header
        data-page-enter
        className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur-xl dark:border-slate-800 dark:bg-slate-950/90"
      >
        <div className="mx-auto hidden w-full max-w-6xl items-center justify-between px-4 py-2 text-xs text-slate-600 dark:text-slate-400 sm:flex sm:px-6">
          <p>Trusted house cleaning services</p>
          <p>Call us: (000) 000-0000</p>
        </div>
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="text-base font-semibold tracking-tight text-slate-900 dark:text-slate-100 sm:text-lg">
            Cleaning <span className="text-emerald-700">Company</span>
          </Link>
          <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white p-1 text-sm text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-300 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full px-3 py-1.5 transition hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-800 dark:hover:text-slate-100"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <Link
            href="/booking"
            className="group hidden items-center gap-1.5 rounded-full bg-emerald-600 px-3 py-2 text-xs font-medium text-white transition hover:bg-emerald-500 sm:px-4 sm:text-sm md:inline-flex"
          >
            Book Now
            <ArrowUpRight className="size-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </Link>
          <button
            type="button"
            onClick={() => setIsMenuOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white p-2 text-slate-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200 md:hidden"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          >
            {isMenuOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
      </header>
      {isMenuOpen && (
        <div className="fixed inset-0 z-60 flex min-h-svh flex-col bg-slate-950 p-6 text-white md:hidden">
          <div className="flex items-center justify-between">
            <p className="text-base font-semibold">
              Cleaning <span className="text-emerald-300">Company</span>
            </p>
            <button
              type="button"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex items-center justify-center rounded-full border border-white/20 bg-white/10 p-2"
              aria-label="Close menu"
            >
              <X className="size-5" />
            </button>
          </div>
          <nav className="mt-10 flex flex-1 flex-col justify-center gap-5">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-3xl font-semibold tracking-tight text-white/95"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="space-y-3">
            <a
              href="tel:+10000000000"
              className="block w-full rounded-full border border-white/30 px-5 py-3 text-center text-sm font-semibold"
            >
              Call (000) 000-0000
            </a>
            <Link
              href="/booking"
              onClick={() => setIsMenuOpen(false)}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-semibold text-white"
            >
              Book Now
              <ArrowUpRight className="size-4" />
            </Link>
          </div>
        </div>
      )}
      <main className="pt-30 md:pt-26">
        <SiteInteractions>{children}</SiteInteractions>
      </main>
      <footer data-page-enter className="mt-20 border-t border-slate-800 bg-slate-950 text-slate-100">
        <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-12 sm:px-6 md:grid-cols-3">
          <div>
            <p className="text-lg font-semibold">Cleaning Company</p>
            <p className="mt-3 text-sm text-slate-300">
              Trusted maid service for homes and apartments in your area.
            </p>
          </div>
          <div className="border-t border-slate-800 pt-4 md:border-0 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Contact</p>
            <p className="mt-3 text-sm">(000) 000-0000</p>
            <p className="text-sm">hello@yourcleaningcompany.com</p>
            <p className="text-sm">123 Main Street, Suite 100, Your City, ST 00000</p>
          </div>
          <div className="border-t border-slate-800 pt-4 md:border-0 md:pt-0">
            <p className="text-sm font-semibold uppercase tracking-wide text-slate-400">Hours</p>
            <p className="mt-3 text-sm">Mon-Fri: 7AM-6PM</p>
            <p className="text-sm">Sat: 8AM-5PM</p>
            <p className="text-sm">Sun: Closed</p>
          </div>
        </div>
        <div className="border-t border-slate-800">
          <div className="mx-auto flex w-full max-w-6xl flex-col gap-3 px-4 py-5 text-xs text-slate-400 sm:px-6 md:flex-row md:items-center md:justify-between">
            <p>Copyright {currentYear} Cleaning Company. All rights reserved.</p>
            <div className="flex flex-wrap items-center gap-4">
              <Link href="/privacy-policy" className="transition hover:text-slate-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="transition hover:text-slate-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

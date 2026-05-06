import type { Metadata } from "next";
import { SiteShell } from "../_components/site-shell";

export const metadata: Metadata = {
  title: "Blog",
};

const posts = [
  {
    title: "How to Prepare Your Apartment Before a Deep Cleaning",
    excerpt: "A quick room-by-room checklist to maximize your cleaner's time.",
  },
  {
    title: "Eco-Friendly Cleaning Habits for NYC Homes",
    excerpt: "Simple low-waste habits to keep your space fresh between appointments.",
  },
  {
    title: "Move-Out Cleaning: What Landlords Usually Check",
    excerpt: "Focus points that help you leave your place spotless and stress-free.",
  },
];

export default function BlogPage() {
  return (
    <SiteShell>
      <section data-page-enter className="mx-auto flex min-h-svh w-full max-w-6xl items-center justify-center px-4 sm:px-6">
        <div className="w-full max-w-3xl p-8 text-center sm:p-10">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700 dark:text-emerald-400">Blog</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 dark:text-slate-100 md:text-6xl">Blog</h1>
          <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400 md:text-lg">
            Practical cleaning tips, apartment care checklists, and simple routines to keep your
            NYC space fresh between visits.
          </p>
        </div>
      </section>

      <section data-reveal className="mx-auto w-full max-w-6xl px-4 pb-14 sm:px-6 sm:pb-16">
        <div data-stagger className="mt-10 grid gap-5 md:grid-cols-12">
          <article data-stagger-item data-interactive-card className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900 md:col-span-7">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Featured</p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
              NYC Cleaning Calendar: Weekly, Biweekly, or Monthly?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">
              A practical guide to choosing the right cleaning rhythm based on lifestyle, family
              size, and apartment type.
            </p>
          </article>
          <article data-stagger-item data-interactive-card className="rounded-3xl border border-emerald-200 bg-emerald-50 p-6 dark:border-emerald-900 dark:bg-emerald-950/20 md:col-span-5">
            <p className="text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">Quick Tips</p>
            <ul className="mt-3 space-y-2 text-sm text-slate-700 dark:text-slate-300">
              <li>Use microfiber for mirrors and glass.</li>
              <li>Start top-to-bottom in every room.</li>
              <li>Keep a 15-minute nightly reset routine.</li>
            </ul>
          </article>
        </div>

        <div data-stagger className="mt-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.title}
              data-stagger-item
              data-interactive-card
              className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-slate-800 dark:bg-slate-900"
            >
              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-slate-900 dark:text-slate-100">{post.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

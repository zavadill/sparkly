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
      <section className="mx-auto w-full max-w-6xl px-4 py-14 sm:px-6 sm:py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-emerald-700">Blog</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900 md:text-5xl">
          Helpful cleaning tips and home care guides
        </h1>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="rounded-2xl border border-slate-200 bg-white p-6">
              <h2 className="text-2xl font-semibold leading-snug tracking-tight text-slate-900">{post.title}</h2>
              <p className="mt-3 text-base leading-relaxed text-slate-600">{post.excerpt}</p>
            </article>
          ))}
        </div>
      </section>
    </SiteShell>
  );
}

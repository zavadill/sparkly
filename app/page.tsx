import type { Metadata } from "next";
import { SiteShell } from "./_components/site-shell";
import { HomePageClient } from "./_components/home-page-client";

export const metadata: Metadata = {
  title: "Home",
};

export default function Home() {
  return (
    <SiteShell>
      <HomePageClient />
    </SiteShell>
  );
}

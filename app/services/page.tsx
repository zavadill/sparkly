import type { Metadata } from "next";
import { ServicesPageClient } from "./services-page-client";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  "Apartment Cleaning Services",
  "House Cleaning Services",
  "Deep Cleaning Services",
  "Move In Cleaning Services",
  "Move Out Cleaning Services",
  "Post Construction Cleaning Services",
  "Airbnb Cleaning Services",
  "Same Day Cleaning Services",
  "Office Cleaning Services",
  "Extreme Deep Cleaning Services",
  "Maid Service",
  "Green Cleaning Services",
];

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}

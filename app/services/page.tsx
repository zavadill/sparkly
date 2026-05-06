import type { Metadata } from "next";
import { ServicesPageClient } from "./services-page-client";

export const metadata: Metadata = {
  title: "Services",
};

const services = [
  "Apartment Cleaning Services NYC",
  "House Cleaning Services NYC",
  "Deep Cleaning Services NYC",
  "Move In Cleaning Services NYC",
  "Move Out Cleaning Services NYC",
  "Post Construction Cleaning Services NYC",
  "Airbnb Cleaning Services NYC",
  "Same Day Cleaning Services NYC",
  "Office Cleaning Services NYC",
  "Extreme Deep Cleaning Services NYC",
  "Maid Service NYC",
  "Green Cleaning Services NYC",
];

export default function ServicesPage() {
  return <ServicesPageClient services={services} />;
}

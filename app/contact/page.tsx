import type { Metadata } from "next";
import { ContactSection } from "@/components/sections/ContactSection";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Connect with Shree Bhoomii Buildcon for sales inquiries, site visits, partnership opportunities, and project information.",
};

export default function ContactPage() {
  return <ContactSection standalone />;
}

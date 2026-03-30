import type { Metadata } from "next";
import { AboutUs } from "@/components/sections/AboutUs";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Shree Bhoomii Buildcon, our founders, mission, and the legacy we are building across Navi Mumbai.",
};

export default function AboutPage() {
  return <AboutUs standalone />;
}

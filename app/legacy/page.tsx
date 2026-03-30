import type { Metadata } from "next";
import { DeveloperLegacy } from "@/components/sections/DeveloperLegacy";

export const metadata: Metadata = {
  title: "Our Legacy",
  description:
    "Explore the development legacy of Shree Bhoomii Buildcon, from delivered homes across Navi Mumbai to ongoing and upcoming premium residential projects.",
};

export default function LegacyPage() {
  return <DeveloperLegacy standalone />;
}

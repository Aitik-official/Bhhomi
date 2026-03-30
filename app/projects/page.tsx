import type { Metadata } from "next";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { MasterLayout } from "@/components/sections/MasterLayout";
import { Specifications } from "@/components/sections/Specifications";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Bhoomii Anant and discover premium specifications, master planning, and project highlights from Shree Bhoomii Buildcon.",
};

export default function ProjectsPage() {
  return (
    <>
      <FeaturedProject standalone />
      <Specifications />
      <MasterLayout />
    </>
  );
}

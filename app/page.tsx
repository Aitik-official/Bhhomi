import { AboutUs } from "@/components/sections/AboutUs";
import { ContactSection } from "@/components/sections/ContactSection";
import { DeveloperLegacy } from "@/components/sections/DeveloperLegacy";
import { FeaturedProject } from "@/components/sections/FeaturedProject";
import { Hero } from "@/components/sections/Hero";
import { MasterLayout } from "@/components/sections/MasterLayout";
import { QuickStats } from "@/components/sections/QuickStats";
import { Specifications } from "@/components/sections/Specifications";

export default function HomePage() {
  return (
    <>
      <Hero />
      <QuickStats />
      <AboutUs />
      <DeveloperLegacy />
      <FeaturedProject />
      <Specifications />
      <MasterLayout />
      <ContactSection />
    </>
  );
}

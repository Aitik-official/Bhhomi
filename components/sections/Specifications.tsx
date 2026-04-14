"use client";

import { SectionHeading } from "@/components/ui/SectionHeading";
import { SpecCard } from "@/components/ui/SpecCard";
import { SPECS } from "@/lib/constants";

export function Specifications() {
  return (
    <section id="specifications" className="section-spacing bg-offWhite">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Specifications"
          title="Premium Interiors with Quality Finishes"
          description="Each material and fixture has been selected to create a home that feels refined, practical, and ready for long-term living."
        />
        <div className="grid gap-6 md:grid-cols-2">
          {SPECS.map((spec, index) => (
            <SpecCard key={spec.title} spec={spec} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

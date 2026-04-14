"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { fadeInUp, slideInLeft } from "@/lib/animations";

const layoutHighlights = [
  "12-meter-wide internal road connecting towers",
  "Open spaces for movement and accessibility",
  "Well-planned unit distribution across towers",
];

export function MasterLayout() {
  return (
    <section className="section-spacing bg-offWhite">
      <div className="container-shell grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={fadeInUp}
          className="relative"
        >
          <div className="absolute -bottom-5 -right-5 h-full w-full rounded-[2rem] border-2 border-primary/20 bg-primary/5" />
          <div className="metallic-overlay relative overflow-hidden rounded-[2rem] border border-border bg-card p-4 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1600&q=80"
              alt="Master layout plan for Bhoomii Anant"
              width={1200}
              height={850}
              className="h-full min-h-[24rem] w-full rounded-[1.5rem] object-cover"
            />
          </div>
        </motion.div>

        <div className="space-y-8">
          <SectionHeading
            eyebrow="Planning"
            title="Thoughtfully Planned Master Layout"
            description="The project layout has been designed to improve arrival, circulation, and daily comfort while preserving a strong architectural identity."
          />

          <div className="space-y-4">
            {layoutHighlights.map((highlight, index) => (
              <motion.div
                key={highlight}
                variants={slideInLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.25 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3"
              >
                <span className="mt-2 h-3 w-3 rounded-full bg-primary" />
                <p className="text-base leading-8 text-textSecondary">{highlight}</p>
              </motion.div>
            ))}
          </div>

          <Button href="https://placehold.co/1200x850.pdf">
            Download Layout PDF <Download className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  );
}

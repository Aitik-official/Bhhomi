"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Eye, Target } from "lucide-react";
import { FounderCard } from "@/components/ui/FounderCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FOUNDERS } from "@/lib/constants";
import { slideInLeft, slideInRight } from "@/lib/animations";

export function AboutUs({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="about" className="section-spacing bg-offWhite">
      <div className="container-shell space-y-14">
        {standalone ? (
          <SectionHeading
            eyebrow="About us"
            title="A developer shaped by grounded execution and long-term vision."
            description="Shree Bhoomii Buildcon blends market insight, quality-first construction, and thoughtful planning to create homes that feel future-ready from day one."
          />
        ) : null}

        <div className="grid gap-12 lg:grid-cols-[1fr_1.02fr] lg:items-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideInLeft}
            className="space-y-6"
          >
            <SectionHeading
              eyebrow="Who we are"
              title="Experience rooted in Navi Mumbai. Quality delivered with purpose."
              description="Shree Bhoomii Buildcon, led by Vinay Dubey and Dilip Mishra, has over 20 years of cumulative experience delivering quality homes across Nerul, Vashi, Ulwe, and Taloja Phase 2. With a growing footprint in Karanjade and Upper Kharghar, the company is building thoughtfully planned residences that balance premium design, comfort, and lasting value."
            />
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={slideInRight}
            className="relative"
          >
            <div className="absolute -bottom-5 -left-5 h-full w-full rounded-[2rem] border-2 border-primary/25 bg-primary/5" />
            <div className="relative overflow-hidden rounded-[2rem] border border-border bg-white p-4 shadow-soft">
              <Image
                src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1400&q=80"
                alt="Shree Bhoomii Buildcon team and developments"
                width={1100}
                height={900}
                className="h-full min-h-[24rem] w-full rounded-[1.5rem] object-cover"
              />
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {FOUNDERS.map((founder, index) => (
            <FounderCard key={founder.name} founder={founder} index={index} />
          ))}
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          <motion.article
            variants={slideInLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border-l-4 border-primary bg-white p-7 shadow-soft"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Eye className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-textPrimary">Vision</h3>
            <p className="mt-3 text-base leading-8 text-textSecondary">
              To shape premium residential communities across Navi Mumbai that elevate
              everyday life through quality design, accessibility, and enduring value.
            </p>
          </motion.article>

          <motion.article
            variants={slideInRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            className="rounded-3xl border-l-4 border-primary bg-white p-7 shadow-soft"
          >
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-5 w-5" />
            </div>
            <h3 className="font-serif text-3xl font-bold text-textPrimary">Mission</h3>
            <p className="mt-3 text-base leading-8 text-textSecondary">
              To deliver homes with disciplined execution, transparent relationships,
              and specifications that create comfort, pride, and long-term confidence
              for every family and investor.
            </p>
          </motion.article>
        </div>
      </div>
    </section>
  );
}

"use client";

import { motion } from "framer-motion";
import { StatCard } from "@/components/ui/StatCard";
import { STATS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function QuickStats() {
  return (
    <section className="metallic-overlay bg-primary-gradient py-14">
      <div className="container-shell">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={fadeInUp}
          className="mb-10 max-w-2xl text-textPrimary"
        >
          <p className="text-xs uppercase tracking-[0.35em] text-textSecondary">Scale & trust</p>
          <h2 className="mt-4 font-serif text-[clamp(2rem,4vw,3.4rem)] font-bold">
            A strong development footprint shaped by experience.
          </h2>
        </motion.div>
        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {STATS.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

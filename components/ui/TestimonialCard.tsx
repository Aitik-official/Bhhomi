"use client";

import { motion } from "framer-motion";
import type { Testimonial } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

export function TestimonialCard({
  testimonial,
  index,
}: {
  testimonial: Testimonial;
  index: number;
}) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12 }}
      className="rounded-3xl border border-border bg-white p-6 shadow-soft"
    >
      <p className="text-lg leading-8 text-textSecondary">“{testimonial.quote}”</p>
      <div className="mt-6">
        <h3 className="font-serif text-xl font-bold text-textPrimary">{testimonial.name}</h3>
        <p className="text-sm uppercase tracking-[0.22em] text-primary">{testimonial.role}</p>
      </div>
    </motion.article>
  );
}

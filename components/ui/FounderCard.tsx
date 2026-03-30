"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import type { Founder } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

export function FounderCard({ founder, index }: { founder: Founder; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      transition={{ delay: index * 0.15 }}
      whileHover={{ y: -6 }}
      className="group rounded-3xl border border-border bg-white p-4 shadow-soft"
    >
      <div className="overflow-hidden rounded-[24px] border border-primary/10">
        <Image
          src={founder.image}
          alt={founder.name}
          width={600}
          height={700}
          className="h-72 w-full object-cover transition duration-500 group-hover:scale-105"
        />
      </div>
      <div className="px-2 pb-2 pt-5">
        <h3 className="font-serif text-2xl font-bold text-textPrimary">{founder.name}</h3>
        <p className="mt-2 text-sm uppercase tracking-[0.22em] text-primary">{founder.title}</p>
      </div>
    </motion.article>
  );
}

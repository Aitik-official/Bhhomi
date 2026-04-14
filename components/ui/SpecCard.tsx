"use client";

import { motion } from "framer-motion";
import {
  ArrowUpWideNarrow,
  Bath,
  Building2,
  ChefHat,
  DoorOpen,
  Home,
  Paintbrush,
  PanelsTopLeft,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import type { Spec } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

const iconMap: Record<string, LucideIcon> = {
  home: Home,
  bath: Bath,
  "chef-hat": ChefHat,
  "door-open": DoorOpen,
  "building-2": Building2,
  paintbrush: Paintbrush,
  "panels-top-left": PanelsTopLeft,
  "arrow-up-wide-narrow": ArrowUpWideNarrow,
};

export function SpecCard({ spec, index }: { spec: Spec; index: number }) {
  const Icon = iconMap[spec.icon] ?? Home;

  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:border-primary/40 hover:shadow-glow"
    >
      <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="font-serif text-2xl font-bold text-textPrimary">{spec.title}</h3>
      <p className="mt-3 text-base leading-7 text-textSecondary">{spec.description}</p>
    </motion.article>
  );
}



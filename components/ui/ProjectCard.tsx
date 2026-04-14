"use client";

import { motion } from "framer-motion";
import type { Project } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

const statusStyles = {
  delivered: "bg-emerald-100 text-emerald-700",
  ongoing: "bg-amber-100 text-amber-700",
  upcoming: "bg-primary/10 text-primary",
};

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.12 }}
      whileHover={{ y: -3 }}
      className="rounded-2xl border border-border bg-card p-6 shadow-soft transition duration-300 hover:shadow-glow"
    >
      <div className="flex flex-wrap items-center gap-3">
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] ${statusStyles[project.status]}`}
        >
          {project.status}
        </span>
        <span className="text-sm font-medium text-textSecondary">{project.area}</span>
      </div>
      <h3 className="mt-5 font-serif text-2xl font-bold text-textPrimary">{project.title}</h3>
      <p className="mt-3 text-base leading-7 text-textSecondary">{project.location}</p>
    </motion.article>
  );
}


"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
};

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignment = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <motion.div
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      className={`flex max-w-3xl flex-col gap-4 ${alignment}`}
    >
      {eyebrow ? (
        <span className="text-xs font-semibold uppercase tracking-[0.35em] text-primary">
          {eyebrow}
        </span>
      ) : null}
      <div className="space-y-3">
        <h2 className="font-serif text-[clamp(2rem,4vw,3.8rem)] font-bold leading-tight text-textPrimary">
          {title}
        </h2>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: align === "center" ? 112 : 96 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="h-1 rounded-full bg-primary"
        />
      </div>
      {description ? (
        <p className="max-w-2xl text-base leading-8 text-textSecondary sm:text-lg">
          {description}
        </p>
      ) : null}
    </motion.div>
  );
}

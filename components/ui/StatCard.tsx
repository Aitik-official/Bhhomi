"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import type { Stat } from "@/lib/types";
import { fadeInUp } from "@/lib/animations";

export function StatCard({ stat, index }: { stat: Stat; index: number }) {
  const ref = useRef<HTMLDivElement | null>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { stiffness: 90, damping: 18 });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    if (isInView) {
      motionValue.set(Number.parseInt(stat.value, 10));
    }
  }, [isInView, motionValue, stat.value]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      setDisplayValue(Math.round(latest));
    });

    return () => unsubscribe();
  }, [springValue]);

  return (
    <motion.div
      ref={ref}
      variants={fadeInUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      transition={{ delay: index * 0.15 }}
      className="rounded-2xl border border-white/60 bg-white/85 p-6 text-textPrimary shadow-soft backdrop-blur"
    >
      <div className="mb-5 h-px w-full bg-primary/20" />
      <div className="font-serif text-5xl font-bold leading-none">
        {displayValue}
        {stat.suffix ?? ""}
      </div>
      <p className="mt-4 max-w-[14rem] text-sm uppercase tracking-[0.2em] text-textSecondary">
        {stat.label}
      </p>
    </motion.div>
  );
}

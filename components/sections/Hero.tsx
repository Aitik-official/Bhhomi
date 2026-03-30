"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowDown, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { fadeInUp, staggerContainer } from "@/lib/animations";
import { HERO_BADGES } from "@/lib/constants";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-offWhite via-white to-white">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="absolute -left-24 top-20 h-72 w-72 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute right-0 top-16 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
      <div className="absolute bottom-10 left-1/3 h-40 w-40 rotate-12 rounded-[2rem] border border-primary/20 bg-primary/5" />

      <div className="container-shell relative grid min-h-[calc(100vh-5rem)] items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-24">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-flex rounded-full border border-primary/20 bg-primary/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-primary"
          >
            Navi Mumbai&apos;s Trusted Real Estate Developer
          </motion.span>
          <motion.h1
            variants={fadeInUp}
            className="mt-8 font-serif text-[clamp(3rem,8vw,6.6rem)] font-bold leading-[0.95] text-textPrimary"
          >
            Building Homes.
            <br />
            <span className="text-gradient">Creating Legacies.</span>
          </motion.h1>
          <motion.p
            variants={fadeInUp}
            className="mt-6 max-w-2xl text-lg leading-8 text-textSecondary sm:text-xl"
          >
            20+ Years of Cumulative Experience | Delivering Quality Homes Across
            Navi Mumbai
          </motion.p>
          <motion.div variants={fadeInUp} className="mt-10 flex flex-wrap gap-4">
            <Button href="/projects">
              Explore Our Projects <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button href="/contact" variant="outline">
              Contact Us
            </Button>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative"
        >
          <div className="absolute -right-4 -top-4 h-full w-full rounded-[2rem] border-2 border-primary/20 bg-primary/5" />
          <div className="relative overflow-hidden rounded-[2rem] border border-white/60 bg-white p-4 shadow-soft">
            <Image
              src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80"
              alt="Shree Bhoomii Buildcon project showcase"
              width={900}
              height={1000}
              priority
              className="h-[28rem] w-full rounded-[1.5rem] object-cover sm:h-[34rem]"
            />
          </div>

          <motion.div
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 4.5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="glass-panel absolute -left-4 top-10 rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-primary">RERA Registered</p>
            <p className="mt-1 font-serif text-2xl font-bold text-textPrimary">Premium Trust</p>
          </motion.div>

          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 5.2, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="glass-panel absolute -bottom-4 right-6 rounded-2xl px-4 py-3 shadow-soft"
          >
            <p className="text-xs uppercase tracking-[0.24em] text-primary">20+ Years</p>
            <p className="mt-1 font-serif text-2xl font-bold text-textPrimary">Legacy Built</p>
          </motion.div>

          <div className="absolute left-6 top-[55%] flex flex-wrap gap-2">
            {HERO_BADGES.map((badge) => (
              <span
                key={badge}
                className="rounded-full border border-white/60 bg-white/90 px-3 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-textPrimary shadow-soft"
              >
                {badge}
              </span>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.8, repeat: Number.POSITIVE_INFINITY }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 lg:flex"
      >
        <ArrowDown className="h-6 w-6 text-primary" />
      </motion.div>
    </section>
  );
}

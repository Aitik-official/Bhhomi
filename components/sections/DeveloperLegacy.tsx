"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AREA_BADGES, LEGACY_GALLERY, LEGACY_PROJECTS } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

export function DeveloperLegacy({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="legacy" className="section-spacing bg-white">
      <div className="container-shell space-y-14">
        <SectionHeading
          eyebrow="Our legacy"
          title="Our Legacy in Real Estate"
          description="Shree Bhoomii Buildcon has built its legacy through delivered projects, active construction momentum, and a growing future pipeline across Navi Mumbai's most promising residential locations."
        />

        {standalone ? (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="grid gap-6 rounded-[2rem] border border-border bg-offWhite p-8 shadow-soft lg:grid-cols-3"
          >
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Delivered Projects
              </p>
              <p className="mt-4 font-serif text-4xl font-bold text-textPrimary">1 Lakh Sq. Ft.</p>
              <p className="mt-3 text-base leading-8 text-textSecondary">
                Across Nerul, Vashi, Ulwe, and Taloja Phase 2.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Ongoing Projects
              </p>
              <p className="mt-4 font-serif text-4xl font-bold text-textPrimary">4 Lakh Sq. Ft.</p>
              <p className="mt-3 text-base leading-8 text-textSecondary">
                Active developments in Karanjade, Upper Kharghar, and Ulwe.
              </p>
            </div>
            <div className="rounded-3xl bg-white p-6 shadow-soft">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-primary">
                Upcoming Projects
              </p>
              <p className="mt-4 font-serif text-4xl font-bold text-textPrimary">10 Lakh Sq. Ft.</p>
              <p className="mt-3 text-base leading-8 text-textSecondary">
                Premium residential development planned for the next stage of growth.
              </p>
            </div>
          </motion.div>
        ) : null}

        <div className="rounded-[2rem] border border-border bg-offWhite p-6 shadow-soft sm:p-8">
          <div className="hidden items-center justify-between gap-6 lg:flex">
            <div className="relative w-full">
              <svg viewBox="0 0 1000 120" className="absolute left-0 top-8 h-20 w-full">
                <motion.path
                  d="M40 60 C 220 60, 280 60, 500 60 S 780 60, 960 60"
                  fill="none"
                  stroke="#FF6B00"
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: "easeOut" }}
                />
              </svg>
              <div className="grid gap-6 lg:grid-cols-3">
                {LEGACY_PROJECTS.map((project, index) => (
                  <div key={project.title} className="relative pt-10">
                    <span className="absolute left-1/2 top-4 h-4 w-4 -translate-x-1/2 rounded-full border-4 border-white bg-primary shadow-glow" />
                    <ProjectCard project={project} index={index} />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6 lg:hidden">
            {LEGACY_PROJECTS.map((project, index) => (
              <div key={project.title} className="flex gap-4">
                <div className="flex flex-col items-center">
                  <span className="mt-2 h-4 w-4 rounded-full bg-primary" />
                  {index < LEGACY_PROJECTS.length - 1 ? (
                    <motion.span
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.7 }}
                      className="mt-2 h-full w-0.5 origin-top bg-primary"
                    />
                  ) : null}
                </div>
                <div className="flex-1">
                  <ProjectCard project={project} index={index} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInUp}
          className="flex flex-wrap gap-3"
        >
          {AREA_BADGES.map((badge) => (
            <span
              key={badge}
              className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-sm font-semibold text-primary"
            >
              {badge}
            </span>
          ))}
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {LEGACY_GALLERY.map((item, index) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.55, delay: index * 0.12 }}
              className="group relative overflow-hidden rounded-[2rem] shadow-soft"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={900}
                height={700}
                className="h-80 w-full object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-textPrimary/80 via-textPrimary/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-6 bg-primary/95 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/85">{item.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

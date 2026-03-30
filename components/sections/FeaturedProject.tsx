"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Landmark, Route } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FEATURED_GALLERY, FEATURED_HIGHLIGHTS, TESTIMONIALS } from "@/lib/constants";
import { TestimonialCard } from "@/components/ui/TestimonialCard";

const iconMap: Record<string, LucideIcon> = {
  building: Building2,
  road: Route,
  landmark: Landmark,
};

export function FeaturedProject({ standalone = false }: { standalone?: boolean }) {
  return (
    <section id="projects" className="section-spacing bg-offWhite">
      <div className="container-shell space-y-14">
        <SectionHeading
          eyebrow="Featured project"
          title="Bhoomii Anant — Upper Kharghar"
          description="Twin Residential Towers Redefining Modern Living"
        />

        {standalone ? (
          <p className="-mt-8 max-w-3xl text-base leading-8 text-textSecondary">
            Bhoomii Anant reflects our next chapter: a premium residential address
            that combines elegant arrival experiences, practical circulation, and a
            refined sense of urban living.
          </p>
        ) : null}

        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED_HIGHLIGHTS.map((item, index) => {
            const Icon = iconMap[item.icon] ?? Building2;

            return (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.25 }}
                transition={{ duration: 0.55, delay: index * 0.12 }}
                whileHover={{ y: -6 }}
                className="rounded-3xl border border-border bg-white p-6 shadow-soft"
              >
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-serif text-2xl font-bold text-textPrimary">{item.title}</h3>
                <p className="mt-3 text-base leading-7 text-textSecondary">{item.description}</p>
              </motion.article>
            );
          })}
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {FEATURED_GALLERY.map((item, index) => (
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
              <div className="absolute inset-0 bg-gradient-to-t from-textPrimary/85 via-transparent to-transparent" />
              <div className="absolute inset-x-0 bottom-0 translate-y-6 bg-primary/95 p-6 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
                <p className="mt-2 text-sm leading-7 text-white/85">{item.caption}</p>
              </div>
            </motion.article>
          ))}
        </div>

        <div className="flex flex-wrap gap-4">
          <Button href="/projects">
            View Full Project Details <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={testimonial.name}
              testimonial={testimonial}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, MessageCircle, Phone, Send } from "lucide-react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/Button";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { CONTACT_INFO } from "@/lib/constants";
import { fadeInUp } from "@/lib/animations";

interface InquiryFormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactSection({ standalone = false }: { standalone?: boolean }) {
  const [submitted, setSubmitted] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InquiryFormValues>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (_values: InquiryFormValues) => {
    await new Promise((resolve) => window.setTimeout(resolve, 900));
    setSubmitted(true);
    reset();
    window.setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact" className="section-spacing bg-offWhite">
      <div className="container-shell space-y-12">
        <SectionHeading
          eyebrow="Contact"
          title="Let&apos;s Build Your Future Together"
          description="Speak with our team for project details, schedule a site visit, or begin your home-buying conversation with Shree Bhoomii Buildcon."
          align={standalone ? "left" : "center"}
        />

        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeInUp}
            className="space-y-6"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Phone className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-textPrimary">Call us</h3>
                <p className="mt-2 text-base text-textSecondary">{CONTACT_INFO.phone}</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
                <Mail className="h-6 w-6 text-primary" />
                <h3 className="mt-4 font-serif text-2xl font-bold text-textPrimary">Email</h3>
                <div className="mt-2 space-y-1">
                  {CONTACT_INFO.emails.map((email) => (
                    <a
                      key={email}
                      href={`mailto:${email}`}
                      className="block text-base text-textSecondary transition hover:text-primary"
                    >
                      {email}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div className="rounded-2xl border border-border bg-card p-6 shadow-soft">
              <MapPin className="h-6 w-6 text-primary" />
              <h3 className="mt-4 font-serif text-2xl font-bold text-textPrimary">
                Visit our office
              </h3>
              <p className="mt-2 text-base leading-8 text-textSecondary">
                {CONTACT_INFO.address}
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button href="https://wa.me/919876543210" variant="success">
                <MessageCircle className="mr-2 h-4 w-4" /> WhatsApp
              </Button>
              <Button href="tel:+919876543210">
                <Phone className="mr-2 h-4 w-4" /> Call Now
              </Button>
            </div>

            <div className="overflow-hidden rounded-[2rem] border border-border shadow-soft">
              <div className="flex h-[320px] items-center justify-center bg-card text-center">
                <div className="space-y-3 px-6">
                  <MapPin className="mx-auto h-8 w-8 text-primary" />
                  <h3 className="font-serif text-2xl font-bold text-textPrimary">
                    Google Maps Placeholder
                  </h3>
                  <p className="text-base leading-7 text-textSecondary">
                    Replace this panel with a live Google Maps iframe once the final
                    office location link is ready.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={fadeInUp}
            className="rounded-[2rem] border border-border bg-card p-6 shadow-soft sm:p-8"
          >
            <form className="space-y-5" onSubmit={handleSubmit(onSubmit)}>
              <div className="relative">
                <input
                  id="name"
                  placeholder="Name"
                  className="input-field input-peer"
                  {...register("name", { required: "Name is required" })}
                />
                <label htmlFor="name" className="floating-label">
                  Name
                </label>
                {errors.name ? (
                  <p className="mt-2 text-sm text-red-500">{errors.name.message}</p>
                ) : null}
              </div>

              <div className="grid gap-5 md:grid-cols-2">
                <div className="relative">
                  <input
                    id="email"
                    type="email"
                    placeholder="Email"
                    className="input-field input-peer"
                    {...register("email", {
                      required: "Email is required",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Enter a valid email address",
                      },
                    })}
                  />
                  <label htmlFor="email" className="floating-label">
                    Email
                  </label>
                  {errors.email ? (
                    <p className="mt-2 text-sm text-red-500">{errors.email.message}</p>
                  ) : null}
                </div>

                <div className="relative">
                  <input
                    id="phone"
                    placeholder="Phone"
                    className="input-field input-peer"
                    {...register("phone", {
                      required: "Phone number is required",
                      minLength: {
                        value: 10,
                        message: "Enter a valid phone number",
                      },
                    })}
                  />
                  <label htmlFor="phone" className="floating-label">
                    Phone
                  </label>
                  {errors.phone ? (
                    <p className="mt-2 text-sm text-red-500">{errors.phone.message}</p>
                  ) : null}
                </div>
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  placeholder="Message"
                  rows={5}
                  className="input-field input-peer !h-auto resize-none py-5"
                  {...register("message", { required: "Message is required" })}
                />
                <label htmlFor="message" className="floating-label">
                  Message
                </label>
                {errors.message ? (
                  <p className="mt-2 text-sm text-red-500">{errors.message.message}</p>
                ) : null}
              </div>

              <div className="flex flex-wrap items-center gap-4">
                <Button type="submit" className="min-w-[12rem]">
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Inquiry <Send className="ml-2 h-4 w-4" />
                    </>
                  )}
                </Button>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="flex items-center gap-2 rounded-full bg-success/10 px-4 py-2 text-sm font-semibold text-success"
                  >
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-success text-white">
                      OK
                    </span>
                    Thank you! We&apos;ll get back to you shortly.
                  </motion.div>
                ) : null}
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



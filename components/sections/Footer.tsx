import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { COMPANY_NAME, CONTACT_INFO } from "@/lib/constants";

const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Legacy", href: "/legacy" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M13.5 21v-7.2h2.4l.4-2.8h-2.8V9.2c0-.8.2-1.4 1.4-1.4H16V5.3c-.5-.1-1.3-.2-2.2-.2-2.2 0-3.8 1.3-3.8 3.9V11H7.7v2.8H10V21h3.5Z" />
    </svg>
  );
}

function InstagramIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-4 w-4">
      <rect
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        rx="5"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
      <circle cx="17.2" cy="6.8" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LinkedinIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" className="h-4 w-4">
      <path d="M6.8 8.3a1.9 1.9 0 1 0 0-3.8 1.9 1.9 0 0 0 0 3.8ZM5.2 9.8h3.2V19H5.2V9.8Zm5.2 0h3v1.3h.1c.4-.8 1.4-1.6 2.8-1.6 3 0 3.6 2 3.6 4.5V19h-3.2v-4.5c0-1.1 0-2.4-1.5-2.4s-1.7 1.2-1.7 2.3V19h-3.2V9.8Z" />
    </svg>
  );
}

const socialLinks = [
  { label: "Facebook", href: "https://facebook.com", icon: FacebookIcon },
  { label: "Instagram", href: "https://instagram.com", icon: InstagramIcon },
  { label: "LinkedIn", href: "https://linkedin.com", icon: LinkedinIcon },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-offWhite text-textPrimary">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/70 to-transparent" />
      <div className="absolute -right-24 top-8 h-56 w-56 rounded-full bg-primary/15 blur-3xl" />
      <div className="absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl" />

      <div className="container-shell relative py-16 sm:py-20">
        <div className="rounded-[2rem] border border-border bg-white p-6 shadow-soft backdrop-blur sm:p-8 lg:p-10">
          <div className="grid gap-8 border-b border-border pb-10 lg:grid-cols-[1.35fr_0.8fr_0.9fr]">
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="overflow-hidden rounded-2xl border border-border bg-card p-2 shadow-soft">
                  <Image
                    src="/bhomii logo.png"
                    alt={`${COMPANY_NAME} logo`}
                    width={72}
                    height={72}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-[0.32em] text-primary">
                    {COMPANY_NAME}
                  </p>
                  <p className="mt-2 font-serif text-3xl font-bold leading-tight text-textPrimary sm:text-4xl">
                    Building Homes.
                    <span className="block text-primary">Creating Legacies.</span>
                  </p>
                </div>
              </div>

              <p className="max-w-xl text-base leading-8 text-textSecondary">
                Premium residential development across Navi Mumbai, shaped by
                thoughtful planning, quality execution, and a long-term vision for
                modern urban living.
              </p>

              <div className="flex flex-wrap gap-4">
                <Button href="/contact">
                  Enquire Now <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  href="/projects"
                  variant="outline"
                  className="border-border bg-white text-primary hover:bg-primary/5 hover:text-primary"
                >
                  Explore Projects
                </Button>
              </div>
            </div>

            <div>
              <h3 className="font-serif text-2xl font-bold text-textPrimary">Quick Links</h3>
              <div className="mt-6 space-y-3">
                {quickLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    className="group flex w-fit items-center gap-2 text-sm font-medium text-textSecondary transition hover:text-primary"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary/50 transition group-hover:bg-primary" />
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div className="space-y-5">
              <h3 className="font-serif text-2xl font-bold text-textPrimary">Contact & Social</h3>
              <div className="space-y-4 text-sm leading-7 text-textSecondary">
                <p className="flex items-start gap-3">
                  <Phone className="mt-1 h-4 w-4 text-primary" />
                  <span>{CONTACT_INFO.phone}</span>
                </p>
                <p className="flex items-start gap-3">
                  <Mail className="mt-1 h-4 w-4 text-primary" />
                  <span className="space-y-1">
                    {CONTACT_INFO.emails.map((email) => (
                      <Link
                        key={email}
                        href={`mailto:${email}`}
                        className="block transition hover:text-primary"
                      >
                        {email}
                      </Link>
                    ))}
                  </span>
                </p>
                <p className="flex items-start gap-3">
                  <MapPin className="mt-1 h-4 w-4 text-primary" />
                  <span>{CONTACT_INFO.address}</span>
                </p>
              </div>

              <div className="flex flex-wrap gap-3 pt-2">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={item.label}
                      className="group flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-white text-textSecondary transition duration-300 hover:-translate-y-1 hover:border-primary/60 hover:bg-primary hover:text-white"
                    >
                      <Icon />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4 pt-6 text-sm text-textMuted sm:flex-row sm:items-center sm:justify-between">
            <p>{"\u00A9"} 2025 Shree Bhoomii Buildcon. All rights reserved.</p>
            <div className="flex flex-wrap gap-5">
              <Link href="/" className="transition hover:text-primary">
                Privacy Policy
              </Link>
              <Link href="/" className="transition hover:text-primary">
                Terms & Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

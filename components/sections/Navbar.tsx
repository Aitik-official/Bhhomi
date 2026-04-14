"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import { Button } from "@/components/ui/Button";
import { COMPANY_NAME, NAV_ITEMS } from "@/lib/constants";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);

    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={false}
      animate={{
        backgroundColor: scrolled ? "rgba(255,255,255,0.92)" : "rgba(255,255,255,0.82)",
        boxShadow: scrolled ? "0 10px 30px rgba(0,0,0,0.08)" : "0 0 0 rgba(0,0,0,0)",
      }}
      className="fixed inset-x-0 top-0 z-50 border-b border-border backdrop-blur"
    >
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href="/" className="flex min-h-11 items-center gap-3">
          <div className="overflow-hidden rounded-xl border border-border bg-card shadow-soft">
            <Image
              src="/bhomii logo.png"
              alt={`${COMPANY_NAME} logo`}
              width={52}
              height={52}
              priority
              className="h-12 w-12 object-contain"
            />
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-bold leading-tight text-primary sm:text-2xl">
              {COMPANY_NAME}
            </span>
            <span className="hidden text-[10px] font-semibold uppercase tracking-[0.28em] text-textSecondary sm:block">
              Premium Real Estate Developer
            </span>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {NAV_ITEMS.map((item) => (
            (() => {
              const baseHref = item.href.split("#")[0] || "/";
              const isActive = pathname === baseHref;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`group relative py-2 text-sm font-semibold transition ${
                    isActive ? "text-primary" : "text-textPrimary hover:text-primary"
                  }`}
                >
                  {item.label}
                  <span
                    className={`absolute inset-x-0 -bottom-1 h-0.5 origin-left rounded-full bg-primary transition-transform duration-300 ${
                      isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                    }`}
                  />
                </Link>
              );
            })()
          ))}
        </nav>

        <div className="hidden lg:block">
          <Button href="/contact">Enquire Now</Button>
        </div>

        <button
          type="button"
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-card text-textPrimary lg:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.span
              key={open ? "close" : "open"}
              initial={{ opacity: 0, rotate: -20, scale: 0.8 }}
              animate={{ opacity: 1, rotate: 0, scale: 1 }}
              exit={{ opacity: 0, rotate: 20, scale: 0.8 }}
              transition={{ duration: 0.18 }}
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </motion.span>
          </AnimatePresence>
        </button>
      </div>

      <AnimatePresence>
        {open ? (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 top-20 bg-black/20 lg:hidden"
              onClick={() => setOpen(false)}
            />
            <motion.aside
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 30 }}
              className="fixed right-0 top-20 z-50 flex h-[calc(100vh-5rem)] w-full max-w-sm flex-col justify-between border-l border-border bg-card p-6 shadow-soft lg:hidden"
            >
              <div className="space-y-4">
                {NAV_ITEMS.map((item) => (
                  (() => {
                    const baseHref = item.href.split("#")[0] || "/";
                    const isActive = pathname === baseHref;

                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block rounded-2xl px-4 py-3 text-base font-semibold transition ${
                          isActive
                            ? "bg-primary/10 text-primary"
                            : "text-textPrimary hover:bg-offWhite hover:text-primary"
                        }`}
                        onClick={() => setOpen(false)}
                      >
                        {item.label}
                      </Link>
                    );
                  })()
                ))}
              </div>
              <Button href="/contact" className="w-full" onClick={() => setOpen(false)}>
                Enquire Now
              </Button>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </motion.header>
  );
}

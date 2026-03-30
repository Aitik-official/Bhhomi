"use client";

import Link from "next/link";
import { motion } from "framer-motion";

type ButtonProps = {
  href?: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "dark" | "success";
  className?: string;
  type?: "button" | "submit";
  onClick?: () => void;
};

const variants = {
  primary:
    "bg-primary-gradient text-white shadow-glow hover:from-primaryLight hover:to-primaryDark",
  outline:
    "border border-primary/25 bg-white text-primary hover:border-primary hover:bg-primary/5",
  dark: "bg-textPrimary text-white hover:bg-black",
  success: "bg-success text-white hover:bg-emerald-600",
};

export function Button({
  href,
  children,
  variant = "primary",
  className = "",
  type = "button",
  onClick,
}: ButtonProps) {
  const baseClassName = `inline-flex min-h-11 items-center justify-center rounded-full px-6 py-3 text-sm font-semibold tracking-wide transition duration-300 ${variants[variant]} ${className}`;

  if (href) {
    const isExternal = href.startsWith("http") || href.startsWith("tel:") || href.startsWith("mailto:");

    return (
      <motion.div whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
        {isExternal ? (
          <a
            href={href}
            className={baseClassName}
            onClick={onClick}
            target={href.startsWith("http") ? "_blank" : undefined}
            rel={href.startsWith("http") ? "noreferrer" : undefined}
          >
            {children}
          </a>
        ) : (
          <Link href={href} className={baseClassName} onClick={onClick}>
            {children}
          </Link>
        )}
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      whileHover={{ y: -2 }}
      whileTap={{ scale: 0.98 }}
      className={baseClassName}
      onClick={onClick}
    >
      {children}
    </motion.button>
  );
}

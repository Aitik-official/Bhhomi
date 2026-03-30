import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import { Footer } from "@/components/sections/Footer";
import { Navbar } from "@/components/sections/Navbar";
import { PageTransition } from "@/components/layout/PageTransition";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  weight: ["700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.shreebhoomiibuildcon.com"),
  title: {
    default: "Shree Bhoomii Buildcon | Premium Real Estate Developer in Navi Mumbai",
    template: "%s | Shree Bhoomii Buildcon",
  },
  description:
    "Discover Shree Bhoomii Buildcon, a Navi Mumbai real estate developer with 20+ years of cumulative experience delivering premium homes, landmark communities, and future-ready residential projects.",
  keywords: [
    "Shree Bhoomii Buildcon",
    "Navi Mumbai builder",
    "Upper Kharghar projects",
    "real estate developer",
    "premium residential towers",
  ],
  openGraph: {
    title: "Shree Bhoomii Buildcon",
    description:
      "Building homes and creating legacies across Navi Mumbai with premium design, quality construction, and thoughtful planning.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable}`}
      suppressHydrationWarning
    >
      <body className="min-h-screen">
        <Navbar />
        <PageTransition>{children}</PageTransition>
        <Footer />
      </body>
    </html>
  );
}

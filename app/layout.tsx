import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { siteConfig } from "@/data/siteData";

export const metadata: Metadata = {
  metadataBase: new URL("https://ptmjaufarswadiq.com"),
  title: {
    default: "PTM Jaufar Swadiq — Human Excellence Strategist | Leadership & Emotional Intelligence",
    template: "%s | PTM Jaufar Swadiq",
  },
  description:
    "Official website of PTM Jaufar Swadiq, Human Excellence Strategist specializing in leadership development, emotional intelligence, and transformative corporate training. Unlock Human Potential. Inspire Leadership. Transform Lives.",
  keywords: [
    "PTM Jaufar Swadiq",
    "Human Excellence Strategist",
    "Leadership Development",
    "Emotional Intelligence Coach",
    "Corporate Trainer India",
    "Executive Leadership Workshop",
    "Youth Leadership Mentor",
    "Keynote Speaker Kerala",
    "Excellence Begins Within",
  ],
  authors: [{ name: "PTM Jaufar Swadiq" }],
  creator: "PTM Jaufar Swadiq",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ptmjaufarswadiq.com",
    siteName: "PTM Jaufar Swadiq",
    title: "PTM Jaufar Swadiq — Human Excellence Strategist",
    description:
      "Unlock Human Potential. Inspire Leadership. Transform Lives. Leadership Development, Emotional Intelligence, and Transformative Training.",
    images: [
      {
        url: "/images/hero-portrait.jpg",
        width: 1200,
        height: 630,
        alt: "PTM Jaufar Swadiq — Human Excellence Strategist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "PTM Jaufar Swadiq — Human Excellence Strategist",
    description:
      "Unlock Human Potential. Inspire Leadership. Transform Lives. Excellence Begins Within.",
    images: ["/images/hero-portrait.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&family=Manrope:wght@300;400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-navy text-slate-200 antialiased selection:bg-gold selection:text-navy">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}


import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionCoordinator from "@/components/effects/MotionCoordinator";
import EnergyCometCursor from "@/components/effects/EnergyCometCursor";
import CinematicEnergyBackground from "@/components/effects/CinematicEnergyBackground";
import CinematicDarkOverlay from "@/components/effects/CinematicDarkOverlay";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-plus-jakarta",
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://auroradomes.com"),
  title: {
    default: "Aurora Dome Solutions | Immersive 360° Destinations & Dome Systems",
    template: "%s | Aurora Dome Solutions",
  },
  description:
    "We build immersive destinations. Engineering, projection, immersive content, and technical support — brought together under one partner.",
  keywords: [
    "immersive dome",
    "planetarium dome",
    "360 projection mapping",
    "geodesic dome engineering",
    "aurora dome solutions",
    "fulldome projection",
    "interactive dome",
  ],
  authors: [{ name: "Aurora Dome Solutions" }],
  creator: "Aurora Dome Solutions",
  publisher: "Aurora Dome Solutions",
  openGraph: {
    title: "Aurora Dome Solutions | Immersive 360° Destinations & Dome Systems",
    description:
      "We build immersive destinations. Engineering, projection, immersive content, and technical support — brought together under one partner.",
    url: "https://auroradomes.com",
    siteName: "Aurora Dome Solutions",
    images: [
      {
        url: "/images/hero_landing_monumental_aurora.jpg",
        width: 1200,
        height: 630,
        alt: "Aurora Dome Solutions Immersive Architecture",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Aurora Dome Solutions | Immersive 360° Destinations & Dome Systems",
    description:
      "We build immersive destinations. Engineering, projection, immersive content, and technical support.",
    images: ["/images/hero_landing_monumental_aurora.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://auroradomes.com/#organization",
      name: "Aurora Dome Solutions",
      url: "https://auroradomes.com",
      logo: "https://auroradomes.com/images/hero_landing_monumental_aurora.jpg",
      description:
        "Full-turnkey provider of architectural geodesic domes, 360° fulldome projection systems, immersive content, and global engineering support.",
    },
    {
      "@type": "WebSite",
      "@id": "https://auroradomes.com/#website",
      url: "https://auroradomes.com",
      name: "Aurora Dome Solutions",
      publisher: {
        "@id": "https://auroradomes.com/#organization",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${cormorant.variable} ${playfair.variable} scroll-smooth`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#030509] text-slate-100 antialiased selection:bg-purple-600 selection:text-white relative">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[9999] focus:px-4 focus:py-2 focus:bg-indigo-600 focus:text-white focus:rounded-md focus:shadow-xl focus:outline-none focus:ring-2 focus:ring-white"
        >
          Skip to main content
        </a>
        <CinematicEnergyBackground />
        <CinematicDarkOverlay />
        <MotionCoordinator />
        <EnergyCometCursor />
        <Header />
        <main id="main-content" tabIndex={-1} className="min-h-screen pt-20 relative z-10 outline-none">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}

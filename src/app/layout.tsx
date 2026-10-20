import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Cormorant_Garamond, Playfair_Display } from "next/font/google";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MotionCoordinator from "@/components/effects/MotionCoordinator";
import EnergyParticleCursor from "@/components/effects/EnergyParticleCursor";
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
  title: "Aurora Dome Solutions | Immersive 360° Destinations & Dome Systems",
  description:
    "We build immersive destinations. Engineering, projection, immersive content, and technical support — brought together under one partner.",
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
      </head>
      <body className="bg-[#05070B] text-slate-100 antialiased selection:bg-purple-600 selection:text-white">
        <MotionCoordinator />
        <EnergyParticleCursor />
        <Header />
        <div className="min-h-screen pt-20">{children}</div>
        <Footer />
      </body>
    </html>
  );
}

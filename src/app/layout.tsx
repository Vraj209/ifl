import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";

import { LenisProvider } from "@/components/animations/lenis-provider";
import { Footer } from "@/components/layout/footer";
import { MobileCta } from "@/components/layout/mobile-cta";
import { MainNavigation } from "@/components/navigation/main-navigation";
import { site } from "@/lib/site";
import "@/styles/globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "INL Tree Farm | Premium Ontario Wholesale Nursery Stock",
    template: "%s | INL Tree Farm",
  },
  description: site.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "INL Tree Farm | Premium Ontario Wholesale Nursery Stock",
    description: site.description,
    url: site.url,
    siteName: "INL Tree Farm",
    locale: "en_CA",
    type: "website",
    images: [
      {
        url: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-hero-002.jpg",
        width: 1600,
        height: 900,
        alt: "Ontario-grown nursery stock at INL Tree Farm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "INL Tree Farm | Premium Ontario Wholesale Nursery Stock",
    description: site.description,
    images: ["https://inltreefarm.com/wp-content/uploads/2024/11/inl-hero-002.jpg"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#0B0D0C",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en-CA">
      <body>
        <LenisProvider>
          <a
            href="#main-content"
            className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-md focus:bg-warm-white focus:px-4 focus:py-3 focus:text-sm focus:font-semibold focus:text-forest-black"
          >
            Skip to content
          </a>
          <MainNavigation />
          {children}
          <Footer />
          <MobileCta />
        </LenisProvider>
      </body>
    </html>
  );
}

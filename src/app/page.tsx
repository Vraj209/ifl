import { CinematicHero } from "@/components/hero/cinematic-hero";
import { GallerySection } from "@/components/sections/gallery-section";
import { Logistics } from "@/components/sections/logistics";
import { OntarioGrown } from "@/components/sections/ontario-grown";
import { ProductCategories } from "@/components/sections/product-categories";
import { QuoteCta } from "@/components/sections/quote-cta";
import { TrustMetrics } from "@/components/sections/trust-metrics";
import { WholesaleProgram } from "@/components/sections/wholesale-program";
import { inventoryCategories, site } from "@/lib/site";

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "INL Tree Farm",
  url: site.url,
  telephone: site.phone,
  email: site.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: "1682 8th Concession Rd W",
    addressLocality: "Cambridge",
    addressRegion: "ON",
    postalCode: "N1R 5S2",
    addressCountry: "CA",
  },
  areaServed: "Southern Ontario",
  makesOffer: inventoryCategories.map((category) => ({
    "@type": "Offer",
    itemOffered: {
      "@type": "Product",
      name: category.title,
      description: category.description,
    },
  })),
};

export default function Home() {
  return (
    <main id="main-content">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <CinematicHero />
      <TrustMetrics />
      <ProductCategories />
      <OntarioGrown />
      <Logistics />
      <WholesaleProgram />
      <GallerySection />
      <QuoteCta />
    </main>
  );
}

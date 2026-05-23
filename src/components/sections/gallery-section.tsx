import { GalleryGrid } from "@/components/gallery/gallery-grid";
import { Container } from "@/components/ui/container";
import { SectionHeading } from "@/components/ui/section-heading";
import { galleryImages } from "@/lib/site";

export function GallerySection() {
  return (
    <section id="gallery" className="section-y bg-sand">
      <Container>
        <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow="Farm gallery"
            title="A working nursery with the scale to support serious projects."
            description="Rows, root systems, seasonal stock, and the quiet precision behind wholesale nursery supply."
          />
          <p className="max-w-sm text-sm leading-6 text-forest-black/58">
            Imagery is loaded responsively and only expanded into a lightbox when
            buyers want a closer look.
          </p>
        </div>
        <GalleryGrid images={galleryImages} />
      </Container>
    </section>
  );
}

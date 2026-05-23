export type AvailabilityStatus = "High" | "Moderate" | "Seasonal" | "Limited";

export type InventoryCategory = {
  slug: string;
  title: string;
  eyebrow: string;
  description: string;
  image: string;
  availability: AvailabilityStatus;
  leadTime: string;
  cta: string;
  specimens: string[];
  procurementNotes: string[];
};

export type GalleryImage = {
  src: string;
  alt: string;
  title: string;
  orientation: "portrait" | "landscape" | "square";
};

import type { GalleryImage, InventoryCategory } from "@/types/content";

export const site = {
  name: "INL Tree Farm",
  url: "https://inltreefarm.com",
  description:
    "Premium Ontario wholesale nursery stock cultivated across 160 acres near Cambridge for contractors, municipalities, landscapers, and garden centers.",
  phone: "905-330-6112",
  email: "treefarm@islingtonnurseries.com",
  salesEmail: "rob@islingtonnurseries.com",
  address: "1682 8th Concession Rd W, Cambridge, ON N1R 5S2",
};

export const navItems = [
  { label: "Inventory", href: "/inventory" },
  { label: "Ontario Grown", href: "/#ontario-grown" },
  { label: "Logistics", href: "/#logistics" },
  { label: "Wholesale", href: "/#wholesale" },
  { label: "Gallery", href: "/#gallery" },
];

export const images = {
  logo: "https://inltreefarm.com/wp-content/uploads/2024/11/INL-LOGO.png",
  logoWhite: "https://inltreefarm.com/wp-content/uploads/2024/11/INL-TREEFARM-LOGO-WT.png",
  hero: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-hero-002.jpg",
  wholesale: "https://inltreefarm.com/wp-content/uploads/2025/01/inl-wholesale.jpg",
  rooted: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-trio-001-1.jpg",
  thriving: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-trio-002-1.jpg",
  sustainability: "https://inltreefarm.com/wp-content/uploads/2025/09/Untitled-design.png",
  soil: "https://inltreefarm.com/wp-content/uploads/2020/01/landscaper-grass-background-4-scaled.jpg",
};

export const trustMetrics = [
  { value: 70, suffix: "+", label: "Years Experience", description: "Generational nursery knowledge." },
  { value: 160, suffix: "", label: "Acres Cultivated", description: "Scale for regional supply." },
  { value: 100, suffix: "%", label: "Ontario Grown", description: "Climate-adapted stock." },
  { value: 4, suffix: "", label: "Wholesale Ready", description: "Contractor-grade categories." },
];

export const inventoryCategories: InventoryCategory[] = [
  {
    slug: "deciduous-trees",
    title: "Deciduous Trees",
    eyebrow: "Shade, canopy, ornamental",
    description:
      "Field-grown maples, oaks, lindens, serviceberries, and flowering trees selected for Ontario streetscapes, commercial landscapes, and long-term estate plantings.",
    image: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_114223-copy-scaled.jpg",
    availability: "High",
    leadTime: "Quote-ready in 24-48 hours",
    cta: "Check deciduous availability",
    specimens: ["Autumn Blaze Maple", "Red Oak", "Linden", "Serviceberry", "Japanese Tree Lilac"],
    procurementNotes: ["B&B and caliper sizing", "Municipal substitution support", "Spring and fall dig windows"],
  },
  {
    slug: "evergreens",
    title: "Evergreens",
    eyebrow: "Screening, structure, year-round massing",
    description:
      "Hardy conifers and broadleaf evergreens for privacy screening, windbreaks, institutional planting, and high-impact commercial entrances.",
    image: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_120935-copy-scaled.jpg",
    availability: "Moderate",
    leadTime: "Seasonal quantities confirmed weekly",
    cta: "Request evergreen list",
    specimens: ["White Spruce", "Colorado Spruce", "Cedar", "Pine", "Yew"],
    procurementNotes: ["Screening runs and matched sets", "Contractor loading support", "Delivery staging available"],
  },
  {
    slug: "shrubs",
    title: "Shrubs",
    eyebrow: "Mass planting, buffers, foundations",
    description:
      "Landscape-grade shrubs sourced for reliable establishment across residential developments, public sites, and commercial planting programs.",
    image: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_121135-copy-scaled.jpg",
    availability: "High",
    leadTime: "Project lists priced quickly",
    cta: "Build a shrub quote",
    specimens: ["Hydrangea", "Dogwood", "Ninebark", "Spirea", "Viburnum"],
    procurementNotes: ["Volume pricing by project", "Ontario-hardy varieties", "Tagged holds for approved quotes"],
  },
  {
    slug: "perennials",
    title: "Perennials",
    eyebrow: "Layered seasonal performance",
    description:
      "Durable perennial selections that support texture, pollinator value, and repeatable planting palettes for professional landscape teams.",
    image: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-trio-001-1.jpg",
    availability: "Seasonal",
    leadTime: "Best selection in peak planting windows",
    cta: "View perennial timing",
    specimens: ["Hosta", "Coneflower", "Ornamental Grass", "Salvia", "Daylily"],
    procurementNotes: ["Palette planning by exposure", "Seasonal color blocks", "Contractor pickup coordination"],
  },
  {
    slug: "soil-blends",
    title: "Soil Blends",
    eyebrow: "Growing media and amendments",
    description:
      "Professional soil blends and landscape materials that support planting performance from the first backfill through establishment.",
    image: "https://inltreefarm.com/wp-content/uploads/2020/01/landscaper-grass-background-4-scaled.jpg",
    availability: "Limited",
    leadTime: "Bulk availability varies by yard",
    cta: "Ask about soil supply",
    specimens: ["Planting Soil", "Triple Mix", "Compost", "Mulch", "Top Dressing"],
    procurementNotes: ["Bulk coordination", "Yard-organics acceptance", "Site-specific recommendations"],
  },
];

export const galleryImages: GalleryImage[] = [
  {
    src: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_114223-copy-scaled.jpg",
    alt: "Rows of Ontario nursery trees at INL Tree Farm",
    title: "Cultivated rows",
    orientation: "landscape",
  },
  {
    src: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_120935-copy-scaled.jpg",
    alt: "Evergreen nursery stock at the Cambridge tree farm",
    title: "Evergreen structure",
    orientation: "landscape",
  },
  {
    src: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-trio-001-1.jpg",
    alt: "Close view of healthy locally grown nursery stock",
    title: "Local root systems",
    orientation: "portrait",
  },
  {
    src: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_121135-copy-scaled.jpg",
    alt: "Nursery shrubs prepared for wholesale landscape projects",
    title: "Project-ready stock",
    orientation: "landscape",
  },
  {
    src: "https://inltreefarm.com/wp-content/uploads/2024/11/inl-trio-002-1.jpg",
    alt: "Thriving plants cultivated for Ontario conditions",
    title: "Seasonal vigor",
    orientation: "portrait",
  },
  {
    src: "https://inltreefarm.com/wp-content/uploads/2025/08/20250703_121324-copy-scaled.jpg",
    alt: "Wholesale nursery rows prepared for contractors",
    title: "Wholesale scale",
    orientation: "landscape",
  },
];

export const wholesaleSegments = [
  "Landscape Contractors",
  "Municipal Buyers",
  "Garden Centers",
  "Developers",
  "Estate Landscapers",
  "Commercial Grounds Teams",
];

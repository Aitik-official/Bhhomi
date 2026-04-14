import type {
  ContactInfo,
  Founder,
  GalleryItem,
  Highlight,
  Project,
  Spec,
  Stat,
  Testimonial,
} from "@/lib/types";

export const COMPANY_NAME = "Shree Bhoomii Buildcon";

export const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Our Legacy", href: "/legacy" },
  { label: "Projects", href: "/projects" },
  { label: "Contact", href: "/contact" },
] as const;

export const HERO_BADGES = ["RERA Registered", "20+ Years", "Navi Mumbai Focused"];

export const STATS: Stat[] = [
  { label: "Years Cumulative Experience", value: "20", suffix: "+" },
  { label: "Lakh Sq. Ft. Delivered", value: "1" },
  { label: "Lakh Sq. Ft. Ongoing", value: "4" },
  { label: "Lakh Sq. Ft. Upcoming", value: "10" },
];

// TODO: Replace placeholder images with final renders, construction photography, and founder portraits.
export const FOUNDERS: Founder[] = [
  {
    name: "Vinay Dubey",
    title: "Co-Founder & Director",
    image: "/Aitik%20Portfolio.png",
  },
  {
    name: "Dilip Mishra",
    title: "Co-Founder & Director",
    image: "/WhatsApp%20Image%202026-04-09%20at%204.11.02%20PM.jpeg",
  },
];

export const LEGACY_PROJECTS: Project[] = [
  {
    title: "Delivered Projects",
    location: "1 Lakh Sq. Ft. across Nerul, Vashi, Ulwe, and Taloja Phase 2.",
    status: "delivered",
    area: "1 Lakh Sq. Ft.",
  },
  {
    title: "Ongoing Projects",
    location: "Karanjade, Upper Kharghar, and Ulwe with 4 Lakh Sq. Ft. under active development.",
    status: "ongoing",
    area: "4 Lakh Sq. Ft.",
  },
  {
    title: "Upcoming Projects",
    location: "10 Lakh Sq. Ft. of premium residential development planned for the next phase of growth.",
    status: "upcoming",
    area: "10 Lakh Sq. Ft.",
  },
];

export const AREA_BADGES = [
  "Nerul",
  "Vashi",
  "Ulwe",
  "Taloja Phase 2",
  "Karanjade",
  "Upper Kharghar",
];

const BUILDING_IMAGE_NAMES = [
  "page_1-removebg-preview (1).png",
  "WhatsApp Image 2026-03-26 at 3.19.46 PM (1).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.46 PM (2).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.46 PM.jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.47 PM (1).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.47 PM (2).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.47 PM (3).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.47 PM.jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.48 PM.jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.49 PM (1).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.49 PM (2).jpeg",
  "WhatsApp Image 2026-03-26 at 3.19.49 PM.jpeg",
] as const;

const BUILDING_IMAGES = BUILDING_IMAGE_NAMES.map(
  (name) => `/bulding/${encodeURIComponent(name)}`,
);

export const LEGACY_GALLERY: GalleryItem[] = [
  {
    title: "Legacy Project Visual - 01",
    image: BUILDING_IMAGES[0],
    caption: "Project imagery from the Bhoomii Buildcon legacy portfolio.",
  },
  {
    title: "Legacy Project Visual - 02",
    image: BUILDING_IMAGES[1],
    caption: "On-site elevation and frontage view from completed developments.",
  },
  {
    title: "Legacy Project Visual - 03",
    image: BUILDING_IMAGES[2],
    caption: "Built-form reference showing layout and surrounding context.",
  },
  {
    title: "Legacy Project Visual - 04",
    image: BUILDING_IMAGES[3],
    caption: "Project capture highlighting structure and finishing details.",
  },
  {
    title: "Legacy Project Visual - 05",
    image: BUILDING_IMAGES[4],
    caption: "Portfolio frame from Bhoomii project documentation.",
  },
  {
    title: "Legacy Project Visual - 06",
    image: BUILDING_IMAGES[5],
    caption: "Development image with an emphasis on site character.",
  },
  {
    title: "Legacy Project Visual - 07",
    image: BUILDING_IMAGES[6],
    caption: "Residential view from legacy and growth-phase assets.",
  },
  {
    title: "Legacy Project Visual - 08",
    image: BUILDING_IMAGES[7],
    caption: "Photographic record from project progression milestones.",
  },
  {
    title: "Legacy Project Visual - 09",
    image: BUILDING_IMAGES[8],
    caption: "Real image set curated from the provided building folder.",
  },
  {
    title: "Legacy Project Visual - 10",
    image: BUILDING_IMAGES[9],
    caption: "Architectural perspective from the Bhoomii image archive.",
  },
  {
    title: "Legacy Project Visual - 11",
    image: BUILDING_IMAGES[10],
    caption: "Development photography for trust and on-ground authenticity.",
  },
  {
    title: "Legacy Project Visual - 12",
    image: BUILDING_IMAGES[11],
    caption: "Final image in the complete legacy showcase sequence.",
  },
];

export const FEATURED_HIGHLIGHTS: Highlight[] = [
  {
    title: "Twin Towers",
    description: "Bhoomii Anant 1 & 2 designed as a landmark residential address.",
    icon: "building",
  },
  {
    title: "12-Meter Wide Internal Road",
    description: "Seamless access and movement planned through the heart of the site.",
    icon: "road",
  },
  {
    title: "Grand Entrance Lobby",
    description: "A 14 ft × 8 ft arrival experience with premium hospitality cues.",
    icon: "landmark",
  },
];

export const FEATURED_GALLERY: GalleryItem[] = [
  {
    title: "Bhoomii Anant View - 01",
    image: BUILDING_IMAGES[9],
    caption: "Featured project image from provided Bhoomii assets.",
  },
  {
    title: "Bhoomii Anant View - 02",
    image: BUILDING_IMAGES[10],
    caption: "Detailed view representing project form and finish quality.",
  },
  {
    title: "Bhoomii Anant View - 03",
    image: BUILDING_IMAGES[11],
    caption: "Context image from the same building image collection.",
  },
];

export const SPECS: Spec[] = [
  {
    icon: "home",
    title: "Flooring",
    description: "Kajaria vitrified tiles elevate every room with durability and finish.",
  },
  {
    icon: "bath",
    title: "Bathroom",
    description: "Jaquar CP fittings paired with carefully planned utility and detailing.",
  },
  {
    icon: "chef-hat",
    title: "Kitchen",
    description:
      "Granite platform, SS sink, wall tiles, and water purifier provision.",
  },
  {
    icon: "door-open",
    title: "Doors",
    description: "Premium laminate doors with robust 18mm plywood construction.",
  },
  {
    icon: "building-2",
    title: "Balcony",
    description: "Glass facade treatment in the living room enhances light and openness.",
  },
  {
    icon: "paintbrush",
    title: "Paint",
    description: "Premium white finish keeps interiors bright, calm, and elegant.",
  },
  {
    icon: "panels-top-left",
    title: "Windows",
    description: "Aluminum sliding windows ensure functionality with a modern profile.",
  },
  {
    icon: "arrow-up-wide-narrow",
    title: "Lift",
    description: "High-speed automatic lift for smooth vertical mobility.",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Asha More",
    role: "Homebuyer, Ulwe",
    quote:
      "From the first conversation to possession planning, the team made the entire journey feel transparent and reassuring.",
  },
  {
    name: "Rahul Sawant",
    role: "Investor, Upper Kharghar",
    quote:
      "Their planning quality and construction confidence stood out immediately. The project vision feels both practical and premium.",
  },
];

export const CONTACT_INFO: ContactInfo = {
  phone: "+91 98765 43210",
  emails: [
    "crm@bhoomiibuilcon.co.in",
    "sales@bhoomiibhuildcon.co.in",
  ],
  address:
    "Corporate Office, Navi Mumbai, Maharashtra 410210",
};

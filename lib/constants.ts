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
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=900&q=80",
  },
  {
    name: "Dilip Mishra",
    title: "Co-Founder & Director",
    image:
      "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=900&q=80",
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

export const LEGACY_GALLERY: GalleryItem[] = [
  {
    title: "Completed Residential Communities",
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1400&q=80",
    caption: "High-resolution project photography reflecting delivered homes and established neighborhood presence.",
  },
  {
    title: "Ongoing Project Progress",
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1400&q=80",
    caption: "Execution-focused visuals from active construction zones across emerging Navi Mumbai locations.",
  },
  {
    title: "3D Renders & Elevation Visuals",
    image:
      "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=1400&q=80",
    caption: "Architectural elevation-led imagery representing the premium residential vision ahead.",
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
    title: "Tower Elevation",
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1400&q=80",
    caption: "Bold vertical expression with a refined modern facade.",
  },
  {
    title: "Lobby Interior",
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1400&q=80",
    caption: "Warm materials, generous volume, and a premium welcome sequence.",
  },
  {
    title: "Aerial View",
    image:
      "https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&w=1400&q=80",
    caption: "Thoughtfully arranged towers, circulation, and open breathing space.",
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
    description: "High-speed KONE automatic lift for smooth vertical mobility.",
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
  email: "sales@shreebhoomiibuildcon.com",
  address:
    "Corporate Office, Navi Mumbai, Maharashtra 410210",
};

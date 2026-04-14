export interface Stat {
  label: string;
  value: string;
  suffix?: string;
}

export interface Spec {
  icon: string;
  title: string;
  description: string;
}

export interface Project {
  title: string;
  location: string;
  status: "delivered" | "ongoing" | "upcoming";
  area: string;
}

export interface Founder {
  name: string;
  title: string;
  image: string;
}

export interface ContactInfo {
  phone: string;
  emails: string[];
  address: string;
}

export interface Highlight {
  title: string;
  description: string;
  icon: string;
}

export interface GalleryItem {
  title: string;
  image: string;
  caption: string;
}

export interface Testimonial {
  name: string;
  role: string;
  quote: string;
}

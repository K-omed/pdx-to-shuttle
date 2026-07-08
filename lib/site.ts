import {
  BadgeCheck,
  BriefcaseBusiness,
  Clock3,
  Luggage,
  MapPin,
  Plane,
  ShieldCheck,
  Sparkles,
  Star,
  Users,
} from "lucide-react";

export const site = {
  name: "PDX to Shuttle",
  legalName: "PDX to Shuttle",
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "(503) 000-0000",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "booking@example.com",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "Portland, OR",
  area: "Portland, Oregon and Portland International Airport",
  hours: "24 hours a day, 7 days a week by reservation",
  tagline: "Premium airport transportation to and from PDX.",
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/airport-shuttle", label: "Airport Shuttle" },
  { href: "/pricing", label: "Pricing" },
  { href: "/service-areas", label: "Service Areas" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

export const trustBadges = [
  { icon: ShieldCheck, label: "Safety-first rides" },
  { icon: Clock3, label: "Flight-aware scheduling" },
  { icon: BadgeCheck, label: "Private reservations" },
  { icon: Luggage, label: "Luggage-friendly vehicles" },
];

export const services = [
  {
    slug: "airport-shuttle",
    title: "Airport Shuttle",
    icon: Plane,
    description:
      "Door-to-door PDX airport shuttle service for departures, arrivals, early flights, and late-night pickups.",
    href: "/airport-shuttle",
  },
  {
    slug: "corporate-transportation",
    title: "Corporate Transportation",
    icon: BriefcaseBusiness,
    description:
      "Polished airport transfers for teams, visiting executives, conference travel, and client arrivals.",
    href: "/corporate-transportation",
  },
  {
    slug: "private-transportation",
    title: "Private Transportation",
    icon: Users,
    description:
      "Private rides for families, solo travelers, groups, and special trips across the Portland region.",
    href: "/private-transportation",
  },
];

export const serviceAreas = [
  "Portland",
  "Beaverton",
  "Tigard",
  "Lake Oswego",
  "Hillsboro",
  "Gresham",
  "Vancouver, WA",
  "Happy Valley",
  "Oregon City",
  "Salem",
  "Hood River",
  "Wilsonville",
];

export const rates = [
  { area: "Portland core and inner east side", rate: "Custom quote" },
  { area: "Beaverton, Tigard, Lake Oswego", rate: "Custom quote" },
  { area: "Hillsboro, Wilsonville, Oregon City", rate: "Custom quote" },
  { area: "Salem, Hood River, Oregon Coast routes", rate: "Custom quote" },
];

export const faqs = [
  {
    question: "How do I book a Portland airport shuttle?",
    answer:
      "Use the booking form with your pickup, dropoff, flight, passenger, and luggage details. A team member confirms availability and final pricing before the ride.",
  },
  {
    question: "Do you provide transportation to and from PDX?",
    answer:
      "Yes. PDX to Shuttle provides airport pickup and drop-off transportation for Portland International Airport, including early departures and late arrivals by reservation.",
  },
  {
    question: "Can I request a private airport shuttle?",
    answer:
      "Yes. Rides are planned as private reservations so your group can travel directly without unnecessary shared stops.",
  },
  {
    question: "Do drivers track flights?",
    answer:
      "Flight numbers are requested during booking so pickup timing can be planned around airport arrivals, baggage timing, and known schedule changes.",
  },
  {
    question: "Which Portland areas do you serve?",
    answer:
      "Service focuses on Portland, PDX, nearby Oregon communities, and selected longer-distance airport transfer routes by quote.",
  },
];

export const testimonials = [
  {
    name: "Business traveler",
    text: "The reservation process was clear, the pickup plan was detailed, and the ride to PDX felt calm from start to finish.",
  },
  {
    name: "Family passenger",
    text: "We had luggage, an early flight, and a tight schedule. The private shuttle made the airport trip much easier.",
  },
  {
    name: "Corporate coordinator",
    text: "Professional communication and reliable timing made it simple to coordinate transportation for visiting staff.",
  },
];

export const valueProps = [
  {
    icon: Sparkles,
    title: "Premium experience",
    text: "Clean vehicles, professional communication, and thoughtful pickup planning for a calmer airport transfer.",
  },
  {
    icon: ShieldCheck,
    title: "Safety and reliability",
    text: "Every ride is organized around punctuality, route awareness, luggage needs, and passenger comfort.",
  },
  {
    icon: MapPin,
    title: "Local route knowledge",
    text: "Transportation built for Portland traffic patterns, PDX timing, and metro-area airport routes.",
  },
  {
    icon: Star,
    title: "High-conversion service",
    text: "Clear quote requests, simple booking details, and direct contact options keep the next step obvious.",
  },
];

export const landingPages = [
  {
    slug: "portland-airport-shuttle",
    keyword: "Portland Airport Shuttle",
    title: "Portland Airport Shuttle Service",
    description:
      "Premium Portland airport shuttle service for private PDX transfers, business travel, family trips, and reliable airport pickups.",
  },
  {
    slug: "pdx-shuttle",
    keyword: "PDX Shuttle",
    title: "PDX Shuttle",
    description:
      "Book a private PDX shuttle with door-to-door transportation, flight-aware pickup planning, and premium service in Portland.",
  },
  {
    slug: "pdx-shuttle-service",
    keyword: "PDX Shuttle Service",
    title: "PDX Shuttle Service",
    description:
      "Reliable PDX shuttle service for airport arrivals, departures, corporate rides, and private Portland transportation.",
  },
  {
    slug: "portland-shuttle-service",
    keyword: "Portland Shuttle Service",
    title: "Portland Shuttle Service",
    description:
      "Professional Portland shuttle service for PDX airport transfers, private rides, groups, and local transportation needs.",
  },
  {
    slug: "shuttle-to-pdx",
    keyword: "Shuttle to PDX",
    title: "Shuttle to PDX",
    description:
      "Schedule a private shuttle to PDX with airport-ready pickup timing, luggage-friendly vehicles, and dependable Portland service.",
  },
  {
    slug: "shuttle-from-pdx",
    keyword: "Shuttle from PDX",
    title: "Shuttle from PDX",
    description:
      "Reserve a shuttle from PDX for comfortable airport pickup, door-to-door dropoff, and private transportation after landing.",
  },
  {
    slug: "shuttle-to-portland",
    keyword: "Shuttle to Portland",
    title: "Shuttle to Portland",
    description:
      "Private shuttle to Portland from PDX and surrounding areas with premium service, route planning, and simple booking.",
  },
  {
    slug: "shuttle-from-portland",
    keyword: "Shuttle from Portland",
    title: "Shuttle from Portland",
    description:
      "Book a shuttle from Portland to PDX or regional destinations with reliable scheduling and professional airport transportation.",
  },
  {
    slug: "airport-transportation-portland",
    keyword: "Airport Transportation Portland",
    title: "Airport Transportation Portland",
    description:
      "Airport transportation in Portland for business travelers, families, groups, and private PDX transfers.",
  },
  {
    slug: "private-airport-shuttle-portland",
    keyword: "Private Airport Shuttle Portland",
    title: "Private Airport Shuttle Portland",
    description:
      "Private airport shuttle in Portland with direct PDX service, luggage-friendly planning, and professional ride coordination.",
  },
];

export const blogPosts = [
  {
    slug: "best-transportation-to-pdx",
    title: "Best Transportation to PDX for Stress-Free Travel",
    description:
      "Compare private airport shuttle service, rideshare, parking, and public transit for getting to Portland International Airport.",
    date: "2026-07-07",
    keyword: "best transportation to PDX",
  },
  {
    slug: "how-early-should-you-arrive-at-pdx",
    title: "How Early Should You Arrive at PDX?",
    description:
      "A practical guide to planning pickup times for domestic and international flights at Portland International Airport.",
    date: "2026-07-07",
    keyword: "how early should you arrive at PDX",
  },
  {
    slug: "travel-tips-for-portland-visitors",
    title: "Travel Tips for Portland Visitors",
    description:
      "Useful airport, transportation, packing, and local travel tips for visitors arriving in Portland, Oregon.",
    date: "2026-07-07",
    keyword: "Portland visitor travel tips",
  },
  {
    slug: "airport-shuttle-vs-uber",
    title: "Airport Shuttle vs Uber for PDX Trips",
    description:
      "Understand the tradeoffs between a scheduled private airport shuttle and app-based rideshare for Portland airport travel.",
    date: "2026-07-07",
    keyword: "airport shuttle vs Uber",
  },
  {
    slug: "corporate-airport-transportation",
    title: "Corporate Airport Transportation in Portland",
    description:
      "How corporate airport transportation helps teams, executives, and guests arrive prepared and on schedule.",
    date: "2026-07-07",
    keyword: "corporate airport transportation Portland",
  },
];

export const pageContent = {
  about: {
    title: "About PDX to Shuttle",
    keyword: "Portland Airport Transportation",
    description:
      "Learn about PDX to Shuttle, a Portland airport transportation service focused on reliable reservations, comfort, and professional airport transfers.",
  },
  services: {
    title: "Portland Shuttle Services",
    keyword: "Portland Shuttle Service",
    description:
      "Explore airport shuttle, corporate transportation, and private shuttle services for Portland, PDX, and nearby communities.",
  },
  "airport-shuttle": {
    title: "PDX Airport Shuttle Service",
    keyword: "PDX Airport Transportation",
    description:
      "Book PDX airport shuttle service for private pickups, drop-offs, luggage-friendly vehicles, and dependable airport transportation.",
  },
  "corporate-transportation": {
    title: "Corporate Airport Transportation Portland",
    keyword: "Corporate Airport Transportation Portland",
    description:
      "Professional corporate airport transportation in Portland for executives, guests, teams, meetings, and conference travel.",
  },
  "private-transportation": {
    title: "Private Shuttle Portland",
    keyword: "Private Shuttle Portland",
    description:
      "Private shuttle service in Portland for airport transfers, family trips, groups, and custom point-to-point transportation.",
  },
  pricing: {
    title: "Portland Airport Shuttle Pricing",
    keyword: "Affordable Portland Shuttle",
    description:
      "Request transparent pricing for Portland airport shuttle service, private PDX rides, corporate transfers, and regional routes.",
  },
  "service-areas": {
    title: "PDX Shuttle Service Areas",
    keyword: "Portland Airport Shuttle Service",
    description:
      "View Portland airport shuttle service areas for PDX transfers throughout Portland, nearby Oregon communities, and selected Washington routes.",
  },
  faq: {
    title: "Portland Airport Shuttle FAQ",
    keyword: "PDX Shuttle Service",
    description:
      "Answers to common questions about booking PDX shuttle service, private airport transportation, luggage, timing, and service areas.",
  },
  contact: {
    title: "Contact PDX to Shuttle",
    keyword: "Airport Pickup Portland",
    description:
      "Contact PDX to Shuttle to request airport transportation, ask about PDX pickup, or plan a private Portland shuttle reservation.",
  },
  "privacy-policy": {
    title: "Privacy Policy",
    keyword: "PDX to Shuttle privacy",
    description:
      "Read the PDX to Shuttle privacy policy for booking requests, contact information, analytics, and website data handling.",
  },
  terms: {
    title: "Terms of Service",
    keyword: "PDX to Shuttle terms",
    description:
      "Review the PDX to Shuttle terms for reservations, quote requests, service availability, and website use.",
  },
} as const;

export type PageSlug = keyof typeof pageContent;

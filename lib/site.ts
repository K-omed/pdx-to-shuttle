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
  domain: process.env.NEXT_PUBLIC_SITE_URL || "https://pdxtoshuttle.com",
  phone: process.env.NEXT_PUBLIC_BUSINESS_PHONE || "",
  email: process.env.NEXT_PUBLIC_BUSINESS_EMAIL || "",
  address: process.env.NEXT_PUBLIC_BUSINESS_ADDRESS || "",
  area: "Portland, Oregon and Portland International Airport",
  hours: process.env.NEXT_PUBLIC_BUSINESS_HOURS || "By reservation",
  tagline: "Premium airport transportation to and from PDX.",
};

export const hasPublicPhone = Boolean(site.phone.trim());
export const hasPublicEmail = Boolean(site.email.trim());
export const hasPublicAddress = Boolean(site.address.trim());

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

export const landingPageCopy: Record<
  string,
  {
    intro: string[];
    h2: string;
    bullets: string[];
    localAngle: string;
  }
> = {
  "portland-airport-shuttle": {
    h2: "A scheduled airport shuttle for Portland travelers who want fewer variables",
    intro: [
      "Portland Airport Shuttle service is most useful when the trip has a firm flight time, multiple passengers, luggage, or a destination that is easier to handle with scheduled door-to-door transportation. PDX to Shuttle is structured around those details instead of treating every ride like a last-minute curbside pickup.",
      "For departures, the planning starts with the pickup address, airline schedule, passenger count, bags, and the time of day. Morning flights, weekend traffic, weather, and event traffic can change the right pickup window, so a quote request should include the information needed to plan the ride with a reasonable buffer.",
      "For arrivals, the process is different. The flight number matters because landing time, baggage claim, and airport exit flow affect the pickup plan. A private Portland airport shuttle gives families, business travelers, and visitors a clearer path from PDX to their hotel, office, home, or regional destination.",
    ],
    bullets: [
      "Good fit for families, business travelers, and guests arriving with luggage",
      "Useful when you want a confirmed plan before the airport day",
      "Designed around Portland traffic patterns and PDX pickup realities",
      "Quote details should include flight number, bags, passengers, and special needs",
    ],
    localAngle:
      "This page is the main Portland airport transportation hub for travelers comparing scheduled shuttle service with rideshare, parking, rental cars, and public transit.",
  },
  "pdx-shuttle": {
    h2: "PDX shuttle planning for arrivals and departures at Portland International Airport",
    intro: [
      "A PDX Shuttle request usually starts with one simple need: get to or from Portland International Airport without guessing on timing. This page focuses specifically on airport-side logistics, including flight details, luggage loading, curbside coordination, and pickup windows.",
      "Departing passengers should think backward from the flight time. Domestic and international trips may need different buffers, and group size can change how early the vehicle needs to arrive. A private shuttle request gives the team enough context to recommend a plan instead of leaving timing to chance.",
      "Arriving passengers need a plan that accounts for real airport movement after landing. Baggage claim, walking distance, traveler mobility, and destination distance can all affect the best pickup timing. That is why the booking form asks for the flight number and special requests.",
    ],
    bullets: [
      "Best for travelers searching directly for PDX pickup or drop-off service",
      "Works for airport hotels, homes, offices, and regional transfers",
      "Flight-aware requests help reduce arrival-day confusion",
      "Private ride structure avoids unnecessary shared stops",
    ],
    localAngle:
      "PDX is the anchor point for this page, so internal links should point to airport shuttle, pricing, service areas, and contact pages.",
  },
  "pdx-shuttle-service": {
    h2: "What to expect from a professional PDX shuttle service",
    intro: [
      "PDX Shuttle Service should mean more than a vehicle showing up. A professional airport transfer depends on clear communication, route planning, passenger details, and a reservation process that captures the information needed to quote accurately.",
      "This service page is built for people comparing transportation providers. The most important questions are practical: will the service handle early flights, how much luggage can travel, how pickup is coordinated, whether the ride is private, and how availability is confirmed.",
      "PDX to Shuttle uses the quote request as the first step. The form does not pretend every route has the same price or timing. Instead, the request collects route, flight, passenger, luggage, and contact details so the final plan can match the actual airport trip.",
    ],
    bullets: [
      "Focuses on professional process, not just keyword matching",
      "Explains what details are needed before quote confirmation",
      "Supports private airport pickups, drop-offs, and business travel",
      "Links naturally to pricing, contact, and service-area information",
    ],
    localAngle:
      "Use this page for searchers evaluating the quality and reliability of the shuttle service before they request a quote.",
  },
  "portland-shuttle-service": {
    h2: "Portland shuttle service for more than the airport curb",
    intro: [
      "Portland Shuttle Service covers a broader intent than airport-only pages. Travelers may need transportation between neighborhoods, hotels, offices, venues, and PDX. The page should speak to route planning across the metro area without pretending every route is identical.",
      "A strong Portland shuttle experience depends on local context. Cross-town travel can be affected by bridge traffic, event schedules, weather, and peak commuting windows. For that reason, requests should include both exact pickup and destination details whenever possible.",
      "This page should support visitors who know they need a shuttle but have not yet chosen the exact service category. It should direct airport travelers to the PDX shuttle page, business travelers to corporate transportation, and private groups to private transportation.",
    ],
    bullets: [
      "Good umbrella page for Portland-area shuttle intent",
      "Useful for airport, hotel, business, family, and group travel needs",
      "Explains why route details matter in Portland",
      "Routes users to the most relevant service page",
    ],
    localAngle:
      "This is the broad Portland transportation page, so it should not duplicate the airport-only pages word for word.",
  },
  "shuttle-to-pdx": {
    h2: "Shuttle to PDX for flights that need a dependable departure plan",
    intro: [
      "A Shuttle to PDX page should focus on departures. The traveler is not just looking for a ride; they are trying to arrive at Portland International Airport early enough for check-in, baggage, security, and boarding without wasting the whole day waiting.",
      "Departure planning starts with the flight time, airline, pickup location, number of passengers, luggage, and whether anyone needs extra loading time. The right pickup window for a solo traveler in inner Portland may be different from a family leaving from Lake Oswego or a group leaving from a hotel.",
      "PDX to Shuttle treats outbound airport transportation as a scheduled trip. The quote request should be submitted with the date, time, pickup address, passenger count, luggage count, and flight number so the route can be planned with context.",
    ],
    bullets: [
      "Departure-focused content for travelers going to the airport",
      "Emphasizes pickup timing, luggage loading, and airport arrival buffers",
      "Supports early-morning and business-travel planning",
      "Links to pricing and contact for quote confirmation",
    ],
    localAngle:
      "This page should answer outbound-trip questions and avoid repeating arrival pickup language from the Shuttle from PDX page.",
  },
  "shuttle-from-pdx": {
    h2: "Shuttle from PDX for arrivals, guests, and post-flight transportation",
    intro: [
      "A Shuttle from PDX page should focus on what happens after the plane lands. The visitor may be tired, carrying bags, traveling with family, or arriving for a meeting. The transportation plan needs to account for baggage claim, airport exit timing, and the final destination.",
      "The most useful booking detail for an arrival is the flight number. It gives the team a way to plan around the arrival schedule and understand whether the pickup should be framed around baggage timing, hotel check-in, home dropoff, or business arrival.",
      "Private shuttle service from PDX is especially useful for travelers who do not want to manage rideshare pricing swings, multiple app pickups, or splitting a group across separate vehicles after landing.",
    ],
    bullets: [
      "Arrival-focused content for travelers leaving PDX",
      "Explains why flight number and baggage details matter",
      "Useful for visitors, families, business guests, and group arrivals",
      "Connects naturally to service areas and private transportation",
    ],
    localAngle:
      "This page should be distinct from outbound shuttle-to-PDX content by emphasizing landing, baggage, curbside coordination, and destination dropoff.",
  },
  "shuttle-to-portland": {
    h2: "Shuttle to Portland for visitors arriving through PDX and regional points",
    intro: [
      "Shuttle to Portland searches often come from visitors who are planning the last leg of a trip into the city. They may be arriving at PDX, coming from a nearby community, or organizing transportation for guests who need a clear route into Portland.",
      "This page should speak to visitor confidence: where the passenger is coming from, where they need to arrive, how many people are traveling, and whether luggage or timing constraints make private transportation a better choice.",
      "For hotels, offices, homes, and event destinations in Portland, a scheduled shuttle can remove uncertainty from the arrival plan. The quote request should include the exact destination and any timing requirements around check-in, meetings, or events.",
    ],
    bullets: [
      "Visitor-oriented page for transportation into Portland",
      "Useful for airport arrivals, hotel transfers, and hosted guests",
      "Highlights destination details instead of only airport pickup",
      "Encourages complete route information for accurate quotes",
    ],
    localAngle:
      "This page should support searches from visitors who care about reaching Portland, not only travelers focused on PDX itself.",
  },
  "shuttle-from-portland": {
    h2: "Shuttle from Portland for airport trips and regional departures",
    intro: [
      "Shuttle from Portland searches usually mean the traveler already knows the starting point. The next decision is how to get from a Portland address to PDX, a hotel, a venue, or another regional destination with enough structure around timing.",
      "For airport departures, the pickup plan should account for distance to PDX, time of day, passenger count, luggage, and airline schedule. For other private shuttle trips, destination details and any arrival deadlines are the most important pieces of information.",
      "This page should help Portland residents, hotel guests, office coordinators, and event planners understand when a scheduled private shuttle is a better fit than last-minute transportation.",
    ],
    bullets: [
      "Origin-focused page for rides beginning in Portland",
      "Covers airport transfers plus select private regional routes",
      "Emphasizes departure deadlines and route planning",
      "Guides users toward the booking form with complete trip details",
    ],
    localAngle:
      "This page is intentionally origin-based, giving it a different role from pages focused on arrival at Portland or pickup from PDX.",
  },
  "airport-transportation-portland": {
    h2: "Airport transportation in Portland for people comparing every option",
    intro: [
      "Airport Transportation Portland is a comparison-oriented search. The traveler may be weighing private shuttle service against rideshare, taxi, hotel shuttle, parking, rental car, or public transit. The page should help them choose based on timing, luggage, group size, comfort, and reliability.",
      "Private airport transportation is often the stronger choice when a trip has more moving parts: an early flight, several passengers, heavy bags, a business guest, or a destination outside the easiest rideshare zones.",
      "The goal is not to claim one option is always best. The goal is to explain when scheduled transportation creates value and when a quote request gives the traveler a clearer decision than guessing from a generic rate table.",
    ],
    bullets: [
      "Comparison page for broad airport transportation searches",
      "Explains tradeoffs among shuttle, rideshare, parking, and transit",
      "Positions private service around reliability and planning",
      "Supports internal links to airport shuttle, pricing, and blog comparisons",
    ],
    localAngle:
      "This page should be the most educational of the landing pages, helping Google see value beyond a keyword variation.",
  },
  "private-airport-shuttle-portland": {
    h2: "Private airport shuttle service for travelers who need direct routing",
    intro: [
      "Private Airport Shuttle Portland searches come from travelers who care about direct service, privacy, luggage space, and predictable coordination. This page should focus on the advantages of a private reservation rather than repeating general shuttle language.",
      "A private airport shuttle can be a good fit for families, executives, guests, groups with bags, travelers with mobility considerations, or anyone who wants one planned ride instead of coordinating multiple vehicles.",
      "The booking form should collect all details that affect the route and final quote. Passenger count, luggage, flight number, pickup and dropoff locations, and special requests help the team evaluate the best ride plan.",
    ],
    bullets: [
      "Private-service page for higher-intent airport transportation searches",
      "Emphasizes direct routing, comfort, luggage, and group coordination",
      "Avoids shared-ride claims unless real service details confirm them",
      "Strong internal fit with corporate and private transportation pages",
    ],
    localAngle:
      "This page is the clearest luxury/private intent page and should be used for travelers who value predictability over the lowest possible fare.",
  },
};

export const blogPostBodies: Record<
  string,
  {
    sections: Array<{ heading: string; body: string[] }>;
  }
> = {
  "best-transportation-to-pdx": {
    sections: [
      {
        heading: "Compare the real tradeoffs before choosing a ride",
        body: [
          "The best transportation to PDX depends on your flight time, luggage, budget, group size, and tolerance for uncertainty. A solo traveler leaving mid-day from inner Portland may have different needs than a family with bags leaving before sunrise or a corporate guest arriving for a meeting.",
          "Rideshare can be convenient for flexible trips, but pricing and pickup timing can shift. Parking can work for short trips, but longer stays add cost and require extra time for the garage or shuttle. Public transit can be affordable, but it may not fit heavy luggage, early flights, or door-to-door timing.",
        ],
      },
      {
        heading: "When a private airport shuttle makes sense",
        body: [
          "A private shuttle is usually worth considering when the trip has a firm schedule, multiple people, important luggage, or a destination that is easier to handle with direct service. The value is not only the ride; it is the planned pickup window, route clarity, and reduced last-minute decision making.",
          "For Portland travelers, PDX access can be affected by commute windows, weather, special events, and bridge or freeway delays. Sharing the flight number, pickup address, passenger count, and luggage details helps create a more realistic quote and pickup plan.",
        ],
      },
      {
        heading: "A simple decision framework",
        body: [
          "Choose transit when the schedule is flexible and bags are light. Choose parking when you are comfortable driving yourself and the trip is short enough for parking costs to stay reasonable. Choose rideshare when you need a quick option and can accept variable pickup and pricing.",
          "Choose a scheduled shuttle when predictability matters. That includes early departures, late arrivals, visiting relatives, business guests, and groups that should stay together from pickup to dropoff.",
        ],
      },
    ],
  },
  "how-early-should-you-arrive-at-pdx": {
    sections: [
      {
        heading: "Start with your airline, bags, and flight type",
        body: [
          "How early you should arrive at PDX depends on whether the flight is domestic or international, whether you are checking bags, how familiar you are with the airport, and how much buffer you want before boarding. The safest pickup plan works backward from the departure time instead of guessing from distance alone.",
          "Travelers with checked luggage, children, mobility needs, unfamiliar airlines, or peak travel dates should build in more time. A private shuttle request should include those details because the best pickup time is not the same for every passenger.",
        ],
      },
      {
        heading: "Why shuttle pickup timing should include a buffer",
        body: [
          "The drive to PDX can feel simple on a quiet day and very different during commute windows or bad weather. A planned shuttle pickup should leave room for loading luggage, route delays, airport curbside movement, check-in, and security.",
          "If you are unsure, request a quote with the flight number and preferred arrival window. That gives the transportation team enough context to discuss a realistic pickup time before the reservation is confirmed.",
        ],
      },
      {
        heading: "Details that change the pickup recommendation",
        body: [
          "Pickup timing can change when a traveler is leaving from outside the Portland core, traveling during rush hour, checking several bags, flying internationally, or moving with children or mobility equipment. None of those details are problems, but they do affect how much time should be protected.",
          "When submitting a booking request, include the airline, flight number, departure time, pickup address, passenger count, and luggage count. The more complete the request, the easier it is to avoid a rushed airport arrival.",
        ],
      },
    ],
  },
  "travel-tips-for-portland-visitors": {
    sections: [
      {
        heading: "Plan the airport-to-city leg before you land",
        body: [
          "Portland visitors often focus on hotels, food, events, and outdoor plans, but the first transportation decision happens at PDX. Knowing how you will get from the airport to your destination can make the arrival feel much smoother, especially after a long flight or with luggage.",
          "Before traveling, gather the destination address, arrival time, flight number, passenger count, and any hotel or meeting deadline. That information is useful whether you choose a private shuttle, rideshare, rental car, or transit.",
        ],
      },
      {
        heading: "Match transportation to the kind of trip",
        body: [
          "Visitors staying downtown may care most about a direct ride after baggage claim. Families may need luggage space and a calm pickup plan. Business travelers may want a reliable arrival experience for meetings or conferences. Groups may prefer one coordinated shuttle instead of several separate cars.",
          "A scheduled airport shuttle is not the only option in Portland, but it is often a strong fit when comfort, route certainty, and arrival timing matter more than improvising after landing.",
        ],
      },
      {
        heading: "Helpful visitor notes for PDX arrivals",
        body: [
          "Keep the hotel address, phone number, and check-in time handy before landing. If someone else is arranging the ride, make sure the passenger has the same pickup instructions and contact information so there is no confusion after baggage claim.",
          "Portland weather can change quickly, and event traffic can affect some routes into the city. A little extra planning around arrival time and luggage makes the first hour in Portland feel much easier.",
        ],
      },
    ],
  },
  "airport-shuttle-vs-uber": {
    sections: [
      {
        heading: "The difference is planning, not only price",
        body: [
          "Airport shuttle vs Uber is a practical comparison. App-based rides can be fast for simple trips, but the experience can vary by driver availability, surge pricing, pickup location, and vehicle size. A scheduled private shuttle is built around a confirmed request and airport-specific trip details.",
          "For one flexible traveler with light luggage, rideshare may be enough. For a family, business guest, early flight, late arrival, or group with bags, the value of a shuttle is the planning around timing, route, and capacity.",
        ],
      },
      {
        heading: "Questions to ask before choosing",
        body: [
          "Ask whether the ride needs to be private, whether everyone can fit in one vehicle, whether luggage space matters, whether arrival time is strict, and whether someone else is coordinating transportation for a guest. Those answers usually make the choice clearer.",
          "A private shuttle quote also gives travelers a chance to explain special requests before the trip. That can be more helpful than discovering a vehicle is too small or a pickup plan is unclear at the airport curb.",
        ],
      },
      {
        heading: "How to avoid airport pickup surprises",
        body: [
          "If choosing rideshare, check the app close to travel time and confirm that the vehicle size fits the group and luggage. If choosing a scheduled shuttle, submit the details early enough for the provider to confirm availability and route expectations.",
          "The better option is the one that fits the trip. A flexible solo ride and a scheduled group transfer are different transportation problems, so they should not be judged by price alone.",
        ],
      },
    ],
  },
  "corporate-airport-transportation": {
    sections: [
      {
        heading: "Corporate airport travel needs clear coordination",
        body: [
          "Corporate airport transportation in Portland is about more than moving someone from PDX to an office or hotel. It supports first impressions, meeting schedules, visitor comfort, and the practical details that help a business trip start well.",
          "Coordinators should provide arrival and departure times, flight numbers, passenger names, luggage expectations, destination details, and any timing constraints around meetings, conferences, or hotel check-in.",
        ],
      },
      {
        heading: "Where private shuttle service helps companies",
        body: [
          "A private shuttle can be useful for executives, client visits, conference groups, interview candidates, and staff traveling together. It reduces the need for each traveler to solve transportation independently and gives the host a clearer plan.",
          "For recurring business travel, consistent request details make future reservations easier. Keep pickup points, preferred timing buffers, passenger counts, and billing or communication preferences organized before submitting the request.",
        ],
      },
      {
        heading: "What coordinators should confirm before travel day",
        body: [
          "Confirm the passenger names, flight numbers, arrival or departure times, luggage expectations, pickup contact, and final destination. If the group is attending a meeting or event, include the arrival deadline rather than only the flight time.",
          "A good corporate airport transportation plan should make the visitor feel expected. Clear instructions and a scheduled ride reduce friction for both the traveler and the person coordinating the trip.",
        ],
      },
    ],
  },
};

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

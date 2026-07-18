export const siteConfig = {
  name: "Guruvayur Cabs",
  tagline: "Safe. Reliable. Comfortable.",
  phone: "+91 98 09 80 08 00",
  phoneHref: "tel:+919809800800",
  whatsappHref: "https://wa.me/919809800800",
  email: "info@guruvayurcabs.com",
  address: "Guruvayur, Kerala, India",
  socials: {
    facebook: "https://facebook.com/guruvayurcabs",
    instagram: "https://instagram.com/guruvayurcabs",
    whatsapp: "https://wa.me/919809800800",
  },
};

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Blog", href: "/blog" },
  { label: "Contact Us", href: "/contact" },
];

export const heroFeatures = [
  { icon: "ShieldCheck", label: "Clean & Sanitized Cabs" },
  { icon: "UserRound", label: "Professional Drivers" },
  { icon: "Headset", label: "24/7 Customer Support" },
];

export const popularServices = [
  {
    icon: "Car",
    title: "Guruvayur Taxi",
    description: "Local & City Rides",
  },
  {
    icon: "PlaneTakeoff",
    title: "Airport Taxi",
    description: "Timely Airport Transfers",
  },
  {
    icon: "Camera",
    title: "Guruvayur Sightseeing Taxi",
    description: "Explore Kerala",
  },
  {
    icon: "Landmark",
    title: "Guruvayur Temple Taxi",
    description: "Temple Visits",
  },
  {
    icon: "Gem",
    title: "Wedding Transportation",
    description: "Make it Special",
  },
  {
    icon: "MapPinned",
    title: "Nalambalam Trip",
    description: "Four Temple Pilgrimage Circuit",
  },
];

export const whyChooseUs = [
  {
    icon: "Timer",
    title: "On-time Guarantee",
    description: "We value your time",
  },
  {
    icon: "ClipboardList",
    title: "Transparent Pricing",
    description: "No hidden charges",
  },
  {
    icon: "CarFront",
    title: "Well Maintained Cars",
    description: "Clean & comfortable",
  },
  {
    icon: "Headset",
    title: "24/7 Support",
    description: "We are always here",
  },
];

export const fleet = [
  {
    id: "sedan",
    category: "Sedan",
    name: "Sedan",
    seats: "4 Seater",
    image: "/images/fleet/sedan.png",
    perKmRate: 18,
    extraHourRate: 100,
    fullDay: { hours: 9, km: 100, price: 3000 },
  },
  {
    id: "suv",
    category: "SUV",
    name: "SUV",
    seats: "6 Seater",
    image: "/images/fleet/suv.png",
    perKmRate: 16,
  },
  {
    id: "ertiga",
    category: "MUV",
    name: "Ertiga",
    seats: "6 Seater",
    image: "/images/fleet/ertiga.png",
    perKmRate: 20,
    extraHourRate: 100,
    fullDay: { hours: 9, km: 100, price: 3300 },
  },
  {
    id: "innova",
    category: "MUV",
    name: "Innova",
    seats: "6-7 Seater",
    image: "/images/fleet/innova.png",
    perKmRate: 25,
    extraHourRate: 200,
    fullDay: { hours: 9, km: 100, price: 4000 },
  },
  {
    id: "tempo",
    category: "Tempo Traveller",
    name: "Tempo Traveller",
    seats: "12-17 Seater",
    image: "/images/fleet/tempo.png",
    perKmRate: 24,
  },
];

export const quickLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Contact Us", href: "/contact" },
];

export const serviceListings = [
  {
    category: "Pilgrimage Tour",
    icon: "Landmark",
    slug: "nalambalam-tour",
    title: "Nalambalam Tour",
    description:
      "Visit all four sacred Nalambalam temples in a single day trip from Guruvayur, with a comfortable AC cab and driver for the entire circuit.",
    detail:
      "The Nalambalam circuit — Thriprayar, Thrichambaram, Moozhikkulam and Kudalmanikyam — is a popular one-day pilgrimage from Guruvayur. We provide a car and driver for the full route, timed so you can comfortably visit all four temples in a single day. The fare below is fixed for the entire circuit — no meter, no surprises at the end of the day.",
    fares: { Sedan: 3700, Ertiga: 4000, Innova: 5000, SUV: 4500, "Tempo Traveller": 9000 },
    features: [
      { icon: "Landmark", label: "All 4 Nalambalam Temples" },
      { icon: "Timer", label: "Full Day Circuit" },
      { icon: "ShieldCheck", label: "Fixed Fare, No Meter" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Outstation Transfer",
    icon: "MapPinned",
    slug: "guruvayur-to-trichur",
    title: "Guruvayur to Trichur Taxi",
    description:
      "Quick one-way transfer from Guruvayur to Thrissur (Trichur) — for the railway station, hospital visits, shopping, or a day into the city.",
    detail:
      "Thrissur (Trichur) is about 30 km from Guruvayur and one of our most frequently booked short transfers. Whether you're headed to the railway station, a hospital appointment, or into the city for shopping, we run this route daily. The fare below is a fixed one-way fare, so there's nothing to negotiate at drop-off.",
    fares: { Sedan: 1200, Ertiga: 1300, Innova: 1700, SUV: 1500, "Tempo Traveller": 3500 },
    features: [
      { icon: "MapPin", label: "Direct One-Way Transfer" },
      { icon: "Receipt", label: "Fixed Fare, No Hidden Charges" },
      { icon: "CarFront", label: "AC Vehicles" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Outstation Transfer",
    icon: "MapPinned",
    slug: "guruvayur-to-shornur",
    title: "Guruvayur to Shornur Taxi",
    description:
      "Reliable one-way transfer from Guruvayur to Shornur Junction, timed for onward train connections.",
    detail:
      "Shornur Junction is a major railway hub, and many of our customers use this route to catch long-distance trains. We build in buffer time so you reach the station comfortably ahead of departure, even during peak traffic. The fare below is a fixed one-way fare.",
    fares: { Sedan: 1800, Ertiga: 2000, Innova: 2500, SUV: 2200, "Tempo Traveller": 4000 },
    features: [
      { icon: "MapPin", label: "Direct One-Way Transfer" },
      { icon: "Timer", label: "Timed for Train Connections" },
      { icon: "CarFront", label: "AC Vehicles" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Outstation Transfer",
    icon: "MapPinned",
    slug: "guruvayur-to-kuttipuram-railway-station",
    title: "Guruvayur to Kuttipuram Railway Station Taxi",
    description:
      "One-way transfer from Guruvayur to Kuttipuram Railway Station, timed for your train connection.",
    detail:
      "Kuttipuram is a well-connected railway station on the Shoranur–Mangalore line, often used by our customers making onward rail connections. We time pickups with enough buffer to reach comfortably ahead of departure. The fare below is a fixed one-way fare.",
    fares: { Sedan: 1500, Ertiga: 1700, Innova: 2200, SUV: 1800, "Tempo Traveller": 4000 },
    features: [
      { icon: "MapPin", label: "Direct One-Way Transfer" },
      { icon: "Timer", label: "Timed for Train Connections" },
      { icon: "CarFront", label: "AC Vehicles" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Airport Transfer",
    icon: "PlaneTakeoff",
    slug: "guruvayur-to-cochin-airport-taxi",
    title: "Guruvayur to Cochin Airport Taxi",
    description:
      "Comfortable one-way transfer from Guruvayur to Cochin International Airport, with fixed fares and flight-timed pickups.",
    detail:
      "Cochin International Airport (COK) is one of the busiest routes we run from Guruvayur, whether it's an early departure or a late-night arrival. The fare below is a fixed one-way fare; for travel beyond this route, our standard per-km rates apply (Sedan ₹18/km, Ertiga ₹20/km, Innova ₹25/km).",
    fares: { Sedan: 3200, Ertiga: 3500, Innova: 4300, SUV: 4000, "Tempo Traveller": 7000 },
    features: [
      { icon: "RadioTower", label: "Flight Tracking" },
      { icon: "Timer", label: "Timely Transfers" },
      { icon: "CarFront", label: "Comfortable Ride" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
];

export const footerServices = [
  { label: "Airport Transfers", href: "/services/airport-transfers" },
  { label: "Local Taxi", href: "/services/local-taxi" },
  { label: "Outstation Trips", href: "/services/outstation" },
  { label: "Pilgrimage Tours", href: "/services/pilgrimage" },
  { label: "Wedding Transportation", href: "/services/wedding" },
];

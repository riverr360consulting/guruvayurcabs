export const siteConfig = {
  name: "Guruvayur Cabs",
  tagline: "Safe. Reliable. Comfortable.",
  phone: "+91 90 72 72 72 72",
  phoneHref: "tel:+919072727272",
  whatsappHref: "https://wa.me/919072727272",
  email: "info@guruvayurcabs.com",
  address: "Guruvayur, Kerala, India",
  socials: {
    facebook: "https://facebook.com/guruvayurcabs",
    instagram: "https://instagram.com/guruvayurcabs",
    whatsapp: "https://wa.me/919072727272",
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
    icon: "Plane",
    title: "Guruvayur Airport Taxi",
    description: "Timely Airport Transfers",
  },
  {
    icon: "PlaneTakeoff",
    title: "Guruvayur to Kochi Airport Taxi",
    description: "Hassle-free Transfers",
  },
  {
    icon: "PlaneLanding",
    title: "Kochi Airport to Guruvayur Taxi",
    description: "Comfortable & Safe",
  },
  {
    icon: "PlaneTakeoff",
    title: "Guruvayur to Calicut Airport Taxi",
    description: "Smooth & Reliable",
  },
  {
    icon: "Landmark",
    title: "Guruvayur Temple Taxi",
    description: "Temple Visits",
  },
  {
    icon: "Camera",
    title: "Guruvayur Sightseeing Taxi",
    description: "Explore Kerala",
  },
  {
    icon: "Landmark",
    title: "Kerala Pilgrimage Taxi",
    description: "Holy & Comfortable",
  },
  {
    icon: "Gem",
    title: "Wedding Transportation",
    description: "Make it Special",
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
    fares: { Sedan: 3700, Ertiga: 4000, Innova: 5000 },
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
    fares: { Sedan: 1200, Ertiga: 1300, Innova: 1700 },
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
    fares: { Sedan: 1800, Ertiga: 2000, Innova: 2500 },
    features: [
      { icon: "MapPin", label: "Direct One-Way Transfer" },
      { icon: "Timer", label: "Timed for Train Connections" },
      { icon: "CarFront", label: "AC Vehicles" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "One Way Transfer",
    icon: "TrainFront",
    slug: "guruvayur-station-pickup",
    title: "Pick up from Guruvayur Station to Your Hotel",
    description:
      "Start your journey stress-free with our reliable pickup service from Guruvayur Station. Our professional drivers ensure a comfortable ride to your hotel with hassle-free transfers and timely service.",
    detail:
      "Arriving by train at Guruvayur Station? Our driver will be waiting at the platform exit with a name board, ready to take you straight to your hotel, homestay or the temple. No haggling, no waiting around for an auto — just a clean, air-conditioned car and a driver who knows every hotel and lodge in town. Fares are fixed in advance, so there are no surprises at drop-off. This is also the most popular first leg of a longer Kerala trip for many of our customers, who go on to book us for temple visits, sightseeing, or an onward airport transfer.",
    features: [
      { icon: "MapPin", label: "Doorstep Pickup from Guruvayur Station" },
      { icon: "Receipt", label: "No Hidden Charges" },
      { icon: "ShieldCheck", label: "Safe & Comfortable" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Airport Transfer",
    icon: "PlaneTakeoff",
    slug: "guruvayur-to-kochi-airport-taxi",
    title: "Guruvayur to Kochi Airport Taxi",
    description:
      "On-time and comfortable transfers from Guruvayur to Kochi International Airport. We track your flight and ensure you reach the airport well in advance.",
    detail:
      "Kochi International Airport (COK) is roughly a 1.5–2 hour drive from Guruvayur depending on traffic, and our drivers know the fastest routes at any time of day or night. We track your flight details so pickup and drop-off timing account for early arrivals, delays, or last-minute schedule changes — you'll never be left waiting or rushing. Whether you're catching an early morning international flight or landing late at night after a long trip, we build in buffer time so you reach with plenty to spare.",
    features: [
      { icon: "Timer", label: "Timely Transfers" },
      { icon: "RadioTower", label: "Flight Tracking" },
      { icon: "CarFront", label: "Comfortable Ride" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Airport Transfer",
    icon: "PlaneTakeoff",
    slug: "guruvayur-to-calicut-airport-taxi",
    title: "Guruvayur to Calicut Airport Taxi",
    description:
      "Enjoy a smooth and comfortable journey from Guruvayur to Calicut International Airport with our trusted taxi service. Safe rides with experienced drivers.",
    detail:
      "Calicut International Airport (CCJ) is a popular gateway for pilgrims and travellers heading to or from Guruvayur, and it's a slightly shorter drive than Kochi for many routes. Our experienced drivers handle this stretch daily, so they know the road conditions, shortcuts, and the best times to travel to avoid peak traffic. Cars are cleaned before every trip and checked for comfort essentials — so whether it's an early departure or a late-night arrival, you're picked up and dropped exactly on schedule.",
    features: [
      { icon: "ShieldCheck", label: "Safe & Reliable" },
      { icon: "UserRound", label: "Experienced Drivers" },
      { icon: "CarFront", label: "Clean Vehicles" },
      { icon: "Headset", label: "24/7 Customer Support" },
    ],
  },
  {
    category: "Local Transfer",
    icon: "Landmark",
    slug: "guruvayur-temple-taxi",
    title: "Guruvayur Temple Taxi Service",
    description:
      "Local sightseeing, temple visits and outstation trips from Guruvayur. Choose from a wide range of well-maintained vehicles and experienced drivers.",
    detail:
      "Beyond the Sree Krishna Temple itself, there's plenty worth seeing around Guruvayur — from the elephant sanctuary at Punnathur Kotta to nearby beaches and backwaters. Our local taxi service is built for exactly this kind of flexible day-out: hourly or half-day hire, a driver who can suggest a route based on how much time you have, and vehicles sized for everything from a couple to a full family or small group. It's also the easiest way to combine a temple visit with a short outstation trip, without arranging separate transport for each leg.",
    features: [
      { icon: "MapPinned", label: "Local & Outstation Trips" },
      { icon: "Landmark", label: "Temple Visit Support" },
      { icon: "CarFront", label: "Well Maintained Vehicles" },
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

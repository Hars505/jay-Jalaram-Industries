import facilityMachining from "@/assets/facility-machining.jpg";
import facilityShopfloor from "@/assets/facility-shopfloor.jpg";
import facilityMilling from "@/assets/facility-milling.jpg";
import facilityInspection from "@/assets/facility-inspection.jpg";

export const company = {
  name: "Jay Jalaram Industries",
  tagline: "Precision, machined since 1983",
  established: 1983,
  incorporated: 2011,
  employees: 10,
  type: "Proprietorship",
  business: "Precision Parts Manufacturer",
  email: "jayjalaramindustries@gmail.com",
  landline: "079-25627908",
  address: {
    line1: "I-9, Ravi Estate, Nr. Torrent Power Sub Station",
    line2: "Dudheshwar Road, Dudheshwar",
    city: "Ahmedabad — 380004",
    state: "Gujarat, India",
  },
  contacts: [
    { name: "Vasantbhai S. Panchal", phone: "9898605252" },
    { name: "Viralbhai P. Panchal", phone: "9558822639" },
  ],
  maps: {
    query: "I-9 Ravi Estate, Dudheshwar Road, Dudheshwar, Ahmedabad 380004, Gujarat",
    embedUrl:
      "https://www.google.com/maps?q=I-9%20Ravi%20Estate%2C%20Dudheshwar%20Road%2C%20Ahmedabad%20380004&z=16&output=embed",
    directionsUrl:
      "https://www.google.com/maps/dir/?api=1&destination=I-9%20Ravi%20Estate%2C%20Dudheshwar%20Road%2C%20Ahmedabad%20380004",
    placeUrl:
      "https://www.google.com/maps/search/?api=1&query=I-9%20Ravi%20Estate%2C%20Dudheshwar%20Road%2C%20Ahmedabad%20380004",
  },
} as const;

export const services = [
  "Precision turned parts",
  "Gears, worms & worm shafts",
  "Shafts & bushes",
  "Machine tool components",
  "Component cleaning machines",
  "Build to print (send drawing)",
  "Something else",
] as const;


export const values = [
  { title: "Commitment", body: "Every job is owned end to end, from first cut to final inspection." },
  { title: "Customer Value", body: "Parts priced honestly and delivered to the tolerance you specified." },
  { title: "Teamwork", body: "A tight ten-person shop where machinists and inspectors work as one." },
  { title: "Professionalism", body: "Documented processes, repeatable setups, traceable results." },
  { title: "Flexibility", body: "Build-to-print, one-off prototypes or repeat batches — we adapt." },
  { title: "Social Responsibility", body: "Safe working conditions, fair practice, responsible waste handling." },
] as const;

export const capabilities = [
  {
    title: "Precision Turned Parts",
    body: "High-precision components down to 10 mm bar diameter, held to tight tolerances.",
    span: "lg",
  },
  {
    title: "Machine Tool Components",
    body: "Tool-space components and exactitude machine tool accessories since 2005.",
    span: "sm",
  },
  {
    title: "Gears, Worms & Worm Shafts",
    body: "Spur gears, twin gears, worm gears and worm shafts for automobile and engineering firms.",
    span: "md",
  },
  {
    title: "Shafts & Bushes",
    body: "Ground shafts, stepped pins, flanged bushes and splined hubs.",
    span: "sm",
  },
  {
    title: "Component Cleaning Machines",
    body: "In-built washing, degreasing and hot-air blowing for mid-size and heavy components.",
    span: "md",
  },
  {
    title: "Build to Print",
    body: "Send a drawing. We handle process planning, tooling, machining and inspection.",
    span: "sm",
  },
] as const;

export const stats = [
  { value: 1983, label: "Established in", highlight: "Ahmedabad", suffix: "" },
  { value: 2011, label: "Incorporated", suffix: "" },
  { value: 20, label: "Machines on the floor", suffix: "+" },
  { value: 10, label: "Skilled team members", suffix: "" },
] as const;

export const clients = [
  "Harsha Engineering Ltd., Ahmedabad",
  "Samarpan Fabricator Ltd., Vadodara",
  "CPS Cash Processing Solution Pvt. Ltd., Haryana",
  "Aastha Tools Pvt. Ltd., Ahmedabad",
  "Pal Shell Cast Pvt. Ltd., Ahmedabad",
  "Pooja Plast Pvt. Ltd., Ahmedabad",
] as const;

export const facility = [
  { src: facilityShopfloor, caption: "Machining area", note: "Haas VF-2 and Leadwell VMC bays" },
  { src: facilityMachining, caption: "Parts machining", note: "Flood-coolant milling under fixture" },
  { src: facilityMilling, caption: "Profile milling", note: "Pocketing on the CNC bed" },
  { src: facilityInspection, caption: "Parts checking area", note: "Dial-indicator inspection on surface plate" },
] as const;

export const timeline = [
  { year: "1983", title: "The shop opens", body: "Jay Jalaram Industries starts machining in Dudheshwar, Ahmedabad." },
  { year: "2005", title: "Tool-space work begins", body: "We start supplying tool-space and machine tool components." },
  { year: "2011", title: "Incorporated", body: "Formal incorporation, plus the Leadwell V40 CNC milling machine." },
  { year: "2020", title: "Haas VF-2 installed", body: "USA-built VMC widens the envelope to 762 × 508 × 405 mm." },
  { year: "2024", title: "Rotary grinding added", body: "Pinnacle rotary surface grinder, Ø1000 × 200." },
] as const;

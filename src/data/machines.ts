export type MachineGroup = {
  category: string;
  blurb: string;
  units: { name: string; detail: string; year?: string }[];
};

export const machineGroups: MachineGroup[] = [
  {
    category: "CNC Milling",
    blurb: "Three vertical machining centres covering small precision work up to 1000 mm travel.",
    units: [
      { name: "Leadwell V40 — Taiwan", detail: "1000 × 500 × 500 mm", year: "2011" },
      { name: "Haas VF-2 — USA", detail: "762 × 508 × 405 mm", year: "2020" },
      { name: "BFW HSTC3035 — Bangalore", detail: "300 × 300 × 300 mm", year: "2008" },
    ],
  },
  {
    category: "Lathes (4.5\")",
    blurb: "Four conventional lathes for turning, facing and threading.",
    units: [
      { name: "Honest — Rajkot", detail: "4.5\" centre lathe", year: "2008" },
      { name: "Honest — Rajkot", detail: "4.5\" centre lathe", year: "2009" },
      { name: "Orient — Rajkot", detail: "4.5\" centre lathe", year: "2011" },
      { name: "Orient — Rajkot", detail: "4.5\" centre lathe", year: "2008" },
    ],
  },
  {
    category: "Surface Grinding",
    blurb: "Flat ground faces and parallelism on hardened components.",
    units: [
      { name: "Solar — Rajkot", detail: "18\" × 8\" table", year: "2007" },
      { name: "TOS (hydraulic) — Czechoslovakia", detail: "24\" × 8\" table" },
    ],
  },
  {
    category: "Centreless Grinding",
    blurb: "High-volume diameter grinding on shafts and pins.",
    units: [
      { name: "Solar — Rajkot", detail: "3\" capacity", year: "2008" },
      { name: "Laxman Kadava — Rajkot", detail: "2\" capacity", year: "2011" },
      { name: "TOS (hydraulic dressing) — Czechoslovakia", detail: "1\" capacity" },
    ],
  },
  {
    category: "Cylindrical Grinding",
    blurb: "Between-centres grinding for concentric diameters.",
    units: [{ name: "John Shipman — England", detail: "3\" × 12\" capacity" }],
  },
  {
    category: "Rotary Surface Grinding",
    blurb: "Large-diameter rotary table grinding, our newest addition.",
    units: [{ name: "Pinnacle grinding machine", detail: "Ø1000 × 200", year: "2024" }],
  },
  {
    category: "Conventional Milling",
    blurb: "Semi-automatic vertical mills for fixtures and secondary operations.",
    units: [{ name: "Kearney & Trecker (vertical)", detail: "3 machines, semi-auto" }],
  },
  {
    category: "Drilling & Sawing",
    blurb: "Support operations that keep jobs moving between setups.",
    units: [
      { name: "Pillar drill", detail: "3/4\" capacity", year: "2007" },
      { name: "Pillar drill", detail: "3/4\" capacity", year: "2011" },
      { name: "NU-TECH circular hacksaw", detail: "8\" blade" },
      { name: "Hand presses", detail: "5 units" },
    ],
  },
];

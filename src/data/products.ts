import wormShaft from "@/assets/product-worm-shaft.jpg";
import leadScrew from "@/assets/product-lead-screw.jpg";
import splineRoller from "@/assets/product-spline-roller.jpg";
import longShaft from "@/assets/product-long-shaft.jpg";
import flangedBush from "@/assets/product-flanged-bush.jpg";
import precisionGear from "@/assets/product-precision-gear.jpg";
import splinedHub from "@/assets/product-splined-hub.jpg";
import spurGear from "@/assets/product-spur-gear.jpg";
import steppedPin from "@/assets/product-stepped-pin.jpg";
import mountBlock from "@/assets/product-mount-block.jpg";

export const productCategories = ["All", "Gears", "Shafts", "Bushes & Hubs", "Rollers", "Blocks"] as const;
export type ProductCategory = (typeof productCategories)[number];

export type Product = {
  name: string;
  category: Exclude<ProductCategory, "All">;
  spec: string;
  src: string;
};

export const products: Product[] = [
  { name: "Worm shaft", category: "Shafts", spec: "Ground worm shaft with bronze collars", src: wormShaft },
  { name: "Multi-start lead screw", category: "Shafts", spec: "Stacked thread form, hardened & ground", src: leadScrew },
  { name: "Spline roller assembly", category: "Rollers", spec: "Knurled roller on ground shaft ends", src: splineRoller },
  { name: "Long precision shaft", category: "Shafts", spec: "Slender shaft, centreless ground", src: longShaft },
  { name: "Flanged bush", category: "Bushes & Hubs", spec: "Square flange, bored and reamed", src: flangedBush },
  { name: "Fine-pitch gear", category: "Gears", spec: "High tooth count disc gear, black oxide", src: precisionGear },
  { name: "Splined hub", category: "Bushes & Hubs", spec: "Internal spline, hardened bore", src: splinedHub },
  { name: "Spur gear", category: "Gears", spec: "Broached keyway, machined tooth flank", src: spurGear },
  { name: "Stepped pin", category: "Shafts", spec: "Multi-diameter pin with hex end", src: steppedPin },
  { name: "Mounting block", category: "Blocks", spec: "Milled block, drilled and faced", src: mountBlock },
];

import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { products, productCategories, type ProductCategory } from "@/data/products";
import { SectionHeading, Reveal } from "@/components/site/motion-primitives";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/products")({
  head: () => ({
    meta: [
      { title: "Products — Gears, Shafts & Bushes | Jay Jalaram Industries" },
      {
        name: "description",
        content:
          "Precision machined gears, worm shafts, lead screws, bushes and splined hubs manufactured in Ahmedabad since 1983.",
      },
      { property: "og:title", content: "Products — Jay Jalaram Industries" },
      {
        property: "og:description",
        content: "Precision machined gears, shafts, bushes and hubs, built to print.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/products" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/products" }],
  }),
  component: ProductsPage,
});

function ProductsPage() {
  const [active, setActive] = useState<ProductCategory>("All");
  const visible = active === "All" ? products : products.filter((p) => p.category === active);

  return (
    <div className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <SectionHeading
        eyebrow="Catalogue"
        title="Parts we machine"
        body="A sample of components running through the shop — every one built to a customer drawing."
      />

      <Reveal delay={0.1} className="mt-10">
        <div className="flex flex-wrap gap-2">
          {productCategories.map((cat) => {
            const isActive = cat === active;
            return (
              <button
                key={cat}
                type="button"
                onClick={() => setActive(cat)}
                className={cn(
                  "relative rounded-full border px-4 py-2 font-display text-xs tracking-wide transition-colors",
                  isActive
                    ? "border-amber/60 text-background"
                    : "border-border text-muted-foreground hover:border-amber/40 hover:text-foreground",
                )}
              >
                {isActive && (
                  <motion.span
                    layoutId="product-filter-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-amber"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                {cat}
              </button>
            );
          })}
        </div>
      </Reveal>

      <motion.div layout className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((product) => (
            <motion.article
              key={product.name}
              layout
              initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, scale: 0.96 }}
              transition={{ duration: 0.45, ease: [0.22, 0.8, 0.2, 1] }}
              className="group overflow-hidden rounded-lg border border-border bg-card transition-colors hover:border-amber/50"
            >
              <div className="aspect-4/3 overflow-hidden">
                <img
                  src={product.src}
                  alt={product.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="p-5">
                <p className="text-eyebrow">{product.category}</p>
                <h3 className="mt-2 font-display text-lg font-semibold">{product.name}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{product.spec}</p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}

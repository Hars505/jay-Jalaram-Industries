import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence, useScroll, useTransform, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Cog, Ruler, Factory } from "lucide-react";

import heroImage from "@/assets/hero-cnc.jpg";
import capTurned from "@/assets/cap-turned-parts.jpg";
import capMachineTool from "@/assets/cap-machine-tool.jpg";
import capGears from "@/assets/cap-gears.jpg";
import capShafts from "@/assets/cap-shafts-bushes.jpg";
import capCleaning from "@/assets/cap-cleaning-machine.jpg";
import capPrint from "@/assets/cap-build-to-print.jpg";
import { company, capabilities, stats, clients, facility } from "@/data/company";

const capabilityImages: Record<string, string> = {
  "Precision Turned Parts": capTurned,
  "Machine Tool Components": capMachineTool,
  "Gears, Worms & Worm Shafts": capGears,
  "Shafts & Bushes": capShafts,
  "Component Cleaning Machines": capCleaning,
  "Build to Print": capPrint,
};

import {
  Reveal,
  CountUp,
  MagneticButton,
  Marquee,
  SectionHeading,
  SectionReveal,
} from "@/components/site/motion-primitives";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Jay Jalaram Industries — Precision Machining, Ahmedabad" },
      {
        name: "description",
        content:
          "Precision parts manufacturer in Ahmedabad since 1983. CNC milled and ground gears, worm shafts, lead screws, bushes and component cleaning machines, built to print.",
      },
      { property: "og:title", content: "Jay Jalaram Industries — Precision Machining since 1983" },
      {
        property: "og:description",
        content:
          "CNC milling, turning and grinding for gears, shafts and bushes — built to print in Ahmedabad, Gujarat.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: company.name,
          description:
            "Precision parts manufacturer specialising in CNC milled and ground gears, shafts and bushes.",
          telephone: company.landline,
          email: company.email,
          foundingDate: String(company.established),
          address: {
            "@type": "PostalAddress",
            streetAddress: `${company.address.line1}, ${company.address.line2}`,
            addressLocality: "Ahmedabad",
            postalCode: "380004",
            addressRegion: "Gujarat",
            addressCountry: "IN",
          },
          openingHours: "Mo-Sa 09:00-19:00",
        }),
      },
    ],
  }),
  component: Home,
});

const spanClass: Record<string, string> = {
  lg: "md:col-span-3 md:row-span-2",
  md: "md:col-span-3",
  sm: "md:col-span-2",
};

const HERO_WORDS = ["print.", "spec.", "drawing.", "tolerance."];

function HeadlineWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <>
      {text.split(" ").map((word, i) => (
        <motion.span
          key={`${word}-${i}`}
          initial={{ opacity: 0, y: "0.5em", filter: "blur(8px)" }}
          animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
          transition={{
            duration: 0.75,
            delay: delay + i * 0.08,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block whitespace-pre"
        >
          {word}{" "}
        </motion.span>
      ))}
    </>
  );
}

function Home() {
  const heroRef = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const [wordIndex, setWordIndex] = useState(0);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "20%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, reduce ? 1 : 1.14]);
  const gridY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-10%"]);
  const glowY = useTransform(scrollYProgress, [0, 1], ["0%", reduce ? "0%" : "-28%"]);
  const copyY = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -70]);
  const copyOpacity = useTransform(scrollYProgress, [0, 0.7], [1, reduce ? 1 : 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.2], [1, 0]);

  useEffect(() => {
    if (reduce) return;
    const id = setInterval(
      () => setWordIndex((i) => (i + 1) % HERO_WORDS.length),
      2600,
    );
    return () => clearInterval(id);
  }, [reduce]);

  return (
    <>
      {/* HERO */}
      <section
        ref={heroRef}
        className="relative isolate flex min-h-[86svh] items-end overflow-hidden sm:min-h-[92vh]"
      >
        <motion.img
          src={heroImage}
          alt="CNC spindle cutting a steel component under amber light"
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{ y: imgY, scale: imgScale }}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="absolute inset-0 -z-20 h-full w-full object-cover object-[62%_38%] sm:object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-background via-background/85 to-background/40 sm:via-background/80 sm:to-background/30" />
        <motion.div
          style={{ y: gridY }}
          className="grid-blueprint absolute inset-0 -z-10 opacity-40"
        />
        <motion.div
          style={{ y: glowY }}
          aria-hidden
          className="pointer-events-none absolute -right-24 top-1/4 -z-10 h-72 w-72 rounded-full bg-amber/20 blur-[100px] sm:h-96 sm:w-96"
        />

        <motion.div
          style={{ opacity: copyOpacity, y: copyY }}
          className="mx-auto w-full max-w-7xl px-5 pb-16 pt-28 sm:px-8 sm:pb-24 sm:pt-40"
        >
          <motion.p
            initial={{ opacity: 0, x: -14 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-eyebrow"
          >
            Ahmedabad, Gujarat · Est. {company.established}
          </motion.p>

          <h1 className="mt-5 max-w-4xl font-display text-4xl font-semibold leading-[0.98] tracking-tight sm:text-6xl lg:text-7xl">
            <HeadlineWords text="Precision parts," delay={0.15} />
            <span className="block text-amber">
              <HeadlineWords text="machined to your" delay={0.35} />
              <span className="relative inline-grid overflow-hidden align-bottom">
                <AnimatePresence mode="popLayout" initial={false}>
                  <motion.span
                    key={HERO_WORDS[wordIndex]}
                    initial={{ opacity: 0, y: "0.7em", filter: "blur(6px)" }}
                    animate={{ opacity: 1, y: "0em", filter: "blur(0px)" }}
                    exit={{ opacity: 0, y: "-0.7em", filter: "blur(6px)" }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="inline-block"
                  >
                    {HERO_WORDS[wordIndex]}
                  </motion.span>
                </AnimatePresence>
              </span>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            Gears, worm shafts, lead screws, bushes and cleaning machines — CNC milled,
            turned and ground on a twenty-machine floor run by a ten-person team.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="mt-9 flex flex-wrap items-center gap-4"
          >
            <MagneticButton
              href="/contact"
              className="bg-amber text-background shadow-[0_0_40px_-12px_var(--amber)] hover:bg-amber-soft"
            >
              Send us a drawing <ArrowRight className="h-4 w-4" />
            </MagneticButton>
            <MagneticButton
              href="/products"
              className="border border-border bg-panel/60 text-foreground backdrop-blur hover:border-amber/60"
            >
              See the parts
            </MagneticButton>
          </motion.div>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="pointer-events-none absolute bottom-5 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 sm:flex"
        >
          <span className="text-[0.65rem] uppercase tracking-[0.3em] text-muted-foreground">
            Scroll
          </span>
          <motion.span
            animate={reduce ? {} : { y: [0, 10, 0], opacity: [1, 0.35, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-gradient-to-b from-amber to-transparent"
          />
        </motion.div>
      </section>

      {/* STATS */}
      <SectionReveal className="border-y border-border bg-panel/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-px px-5 sm:px-8 lg:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.06} className="py-10">
              <p className="font-display text-4xl font-semibold text-amber sm:text-5xl">
                <CountUp to={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </SectionReveal>

      {/* CAPABILITIES BENTO */}
      <SectionReveal className="mx-auto max-w-7xl px-5 py-24 sm:px-8 md:py-32">
        <SectionHeading
          eyebrow="Capabilities"
          title="What comes off our floor"
          body="Four decades of build-to-print work for automobile, engineering and machine tool customers across India."
        />
        <div className="mt-12 grid gap-4 md:auto-rows-[minmax(180px,auto)] md:grid-cols-6">
          {capabilities.map((cap, i) => (
            <Reveal
              key={cap.title}
              delay={i * 0.05}
              className={spanClass[cap.span] ?? "md:col-span-2"}
            >
              <article className="panel-tile group relative flex h-full min-h-[220px] flex-col justify-between overflow-hidden rounded-lg p-6">
                {/* Desktop-only imagery */}
                <img
                  src={capabilityImages[cap.title]}
                  alt=""
                  aria-hidden="true"
                  loading="lazy"
                  width={1024}
                  height={768}
                  className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-35 transition-all duration-700 group-hover:scale-105 group-hover:opacity-55 md:block dark:opacity-30 dark:group-hover:opacity-45"
                />
                <div className="pointer-events-none absolute inset-0 hidden bg-gradient-to-t from-background via-background/85 to-background/45 md:block" />
                <Cog className="relative h-5 w-5 text-amber" strokeWidth={1.5} />
                <div className="relative mt-8">
                  <h3 className="font-display text-xl font-semibold">{cap.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{cap.body}</p>
                </div>
              </article>

            </Reveal>
          ))}
        </div>
      </SectionReveal>

      {/* FACILITY */}
      <SectionReveal className="border-y border-border bg-panel/30 py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <SectionHeading
            eyebrow="Inside the shop"
            title="The floor at Dudheshwar"
            body="Haas, Leadwell and BFW machining centres, lathes, and surface, centreless, cylindrical and rotary grinders."
          />
          <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {facility.map((shot, i) => (
              <Reveal key={shot.caption} delay={i * 0.07}>
                <figure className="group relative overflow-hidden rounded-lg border border-border">
                  <img
                    src={shot.src}
                    alt={shot.caption}
                    loading="lazy"
                    className="aspect-4/5 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background via-background/80 to-transparent p-4">
                    <p className="font-display text-sm font-semibold">{shot.caption}</p>
                    <p className="mt-0.5 text-xs text-muted-foreground">{shot.note}</p>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
          <Reveal delay={0.1} className="mt-10">
            <Link
              to="/capabilities"
              className="inline-flex items-center gap-2 font-display text-sm text-amber transition-colors hover:text-amber-soft"
            >
              View the full machine list <ArrowRight className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </SectionReveal>

      {/* CLIENTS */}
      <SectionReveal className="py-16">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <p className="text-eyebrow text-center">Trusted by</p>
        </div>
        <div className="mt-6">
          <Marquee items={clients} />
        </div>
      </SectionReveal>

      {/* CTA */}
      <SectionReveal className="mx-auto max-w-7xl px-5 pb-28 sm:px-8">
        <Reveal>
          <div className="grid-blueprint relative overflow-hidden rounded-xl border border-amber/25 bg-panel/60 px-6 py-16 text-center sm:px-12">
            <div className="pointer-events-none absolute -top-24 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-amber/20 blur-3xl" />
            <div className="relative">
              <div className="mx-auto flex w-fit items-center gap-3 text-amber">
                <Ruler className="h-5 w-5" strokeWidth={1.5} />
                <Factory className="h-5 w-5" strokeWidth={1.5} />
              </div>
              <h2 className="mx-auto mt-6 max-w-2xl font-display text-3xl font-semibold leading-tight sm:text-4xl">
                Have a drawing? We'll quote the part.
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Send dimensions, tolerances and quantity — prototypes or repeat batches both welcome.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <MagneticButton
                  href="/contact"
                  className="bg-amber text-background hover:bg-amber-soft"
                >
                  Request a quote <ArrowRight className="h-4 w-4" />
                </MagneticButton>
                <MagneticButton
                  href={`tel:${company.contacts[0].phone}`}
                  className="border border-border text-foreground hover:border-amber/60"
                >
                  Call {company.contacts[0].phone}
                </MagneticButton>
              </div>
            </div>
          </div>
        </Reveal>
      </SectionReveal>
    </>
  );
}

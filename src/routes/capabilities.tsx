import { createFileRoute } from "@tanstack/react-router";
import { machineGroups } from "@/data/machines";
import { facility } from "@/data/company";
import { SectionHeading, Reveal } from "@/components/site/motion-primitives";
import pcMilling from "@/assets/pc-cnc-milling.jpg";
import pcGrinding from "@/assets/pc-grinding.jpg";
import pcInspection from "@/assets/pc-inspection.jpg";

const wideShots = [
  {
    src: pcMilling,
    title: "CNC milling under flood coolant",
    note: "Leadwell, Haas and BFW machining centres running production batches.",
  },
  {
    src: pcGrinding,
    title: "Cylindrical grinding to final size",
    note: "Hardened shafts finished to micron tolerances and mirror surface.",
  },
  {
    src: pcInspection,
    title: "Inspection on the granite plate",
    note: "Every batch gauged before it leaves the floor.",
  },
];


export const Route = createFileRoute("/capabilities")({
  head: () => ({
    meta: [
      { title: "Machine Shop — CNC, Turning & Grinding | Jay Jalaram Industries" },
      {
        name: "description",
        content:
          "Inside our Ahmedabad shop: CNC milling on Haas and Leadwell, lathes, centreless, cylindrical and rotary surface grinding.",
      },
      { property: "og:title", content: "Machine Shop — Jay Jalaram Industries" },
      {
        property: "og:description",
        content: "CNC milling, turning, and four kinds of grinding under one roof in Ahmedabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/capabilities" },
    ],
    links: [{ rel: "canonical", href: "/capabilities" }],
  }),
  component: CapabilitiesPage,
});

function CapabilitiesPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <SectionHeading
        eyebrow="The floor"
        title="Every machine, listed"
        body="No outsourcing games — this is the equipment your part actually runs on."
      />
      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {machineGroups.map((group, i) => (
          <Reveal key={group.category} delay={i * 0.05}>
            <section className="panel-tile h-full rounded-lg border border-border bg-card p-6">
              <h3 className="font-display text-xl font-semibold">{group.category}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{group.blurb}</p>
              <ul className="mt-5 space-y-3">
                {group.units.map((unit, j) => (
                  <li key={`${unit.name}-${j}`} className="flex items-start gap-3 border-t border-border/60 pt-3">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rotate-45 bg-amber" />
                    <span className="flex-1">
                      <span className="block font-display text-sm">{unit.name}</span>
                      <span className="block text-sm text-muted-foreground">{unit.detail}</span>
                    </span>
                    {unit.year ? (
                      <span className="font-display text-xs text-muted-foreground">{unit.year}</span>
                    ) : null}
                  </li>
                ))}
              </ul>
            </section>
          </Reveal>
        ))}
      </div>

      {/* Desktop-only wide showcase */}
      <section className="mt-24 hidden lg:block">
        <SectionHeading
          eyebrow="Process in motion"
          title="Cut, ground, gauged"
          body="Wide-format views of the three stages every precision part passes through."
        />
        <div className="mt-10 space-y-8">
          {wideShots.map((shot, i) => (
            <Reveal key={shot.title} delay={i * 0.08}>
              <figure className="group relative overflow-hidden rounded-xl border border-border">
                <img
                  src={shot.src}
                  alt={shot.title}
                  loading="lazy"
                  width={1920}
                  height={1088}
                  className="aspect-21/9 w-full object-cover transition-transform duration-[1200ms] group-hover:scale-[1.04]"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-background/85 via-background/25 to-transparent" />
                <figcaption className="absolute inset-y-0 left-0 flex max-w-md flex-col justify-center gap-2 p-10">
                  <span className="font-display text-xs uppercase tracking-[0.25em] text-primary">
                    0{i + 1}
                  </span>
                  <p className="font-display text-2xl font-semibold">{shot.title}</p>
                  <p className="text-sm text-muted-foreground">{shot.note}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </section>



      <section className="mt-20">
        <SectionHeading
          eyebrow="Inside the shop"
          title="The floor at Dudheshwar"
          body="Machining bays, fixtures under flood coolant, and the inspection plate where every part is checked."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
      </section>
    </main>
  );
}

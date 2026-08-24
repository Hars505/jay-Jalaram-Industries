import { createFileRoute } from "@tanstack/react-router";
import { company, timeline, values, facility } from "@/data/company";
import { SectionHeading, Reveal } from "@/components/site/motion-primitives";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Machining in Ahmedabad since 1983 | Jay Jalaram Industries" },
      {
        name: "description",
        content:
          "Jay Jalaram Industries has machined precision components in Dudheshwar, Ahmedabad since 1983. Our story, values and facility.",
      },
      { property: "og:title", content: "About Jay Jalaram Industries" },
      {
        property: "og:description",
        content: "A ten-person precision machine shop in Ahmedabad, running since 1983.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: AboutPage,
});

function AboutPage() {
  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <SectionHeading
        eyebrow="Since 1983"
        title="Four decades of holding tolerance"
        body={`${company.name} is a ${company.type.toLowerCase()} precision parts manufacturer in ${company.address.city}, run by a team of ${company.employees}.`}
      />

      <div className="mt-16 grid gap-10 lg:grid-cols-[1fr_1.1fr]">
        <div className="space-y-0">
          {timeline.map((item, i) => (
            <Reveal key={item.year} delay={i * 0.06}>
              <div className="relative border-l border-border pb-8 pl-8">
                <span className="absolute -left-[5px] top-1.5 h-2.5 w-2.5 rotate-45 bg-amber" />
                <p className="font-display text-sm text-amber">{item.year}</p>
                <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {facility.map((shot, i) => (
            <Reveal key={shot.caption} delay={i * 0.06}>
              <figure className="group overflow-hidden rounded-lg border border-border">
                <img
                  src={shot.src}
                  alt={shot.caption}
                  loading="lazy"
                  className="aspect-4/3 w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <figcaption className="bg-card p-4">
                  <span className="block font-display text-sm">{shot.caption}</span>
                  <span className="block text-xs text-muted-foreground">{shot.note}</span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>

      <div className="mt-20">
        <SectionHeading eyebrow="How we work" title="Six things we don't compromise on" />
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, i) => (
            <Reveal key={value.title} delay={i * 0.05}>
              <div className="panel-tile h-full rounded-lg border border-border bg-card p-6">
                <h3 className="font-display text-lg font-semibold">{value.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{value.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </main>
  );
}

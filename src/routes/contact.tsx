import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Copy, Check, Mail, MapPin, Navigation, Phone } from "lucide-react";
import { company, services } from "@/data/company";
import { SectionHeading, Reveal } from "@/components/site/motion-primitives";
import { WhatsAppIcon, whatsappLink } from "@/components/site/WhatsAppIcon";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Jay Jalaram Industries, Ahmedabad" },
      {
        name: "description",
        content:
          "Call, WhatsApp or email Jay Jalaram Industries. I-9 Ravi Estate, Dudheshwar Road, Ahmedabad 380004. Phone 9898605252 / 9558822639.",
      },
      { property: "og:title", content: "Contact Jay Jalaram Industries" },
      {
        property: "og:description",
        content: "Reach us by phone, WhatsApp or email for precision machining in Ahmedabad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: ContactPage,
});

const fullAddress = `${company.address.line1}, ${company.address.line2}, ${company.address.city}, ${company.address.state}`;

function ContactPage() {
  const [service, setService] = useState<string>(services[0]);
  const [person, setPerson] = useState<string>(company.contacts[0].phone);
  const [copied, setCopied] = useState(false);

  const message = `Hello Jay Jalaram Industries, I would like to inquire about: ${service}.`;
  const waHref = whatsappLink(person, message);

  const copyAddress = async () => {
    try {
      await navigator.clipboard.writeText(fullAddress);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      setCopied(false);
    }
  };

  return (
    <main className="mx-auto max-w-7xl px-5 pb-24 pt-32 sm:px-8">
      <SectionHeading
        eyebrow="Get in touch"
        title="Contact us directly"
        body="No forms, no waiting. Call, WhatsApp or email us and we will reply within one working day."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Call */}
        <Reveal>
          <div className="panel-tile flex h-full flex-col rounded-lg border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-amber/10 text-amber">
              <Phone className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">Call us</h3>
            <ul className="mt-3 flex-1 space-y-3 text-sm">
              {company.contacts.map((p) => (
                <li key={p.phone}>
                  <span className="block text-foreground">{p.name}</span>
                  <a className="text-amber transition-colors hover:text-amber/80" href={`tel:+91${p.phone}`}>
                    +91 {p.phone}
                  </a>
                </li>
              ))}
              <li>
                <span className="block text-foreground">Workshop landline</span>
                <a
                  className="text-amber transition-colors hover:text-amber/80"
                  href={`tel:${company.landline.replace(/-/g, "")}`}
                >
                  {company.landline}
                </a>
              </li>
            </ul>
            <a
              href={`tel:+91${company.contacts[0].phone}`}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-amber px-4 py-2.5 text-sm font-semibold text-amber-foreground transition-colors hover:bg-amber/90"
            >
              Call now
            </a>
          </div>
        </Reveal>

        {/* WhatsApp with prefilled service inquiry */}
        <Reveal delay={0.06}>
          <div className="panel-tile flex h-full flex-col rounded-lg border border-border bg-card p-6">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
              <WhatsAppIcon className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">WhatsApp inquiry</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Pick what you need — we will open WhatsApp with your message ready to send.
            </p>

            <div className="mt-4 flex-1 space-y-3">
              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Service
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  {services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </label>

              <label className="block text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Send to
                <select
                  value={person}
                  onChange={(e) => setPerson(e.target.value)}
                  className="mt-1.5 w-full rounded-md border border-input bg-background px-3 py-2 text-sm font-normal normal-case tracking-normal text-foreground outline-none focus:ring-2 focus:ring-ring"
                >
                  {company.contacts.map((p) => (
                    <option key={p.phone} value={p.phone}>
                      {p.name} · +91 {p.phone}
                    </option>
                  ))}
                </select>
              </label>

              <p className="rounded-md border border-dashed border-border bg-muted/50 p-3 text-xs text-muted-foreground">
                “{message}”
              </p>
            </div>

            <a
              href={waHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-5 inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-emerald-700"
            >
              <WhatsAppIcon className="h-4 w-4" /> Chat on WhatsApp
            </a>
          </div>
        </Reveal>

        {/* Email */}
        <Reveal delay={0.12}>
          <div className="panel-tile flex h-full flex-col rounded-lg border border-border bg-card p-6 md:col-span-2 lg:col-span-1">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500/10 text-sky-600 dark:text-sky-400">
              <Mail className="h-5 w-5" />
            </div>
            <h3 className="mt-4 font-display text-lg font-semibold">Email a drawing</h3>
            <p className="mt-3 flex-1 text-sm text-muted-foreground">
              Send PDF drawings, STEP files or photos to{" "}
              <a
                href={`mailto:${company.email}`}
                className="break-all text-sky-600 transition-colors hover:text-sky-700 dark:text-sky-400"
              >
                {company.email}
              </a>
              . We reply with lead time and estimate within one working day.
            </p>
            <a
              href={`mailto:${company.email}?subject=${encodeURIComponent(`Machining inquiry — ${service}`)}`}
              className="mt-5 inline-flex items-center justify-center rounded-md bg-sky-600 px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-sky-700"
            >
              Send email
            </a>
          </div>
        </Reveal>

        {/* Map + address */}
        <Reveal delay={0.18} className="md:col-span-2 lg:col-span-3">
          <div className="panel-tile overflow-hidden rounded-lg border border-border bg-card">
            <div className="grid gap-0 lg:grid-cols-5">
              <div className="p-6 lg:col-span-2">
                <div className="flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-muted text-amber">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-semibold">Workshop address</h3>
                    <a
                      href={company.maps.placeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-1 block text-muted-foreground transition-colors hover:text-amber"
                    >
                      <address className="not-italic">
                        <p>{company.address.line1}</p>
                        <p>{company.address.line2}</p>
                        <p>
                          {company.address.city}, {company.address.state}
                        </p>
                      </address>
                    </a>
                    <p className="mt-3 text-sm text-muted-foreground">Mon – Sat · 9:00 – 19:00 IST</p>

                    <div className="mt-5 flex flex-wrap gap-3">
                      <a
                        href={company.maps.directionsUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 rounded-md bg-amber px-4 py-2.5 text-sm font-semibold text-amber-foreground transition-colors hover:bg-amber/90"
                      >
                        <Navigation className="h-4 w-4" /> Get directions
                      </a>
                      <button
                        type="button"
                        onClick={copyAddress}
                        className="inline-flex items-center gap-2 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-foreground transition-colors hover:bg-muted"
                      >
                        {copied ? <Check className="h-4 w-4 text-emerald-600" /> : <Copy className="h-4 w-4" />}
                        {copied ? "Copied" : "Copy address"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative min-h-[320px] border-t border-border lg:col-span-3 lg:border-l lg:border-t-0">
                <iframe
                  title={`Map to ${company.name}`}
                  src={company.maps.embedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="absolute inset-0 h-full w-full"
                  style={{ border: 0 }}
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
}

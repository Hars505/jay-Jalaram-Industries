import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { company } from "@/data/company";
import logoMark from "@/assets/jj-logo.png";

const links = [
  { to: "/products", label: "Products" },
  { to: "/capabilities", label: "Machine Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/40">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <img
              src={logoMark}
              alt="Jay Jalaram Industries logo"
              width={1024}
              height={1024}
              loading="lazy"
              className="h-10 w-10 object-contain"
            />
            <span className="leading-tight">
              <span className="block font-display text-sm font-semibold tracking-tight">JAY JALARAM</span>
              <span className="block font-display text-[0.6rem] tracking-[0.3em] text-muted-foreground">
                INDUSTRIES
              </span>
            </span>
          </div>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
            {company.business} in Ahmedabad since {company.established}. Precision turned parts, gears, shafts,
            bushes and component cleaning machines — built to print.
          </p>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.25em] text-muted-foreground">EXPLORE</h3>
          <ul className="mt-4 space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  className="text-sm text-muted-foreground transition-colors hover:text-amber"
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display text-xs tracking-[0.25em] text-muted-foreground">REACH US</h3>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            {company.contacts.map((c) => (
              <li key={c.phone}>
                <a href={`tel:+91${c.phone}`} className="flex items-start gap-2 transition-colors hover:text-amber">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                  <span>
                    {c.name}
                    <span className="block text-foreground">{c.phone}</span>
                  </span>
                </a>
              </li>
            ))}
            <li>
              <a
                href={`mailto:${company.email}`}
                className="flex items-start gap-2 break-all transition-colors hover:text-amber"
              >
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
                {company.email}
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-amber" />
              <span>
                {company.address.line1}, {company.address.line2}, {company.address.city}
              </span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border/70">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
          <p>Mon–Sat · 9:00 – 19:00 IST · {company.landline}</p>
        </div>
      </div>
    </footer>
  );
}

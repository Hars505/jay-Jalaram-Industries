import { Link } from "@tanstack/react-router";
import { motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { company } from "@/data/company";
import logoMark from "@/assets/jj-logo.png";
import { ThemeToggle } from "@/components/site/ThemeToggle";
import { WhatsAppIcon, whatsappLink } from "@/components/site/WhatsAppIcon";
import { cn } from "@/lib/utils";

const nav = [
  { to: "/", label: "Home" },
  { to: "/products", label: "Products" },
  { to: "/capabilities", label: "Machine Shop" },
  { to: "/about", label: "About" },
  { to: "/contact", label: "Contact" },
] as const;

const primary = company.contacts[0];
const waHref = whatsappLink(
  primary.phone,
  "Hello Jay Jalaram Industries, I would like to inquire about precision machining.",
);

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 24));

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-xl transition-all duration-300",
        scrolled
          ? "border-border bg-background/90"
          : "border-border/40 bg-background/70",
      )}
    >
      <div
        className={cn(
          "mx-auto flex max-w-7xl items-center justify-between px-5 transition-all duration-300 sm:px-8",
          scrolled ? "h-16" : "h-20",
        )}
      >
        <Link to="/" className="group flex items-center gap-3">
          <span className="relative grid h-10 w-10 place-items-center">
            <span className="absolute inset-0 rounded-full bg-amber/25 blur-md transition-opacity duration-500 group-hover:opacity-100 opacity-60" />
            <img
              src={logoMark}
              alt="Jay Jalaram Industries logo"
              width={1024}
              height={1024}
              className="relative h-10 w-10 object-contain transition-transform duration-500 group-hover:rotate-[30deg]"
            />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-sm font-semibold tracking-tight text-foreground">JAY JALARAM</span>
            <span className="block font-display text-[0.6rem] tracking-[0.3em] text-foreground/60">INDUSTRIES</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {nav.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="group relative px-3 py-2 font-display text-sm font-medium text-foreground/75 transition-colors hover:text-foreground"
              activeProps={{ className: "text-foreground" }}
              activeOptions={{ exact: item.to === "/" }}
            >
              {item.label}
              <span className="absolute inset-x-3 bottom-1 h-px origin-left scale-x-0 bg-amber transition-transform duration-300 group-hover:scale-x-100 group-data-[status=active]:scale-x-100" />
            </Link>
          ))}

          <a
            href={`tel:+91${primary.phone}`}
            className="ml-3 inline-flex items-center gap-2 rounded-md border border-amber/60 px-3 py-2 font-display text-sm font-medium text-amber transition-colors hover:bg-amber/10"
          >
            <Phone className="h-4 w-4" />
            <span className="hidden lg:inline">Call</span>
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-md bg-emerald-600 px-3 py-2 font-display text-sm font-medium text-white transition-transform hover:scale-[1.03]"
          >
            <WhatsAppIcon className="h-4 w-4" />
            <span className="hidden lg:inline">WhatsApp</span>
          </a>
          <ThemeToggle className="ml-2" />
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={`tel:+91${primary.phone}`}
            aria-label="Call us"
            className="grid h-10 w-10 place-items-center rounded-md border border-amber/60 text-amber"
          >
            <Phone className="h-4 w-4" />
          </a>
          <a
            href={waHref}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
            className="grid h-10 w-10 place-items-center rounded-md bg-emerald-600 text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
          </a>
          <ThemeToggle />
          <button
            type="button"
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="grid h-10 w-10 place-items-center rounded-md border border-border text-foreground"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open ? (
        <motion.nav
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          className="overflow-hidden border-t border-border bg-background/95 backdrop-blur-xl md:hidden"
        >
          <div className="flex flex-col px-5 py-3">
            {nav.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className="border-b border-border/60 py-3 font-display text-sm text-foreground/80"
                activeProps={{ className: "text-amber" }}
                activeOptions={{ exact: item.to === "/" }}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-4 grid grid-cols-2 gap-3">
              <a
                href={`tel:+91${primary.phone}`}
                className="inline-flex items-center justify-center gap-2 rounded-md border border-amber/60 px-4 py-3 font-display text-sm font-medium text-amber"
              >
                <Phone className="h-4 w-4" /> Call
              </a>
              <a
                href={waHref}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-md bg-emerald-600 px-4 py-3 font-display text-sm font-medium text-white"
              >
                <WhatsAppIcon className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          </div>
        </motion.nav>
      ) : null}
    </header>
  );
}

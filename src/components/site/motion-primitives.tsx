import { motion, useInView, useMotionValue, useSpring, useReducedMotion } from "motion/react";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Reveal({
  children,
  delay = 0,
  className,
  y = 28,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  y?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y, filter: "blur(10px)" }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: reduce ? 0.3 : 0.7, delay: reduce ? 0 : delay, ease: [0.22, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.div>
  );
}

/**
 * Section-level scroll reveal: fades and slides a whole band into view once.
 * Falls back to a plain fade when the user prefers reduced motion.
 */
export function SectionReveal({
  children,
  className,
  y = 40,
  delay = 0,
  id,
}: {
  children: ReactNode;
  className?: string;
  y?: number;
  delay?: number;
  id?: string;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.section
      id={id}
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y }}
      whileInView={reduce ? { opacity: 1 } : { opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: reduce ? 0.3 : 0.85, delay: reduce ? 0 : delay, ease: [0.22, 0.8, 0.2, 1] }}
    >
      {children}
    </motion.section>
  );
}

export function CountUp({
  to,
  suffix = "",
  duration = 1400,
  className,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  className?: string;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const reduce = useReducedMotion();
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (reduce) {
      setValue(to);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(to * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, to, duration, reduce]);

  return (
    <span ref={ref} className={className}>
      {value}
      {suffix}
    </span>
  );
}

export function MagneticButton({
  children,
  className,
  href,
  onClick,
}: {
  children: ReactNode;
  className?: string;
  href?: string;
  onClick?: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const mx = useMotionValue(0);
  const my = useMotionValue(0);
  const x = useSpring(mx, { stiffness: 240, damping: 18 });
  const y = useSpring(my, { stiffness: 240, damping: 18 });

  const handleMove = (e: React.MouseEvent) => {
    if (reduce || !ref.current) return;
    const r = ref.current.getBoundingClientRect();
    mx.set(((e.clientX - r.left) / r.width - 0.5) * 18);
    my.set(((e.clientY - r.top) / r.height - 0.5) * 12);
  };

  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-md px-6 py-3 font-display text-sm font-medium tracking-wide transition-colors",
    className,
  );

  return (
    <motion.div
      ref={ref}
      style={{ x, y }}
      onMouseMove={handleMove}
      onMouseLeave={() => {
        mx.set(0);
        my.set(0);
      }}
      className="inline-flex"
    >
      {href ? (
        <a href={href} className={base}>
          {children}
        </a>
      ) : (
        <button type="button" onClick={onClick} className={base}>
          {children}
        </button>
      )}
    </motion.div>
  );
}

export function Marquee({ items }: { items: readonly string[] }) {
  const doubled = [...items, ...items];
  return (
    <div className="mask-fade-x overflow-hidden py-2">
      <div className="marquee-track flex w-max gap-10 hover:[animation-play-state:paused]">
        {doubled.map((item, i) => (
          <span
            key={`${item}-${i}`}
            className="flex shrink-0 items-center gap-3 font-display text-sm tracking-wide text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rotate-45 bg-amber" />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  body,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  body?: string;
  align?: "left" | "center";
}) {
  return (
    <Reveal className={cn("max-w-2xl", align === "center" && "mx-auto text-center")}>
      <p className="text-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-semibold leading-[1.05] sm:text-4xl md:text-5xl">{title}</h2>
      {body ? <p className="mt-4 text-base leading-relaxed text-muted-foreground">{body}</p> : null}
    </Reveal>
  );
}

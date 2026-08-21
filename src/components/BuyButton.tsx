import { CHECKOUT_URL, hasCheckout } from "@/lib/checkout";
import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

type Props = {
  children: ReactNode;
  className?: string;
  size?: "md" | "lg";
  variant?: "solid" | "outline";
};

export function BuyButton({ children, className, size = "lg", variant = "solid" }: Props) {
  const base = cn(
    "inline-flex items-center justify-center gap-2 rounded-full font-display font-extrabold tracking-tight",
    "transition-transform duration-200 will-change-transform hover:-translate-y-0.5 active:translate-y-0",
    "focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40",
    size === "lg" ? "px-8 py-4 text-lg sm:text-xl" : "px-6 py-3 text-base",
    variant === "solid"
      ? "bg-primary text-primary-foreground shadow-cta hover:bg-primary-glow"
      : "border-2 border-primary bg-background text-primary hover:bg-secondary",
    className,
  );

  if (hasCheckout) {
    return (
      <a href={CHECKOUT_URL} target="_blank" rel="noopener noreferrer" className={base}>
        {children}
      </a>
    );
  }

  return (
    <a
      href="#oferta"
      className={base}
      onClick={(e) => {
        e.preventDefault();
        document.getElementById("oferta")?.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
    >
      {children}
    </a>
  );
}

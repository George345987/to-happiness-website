import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About Us" },
  { to: "/studio", label: "Studio" },
  { to: "/retreats", label: "Retreats" },
  { to: "/corporate-wellness", label: "Corporate Wellness" },
] as const;

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // Pages with a dark hero start with transparent header
  const transparentRoutes = ["/", "/about", "/studio", "/retreats", "/corporate-wellness"];
  const startTransparent = transparentRoutes.includes(location.pathname);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const solid = scrolled || !startTransparent || open;

  return (
    <header
      className="fixed inset-x-0 top-0 z-50 transition-all duration-700"
      style={{
        backgroundColor: solid ? "var(--color-cream)" : "transparent",
        boxShadow: solid && scrolled ? "0 1px 0 var(--color-border)" : "none",
      }}
    >
      <div className="container-luxe flex items-center justify-between" style={{ height: solid ? 76 : 96 }}>
        <Link to="/" className="flex items-center" aria-label="To Happiness — home">
          <img
            src="/assets/logo.jpeg"
            alt="To Happiness by May Ramy"
            className="h-10 md:h-12 w-auto object-contain transition-all"
          />
        </Link>

        <nav className="hidden lg:flex items-center gap-9">
          {NAV.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="relative text-[0.72rem] font-medium uppercase transition-opacity hover:opacity-70"
              style={{
                letterSpacing: "0.24em",
                color: solid ? "var(--color-burgundy)" : "var(--color-cream)",
              }}
              activeProps={{ style: { letterSpacing: "0.24em", color: solid ? "var(--color-burgundy)" : "var(--color-cream)", opacity: 1 } }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors"
          style={{
            color: solid ? "var(--color-burgundy)" : "var(--color-cream)",
            border: `1px solid ${solid ? "var(--color-border)" : "rgba(245,239,232,0.4)"}`,
          }}
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className="lg:hidden fixed inset-x-0 top-[76px] bottom-0 transition-all duration-500 overflow-y-auto"
        style={{
          backgroundColor: "var(--color-cream)",
          opacity: open ? 1 : 0,
          pointerEvents: open ? "auto" : "none",
          transform: open ? "translateY(0)" : "translateY(-8px)",
        }}
      >
        <nav className="container-luxe py-10 flex flex-col">
          {NAV.map((item, i) => (
            <Link
              key={item.to}
              to={item.to}
              className="py-5 border-b font-display text-3xl transition-all"
              style={{
                color: "var(--color-burgundy)",
                borderColor: "var(--color-border)",
                transitionDelay: open ? `${i * 60}ms` : "0ms",
                opacity: open ? 1 : 0,
                transform: open ? "translateX(0)" : "translateX(-12px)",
              }}
            >
              {item.label}
            </Link>
          ))}
          <div className="mt-10 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--color-muted-foreground)" }}>
            Cairo, Egypt — hello@tohappiness.com
          </div>
        </nav>
      </div>
    </header>
  );
}

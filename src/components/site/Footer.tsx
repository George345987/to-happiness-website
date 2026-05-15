import { Link } from "@tanstack/react-router";
import { Instagram, Mail, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer style={{ backgroundColor: "var(--color-cream)", borderTop: "1px solid var(--color-border)" }}>
      <div className="container-luxe py-20 grid gap-14 md:grid-cols-3">
        <div>
          <img src="/assets/logo.png" alt="To Happiness" className="h-10 w-auto object-contain object-left" />
          <p className="mt-6 max-w-xs text-sm leading-relaxed" style={{ color: "var(--color-muted-foreground)" }}>
            Your journey to happiness starts here. A sanctuary for movement, mindfulness and meaningful connection.
          </p>
        </div>

        <div>
          <div className="eyebrow mb-5">Explore</div>
          <ul className="space-y-3 text-[0.95rem]">
            {[
              ["/about", "About Us"],
              ["/studio", "Studio"],
              ["/retreats", "Retreats"],
              ["/corporate-wellness", "Corporate Wellness"],
              ["/team-up", "Team Up"],
            ].map(([to, label]) => (
              <li key={to}>
                <Link to={to} className="transition-opacity hover:opacity-60" style={{ color: "var(--color-burgundy)" }}>
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <div className="eyebrow mb-5">Contact</div>
          <ul className="space-y-3 text-[0.95rem]" style={{ color: "var(--color-foreground)" }}>
            <li className="flex items-center gap-3"><MapPin size={16} style={{ color: "var(--color-gold)" }} /> Cairo, Egypt</li>
            <li className="flex items-center gap-3"><Mail size={16} style={{ color: "var(--color-gold)" }} /> hello@tohappiness.com</li>
            <li className="flex items-center gap-3"><Instagram size={16} style={{ color: "var(--color-gold)" }} /> @tohappiness.maramy</li>
          </ul>
        </div>
      </div>

      <div className="border-t" style={{ borderColor: "var(--color-border)" }}>
        <div className="container-luxe py-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs uppercase tracking-[0.28em]" style={{ color: "var(--color-muted-foreground)" }}>
          <span>© {new Date().getFullYear()} To Happiness — By May Ramy</span>
          <span>Crafted with intention</span>
        </div>
      </div>
    </footer>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroAbout from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — To Happiness | May Ramy, Master Wellbeing Coach" },
      { name: "description", content: "May Ramy is a senior human development coach and master trainer creating immersive wellbeing experiences for individuals and organizations." },
      { property: "og:title", content: "About — To Happiness" },
      { property: "og:description", content: "More than wellness. A movement toward intentional living." },
      { property: "og:image", content: heroAbout },
    ],
  }),
  component: AboutPage,
});

const VALUES = ["Presence", "Connection", "Healing", "Growth", "Mindfulness", "Beauty", "Community", "Transformation"];

function AboutPage() {
  return (
    <SiteLayout>
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroAbout})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(58,44,40,0.4) 0%, rgba(58,44,40,0.65) 100%)" }} />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-24" style={{ color: "var(--color-cream)" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.85 }}>About</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="h-display mt-6 max-w-3xl" style={{ color: "var(--color-cream)" }}>
              More than wellness.<br/>
              <em className="font-display italic" style={{ color: "var(--color-cream)", opacity: 0.8 }}>A movement toward intentional living.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">May Ramy</div>
            <h2 className="h-section mt-4">The story.</h2>
          </Reveal>
          <Reveal className="lg:col-span-7 lg:col-start-6" delay={120}>
            <p className="text-lg leading-[1.85]" style={{ color: "var(--color-foreground)" }}>
              May Ramy is a senior human development coach and master trainer with over 20 years of experience in transformational learning, positive psychology, wellbeing studies, and yoga therapy.
            </p>
            <p className="mt-6 text-[1.02rem] leading-[1.85]" style={{ color: "var(--color-muted-foreground)" }}>
              Through To Happiness, she creates immersive experiences that help individuals and organizations reconnect with purpose, balance, and emotional wellbeing.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32" style={{ backgroundColor: "var(--color-burgundy)", color: "var(--color-cream)" }}>
        <div className="container-luxe grid md:grid-cols-2 gap-16">
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.7 }}>Mission</div>
            <h2 className="h-section mt-4" style={{ color: "var(--color-cream)" }}>To create what transforms.</h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8]" style={{ color: "var(--color-cream)", opacity: 0.88 }}>
              We create transformative holistic wellbeing experiences that empower leaders, teams, and communities to evolve, thrive, and build resilience.
            </p>
          </Reveal>
          <Reveal delay={120}>
            <div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.7 }}>Vision</div>
            <h2 className="h-section mt-4" style={{ color: "var(--color-cream)" }}>A world that thrives.</h2>
            <p className="mt-6 text-[1.05rem] leading-[1.8]" style={{ color: "var(--color-cream)", opacity: 0.88 }}>
              We envision a world where holistic wellbeing becomes the foundation of thriving individuals, connected teams, and purpose-driven organizations.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="eyebrow">Our values</div>
              <h2 className="h-section mt-4">What we stand for.</h2>
              <div className="divider-dot" />
            </div>
          </Reveal>
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: "var(--color-border)" }}>
            {VALUES.map((v, i) => (
              <Reveal key={v} delay={i * 60}>
                <div className="aspect-square flex flex-col items-center justify-center text-center p-6 transition-colors hover:bg-[var(--color-sand)]"
                     style={{ backgroundColor: "var(--color-cream)" }}>
                  <span className="font-display text-3xl md:text-4xl" style={{ color: "var(--color-burgundy)" }}>{v}</span>
                  <span className="mt-3 text-[0.65rem] tracking-[0.32em] uppercase" style={{ color: "var(--color-gold)" }}>0{i + 1}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

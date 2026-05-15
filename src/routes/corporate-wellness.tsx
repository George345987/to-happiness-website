import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import heroCorporate from "@/assets/hero-corporate.jpg";

export const Route = createFileRoute("/corporate-wellness")({
  head: () => ({
    meta: [
      { title: "Corporate Wellness — To Happiness | Wellbeing for Modern Leadership" },
      { name: "description", content: "Premium corporate wellbeing programs, executive retreats and ESG wellness roadmaps designed by May Ramy." },
      { property: "og:title", content: "Corporate Wellness — To Happiness" },
      { property: "og:description", content: "Wellbeing for modern leadership." },
      { property: "og:image", content: heroCorporate },
    ],
  }),
  component: CorporatePage,
});

const SPIRE = [
  { letter: "S", title: "Spiritual Wellbeing", text: "Cultivating meaning, purpose and inner alignment in daily work." },
  { letter: "P", title: "Physical Wellbeing", text: "Movement, breath and nervous-system practices for sustained energy." },
  { letter: "I", title: "Intellectual Wellbeing", text: "Curiosity, lifelong learning and creative cognitive flow." },
  { letter: "R", title: "Relational Wellbeing", text: "Trust, psychological safety and authentic connection across teams." },
  { letter: "E", title: "Emotional Wellbeing", text: "Self-awareness, regulation and resilience as leadership practice." },
];

const SERVICES = [
  "Leadership Workshops", "Executive Retreats", "ESG Wellbeing Programs",
  "Team Building Experiences", "Wellness Roadmaps", "Customized Programs",
];

const WHY = [
  "20+ years experience", "Human-centered methodology", "Holistic wellbeing",
  "Premium experiential design", "Emotional intelligence focus", "Transformational leadership",
];

function CorporatePage() {
  const [active, setActive] = useState(0);
  return (
    <SiteLayout>
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroCorporate})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(58,44,40,0.45) 0%, rgba(58,44,40,0.65) 100%)" }} />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-24" style={{ color: "var(--color-cream)" }}>
          <Reveal><div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.85 }}>Corporate Wellness</div></Reveal>
          <Reveal delay={120}>
            <h1 className="h-display mt-6 max-w-3xl" style={{ color: "var(--color-cream)" }}>Wellbeing for modern leadership.</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-lg italic font-display" style={{ color: "var(--color-cream)", opacity: 0.92 }}>
              Helping teams, leaders and organizations thrive through intentional wellbeing experiences.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-luxe">
          <Reveal>
            <div className="max-w-2xl">
              <div className="eyebrow">The SPIRE Model</div>
              <h2 className="h-section mt-4">Five dimensions of thriving.</h2>
              <p className="mt-5 text-[1.02rem] leading-[1.8]" style={{ color: "var(--color-muted-foreground)" }}>
                A research-backed framework that anchors every program we design.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5 space-y-2">
              {SPIRE.map((s, i) => (
                <button
                  key={s.letter}
                  onClick={() => setActive(i)}
                  className="w-full text-left grid grid-cols-12 items-center gap-4 px-5 py-5 transition-all duration-500"
                  style={{
                    backgroundColor: active === i ? "var(--color-burgundy)" : "var(--color-cream)",
                    color: active === i ? "var(--color-cream)" : "var(--color-burgundy)",
                    border: "1px solid var(--color-border)",
                  }}
                >
                  <span className="col-span-2 font-display text-4xl leading-none">{s.letter}</span>
                  <span className="col-span-10 font-display text-xl">{s.title}</span>
                </button>
              ))}
            </div>
            <Reveal className="lg:col-span-7 lg:sticky lg:top-32 p-10 md:p-14" style={{ backgroundColor: "var(--color-sand)" }} key={active} delay={0}>
              <div className="font-display text-7xl" style={{ color: "var(--color-gold)" }}>{SPIRE[active].letter}</div>
              <h3 className="font-display text-4xl mt-4">{SPIRE[active].title}</h3>
              <p className="mt-6 text-[1.05rem] leading-[1.85]" style={{ color: "var(--color-foreground)" }}>{SPIRE[active].text}</p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-sand)" }}>
        <div className="container-luxe">
          <Reveal>
            <div className="max-w-xl">
              <div className="eyebrow">Services</div>
              <h2 className="h-section mt-4">How we partner with you.</h2>
            </div>
          </Reveal>
          <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s, i) => (
              <Reveal key={s} delay={i * 70}>
                <div className="p-8 h-full transition-all duration-500 hover:-translate-y-1"
                     style={{ backgroundColor: "var(--color-cream)", boxShadow: "var(--shadow-card)" }}>
                  <div className="font-display text-2xl" style={{ color: "var(--color-burgundy)" }}>0{i + 1}</div>
                  <h3 className="font-display text-xl mt-3 leading-tight">{s}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="eyebrow">Why To Happiness</div>
            <h2 className="h-section mt-4">Built on two decades of practice.</h2>
          </Reveal>
          <div className="lg:col-span-6 lg:col-start-7">
            {WHY.map((w, i) => (
              <Reveal key={w} delay={i * 60}>
                <div className="flex items-baseline gap-6 py-5 border-b" style={{ borderColor: "var(--color-border)" }}>
                  <span className="font-display" style={{ color: "var(--color-gold)" }}>0{i + 1}</span>
                  <span className="font-display text-2xl" style={{ color: "var(--color-burgundy)" }}>{w}</span>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-burgundy)", color: "var(--color-cream)" }}>
        <div className="container-luxe text-center">
          <Reveal>
            <h2 className="h-section max-w-3xl mx-auto" style={{ color: "var(--color-cream)" }}>
              Bring wellbeing into your workplace.
            </h2>
            <p className="mt-6 max-w-xl mx-auto" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
              Let's design an experience your team will remember.
            </p>
            <a href="mailto:tohappiness.may@gmail.com" className="btn btn-outline mt-10">Start the conversation</a>
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import heroStudio from "@/assets/hero-studio.jpg";

export const Route = createFileRoute("/studio")({
  head: () => ({
    meta: [
      { title: "Yoga — To Happiness | Private Yoga in Cairo" },
      { name: "description", content: "Private yoga sessions designed for movement, healing and presence. Yoga flow, breathwork, mindful movement and gentle stretch." },
      { property: "og:title", content: "Yoga — To Happiness" },
      { property: "og:description", content: "A space to reconnect. Private yoga in Cairo." },
      { property: "og:image", content: heroStudio },
    ],
  }),
  component: StudioPage,
});

const CLASSES = [
  { name: "Yoga Flow", text: "A grounding moving meditation linking breath to motion." },
  { name: "Gentle Stretch", text: "Slow, restorative openings for the whole body." },
  { name: "Mindful Movement", text: "Embodied awareness through intentional movement." },
  { name: "Breathwork Sessions", text: "Conscious breathing to regulate the nervous system." },
  { name: "Private Sessions", text: "One-on-one practice tailored to where you are." },
];

const PILLARS = [
  { title: "Breath", text: "The doorway in. Every session begins here." },
  { title: "Movement", text: "Unhurried, intentional, deeply embodied." },
  { title: "Nervous system", text: "Practices that regulate, soothe and restore." },
  { title: "Emotional balance", text: "Returning the body to a felt sense of safety." },
  { title: "Mind–body connection", text: "Reuniting what daily life pulls apart." },
];

function StudioPage() {
  return (
    <SiteLayout>
      <section className="relative h-[80vh] min-h-[560px] overflow-hidden">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroStudio})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(58,44,40,0.35) 0%, rgba(58,44,40,0.55) 100%)" }} />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-24" style={{ color: "var(--color-cream)" }}>
          <Reveal><div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.85 }}>Yoga</div></Reveal>
          <Reveal delay={120}>
            <h1 className="h-display mt-6 max-w-3xl" style={{ color: "var(--color-cream)" }}>A space to reconnect.</h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-5 max-w-xl text-lg italic font-display" style={{ color: "var(--color-cream)", opacity: 0.92 }}>
              Private yoga sessions designed for movement, healing and presence.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Classes</div>
            <h2 className="h-section mt-4">Practice, in five forms.</h2>
            <p className="mt-6 text-[1.02rem] leading-[1.8]" style={{ color: "var(--color-muted-foreground)" }}>
              Each class is held in a small, considered space — never crowded, always warm.
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6 divide-y" style={{ borderColor: "var(--color-border)" }}>
            {CLASSES.map((c, i) => (
              <Reveal key={c.name} delay={i * 70}>
                <div className="grid grid-cols-12 gap-4 py-7 group cursor-default" style={{ borderTop: i === 0 ? "none" : undefined }}>
                  <div className="col-span-2 md:col-span-1 font-display text-xl" style={{ color: "var(--color-gold)" }}>0{i + 1}</div>
                  <div className="col-span-10 md:col-span-7">
                    <h3 className="font-display text-2xl">{c.name}</h3>
                    <p className="mt-2 text-sm" style={{ color: "var(--color-muted-foreground)" }}>{c.text}</p>
                  </div>
                  <div className="col-start-3 md:col-start-9 col-span-10 md:col-span-4 text-xs uppercase tracking-[0.28em] mt-2 md:mt-3" style={{ color: "var(--color-burgundy)" }}>
                    60 min
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-xl mx-auto">
              <div className="eyebrow">The experience</div>
              <h2 className="h-section mt-4">What practice tends to.</h2>
              <div className="divider-dot" />
            </div>
          </Reveal>
          <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {PILLARS.map((p, i) => (
              <Reveal key={p.title} delay={i * 80}>
                <div className="p-7 h-full transition-all duration-500 hover:-translate-y-1"
                     style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-border)" }}>
                  <div className="font-display text-xl" style={{ color: "var(--color-burgundy)" }}>{p.title}</div>
                  <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--color-muted-foreground)" }}>{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

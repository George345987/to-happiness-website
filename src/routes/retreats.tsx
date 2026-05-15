import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import heroRetreats from "@/assets/hero-retreats.jpg";
import cardRetreats from "@/assets/card-retreats.jpg";
import bannerWellness from "@/assets/banner-wellness.jpg";
import community from "@/assets/community.jpg";
import cardExperiences from "@/assets/card-experiences.jpg";
import cardClasses from "@/assets/card-classes.jpg";
import heroAbout from "@/assets/hero-about.jpg";

export const Route = createFileRoute("/retreats")({
  head: () => ({
    meta: [
      { title: "Retreats — To Happiness | Luxury Wellness Retreats in Egypt" },
      { name: "description", content: "Curated luxury wellness retreats on the North Coast and Fayoum. Yoga, sound healing, emotional wellbeing and Mediterranean serenity." },
      { property: "og:title", content: "Retreats — To Happiness" },
      { property: "og:description", content: "Retreat from routine. Return to yourself." },
      { property: "og:image", content: heroRetreats },
    ],
  }),
  component: RetreatsPage,
});

const RETREATS = [
  { name: "Back To Basics", duration: "3 nights", location: "Fayoum", img: cardRetreats, text: "A return to breath, simplicity and the elemental." },
  { name: "Back To Her", duration: "4 nights", location: "North Coast", img: heroAbout, text: "A feminine reset — softness, sisterhood, restoration." },
  { name: "Self-Love Bloom", duration: "3 nights", location: "Mediterranean", img: cardClasses, text: "Practices that return you home to yourself." },
  { name: "Burnout Reset", duration: "5 nights", location: "Boutique resort", img: bannerWellness, text: "A nervous-system retreat for those running on empty." },
  { name: "Mommies Unwind", duration: "2 nights", location: "North Coast", img: cardExperiences, text: "A held space for mothers to exhale, fully." },
];

const INCLUDED = [
  "Yoga & movement", "Meditation", "Sound healing", "Wellness workshops",
  "Luxury accommodation", "Community dinners", "Emotional wellbeing sessions", "Sunrise & sunset rituals",
];

const TESTIMONIALS = [
  { quote: "I arrived exhausted and left with a softness I hadn't felt in years. Every detail held me.", name: "Nour A." },
  { quote: "The most beautiful, soul-tending experience. May creates magic without ever rushing it.", name: "Hana M." },
  { quote: "I came alone and left with a circle of women I now call family.", name: "Yasmine K." },
];

function RetreatsPage() {
  return (
    <SiteLayout>
      <section className="relative h-[88vh] min-h-[600px] overflow-hidden">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroRetreats})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(58,44,40,0.25) 0%, rgba(58,44,40,0.55) 100%)" }} />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-24 text-center items-center" style={{ color: "var(--color-cream)" }}>
          <Reveal><div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.85 }}>Retreats</div></Reveal>
          <Reveal delay={120}>
            <h1 className="h-display mt-6 max-w-3xl" style={{ color: "var(--color-cream)" }}>
              Retreat from routine.<br/><em className="italic" style={{ opacity: 0.85 }}>Return to yourself.</em>
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-luxe">
          <Reveal>
            <div className="max-w-2xl">
              <div className="eyebrow">Experiences</div>
              <h2 className="h-section mt-4">Five worlds to step into.</h2>
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {RETREATS.map((r, i) => (
              <Reveal key={r.name} delay={(i % 3) * 100}>
                <article className="group">
                  <div className="img-zoom aspect-[4/5] mb-5">
                    <img src={r.img} alt={r.name} className="h-full w-full object-cover" loading="lazy" />
                  </div>
                  <div className="flex items-center gap-3 text-[0.65rem] tracking-[0.3em] uppercase" style={{ color: "var(--color-gold)" }}>
                    <span>{r.duration}</span><span style={{ opacity: 0.4 }}>•</span><span>{r.location}</span>
                  </div>
                  <h3 className="font-display text-3xl mt-3 leading-tight">{r.name}</h3>
                  <p className="mt-3 text-[0.95rem] leading-[1.7]" style={{ color: "var(--color-muted-foreground)" }}>{r.text}</p>
                  <button className="link-arrow mt-5">Explore <ArrowRight size={12} /></button>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" style={{ backgroundColor: "var(--color-burgundy)", color: "var(--color-cream)" }}>
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.7 }}>Included</div>
            <h2 className="h-section mt-4" style={{ color: "var(--color-cream)" }}>Held in every detail.</h2>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6 grid sm:grid-cols-2 gap-x-8 gap-y-5">
            {INCLUDED.map((item, i) => (
              <Reveal key={item} delay={i * 50}>
                <div className="flex items-baseline gap-4 py-3 border-b" style={{ borderColor: "rgba(245,239,232,0.2)" }}>
                  <span className="font-display text-sm" style={{ color: "var(--color-gold)" }}>0{i + 1}</span>
                  <span className="text-[1rem]" style={{ color: "var(--color-cream)" }}>{item}</span>
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
              <div className="eyebrow">Testimonials</div>
              <h2 className="h-section mt-4">In their words.</h2>
              <div className="divider-dot" />
            </div>
          </Reveal>
          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <figure className="p-10 h-full" style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-border)" }}>
                  <div className="font-display text-5xl leading-none" style={{ color: "var(--color-gold)" }}>“</div>
                  <blockquote className="mt-3 font-display text-xl leading-snug italic" style={{ color: "var(--color-burgundy)" }}>
                    {t.quote}
                  </blockquote>
                  <figcaption className="mt-6 eyebrow">{t.name}</figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-24 md:pb-36">
        <div className="container-luxe">
          <Reveal>
            <div className="eyebrow">Gallery</div>
            <h2 className="h-section mt-4 max-w-xl">Glimpses of the experience.</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
            {[heroRetreats, community, cardRetreats, bannerWellness, cardExperiences, heroAbout, cardClasses, cardExperiences].map((src, i) => (
              <Reveal key={i} delay={i * 50} className={i % 5 === 2 ? "row-span-2" : ""}>
                <div className={`img-zoom ${i % 5 === 2 ? "aspect-[3/5]" : "aspect-square"}`}>
                  <img src={src} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

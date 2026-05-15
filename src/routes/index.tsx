import { createFileRoute, Link } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { ArrowRight } from "lucide-react";
import heroHome from "@/assets/hero-home.jpg";
import bannerWellness from "@/assets/banner-wellness.jpg";
import cardClasses from "@/assets/card-classes.jpg";
import cardExperiences from "@/assets/card-experiences.jpg";
import cardRetreats from "@/assets/card-retreats.jpg";
import cardCorporate from "@/assets/card-corporate.jpg";
import community from "@/assets/community.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "To Happiness — Where Movement Meets Stillness | By May Ramy" },
      { name: "description", content: "A sanctuary for movement, mindfulness and meaningful connection. Yoga studio, wellness retreats and corporate wellbeing — by May Ramy, Cairo." },
      { property: "og:title", content: "To Happiness — By May Ramy" },
      { property: "og:description", content: "Where movement meets stillness. Curated yoga, retreats and wellness experiences." },
      { property: "og:image", content: "/assets/logo.jpeg" },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  return (
    <SiteLayout>
      {/* HERO */}
      <section className="relative h-screen min-h-[640px] w-full overflow-hidden">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroHome})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(58,44,40,0.55) 0%, rgba(58,44,40,0.35) 50%, rgba(58,44,40,0.7) 100%)" }} />
        <div className="relative h-full container-luxe flex flex-col items-center justify-center text-center" style={{ color: "var(--color-cream)" }}>
          <Reveal>
            <div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.85 }}>By May Ramy</div>
          </Reveal>
          <Reveal delay={120}>
            <h1 className="mt-6 font-display font-light leading-[0.95] tracking-[-0.02em]"
                style={{ color: "var(--color-cream)", fontSize: "clamp(3rem, 9vw, 7rem)" }}>
              To Happiness
            </h1>
          </Reveal>
          <Reveal delay={240}>
            <p className="mt-6 max-w-xl text-base md:text-lg font-light italic font-display"
               style={{ color: "var(--color-cream)", opacity: 0.92 }}>
              Where movement meets stillness.
            </p>
          </Reveal>
          <Reveal delay={360}>
            <div className="mt-12 flex flex-col sm:flex-row gap-4">
              <Link to="/retreats" className="btn btn-outline">Explore Retreats</Link>
              <Link to="/studio" className="btn btn-outline">Discover Yoga</Link>
            </div>
          </Reveal>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.65rem] tracking-[0.4em] uppercase animate-pulse"
             style={{ color: "var(--color-cream)", opacity: 0.7 }}>
          Scroll
        </div>
      </section>

      {/* INTRODUCTION */}
      <section className="py-24 md:py-36">
        <div className="container-luxe grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          <Reveal>
            <div className="lg:sticky lg:top-32">
              <div className="eyebrow">Welcome</div>
              <h2 className="h-section mt-5">More than yoga.<br/><em className="font-display italic" style={{ color: "var(--color-gold)" }}>A way of life.</em></h2>
              <p className="mt-7 text-[1.05rem] leading-[1.8] max-w-md" style={{ color: "var(--color-foreground)" }}>
                At To Happiness, we create intentional spaces for movement, mindfulness, and connection.
              </p>
              <p className="mt-5 text-[1.05rem] leading-[1.8] max-w-md" style={{ color: "var(--color-muted-foreground)" }}>
                From intimate yoga sessions to curated wellness experiences, every moment is designed to bring you back to yourself.
              </p>
              <Link to="/about" className="link-arrow mt-10 inline-flex">
                Our story <ArrowRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            {[
              { img: cardClasses, eyebrow: "Yoga", title: "Yoga Classes", text: "Move, breathe, reconnect.", to: "/studio" },
              { img: cardExperiences, eyebrow: "Curated", title: "Wellness Experiences", text: "Beautifully curated wellbeing moments.", to: "/retreats" },
              { img: cardRetreats, eyebrow: "Escape", title: "Retreats", text: "Escape. Reset. Reconnect.", to: "/retreats" },
              { img: cardCorporate, eyebrow: "Teams", title: "Corporate Wellness", text: "Wellbeing for teams that care.", to: "/corporate-wellness" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 90} className={i % 2 === 1 ? "sm:translate-y-10" : ""}>
                <Link to={c.to} className="group block">
                  <div className="img-zoom aspect-[4/5] mb-5" style={{ backgroundColor: "var(--color-sand)" }}>
                    <img src={c.img} alt={c.title} loading="lazy" className="h-full w-full object-cover" />
                  </div>
                  <div className="eyebrow opacity-70">{c.eyebrow}</div>
                  <h3 className="mt-2 font-display text-2xl">{c.title}</h3>
                  <p className="mt-1 text-sm" style={{ color: "var(--color-muted-foreground)" }}>{c.text}</p>
                  <span className="mt-3 link-arrow opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURE BANNER */}
      <section className="grid lg:grid-cols-2 min-h-[520px]">
        <Reveal className="flex items-center" style={{ backgroundColor: "var(--color-burgundy)", color: "var(--color-cream)" }}>
          <div className="container-luxe py-20 lg:py-0 max-w-xl">
            <div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.7 }}>Curated for you</div>
            <h2 className="h-section mt-5" style={{ color: "var(--color-cream)" }}>
              A curated wellness experience.
            </h2>
            <p className="mt-6 text-[1.02rem] leading-[1.8]" style={{ color: "var(--color-cream)", opacity: 0.85 }}>
              Designed with intention — from the mat beneath you to the energy around you. Every detail considered, every space held with care.
            </p>
            <Link to="/retreats" className="btn btn-outline mt-10">Explore Retreats</Link>
          </div>
        </Reveal>
        <div className="img-zoom min-h-[420px] lg:min-h-full">
          <img src={bannerWellness} alt="Mediterranean wellness retreat at golden hour" className="h-full w-full object-cover" loading="lazy" />
        </div>
      </section>

      {/* THREE FEATURE CARDS */}
      <section className="py-24 md:py-36" style={{ backgroundColor: "var(--color-sand)" }}>
        <div className="container-luxe">
          <Reveal>
            <div className="text-center max-w-2xl mx-auto">
              <div className="eyebrow">The To Happiness world</div>
              <h2 className="h-section mt-5">Crafted with presence.</h2>
              <div className="divider-dot" />
            </div>
          </Reveal>

          <div className="mt-16 grid md:grid-cols-3 gap-8">
            {[
              { eyebrow: "About Us", title: "A lifestyle, not just yoga.", text: "Founded by May Ramy, To Happiness is more than yoga — it's a lifestyle rooted in balance, presence, and beauty.", to: "/about" },
              { eyebrow: "Our Mission", title: "Wellness made aesthetic.", text: "We believe wellness should feel effortless, aesthetic, and deeply personal — woven into the texture of daily life.", to: "/about" },
            ].map((c, i) => (
              <Reveal key={c.title} delay={i * 100}>
                <div className="h-full p-10 transition-all duration-500 hover:-translate-y-1"
                     style={{ backgroundColor: "var(--color-cream)", boxShadow: "var(--shadow-card)" }}>
                  <div className="eyebrow">{c.eyebrow}</div>
                  <h3 className="font-display text-3xl mt-4 leading-tight">{c.title}</h3>
                  <p className="mt-5 text-[0.98rem] leading-[1.8]" style={{ color: "var(--color-muted-foreground)" }}>{c.text}</p>
                  <Link to={c.to} className="link-arrow mt-8 inline-flex">Discover <ArrowRight size={12} /></Link>
                </div>
              </Reveal>
            ))}
            <Reveal delay={200}>
              <div className="h-full overflow-hidden flex flex-col" style={{ boxShadow: "var(--shadow-card)" }}>
                <div className="img-zoom h-44 shrink-0">
                  <img src={community} alt="Women walking together at golden hour" className="h-full w-full object-cover" loading="lazy" />
                </div>
                <div className="p-8 flex-1 flex flex-col" style={{ backgroundColor: "var(--color-cream)" }}>
                  <div className="eyebrow">Join Our Community</div>
                  <h3 className="font-display text-2xl mt-3 leading-tight">Find your circle.</h3>
                  <p className="mt-3 text-sm leading-[1.7]" style={{ color: "var(--color-muted-foreground)" }}>
                    Join us for events, classes and quiet inspiration in your inbox.
                  </p>
                  <form
                    className="mt-5 flex flex-col gap-3"
                    onSubmit={(e) => { e.preventDefault(); (e.currentTarget.querySelector("input") as HTMLInputElement).value = ""; }}
                  >
                    <input
                      type="email"
                      required
                      placeholder="Your email"
                      className="px-4 py-3 text-sm bg-transparent outline-none transition-colors focus:border-[var(--color-burgundy)]"
                      style={{ border: "1px solid var(--color-input)", color: "var(--color-foreground)" }}
                    />
                    <button type="submit" className="btn btn-primary">Join</button>
                  </form>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </SiteLayout>
  );
}

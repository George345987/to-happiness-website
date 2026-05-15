import { createFileRoute } from "@tanstack/react-router";
import { SiteLayout } from "@/components/site/SiteLayout";
import { Reveal } from "@/components/site/Reveal";
import { useState } from "react";
import heroTeamUp from "@/assets/hero-teamup.jpg";

export const Route = createFileRoute("/team-up")({
  head: () => ({
    meta: [
      { title: "Team Up — To Happiness | Brand & Wellness Collaborations" },
      { name: "description", content: "Collaborate with To Happiness — wellness facilitators, sound healers, instructors, brands and creative partners." },
      { property: "og:title", content: "Team Up — To Happiness" },
      { property: "og:description", content: "Let's create meaningful experiences together." },
      { property: "og:image", content: heroTeamUp },
    ],
  }),
  component: TeamUpPage,
});

const COLLABORATORS = [
  "Wellness facilitators", "Sound healers", "Yoga instructors", "Nutrition experts",
  "Artists", "Creative workshop leaders", "Wellness brands",
];

function TeamUpPage() {
  const [submitted, setSubmitted] = useState(false);
  return (
    <SiteLayout>
      <section className="relative h-[78vh] min-h-[540px] overflow-hidden">
        <div className="hero-bg" style={{ backgroundImage: `url(${heroTeamUp})` }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(180deg, rgba(58,44,40,0.35) 0%, rgba(58,44,40,0.6) 100%)" }} />
        <div className="relative h-full container-luxe flex flex-col justify-end pb-24" style={{ color: "var(--color-cream)" }}>
          <Reveal><div className="eyebrow" style={{ color: "var(--color-cream)", opacity: 0.85 }}>Team Up</div></Reveal>
          <Reveal delay={120}>
            <h1 className="h-display mt-6 max-w-3xl" style={{ color: "var(--color-cream)" }}>
              Let's create meaningful experiences together.
            </h1>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-32">
        <div className="container-luxe grid lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-4">
            <div className="eyebrow">Collaborators</div>
            <h2 className="h-section mt-4">Who we love working with.</h2>
            <p className="mt-6 text-[1.02rem] leading-[1.8]" style={{ color: "var(--color-muted-foreground)" }}>
              We curate gatherings with a small circle of practitioners and brands that share our values.
            </p>
          </Reveal>
          <div className="lg:col-span-7 lg:col-start-6">
            <div className="flex flex-wrap gap-3">
              {COLLABORATORS.map((c, i) => (
                <Reveal key={c} delay={i * 60}>
                  <span className="inline-block px-5 py-3 font-display text-lg transition-colors hover:bg-[var(--color-burgundy)] hover:text-[var(--color-cream)]"
                        style={{ border: "1px solid var(--color-border)", color: "var(--color-burgundy)", backgroundColor: "var(--color-cream)" }}>
                    {c}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-20" style={{ backgroundColor: "var(--color-sand)" }}>
        <div className="container-luxe grid md:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="eyebrow">Brand Partnerships</div>
            <h2 className="h-section mt-4">Wellness, woven together.</h2>
          </Reveal>
          <Reveal delay={120}>
            <p className="text-[1.02rem] leading-[1.85]" style={{ color: "var(--color-foreground)" }}>
              From intimate brand activations to multi-day immersive collaborations — we co-create experiences that feel intentional, beautiful and emotionally resonant. If your brand lives in the world of beauty, wellbeing, hospitality or conscious lifestyle, we'd love to hear from you.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="py-24 md:py-36">
        <div className="container-luxe max-w-3xl">
          <Reveal>
            <div className="text-center">
              <div className="eyebrow">Collaboration Form</div>
              <h2 className="h-section mt-4">Tell us your idea.</h2>
              <div className="divider-dot" />
            </div>
          </Reveal>

          <Reveal delay={120}>
            {submitted ? (
              <div className="mt-12 p-12 text-center" style={{ backgroundColor: "var(--color-cream)", border: "1px solid var(--color-border)" }}>
                <div className="font-display text-3xl" style={{ color: "var(--color-burgundy)" }}>Thank you.</div>
                <p className="mt-4" style={{ color: "var(--color-muted-foreground)" }}>We'll be in touch soon.</p>
              </div>
            ) : (
              <form
                className="mt-12 grid gap-6"
                onSubmit={(e) => { e.preventDefault(); setSubmitted(true); }}
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Name" name="name" required />
                  <Field label="Brand" name="brand" />
                </div>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Website" name="website" type="url" />
                  <Field label="Instagram" name="instagram" />
                </div>
                <div>
                  <label className="block eyebrow mb-3">Collaboration idea</label>
                  <textarea
                    name="idea"
                    rows={6}
                    required
                    className="w-full px-5 py-4 bg-transparent outline-none transition-colors focus:border-[var(--color-burgundy)] resize-none"
                    style={{ border: "1px solid var(--color-input)", color: "var(--color-foreground)", fontFamily: "var(--font-body)" }}
                  />
                </div>
                <div className="flex justify-center">
                  <button type="submit" className="btn btn-primary">Submit</button>
                </div>
              </form>
            )}
          </Reveal>
        </div>
      </section>
    </SiteLayout>
  );
}

function Field({ label, name, type = "text", required = false }: { label: string; name: string; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="block eyebrow mb-3" htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        className="w-full px-5 py-3 bg-transparent outline-none transition-colors focus:border-[var(--color-burgundy)]"
        style={{ border: "1px solid var(--color-input)", color: "var(--color-foreground)" }}
      />
    </div>
  );
}

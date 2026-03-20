import Link from "next/link";
import { ArrowRight, Sparkles, BookOpen, FlaskConical } from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { ThemeCard } from "@/components/themes/theme-card";
import { THEMES } from "@/lib/constants";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1">
        {/* Hero */}
        <section className="hero-gradient topo-pattern relative overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-24 lg:py-32">
          <div className="relative z-10 mx-auto max-w-5xl">
            <div className="animate-fade-up">
              <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80 backdrop-blur-sm">
                A living resource for India
              </span>
            </div>

            <h1 className="animate-fade-up delay-1 mt-6 font-display text-3xl font-bold leading-[1.15] tracking-tight sm:text-5xl lg:text-6xl">
              What is resonating
              <br />
              <span className="text-secondary">in India&apos;s climate</span>
              <br />
              conversations?
            </h1>

            <p className="animate-fade-up delay-2 mt-6 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
              An open, continuously evolving space to explore what is emerging
              and shifting in public conversations on climate — bringing together
              experiments, insights, and messaging approaches from across the
              country.
            </p>

            <div className="animate-fade-up delay-3 mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Link
                href="/themes"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-5 py-3 text-sm font-semibold text-primary shadow-lg shadow-black/10 transition-all hover:shadow-xl hover:shadow-black/15 sm:px-6"
              >
                Explore Themes
                <ArrowRight size={15} />
              </Link>
              <Link
                href="/grants"
                className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/25 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/40 hover:bg-white/10 sm:px-6"
              >
                Small Grants Programme
              </Link>
            </div>
          </div>

          {/* Decorative gradient orb */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-secondary/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-48 -left-24 h-80 w-80 rounded-full bg-white/5 blur-3xl" />
        </section>

        {/* Themes Grid */}
        <section className="relative px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <div className="flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                  Focus Areas
                </span>
                <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
                  Themes We Track
                </h2>
              </div>
              <Link
                href="/themes"
                className="mt-2 text-sm font-medium text-primary transition-colors hover:text-primary-dark sm:mt-0"
              >
                View all themes &rarr;
              </Link>
            </div>
            <p className="mt-3 max-w-2xl text-muted-foreground">
              Climate communication spans many interconnected areas. Explore the
              themes shaping India&apos;s climate narrative.
            </p>
            <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {THEMES.map((theme, i) => (
                <div
                  key={theme.slug}
                  className={`animate-fade-up delay-${i + 1}`}
                >
                  <ThemeCard {...theme} />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Grants Programme — editorial callout */}
        <section className="noise-bg dark-section relative overflow-hidden px-5 py-16 text-white sm:px-8 sm:py-20">
          <div className="relative z-10 mx-auto max-w-6xl">
            <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
              <div className="lg:col-span-7">
                <span className="text-[11px] font-semibold uppercase tracking-widest text-secondary">
                  Now Accepting Proposals
                </span>
                <h2 className="mt-2 font-display text-2xl font-bold leading-tight text-[#f0ece4] sm:text-3xl lg:text-4xl">
                  Small Grants
                  <br />
                  Programme
                </h2>
                <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-[#b0aaa2]">
                  If more people are enabled to experiment with climate messaging,
                  we increase the chances of discovering what truly resonates. We
                  fund rapid, diverse experiments across languages, formats, and
                  lived experiences.
                </p>
                <Link
                  href="/grants"
                  className="mt-6 inline-flex items-center gap-2 rounded-lg bg-secondary px-5 py-3 text-sm font-semibold text-[#2a2520] transition-all hover:bg-[#e0b44e] sm:px-6"
                >
                  Learn More
                  <ArrowRight size={15} />
                </Link>
              </div>
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-3">
                  {[
                    { value: "50", label: "Grantees per round", accent: false },
                    {
                      value: "\u20B950K",
                      label: "Per experiment",
                      accent: true,
                    },
                    {
                      value: "2\u20133",
                      label: "Months per cycle",
                      accent: false,
                    },
                    {
                      value: "\u221E",
                      label: "Rolling rounds",
                      accent: true,
                    },
                  ].map((stat) => (
                    <div
                      key={stat.label}
                      className={`rounded-xl border px-4 py-5 text-center ${
                        stat.accent
                          ? "border-secondary/30 bg-secondary/10"
                          : "border-white/10 bg-white/5"
                      }`}
                    >
                      <p className="stat-value font-display text-2xl font-bold text-[#f0ece4] sm:text-3xl">
                        {stat.value}
                      </p>
                      <p className="mt-1 text-[11px] font-medium uppercase tracking-wider text-[#9a9490]">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-5 py-16 sm:px-8 sm:py-20">
          <div className="mx-auto max-w-6xl">
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              How It Works
            </span>
            <h2 className="mt-1 font-display text-2xl font-bold text-foreground sm:text-3xl">
              From Exploration to Insight
            </h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-3">
              {[
                {
                  icon: BookOpen,
                  title: "Explore",
                  description:
                    "Browse themes, experiments, and insights from climate communicators across India. See what messaging approaches are being tested.",
                  accent: "primary",
                },
                {
                  icon: FlaskConical,
                  title: "Experiment",
                  description:
                    "Apply to the Small Grants Programme to test your own climate messaging idea. Get funded to try something new.",
                  accent: "accent",
                },
                {
                  icon: Sparkles,
                  title: "Learn",
                  description:
                    "Access aggregated learnings from dozens of experiments. What worked, what didn\u2019t, and what surprised everyone.",
                  accent: "secondary",
                },
              ].map((step, i) => (
                <div
                  key={step.title}
                  className="group relative rounded-xl border border-border bg-card p-6 transition-colors hover:border-border/80 sm:p-7"
                >
                  {/* Step number */}
                  <span className="absolute -top-3 right-5 rounded-full bg-muted px-2.5 py-0.5 text-[11px] font-bold text-muted-foreground">
                    0{i + 1}
                  </span>
                  <div
                    className={`flex h-10 w-10 items-center justify-center rounded-lg ${
                      step.accent === "primary"
                        ? "bg-primary-light text-primary"
                        : step.accent === "accent"
                          ? "bg-accent-light text-accent"
                          : "bg-secondary-light text-secondary"
                    }`}
                  >
                    <step.icon size={20} />
                  </div>
                  <h3 className="mt-4 font-display text-lg font-bold text-foreground">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pull quote */}
        <section className="border-y border-border bg-muted px-5 py-14 sm:px-8 sm:py-16">
          <div className="mx-auto max-w-3xl text-center">
            <blockquote className="font-display text-xl font-bold leading-relaxed text-foreground sm:text-2xl">
              &ldquo;This pilot aims to shift climate communication from a model
              of prediction to one of distributed experimentation — where many
              voices, ideas, and approaches are tested in parallel.&rdquo;
            </blockquote>
            <p className="mt-4 text-sm text-muted-foreground">
              By enabling 50 small bets, we hope to uncover outsized insights.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}

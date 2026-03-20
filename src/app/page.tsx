import Link from "next/link";
import { ArrowRight } from "lucide-react";
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
        <section className="bg-primary px-4 py-20 text-white sm:px-6 sm:py-28">
          <div className="mx-auto max-w-4xl text-center">
            <h1 className="text-3xl font-bold leading-tight tracking-tight sm:text-5xl">
              What is resonating in India&apos;s climate conversations?
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/85">
              An open, continuously evolving space to explore what is emerging
              and shifting in public conversations on climate. Bringing together
              experiments, insights, and messaging approaches from across the
              country.
            </p>
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <Link
                href="/themes"
                className="inline-flex items-center gap-2 rounded-lg bg-white px-6 py-3 text-sm font-semibold text-primary transition-colors hover:bg-white/90"
              >
                Explore Themes
                <ArrowRight size={16} />
              </Link>
              <Link
                href="/grants"
                className="inline-flex items-center gap-2 rounded-lg border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
              >
                Small Grants Programme
              </Link>
            </div>
          </div>
        </section>

        {/* Themes Grid */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground">
              Themes We Track
            </h2>
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Climate communication spans many interconnected areas. Explore the
              themes shaping India&apos;s climate narrative.
            </p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {THEMES.map((theme) => (
                <ThemeCard key={theme.slug} {...theme} />
              ))}
            </div>
          </div>
        </section>

        {/* Grants Programme Callout */}
        <section className="bg-muted px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-2xl font-bold text-foreground">
              Small Grants Programme
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Enabling 50 climate messaging experiments across India. If more
              people are enabled to experiment with climate messaging, we
              increase the chances of discovering what truly resonates.
            </p>
            <Link
              href="/grants"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-dark"
            >
              Learn More
              <ArrowRight size={16} />
            </Link>
          </div>
        </section>

        {/* How It Works */}
        <section className="px-4 py-16 sm:px-6">
          <div className="mx-auto max-w-6xl">
            <h2 className="text-2xl font-bold text-foreground">
              How This Dashboard Works
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-3">
              {[
                {
                  title: "Explore",
                  description:
                    "Browse themes, experiments, and insights from climate communicators across India. See what messaging approaches are being tested.",
                },
                {
                  title: "Experiment",
                  description:
                    "Apply to the Small Grants Programme to test your own climate messaging idea. Get funded to try something new.",
                },
                {
                  title: "Learn",
                  description:
                    "Access aggregated learnings from dozens of experiments. What worked, what didn't, and what surprised everyone.",
                },
              ].map((step) => (
                <div
                  key={step.title}
                  className="rounded-lg border border-border bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-foreground">
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
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import {
  Calendar,
  Users,
  IndianRupee,
  Clock,
  ArrowRight,
  MapPin,
  Languages,
  Palette,
  Radio,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Small Grants Programme",
  description:
    "A rolling grants programme funding rapid, diverse, and experimental approaches to climate messaging across India.",
};

export default function GrantsPage() {
  return (
    <>
      {/* Hero band */}
      <div className="noise-bg hero-gradient relative overflow-hidden px-5 py-12 text-white sm:px-8 sm:py-16">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-secondary/10 blur-3xl" />
        <div className="relative z-10 mx-auto max-w-4xl">
          <span className="inline-block rounded-full border border-white/20 bg-white/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/80">
            Grants Programme
          </span>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl">
            Small Grants
            <br />
            Programme
          </h1>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-white/75 sm:text-lg">
            A rolling programme designed to fund rapid, diverse, and
            experimental approaches to climate messaging across India.
          </p>
        </div>
      </div>

      <div className="px-5 py-12 sm:px-8 sm:py-16">
        <div className="mx-auto max-w-4xl">
          {/* Key stats */}
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {[
              { icon: Users, label: "Grantees per round", value: "50" },
              { icon: IndianRupee, label: "Grant size", value: "\u20B950,000" },
              { icon: Clock, label: "Duration", value: "2\u20133 months" },
              { icon: Calendar, label: "Frequency", value: "Rolling" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-card p-4 text-center sm:p-5"
              >
                <stat.icon size={18} className="mx-auto text-primary" />
                <p className="stat-value mt-2 font-display text-xl font-bold text-foreground sm:text-2xl">
                  {stat.value}
                </p>
                <p className="mt-0.5 text-[11px] font-medium uppercase tracking-wider text-muted-foreground">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

          {/* Core premise */}
          <div className="mt-12 rounded-xl border-l-4 border-primary bg-primary-light/50 p-5 sm:p-6">
            <p className="font-display text-base font-bold leading-relaxed text-foreground sm:text-lg">
              If more people are enabled to experiment with climate messaging, we
              increase the chances of discovering what truly resonates.
            </p>
          </div>

          {/* Who Can Apply */}
          <section className="mt-14">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Who Can Apply
            </h2>
            <p className="mt-3 text-muted-foreground">
              We welcome applications from individuals, collectives, and
              organisations across sectors. You don&apos;t need to be a
              professional communicator, but must demonstrate:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "A clear climate lens in your idea",
                "A plausible link to climate action (behavioural, social, cultural, or narrative shifts)",
                "A willingness to experiment and learn",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Diversity */}
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              We Encourage Diversity In
            </h2>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                {
                  icon: Users,
                  text: "Voices and lived experiences",
                },
                {
                  icon: Languages,
                  text: "Languages and geographies",
                },
                {
                  icon: Palette,
                  text: "Formats (digital, offline, arts-based, community-led)",
                },
                {
                  icon: Radio,
                  text: "Platforms and audiences",
                },
              ].map((item) => (
                <div
                  key={item.text}
                  className="flex items-start gap-3 rounded-xl border border-border bg-card px-4 py-3.5"
                >
                  <item.icon
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-secondary"
                  />
                  <span className="text-sm text-muted-foreground">
                    {item.text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* Selection Process */}
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Selection Process
            </h2>
            <p className="mt-3 text-muted-foreground">
              Applicants submit a short proposal outlining what they want to do,
              why they believe it will resonate, and how they will use the grant.
              A jury selects grantees based on:
            </p>
            <ul className="mt-5 space-y-3">
              {[
                "Originality and creativity of the idea",
                "Clarity of the climate connection",
                "Feasibility within the timeline and budget",
                "Potential for learning and insight generation",
              ].map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <span className="mt-1 flex h-5 w-5 flex-shrink-0 items-center justify-center rounded-full bg-secondary/10">
                    <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
          </section>

          {/* Beyond Round 1 */}
          <section className="mt-12">
            <h2 className="font-display text-xl font-bold text-foreground sm:text-2xl">
              Beyond Round 1
            </h2>
            <p className="mt-3 text-muted-foreground">
              Promising approaches and ideas that demonstrate traction or
              learning potential will be supported through subsequent rounds of
              funding, enabling deeper exploration, iteration, and scale.
            </p>
          </section>

          {/* Apply CTA */}
          <section className="mt-14 overflow-hidden rounded-xl border border-border bg-muted">
            <div className="p-6 text-center sm:p-8">
              <h2 className="font-display text-xl font-bold text-foreground">
                Current Rounds
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Grant rounds will be listed here when applications open. Check
                back soon.
              </p>
              <button
                disabled
                className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white opacity-40 cursor-not-allowed"
              >
                Apply Now
                <ArrowRight size={15} />
              </button>
              <p className="mt-2 text-xs text-muted-foreground">
                Applications are not yet open
              </p>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}

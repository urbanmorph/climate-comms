import type { Metadata } from "next";
import { Calendar, Users, IndianRupee, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Small Grants Programme",
  description:
    "A rolling grants programme funding rapid, diverse, and experimental approaches to climate messaging across India.",
};

export default function GrantsPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-3xl font-bold text-foreground">
          Small Grants Programme
        </h1>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          A rolling programme designed to fund rapid, diverse, and experimental
          approaches to climate messaging across India. If more people are
          enabled to experiment with climate messaging, we increase the chances
          of discovering what truly resonates.
        </p>

        {/* Key stats for current defaults */}
        <div className="mt-10 grid gap-4 sm:grid-cols-4">
          {[
            {
              icon: Users,
              label: "Grantees per round",
              value: "50",
            },
            {
              icon: IndianRupee,
              label: "Grant size",
              value: "50,000",
            },
            {
              icon: Clock,
              label: "Duration",
              value: "2-3 months",
            },
            {
              icon: Calendar,
              label: "Frequency",
              value: "Rolling",
            },
          ].map((stat) => (
            <div
              key={stat.label}
              className="rounded-lg border border-border bg-white p-4 text-center"
            >
              <stat.icon
                size={20}
                className="mx-auto text-primary"
              />
              <p className="mt-2 text-xl font-bold text-foreground">
                {stat.value}
              </p>
              <p className="text-xs text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Who Can Apply */}
        <section className="mt-12">
          <h2 className="text-xl font-bold text-foreground">Who Can Apply</h2>
          <p className="mt-3 text-muted-foreground">
            We welcome applications from individuals, collectives, and
            organisations across sectors. You don&apos;t need to be a
            professional communicator, but must demonstrate:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "A clear climate lens in your idea",
              "A plausible link to climate action (behavioural, social, cultural, or narrative shifts)",
              "A willingness to experiment and learn",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* We Encourage Diversity */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground">
            We Encourage Diversity In
          </h2>
          <div className="mt-4 grid gap-3 sm:grid-cols-2">
            {[
              "Voices and lived experiences",
              "Languages and geographies",
              "Formats (digital, offline, arts-based, community-led)",
              "Platforms and audiences",
            ].map((item) => (
              <div
                key={item}
                className="rounded-lg border border-border bg-white px-4 py-3 text-sm text-muted-foreground"
              >
                {item}
              </div>
            ))}
          </div>
        </section>

        {/* Selection Process */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground">
            Selection Process
          </h2>
          <p className="mt-3 text-muted-foreground">
            Applicants submit a short proposal outlining what they want to do,
            why they believe it will resonate, and how they will use the grant. A
            jury selects grantees based on:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            {[
              "Originality and creativity of the idea",
              "Clarity of the climate connection",
              "Feasibility within the timeline and budget",
              "Potential for learning and insight generation",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-secondary" />
                {item}
              </li>
            ))}
          </ul>
        </section>

        {/* Beyond Round 1 */}
        <section className="mt-10">
          <h2 className="text-xl font-bold text-foreground">Beyond Round 1</h2>
          <p className="mt-3 text-muted-foreground">
            Promising approaches and ideas that demonstrate traction or learning
            potential will be supported through subsequent rounds of funding,
            enabling deeper exploration, iteration, and scale.
          </p>
        </section>

        {/* Current Rounds + Apply CTA */}
        <section className="mt-12 rounded-lg border border-border bg-muted p-6 text-center">
          <h2 className="text-lg font-semibold text-foreground">
            Current Rounds
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Grant rounds will be listed here when applications open. Check back
            soon.
          </p>
          <button
            disabled
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-white opacity-50 cursor-not-allowed"
          >
            Apply Now
          </button>
          <p className="mt-2 text-xs text-muted-foreground">
            Applications are not yet open
          </p>
        </section>
      </div>
    </div>
  );
}

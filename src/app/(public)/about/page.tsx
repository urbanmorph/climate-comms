import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description:
    "About the Climate Comms Dashboard — a shared resource for climate communication in India.",
};

export default function AboutPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-3xl">
        <h1 className="text-3xl font-bold text-foreground">
          About the Dashboard
        </h1>

        <div className="mt-8 space-y-6 text-muted-foreground leading-relaxed">
          <p>
            The Climate Comms Dashboard is designed as a dynamic, living
            resource: an open, continuously evolving space to explore what is
            resonating, emerging, and shifting in public conversations on
            climate.
          </p>

          <p>
            Spanning multiple themes — from agriculture and urban biodiversity to
            forests, air, water, and livelihoods — the dashboard brings together
            diverse experiments, insights, and messaging approaches from across
            the country.
          </p>

          <p>
            It is intended to be used anytime, by anyone working on climate, as a
            practical tool to inform strategies, spark ideas, and ground
            campaigns in real-world learning.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">
            Why This Exists
          </h2>

          <p>
            Climate communication has evolved significantly, with growing
            evidence on what should influence behaviour change. Yet, in practice,
            what resonates with people — and especially what spreads widely —
            remains deeply unpredictable.
          </p>

          <p>
            Viral moments, cultural traction, and shifts in public imagination
            often emerge from unexpected places, outside formal communication
            strategies. At the same time, the ability to create and disseminate
            messages is no longer limited to professional communicators.
          </p>

          <h2 className="text-xl font-bold text-foreground pt-4">
            What We Aim To Do
          </h2>

          <p>By making information visible across geographies, languages,
            formats, and audiences, the dashboard aims to:</p>

          <ul className="space-y-2 text-sm">
            {[
              "Reduce fragmentation of knowledge across the climate communication ecosystem",
              "Enable more responsive, creative, and effective climate communication",
              "Build a shared, practice-based knowledge base for practitioners",
              "Unlock creativity and agency in climate storytelling and messaging",
              "Generate real-world insights on what drives engagement and action",
            ].map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
                {item}
              </li>
            ))}
          </ul>

          <h2 className="text-xl font-bold text-foreground pt-4">
            For Everyone Working on Climate
          </h2>

          <p>
            Whether you are a campaigner, researcher, storyteller, community
            organiser, journalist, or simply someone who cares about how we talk
            about climate — this dashboard is for you. Browse experiments, learn
            from what others are trying, and contribute your own insights.
          </p>
        </div>
      </div>
    </div>
  );
}

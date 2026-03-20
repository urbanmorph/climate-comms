import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Learnings",
  description:
    "Aggregated insights from climate messaging experiments across India.",
};

export default function LearningsPage() {
  return (
    <div className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
          Insights
        </span>
        <h1 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Learnings
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Synthesised insights from distributed climate messaging experiments.
          What drives engagement, what shifts narratives, and what inspires
          action.
        </p>

        {/* Empty state */}
        <div className="mt-20 flex flex-col items-center pb-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
            <Lightbulb size={26} className="text-muted-foreground" />
          </div>
          <h2 className="mt-5 font-display text-lg font-bold text-foreground">
            Learnings coming soon
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            As experiments are completed and reports are reviewed, aggregated
            learnings will be published here to inform strategies and inspire
            further experimentation.
          </p>
        </div>
      </div>
    </div>
  );
}

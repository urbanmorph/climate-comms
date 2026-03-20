import type { Metadata } from "next";
import { Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "Learnings",
  description:
    "Aggregated insights from climate messaging experiments across India.",
};

export default function LearningsPage() {
  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-foreground">Learnings</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Synthesised insights from distributed climate messaging experiments.
          What drives engagement, what shifts narratives, and what inspires
          action.
        </p>

        {/* Empty state */}
        <div className="mt-16 flex flex-col items-center text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-muted">
            <Lightbulb size={28} className="text-muted-foreground" />
          </div>
          <h2 className="mt-4 text-lg font-semibold text-foreground">
            Learnings coming soon
          </h2>
          <p className="mt-2 max-w-md text-sm text-muted-foreground">
            As experiments are completed and reports are reviewed, aggregated
            learnings will be published here to inform strategies and inspire
            further experimentation.
          </p>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import { FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "Experiments",
  description:
    "Browse climate messaging experiments from across India — what worked, what didn't, and what surprised everyone.",
};

export default function ExperimentsPage() {
  return (
    <div className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
          Gallery
        </span>
        <h1 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Experiments
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          A gallery of climate messaging experiments from grantees across India.
          Explore what approaches are being tested, what audiences are being
          reached, and what insights are emerging.
        </p>

        {/* Empty state */}
        <div className="mt-20 flex flex-col items-center pb-12 text-center">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-border bg-card">
            <FlaskConical size={26} className="text-muted-foreground" />
          </div>
          <h2 className="mt-5 font-display text-lg font-bold text-foreground">
            Experiments coming soon
          </h2>
          <p className="mt-2 max-w-md text-sm leading-relaxed text-muted-foreground">
            As grantees from the Small Grants Programme complete their messaging
            experiments, their work will be showcased here for the community to
            learn from.
          </p>
        </div>
      </div>
    </div>
  );
}

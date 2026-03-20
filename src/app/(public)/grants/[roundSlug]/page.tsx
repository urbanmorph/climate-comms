import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Grant Round",
};

export default async function RoundDetailPage({
  params,
}: {
  params: Promise<{ roundSlug: string }>;
}) {
  const { roundSlug } = await params;

  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/grants"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          All Rounds
        </Link>

        <div className="rounded-lg border border-border bg-muted p-8 text-center">
          <h1 className="text-xl font-semibold text-foreground">
            Round: {roundSlug}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            Round details will be displayed here once grant rounds are created in
            the system.
          </p>
        </div>
      </div>
    </div>
  );
}

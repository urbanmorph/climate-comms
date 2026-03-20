import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import {
  Wheat,
  TreePine,
  Droplets,
  Wind,
  Flower2,
  HandCoins,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { THEMES } from "@/lib/constants";
import { notFound } from "next/navigation";

const iconMap: Record<string, LucideIcon> = {
  Wheat,
  TreePine,
  Droplets,
  Wind,
  Flower2,
  HandCoins,
};

export async function generateStaticParams() {
  return THEMES.map((theme) => ({ slug: theme.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const theme = THEMES.find((t) => t.slug === slug);
  if (!theme) return { title: "Theme Not Found" };
  return {
    title: theme.name,
    description: theme.description,
  };
}

export default async function ThemeDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const theme = THEMES.find((t) => t.slug === slug);
  if (!theme) notFound();

  const Icon = iconMap[theme.icon] ?? Wheat;

  return (
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-4xl">
        <Link
          href="/themes"
          className="mb-6 inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
        >
          <ArrowLeft size={14} />
          All Themes
        </Link>

        <div className="flex items-center gap-4">
          <div
            className="flex h-14 w-14 items-center justify-center rounded-xl"
            style={{ backgroundColor: `${theme.color}15` }}
          >
            <Icon size={28} style={{ color: theme.color }} />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">{theme.name}</h1>
            <div
              className="mt-1 h-1 w-16 rounded-full"
              style={{ backgroundColor: theme.color }}
            />
          </div>
        </div>

        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          {theme.description}
        </p>

        {/* Placeholder sections for future content */}
        <div className="mt-12 grid gap-8 sm:grid-cols-2">
          <div className="rounded-lg border border-border bg-white p-6">
            <h2 className="text-lg font-semibold text-foreground">
              Experiments
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Messaging experiments related to {theme.name.toLowerCase()} will
              appear here as grantees complete their work.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-white p-6">
            <h2 className="text-lg font-semibold text-foreground">Learnings</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Aggregated insights and learnings from{" "}
              {theme.name.toLowerCase()}-focused experiments will be shared
              here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, FlaskConical, Lightbulb } from "lucide-react";
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
  return { title: theme.name, description: theme.description };
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
    <>
      {/* Theme hero band */}
      <div
        className="relative overflow-hidden px-5 py-10 text-white sm:px-8 sm:py-14"
        style={{
          background: `linear-gradient(135deg, ${theme.color}dd, ${theme.color}99)`,
        }}
      >
        <div className="pointer-events-none absolute -bottom-6 -right-6 opacity-10">
          <Icon size={180} className="text-white" strokeWidth={0.8} />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl">
          <Link
            href="/themes"
            className="mb-4 inline-flex items-center gap-1 text-sm text-white/70 transition-colors hover:text-white"
          >
            <ArrowLeft size={14} />
            All Themes
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/20 bg-white/15 backdrop-blur-sm">
              <Icon size={24} className="text-white" />
            </div>
            <h1 className="font-display text-3xl font-bold sm:text-4xl">
              {theme.name}
            </h1>
          </div>
        </div>
      </div>

      <div className="px-5 py-10 sm:px-8 sm:py-14">
        <div className="mx-auto max-w-4xl">
          <p className="text-lg leading-relaxed text-muted-foreground">
            {theme.description}
          </p>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-primary/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-light text-primary">
                <FlaskConical size={20} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground">
                Experiments
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Messaging experiments related to {theme.name.toLowerCase()} will
                appear here as grantees complete their work.
              </p>
            </div>
            <div className="group rounded-xl border border-border bg-card p-6 transition-colors hover:border-secondary/20">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-light text-secondary">
                <Lightbulb size={20} />
              </div>
              <h2 className="mt-4 font-display text-lg font-bold text-foreground">
                Learnings
              </h2>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Aggregated insights from {theme.name.toLowerCase()}-focused
                experiments will be shared here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { ThemeCard } from "@/components/themes/theme-card";
import { THEMES } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Themes",
  description:
    "Explore the themes shaping India's climate communication landscape.",
};

export default function ThemesPage() {
  return (
    <div className="px-5 py-12 sm:px-8 sm:py-16">
      <div className="mx-auto max-w-6xl">
        <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
          Focus Areas
        </span>
        <h1 className="mt-1 font-display text-3xl font-bold text-foreground sm:text-4xl">
          Themes
        </h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Climate communication spans many interconnected areas. Each theme
          brings together experiments, insights, and messaging approaches from
          practitioners working on the ground.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((theme, i) => (
            <div key={theme.slug} className={`animate-fade-up delay-${i + 1}`}>
              <ThemeCard {...theme} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

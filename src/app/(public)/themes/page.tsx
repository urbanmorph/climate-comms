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
    <div className="px-4 py-12 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <h1 className="text-3xl font-bold text-foreground">Themes</h1>
        <p className="mt-3 max-w-2xl text-muted-foreground">
          Climate communication spans many interconnected areas. Each theme
          brings together experiments, insights, and messaging approaches from
          practitioners working on the ground.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {THEMES.map((theme) => (
            <ThemeCard key={theme.slug} {...theme} />
          ))}
        </div>
      </div>
    </div>
  );
}

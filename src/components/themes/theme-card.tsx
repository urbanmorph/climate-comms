import Link from "next/link";
import {
  Wheat,
  TreePine,
  Droplets,
  Wind,
  Flower2,
  HandCoins,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  Wheat,
  TreePine,
  Droplets,
  Wind,
  Flower2,
  HandCoins,
};

interface ThemeCardProps {
  name: string;
  slug: string;
  color: string;
  description: string;
  icon: string;
}

export function ThemeCard({
  name,
  slug,
  color,
  description,
  icon,
}: ThemeCardProps) {
  const Icon = iconMap[icon] ?? Wheat;

  return (
    <Link
      href={`/themes/${slug}`}
      className="group flex flex-col rounded-lg border border-border bg-white p-5 transition-shadow hover:shadow-md"
      style={{ borderLeftColor: color, borderLeftWidth: 4 }}
    >
      <div className="mb-3 flex items-center gap-3">
        <div
          className="flex h-10 w-10 items-center justify-center rounded-lg"
          style={{ backgroundColor: `${color}15` }}
        >
          <Icon size={20} style={{ color }} />
        </div>
        <h3 className="text-base font-semibold text-foreground group-hover:text-primary">
          {name}
        </h3>
      </div>
      <p className="text-sm leading-relaxed text-muted-foreground">
        {description}
      </p>
    </Link>
  );
}

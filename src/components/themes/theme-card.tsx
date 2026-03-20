import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
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
      className="theme-card-glow group relative flex flex-col overflow-hidden rounded-xl border border-border bg-card"
    >
      {/* Colored top band */}
      <div
        className="relative h-24 sm:h-28"
        style={{
          background: `linear-gradient(135deg, ${color}dd, ${color}88)`,
        }}
      >
        {/* Large faded icon in background */}
        <div className="absolute -bottom-3 -right-3 opacity-[0.15]">
          <Icon size={80} className="text-white" strokeWidth={1} />
        </div>
        {/* Icon badge */}
        <div className="absolute bottom-0 left-5 translate-y-1/2">
          <div
            className="flex h-11 w-11 items-center justify-center rounded-xl border-2 border-card shadow-sm"
            style={{ backgroundColor: color }}
          >
            <Icon size={20} className="text-white" />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-1 flex-col px-5 pb-5 pt-8">
        <div className="flex items-start justify-between">
          <h3 className="font-display text-lg font-bold text-foreground">
            {name}
          </h3>
          <ArrowUpRight
            size={16}
            className="mt-1 flex-shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
          />
        </div>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
          {description}
        </p>
      </div>
    </Link>
  );
}

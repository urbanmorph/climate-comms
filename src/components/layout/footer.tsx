import Image from "next/image";
import Link from "next/link";
import { SITE_NAME } from "@/lib/constants";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-border bg-muted">
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6">
        <div className="grid gap-8 sm:grid-cols-3">
          <div>
            <h3 className="text-sm font-semibold text-foreground">
              {SITE_NAME}
            </h3>
            <p className="mt-2 text-sm text-muted-foreground">
              An open, evolving resource for climate communication in India.
            </p>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">Explore</h4>
            <ul className="mt-2 space-y-1">
              {[
                { href: "/themes", label: "Themes" },
                { href: "/experiments", label: "Experiments" },
                { href: "/learnings", label: "Learnings" },
                { href: "/grants", label: "Grants Programme" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-sm font-semibold text-foreground">About</h4>
            <ul className="mt-2 space-y-1">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  About the Dashboard
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6">
          <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
            <div className="flex items-center gap-3">
              <Image
                src="/images/rf-logo.png"
                alt="Rainmatter Foundation by Zerodha"
                width={160}
                height={40}
                className="h-8 w-auto"
              />
            </div>
            <p className="text-center text-xs text-muted-foreground sm:text-right">
              Built by{" "}
              <a
                href="https://www.urbanmorph.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                Urban Morph
              </a>{" "}
              for{" "}
              <a
                href="https://www.rainmatter.org"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-foreground underline-offset-2 hover:underline"
              >
                Rainmatter Foundation
              </a>{" "}
              as a{" "}
              <abbr
                title="People's Digital Goods & Infrastructure"
                className="font-medium text-foreground no-underline"
              >
                PDGI
              </abbr>{" "}
              artefact.
              <br />
              Licensed under{" "}
              <a
                href="https://creativecommons.org/licenses/by/4.0/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline transition-colors hover:text-foreground"
              >
                CC BY 4.0
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}

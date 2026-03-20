import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="dark-section relative mt-auto border-t border-border text-[#c4bfb6]">
      <div className="noise-bg relative" />
      <div className="relative mx-auto max-w-6xl px-5 py-12 sm:px-8">
        <div className="grid gap-10 sm:grid-cols-12">
          {/* Brand */}
          <div className="sm:col-span-5">
            <h3 className="font-display text-base font-bold text-[#f0ece4]">
              Climate Comms Dashboard
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-[#9a9490]">
              An open, evolving resource for climate communication in India.
              Explore what resonates, learn from experiments, and contribute to a
              shared knowledge base.
            </p>
          </div>

          {/* Explore */}
          <div className="sm:col-span-3 sm:col-start-7">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#9a9490]">
              Explore
            </h4>
            <ul className="mt-3 space-y-2">
              {[
                { href: "/themes", label: "Themes" },
                { href: "/experiments", label: "Experiments" },
                { href: "/learnings", label: "Learnings" },
                { href: "/grants", label: "Grants Programme" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#c4bfb6] transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* About */}
          <div className="sm:col-span-2">
            <h4 className="text-[11px] font-semibold uppercase tracking-widest text-[#9a9490]">
              About
            </h4>
            <ul className="mt-3 space-y-2">
              <li>
                <Link
                  href="/about"
                  className="text-sm text-[#c4bfb6] transition-colors hover:text-white"
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-10 flex flex-col items-start gap-5 border-t border-white/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <Image
              src="/images/rf-logo.png"
              alt="Rainmatter Foundation by Zerodha"
              width={140}
              height={36}
              className="h-7 w-auto brightness-[1.8] grayscale opacity-70"
            />
          </div>
          <p className="text-xs leading-relaxed text-[#9a9490] sm:text-right">
            Built by{" "}
            <a
              href="https://www.urbanmorph.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4bfb6] underline-offset-2 hover:text-white hover:underline"
            >
              Urban Morph
            </a>{" "}
            for{" "}
            <a
              href="https://www.rainmatter.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#c4bfb6] underline-offset-2 hover:text-white hover:underline"
            >
              Rainmatter Foundation
            </a>{" "}
            as a{" "}
            <abbr
              title="People's Digital Goods & Infrastructure"
              className="text-[#c4bfb6] no-underline"
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
              className="underline underline-offset-2 transition-colors hover:text-white"
            >
              CC BY 4.0
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

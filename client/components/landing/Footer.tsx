import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

const productLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "AI capabilities", href: "#ai" },
];

const accountLinks = [
  { label: "Sign in", href: "/login" },
  { label: "Get started", href: "/register" },
];

export default function Footer() {
  return (
    <footer className="border-t border-(--border) bg-(--cream)">
      <div className="mx-auto max-w-7xl px-5 py-12 sm:px-8 sm:py-14 lg:px-10">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <Link
              href="/"
              className="inline-flex items-center gap-2"
              aria-label="TaskFlow AI home"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--deep-forest) text-sm font-bold text-white">
                T
              </span>

              <span className="text-lg font-bold tracking-tight text-(--text-primary)">
                TaskFlow<span className="text-(--deep-forest)"> AI</span>
              </span>
            </Link>

            <p className="mt-4 max-w-sm text-sm leading-6 text-(--text-secondary)">
              A focused workspace for managing tasks, organizing projects, and
              getting more done with AI.
            </p>
          </div>

          {/* Product */}
          <div>
            <h3 className="text-sm font-semibold text-(--text-primary)">
              Product
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {productLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="w-fit text-sm text-(--text-secondary) transition-colors hover:text-(--deep-forest)"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Account */}
          <div>
            <h3 className="text-sm font-semibold text-(--text-primary)">
              Account
            </h3>

            <nav className="mt-4 flex flex-col gap-3">
              {accountLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="group inline-flex w-fit items-center gap-1 text-sm text-(--text-secondary) transition-colors hover:text-(--deep-forest)"
                >
                  {link.label}
                  {link.label === "Get started" && (
                    <ArrowUpRight
                      size={13}
                      className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    />
                  )}
                </Link>
              ))}
            </nav>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 flex flex-col gap-3 border-t border-(--border) pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-(--text-secondary)">
            © {new Date().getFullYear()} TaskFlow AI. All rights reserved.
          </p>

          <p className="text-xs text-(--text-secondary)">
            Built for focused work.
          </p>
        </div>
      </div>
    </footer>
  );
}
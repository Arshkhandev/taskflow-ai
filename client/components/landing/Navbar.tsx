import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-(--border)/70 bg-(--cream)/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10">

        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2"
          aria-label="TaskFlow AI home"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-(--deep-forest) text-sm font-bold text-white">
            T
          </span>

          <span className="text-lg font-bold tracking-tight text-(--text-primary)">
            TaskFlow
            <span className="text-(--deep-forest)"> AI</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#features"
            className="text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
          >
            Features
          </Link>

          <Link
            href="#how-it-works"
            className="text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
          >
            How it works
          </Link>

          <Link
            href="#ai"
            className="text-sm font-medium text-(--text-secondary) transition hover:text-(--text-primary)"
          >
            AI capabilities
          </Link>
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-2 sm:gap-3">
          <Link
            href="/login"
            className="hidden rounded-lg px-3 py-2 text-sm font-semibold text-(--text-primary) transition hover:bg-white sm:inline-flex"
          >
            Sign in
          </Link>

          <Link
            href="/register"
            className="inline-flex items-center rounded-lg bg-(--deep-forest) px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-(--dark-forest)"
          >
            Get started
          </Link>
        </div>
      </div>
    </header>
  );
}
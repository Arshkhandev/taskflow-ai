"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

const contentVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export default function CTA() {
  return (
    <section className="relative overflow-hidden bg-(--cream) px-5 py-24 sm:px-8 sm:py-32 lg:px-10">
      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          className="relative overflow-hidden rounded-3xl bg-(--deep-forest) px-6 py-16 text-center sm:px-10 sm:py-20 lg:px-16 lg:py-24"
        >
          {/* Decorative circles */}
          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.08, 1],
              opacity: [0.25, 0.4, 0.25],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-(--matcha)/30 blur-3xl"
          />

          <motion.div
            aria-hidden="true"
            animate={{
              scale: [1, 1.1, 1],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
            className="pointer-events-none absolute -bottom-32 -right-20 h-80 w-80 rounded-full bg-(--matcha)/20 blur-3xl"
          />

          {/* Content */}
          <motion.div
            variants={contentVariants}
            className="relative mx-auto max-w-3xl"
          >
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs font-semibold text-(--matcha)">
              <Sparkles size={13} />
              Start working smarter
            </div>

            <h2 className="mt-6 text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Ready to get your work
              <span className="block text-(--matcha)">
                into flow?
              </span>
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-white/70 sm:text-lg sm:leading-8">
              Bring your tasks, projects, and ideas together with a workspace
              designed to help you focus on what matters.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
              <Link
                href="/register"
                className="group inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-xl bg-(--matcha) px-6 py-3 text-sm font-semibold text-(--dark-forest) transition hover:-translate-y-0.5 hover:bg-white sm:w-auto"
              >
                Get started
                <ArrowRight
                  size={16}
                  className="transition-transform duration-200 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/login"
                className="inline-flex min-h-11 w-full items-center justify-center rounded-xl border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-white/10 sm:w-auto"
              >
                Sign in
              </Link>
            </div>

            <p className="mt-5 text-xs text-white/45">
              No complicated setup. Just a better way to work.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
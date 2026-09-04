"use client";

import { motion, type Variants } from "framer-motion";
import {
  CheckCircle2,
  ListPlus,
  Sparkles,
  Target,
} from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ListPlus,
    title: "Capture your work",
    description:
      "Add tasks, ideas, and goals as they come to you. Keep everything in one place instead of scattered across different tools.",
  },
  {
    number: "02",
    icon: Sparkles,
    title: "Let AI organize it",
    description:
      "TaskFlow AI helps you understand priorities, break down work, and turn your plans into actionable tasks.",
  },
  {
    number: "03",
    icon: Target,
    title: "Focus and execute",
    description:
      "Know what matters next, stay focused on your priorities, and track your progress as you move forward.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const stepVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: "easeOut",
    },
  },
};

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="relative overflow-hidden bg-white px-5 py-14 sm:px-8 sm:py-16 lg:px-10 lg:py-20"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-1/3 h-80 w-80 translate-x-1/3 rounded-full bg-(--matcha)/20 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--cream) px-3 py-1.5 text-xs font-semibold text-(--deep-forest)">
            <CheckCircle2 size={14} />
            Simple by design
          </span>

          <h2 className="mt-4 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl lg:text-5xl">
            From idea to
            <span className="text-(--deep-forest)"> done.</span>
          </h2>

          <p className="mt-4 text-base leading-7 text-(--text-secondary) sm:text-lg sm:leading-8">
            A simple workflow that helps you spend less time organizing work
            and more time actually doing it.
          </p>
        </motion.div>

        {/* Steps */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="relative mt-10 grid gap-8 md:grid-cols-3 md:gap-6 lg:mt-12"
        >
          {/* Connecting line */}
          <div
            aria-hidden="true"
            className="absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-(--border) md:block"
          />

          {steps.map((step) => {
            const Icon = step.icon;

            return (
              <motion.article
                key={step.number}
                variants={stepVariants}
                className="relative text-center"
              >
                {/* Icon */}
                <div className="relative mx-auto flex h-14 w-14 items-center justify-center rounded-full border border-(--border) bg-white shadow-sm">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-(--matcha)/40 text-(--deep-forest)">
                    <Icon size={20} strokeWidth={1.8} />
                  </div>
                </div>

                <span className="mt-4 block text-xs font-bold tracking-[0.2em] text-(--deep-forest)">
                  STEP {step.number}
                </span>

                <h3 className="mt-2 text-xl font-semibold text-(--text-primary)">
                  {step.title}
                </h3>

                <p className="mx-auto mt-2 max-w-sm text-sm leading-6 text-(--text-secondary)">
                  {step.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>

        {/* Bottom statement */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.55, delay: 0.15 }}
          className="mx-auto mt-12 max-w-3xl rounded-2xl border border-(--border) bg-(--cream) px-6 py-6 text-center sm:mt-14 sm:px-10"
        >
          <p className="text-base font-medium leading-7 text-(--text-primary) sm:text-lg">
            Less time managing your productivity system.
            <span className="text-(--deep-forest)">
              {" "}
              More time making progress.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
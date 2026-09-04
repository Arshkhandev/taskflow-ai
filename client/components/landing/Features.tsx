"use client";

import { motion, type Variants } from "framer-motion";
import {
  BrainCircuit,
  CalendarDays,
  ChartNoAxesCombined,
  FolderKanban,
  ListChecks,
  Sparkles,
} from "lucide-react";

const features = [
  {
    icon: ListChecks,
    title: "Smart task management",
    description:
      "Create, organize, and track your tasks in one focused workspace without unnecessary complexity.",
  },
  {
    icon: BrainCircuit,
    title: "AI prioritization",
    description:
      "Let AI analyze your workload and help you decide what deserves your attention next.",
  },
  {
    icon: FolderKanban,
    title: "Project workspaces",
    description:
      "Keep projects organized with dedicated workspaces that give every task a clear place.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Progress analytics",
    description:
      "Understand your productivity with clear insights into completed work, progress, and focus.",
  },
  {
    icon: CalendarDays,
    title: "Calendar planning",
    description:
      "Connect your tasks with time so you can plan your workload around what actually matters.",
  },
  {
    icon: Sparkles,
    title: "AI assistant",
    description:
      "Turn ideas into actionable tasks and get intelligent suggestions when you are stuck.",
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const cardVariants: Variants = {
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

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden bg-(--cream) px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-(--matcha)/15 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Section heading */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-2xl text-center"
        >
          <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-3 py-1.5 text-xs font-semibold text-(--deep-forest)">
            <span className="h-1.5 w-1.5 rounded-full bg-(--deep-forest)" />
            Everything in one place
          </span>

          <h2 className="mt-5 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl lg:text-5xl">
            Everything you need to
            <span className="block text-(--deep-forest)">
              stay in flow.
            </span>
          </h2>

          <p className="mt-5 text-base leading-7 text-(--text-secondary) sm:text-lg sm:leading-8">
            TaskFlow AI brings planning, execution, and intelligent
            assistance together in one simple workspace.
          </p>
        </motion.div>

        {/* Feature cards */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
        >
          {features.map((feature) => {
            const Icon = feature.icon;

            return (
              <motion.article
                key={feature.title}
                variants={cardVariants}
                whileHover={{
                  y: -5,
                  transition: {
                    duration: 0.2,
                  },
                }}
                className="group rounded-2xl border border-(--border) bg-white p-6 shadow-sm transition-shadow duration-300 hover:shadow-xl hover:shadow-(--deep-forest)/5 sm:p-7"
              >
                {/* Icon */}
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-(--matcha)/30 text-(--deep-forest) transition-colors duration-300 group-hover:bg-(--matcha)">
                  <Icon size={21} strokeWidth={1.8} />
                </div>

                {/* Title */}
                <h3 className="mt-6 text-lg font-semibold text-(--text-primary)">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="mt-3 text-sm leading-6 text-(--text-secondary)">
                  {feature.description}
                </p>

                {/* Hover indicator */}
                <div className="mt-6 flex items-center gap-2 text-xs font-semibold text-(--deep-forest) opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  Explore feature
                  <span className="transition-transform duration-300 group-hover:translate-x-1">
                    →
                  </span>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
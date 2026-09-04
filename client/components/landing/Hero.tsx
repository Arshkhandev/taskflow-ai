"use client";

import Link from "next/link";
import { motion, type Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 24,
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

const floatingVariants: Variants = {
  initial: {
    y: 0,
  },
  animate: {
    y: [-6, 6, -6],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[var(--cream)]">
      {/* Decorative background elements */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-20 h-72 w-72 -translate-x-1/2 rounded-full bg-[var(--matcha)]/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 top-40 h-80 w-80 rounded-full bg-[var(--matcha)]/10 blur-3xl"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative mx-auto flex min-h-[calc(100vh-80px)] max-w-7xl flex-col items-center px-5 pb-16 pt-20 text-center sm:px-8 sm:pt-24 lg:px-10 lg:pt-28"
      >
        {/* Badge */}
        <motion.div variants={itemVariants}>
          <div className="inline-flex items-center gap-2 rounded-full border border-[var(--border)] bg-white px-4 py-2 text-xs font-semibold text-[var(--deep-forest)] shadow-sm sm:text-sm">
            <span className="h-2 w-2 rounded-full bg-[var(--deep-forest)]" />
            AI-powered task management
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          variants={itemVariants}
          className="mx-auto mt-7 max-w-5xl text-center text-5xl font-bold leading-[1.05] tracking-[-0.04em] text-[var(--text-primary)] sm:text-6xl lg:text-7xl xl:text-8xl"
        >
          Turn your work into{" "}
          <span className="text-[var(--deep-forest)]">
            meaningful progress.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mt-7 max-w-2xl text-base leading-7 text-[var(--text-secondary)] sm:text-lg sm:leading-8"
        >
          TaskFlow AI helps you organize tasks, prioritize your workload, and
          use AI to turn ideas into action.
        </motion.p>

        {/* CTA buttons */}
        <motion.div
          variants={itemVariants}
          className="mt-8 flex w-full flex-col items-center justify-center gap-3 sm:w-auto sm:flex-row"
        >
          <Link
            href="/register"
            className="inline-flex w-full items-center justify-center rounded-xl bg-[var(--deep-forest)] px-7 py-3.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg sm:w-auto"
          >
            Start for free
          </Link>

          <Link
            href="#features"
            className="inline-flex w-full items-center justify-center rounded-xl border border-[var(--border)] bg-white px-7 py-3.5 text-sm font-semibold text-[var(--text-primary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--deep-forest)] hover:shadow-md sm:w-auto"
          >
            Explore TaskFlow
          </Link>
        </motion.div>

        {/* Supporting text */}
        <motion.p
          variants={itemVariants}
          className="mt-6 text-sm text-[var(--text-secondary)]"
        >
          Built for focused individuals and modern teams.
        </motion.p>

        {/* Product preview */}
        <motion.div
          variants={itemVariants}
          className="relative mt-16 w-full max-w-5xl sm:mt-20"
        >
          <motion.div
            variants={floatingVariants}
            initial="initial"
            animate="animate"
            className="relative rounded-2xl border border-[var(--border)] bg-white p-3 shadow-2xl sm:p-5"
          >
            {/* Browser top bar */}
            <div className="flex items-center justify-between rounded-xl border border-[var(--border)] bg-[var(--cream)] px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
              </div>

              <div className="hidden rounded-lg border border-[var(--border)] bg-white px-8 py-1.5 text-xs text-[var(--text-secondary)] sm:block">
                app.taskflow.ai
              </div>

              <div className="w-10" />
            </div>

            {/* Dashboard preview */}
            <div className="mt-3 grid min-h-[300px] grid-cols-1 gap-3 rounded-xl bg-[var(--cream)] p-3 sm:grid-cols-[180px_1fr] sm:p-4">
              {/* Sidebar */}
              <div className="hidden rounded-xl bg-white p-4 sm:block">
                <div className="flex items-center gap-2">
                  <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[var(--deep-forest)] text-sm font-bold text-white">
                    T
                  </div>

                  <span className="text-sm font-bold text-[var(--text-primary)]">
                    TaskFlow
                  </span>
                </div>

                <div className="mt-8 space-y-2">
                  <div className="rounded-lg bg-[var(--matcha)]/40 px-3 py-2 text-left text-xs font-semibold text-[var(--deep-forest)]">
                    Dashboard
                  </div>

                  <div className="px-3 py-2 text-left text-xs text-[var(--text-secondary)]">
                    Tasks
                  </div>

                  <div className="px-3 py-2 text-left text-xs text-[var(--text-secondary)]">
                    Projects
                  </div>

                  <div className="px-3 py-2 text-left text-xs text-[var(--text-secondary)]">
                    Analytics
                  </div>
                </div>
              </div>

              {/* Main dashboard */}
              <div className="rounded-xl bg-white p-4 sm:p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-[var(--text-secondary)]">
                      Workspace
                    </p>

                    <h3 className="mt-1 text-lg font-bold text-[var(--text-primary)] sm:text-xl">
                      Good morning 👋
                    </h3>
                  </div>

                  <div className="hidden rounded-lg bg-[var(--matcha)]/30 px-3 py-2 text-xs font-semibold text-[var(--deep-forest)] sm:block">
                    Focus mode
                  </div>
                </div>

                {/* Stats */}
                <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3">
                  <StatCard
                    label="Tasks"
                    value="24"
                    change="+12%"
                  />

                  <StatCard
                    label="Completed"
                    value="18"
                    change="+18%"
                  />

                  <StatCard
                    label="Focus score"
                    value="84%"
                    change="+16%"
                    className="col-span-2 sm:col-span-1"
                  />
                </div>

                {/* Tasks */}
                <div
                  id="features"
                  className="mt-4 rounded-xl border border-[var(--border)] p-4"
                >
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm font-semibold text-[var(--text-primary)]">
                      Today&apos;s tasks
                    </h4>

                    <span className="text-xs font-medium text-[var(--deep-forest)]">
                      View all
                    </span>
                  </div>

                  <div className="mt-4 space-y-3">
                    <TaskRow
                      title="Plan weekly priorities"
                      completed
                    />

                    <TaskRow
                      title="Review project progress"
                      completed
                    />

                    <TaskRow
                      title="Prepare tomorrow's tasks"
                    />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}

function StatCard({
  label,
  value,
  change,
  className = "",
}: {
  label: string;
  value: string;
  change: string;
  className?: string;
}) {
  return (
    <div
      className={`rounded-xl border border-[var(--border)] bg-[var(--cream)] p-4 ${className}`}
    >
      <p className="text-xs text-[var(--text-secondary)]">{label}</p>

      <p className="mt-1 text-2xl font-bold tracking-tight text-[var(--text-primary)]">
        {value}
      </p>

      <p className="mt-1 text-[10px] font-semibold text-[var(--deep-forest)]">
        {change} this month
      </p>
    </div>
  );
}

function TaskRow({
  title,
  completed = false,
}: {
  title: string;
  completed?: boolean;
}) {
  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
          completed
            ? "border-[var(--deep-forest)] bg-[var(--deep-forest)]"
            : "border-[var(--border)] bg-white"
        }`}
      >
        {completed && (
          <span className="text-[10px] font-bold text-white">✓</span>
        )}
      </div>

      <span
        className={`text-xs ${
          completed
            ? "text-[var(--text-secondary)] line-through"
            : "font-medium text-[var(--text-primary)]"
        }`}
      >
        {title}
      </span>
    </div>
  );
}
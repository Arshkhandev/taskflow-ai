"use client";

import { motion, type Variants } from "framer-motion";
import {
  ArrowUpRight,
  BrainCircuit,
  Check,
  Sparkles,
  WandSparkles,
} from "lucide-react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 25,
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

const capabilities = [
  "Break large goals into actionable tasks",
  "Identify what should be prioritized next",
  "Turn natural language into structured work",
  "Suggest smarter ways to organize your workload",
];

export default function AISection() {
  return (
    <section
      id="ai"
      className="relative overflow-hidden bg-(--cream) px-5 py-24 sm:px-8 sm:py-32 lg:px-10"
    >
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-96 w-96 rounded-full bg-(--matcha)/20 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-(--matcha)/15 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2 lg:gap-20">
        {/* Left: AI workspace preview */}
        <motion.div
          initial={{ opacity: 0, x: -35 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="order-2 lg:order-1"
        >
          <motion.div
            whileHover={{
              y: -5,
              transition: { duration: 0.25 },
            }}
            className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-2xl shadow-(--deep-forest)/10"
          >
            {/* Window header */}
            <div className="flex items-center justify-between border-b border-(--border) px-4 py-3 sm:px-5">
              <div className="flex items-center gap-2">
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-(--deep-forest) text-white">
                  <Sparkles size={14} />
                </div>

                <div>
                  <p className="text-xs font-semibold text-(--text-primary)">
                    TaskFlow AI
                  </p>
                  <p className="text-[10px] text-(--text-secondary)">
                    Intelligent workspace
                  </p>
                </div>
              </div>

              <span className="flex items-center gap-1.5 rounded-full bg-(--matcha)/30 px-2.5 py-1 text-[10px] font-semibold text-(--deep-forest)">
                <span className="h-1.5 w-1.5 rounded-full bg-(--deep-forest)" />
                AI Ready
              </span>
            </div>

            {/* AI prompt */}
            <div className="p-5 sm:p-7">
              <div className="rounded-xl border border-(--border) bg-(--cream) p-4">
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-(--deep-forest) text-white">
                    <BrainCircuit size={14} />
                  </div>

                  <div>
                    <p className="text-xs font-medium text-(--text-secondary)">
                      You
                    </p>
                    <p className="mt-1 text-sm leading-6 text-(--text-primary)">
                      Help me organize my product launch for next week.
                    </p>
                  </div>
                </div>
              </div>

              {/* AI response */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.35 }}
                className="mt-4 rounded-xl border border-(--matcha) bg-white p-4"
              >
                <div className="flex items-start gap-3">
                  <div className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-(--matcha) text-(--deep-forest)">
                    <WandSparkles size={14} />
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="text-xs font-semibold text-(--deep-forest)">
                      TaskFlow AI
                    </p>

                    <p className="mt-1 text-sm leading-6 text-(--text-primary)">
                      I&apos;d break your launch into these priorities:
                    </p>

                    <div className="mt-4 space-y-2">
                      {[
                        "Finalize product details",
                        "Prepare launch content",
                        "Review marketing checklist",
                        "Schedule launch announcement",
                      ].map((task, index) => (
                        <motion.div
                          key={task}
                          initial={{ opacity: 0, x: -10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{
                            duration: 0.3,
                            delay: 0.45 + index * 0.08,
                          }}
                          className="flex items-center gap-2.5 rounded-lg bg-(--cream) px-3 py-2.5"
                        >
                          <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--matcha) text-(--deep-forest)">
                            <Check size={12} strokeWidth={2.5} />
                          </div>

                          <span className="text-xs font-medium text-(--text-primary)">
                            {task}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Input */}
              <div className="mt-4 flex items-center gap-3 rounded-xl border border-(--border) bg-white px-4 py-3">
                <span className="flex-1 truncate text-xs text-(--text-secondary)">
                  Ask TaskFlow AI anything...
                </span>

                <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-(--deep-forest) text-white">
                  <ArrowUpRight size={14} />
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Right: Content */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="order-1 lg:order-2"
        >
          <motion.div variants={itemVariants}>
            <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-white px-3 py-1.5 text-xs font-semibold text-(--deep-forest)">
              <Sparkles size={13} />
              Intelligence built in
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="mt-5 text-3xl font-bold tracking-tight text-(--text-primary) sm:text-4xl lg:text-5xl"
          >
            Your work.
            <span className="block text-(--deep-forest)">
              A little smarter.
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mt-5 max-w-xl text-base leading-7 text-(--text-secondary) sm:text-lg sm:leading-8"
          >
            TaskFlow AI helps you turn messy ideas into clear actions. Ask
            questions, break down goals, and get useful suggestions without
            leaving your workspace.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-8 space-y-4"
          >
            {capabilities.map((capability) => (
              <div
                key={capability}
                className="flex items-start gap-3"
              >
                <div className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(--matcha) text-(--deep-forest)">
                  <Check size={12} strokeWidth={2.5} />
                </div>

                <p className="text-sm leading-6 text-(--text-primary)">
                  {capability}
                </p>
              </div>
            ))}
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-9"
          >
            <div className="inline-flex items-center gap-2 rounded-xl bg-(--deep-forest) px-5 py-3 text-sm font-semibold text-white">
              <Sparkles size={15} />
              Built for focused work
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
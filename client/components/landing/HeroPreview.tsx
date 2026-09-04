"use client";

import { motion } from "framer-motion";
import {
  CheckCircle2,
  Clock3,
  ListTodo,
  Sparkles,
  TrendingUp,
} from "lucide-react";

export default function HeroPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 60, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.15,
      }}
      whileHover={{
        y: -6,
        transition: { duration: 0.3 },
      }}
      className="relative mx-auto mt-16 w-full max-w-6xl"
    >
      {/* Glow */}
      <div className="absolute -inset-4 -z-10 rounded-2rem bg-(--matcha)/20 blur-3xl" />

      {/* Browser frame */}
      <div className="overflow-hidden rounded-2xl border border-(--border) bg-white shadow-2xl shadow-(--deep-forest)/10">

        {/* Browser top bar */}
        <div className="flex h-12 items-center justify-between border-b border-(--border) bg-(--cream) px-4 sm:px-6">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300" />
          </div>

          <div className="hidden rounded-md border border-(--border) bg-white px-6 py-1 text-xs text-(--text-secondary) sm:block">
            app.taskflow.ai/dashboard
          </div>

          <div className="w-12" />
        </div>

        {/* Dashboard */}
        <div className="grid min-h-420px grid-cols-1 md:grid-cols-[190px_1fr]">

          {/* Sidebar */}
          <aside className="hidden border-r border-(--border) bg-(--cream) p-5 md:block">
            <div className="flex items-center gap-2 font-bold text-(--text-primary)">
              <span className="flex h-7 w-7 items-center justify-center rounded-md bg-(--deep-forest) text-xs text-white">
                T
              </span>

              TaskFlow
            </div>

            <div className="mt-10 space-y-2">
              {[
                { icon: ListTodo, label: "Tasks", active: true },
                { icon: Clock3, label: "Calendar" },
                { icon: TrendingUp, label: "Analytics" },
              ].map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className={`flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm ${
                      item.active
                        ? "bg-(--matcha)/40 font-semibold text-(--deep-forest)"
                        : "text-(--text-secondary)"
                    }`}
                  >
                    <Icon size={16} />
                    {item.label}
                  </div>
                );
              })}
            </div>

            <div className="mt-10 rounded-xl bg-(--deep-forest) p-4 text-white">
              <Sparkles size={18} />

              <p className="mt-3 text-sm font-semibold">
                AI Assistant
              </p>

              <p className="mt-1 text-xs leading-5 text-white/70">
                Turn your ideas into actionable tasks.
              </p>
            </div>
          </aside>

          {/* Main dashboard */}
          <div className="bg-white p-5 sm:p-7">

            {/* Header */}
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-(--text-secondary)">
                  Workspace
                </p>

                <h3 className="mt-1 text-xl font-bold text-(--text-primary) sm:text-2xl">
                  Good morning 👋
                </h3>

                <p className="mt-1 text-sm text-(--text-secondary)">
              Here&apos;s what needs your attention today.
                </p>
              </div>

              <div className="hidden rounded-lg bg-(--matcha)/30 px-3 py-2 text-xs font-semibold text-(--deep-forest) sm:block">
                AI optimized
              </div>
            </div>

            {/* Stats */}
            <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
              <StatCard
                label="Total tasks"
                value="24"
                change="+12%"
              />

              <StatCard
                label="Completed"
                value="16"
                change="+8%"
              />

              <StatCard
                label="In progress"
                value="6"
                change="+4%"
              />

              <StatCard
                label="Focus score"
                value="84%"
                change="+16%"
              />
            </div>

            {/* Content */}
            <div className="mt-4 grid gap-4 lg:grid-cols-[1.4fr_1fr]">

              {/* Tasks */}
              <div className="rounded-xl border border-(--border) p-4">
                <div className="flex items-center justify-between">
                  <h4 className="font-semibold text-(--text-primary)">
                  Today&apos;s tasks
                  </h4>

                  <span className="text-xs font-medium text-(--deep-forest)">
                    View all
                  </span>
                </div>

                <div className="mt-4 space-y-3">
                  <TaskRow
                    title="Design landing page"
                    category="Product"
                    completed
                  />

                  <TaskRow
                    title="Connect authentication API"
                    category="Development"
                  />

                  <TaskRow
                    title="Prepare AI task suggestions"
                    category="AI"
                  />

                  <TaskRow
                    title="Review weekly progress"
                    category="Planning"
                  />
                </div>
              </div>

              {/* AI card */}
              <motion.div
                animate={{
                  y: [0, -4, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="rounded-xl bg-(--deep-forest) p-5 text-white"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/10">
                    <Sparkles size={18} />
                  </div>

                  <span className="rounded-full bg-white/10 px-2.5 py-1 text-[10px] font-medium">
                    AI
                  </span>
                </div>

                <h4 className="mt-5 text-lg font-semibold">
                  Smart suggestion
                </h4>

                <p className="mt-2 text-sm leading-6 text-white/70">
                  You have three development tasks competing for
                  attention. Start with authentication — it unlocks
                  the next stage of your project.
                </p>

                <button className="mt-5 rounded-lg bg-(--matcha) px-4 py-2 text-xs font-bold text-(--dark-forest)">
                  Apply suggestion
                </button>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

type StatCardProps = {
  label: string;
  value: string;
  change: string;
};

function StatCard({ label, value, change }: StatCardProps) {
  return (
    <div className="rounded-xl border border-(--border) p-4">
      <p className="text-xs text-(--text-secondary)">
        {label}
      </p>

      <div className="mt-2 flex items-end justify-between gap-2">
        <p className="text-xl font-bold text-(--text-primary)">
          {value}
        </p>

        <span className="text-[10px] font-semibold text-(--deep-forest)">
          {change}
        </span>
      </div>
    </div>
  );
}

type TaskRowProps = {
  title: string;
  category: string;
  completed?: boolean;
};

function TaskRow({
  title,
  category,
  completed = false,
}: TaskRowProps) {
  return (
    <div className="flex items-center gap-3 rounded-lg bg-(--cream) p-3">
      <CheckCircle2
        size={17}
        className={
          completed
            ? "text-(--deep-forest)"
            : "text-(--border)"
        }
      />

      <div className="min-w-0 flex-1">
        <p
          className={`truncate text-xs font-semibold ${
            completed
              ? "text-(--text-secondary) line-through"
              : "text-(--text-primary)"
          }`}
        >
          {title}
        </p>

        <p className="mt-0.5 text-[10px] text-(--text-secondary)">
          {category}
        </p>
      </div>
    </div>
  );
}
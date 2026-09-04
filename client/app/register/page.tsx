"use client";

import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { toast } from "sonner";

import { useAuth } from "@/context/AuthContext";
import {
  registerSchema,
  type RegisterFormData,
} from "@/utils/validation/auth.schema";

export default function RegisterPage() {
  const router = useRouter();
  const { register: registerUser } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
  });

  const onSubmit = async (data: RegisterFormData) => {
    try {
      await registerUser(data);

      toast.success("Account created successfully!");

      router.push("/dashboard");
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        const message =
          error.response?.data?.message ||
          "Unable to create your account.";

        toast.error(message);
      } else {
        toast.error("Something went wrong. Please try again.");
      }
    }
  };

  return (
    <main className="relative min-h-screen overflow-hidden bg-(--cream) px-5 py-12 text-(--text-primary) sm:px-8 lg:px-10">
      {/* Background decoration */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-100 w-100 -translate-x-1/2 rounded-full bg-(--matcha)/30 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute bottom-0 right-0 h-75 w-75 rounded-full bg-(--matcha)/15 blur-3xl"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.55, ease: "easeOut" }}
        className="relative mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-md flex-col justify-center"
      >
        {/* Brand */}
        <div className="mb-8 text-center">
          <Link
            href="/"
            className="inline-flex items-center gap-3 transition-opacity hover:opacity-80"
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-(--deep-forest) text-sm font-bold text-white shadow-sm">
              T
            </span>

            <span className="text-xl font-bold tracking-tight text-(--text-primary)">
              TaskFlow AI
            </span>
          </Link>

          <p className="mt-4 text-sm text-(--text-secondary)">
            Create your account and start managing your work.
          </p>
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.45, delay: 0.08, ease: "easeOut" }}
          className="rounded-3xl border border-(--border) bg-white p-6 shadow-[0_20px_60px_rgba(40,84,61,0.08)] sm:p-8"
        >
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-(--border) bg-(--cream) px-3 py-1.5 text-xs font-semibold text-(--deep-forest)">
              <span className="h-1.5 w-1.5 rounded-full bg-(--deep-forest)" />
              Get started
            </span>

            <h1 className="mt-4 text-2xl font-bold tracking-tight text-(--text-primary)">
              Create account
            </h1>

            <p className="mt-2 text-sm leading-6 text-(--text-secondary)">
              Set up your TaskFlow AI workspace.
            </p>
          </div>

          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-5"
          >
            {/* Name */}
            <div>
              <label
                htmlFor="name"
                className="mb-2 block text-sm font-semibold text-(--text-primary)"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                placeholder="Your name"
                autoComplete="name"
                {...register("name")}
                className={`w-full rounded-xl border bg-(--cream) px-4 py-3.5 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-secondary)/60 ${
                  errors.name
                    ? "border-red-400 focus:border-red-500"
                    : "border-(--border) focus:border-(--deep-forest) focus:bg-white"
                }`}
              />

              {errors.name && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-semibold text-(--text-primary)"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                placeholder="you@example.com"
                autoComplete="email"
                {...register("email")}
                className={`w-full rounded-xl border bg-(--cream) px-4 py-3.5 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-secondary)/60 ${
                  errors.email
                    ? "border-red-400 focus:border-red-500"
                    : "border-(--border) focus:border-(--deep-forest) focus:bg-white"
                }`}
              />

              {errors.email && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="mb-2 block text-sm font-semibold text-(--text-primary)"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                placeholder="Minimum 6 characters"
                autoComplete="new-password"
                {...register("password")}
                className={`w-full rounded-xl border bg-(--cream) px-4 py-3.5 text-sm text-(--text-primary) outline-none transition placeholder:text-(--text-secondary)/60 ${
                  errors.password
                    ? "border-red-400 focus:border-red-500"
                    : "border-(--border) focus:border-(--deep-forest) focus:bg-white"
                }`}
              />

              {errors.password && (
                <p className="mt-2 text-xs font-medium text-red-500">
                  {errors.password.message}
                </p>
              )}
            </div>

            {/* Submit */}
            <motion.button
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl bg-(--deep-forest) px-4 py-3.5 text-sm font-semibold text-white shadow-sm transition hover:bg-(--deep-forest)/90 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSubmitting
                ? "Creating account..."
                : "Create account"}
            </motion.button>
          </form>

          {/* Login */}
          <p className="mt-6 text-center text-sm text-(--text-secondary)">
            Already have an account?{" "}
            <Link
              href="/login"
              className="font-semibold text-(--deep-forest) underline decoration-(--matcha) underline-offset-4 transition hover:text-(--deep-forest)/70"
            >
              Sign in
            </Link>
          </p>
        </motion.div>

        {/* Back home */}
        <Link
          href="/"
          className="mt-6 text-center text-xs font-medium text-(--text-secondary) transition hover:text-(--deep-forest)"
        >
          ← Back to TaskFlow AI
        </Link>
      </motion.div>
    </main>
  );
}
"use client";

import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "sonner";

import queryClient from "@/lib/query-client";
import { AuthProvider } from "@/context/AuthContext";

type ProvidersProps = {
  children: React.ReactNode;
};

export default function Providers({
  children,
}: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        {children}
      </AuthProvider>

      <Toaster
        richColors
        position="top-right"
      />
    </QueryClientProvider>
  );
}
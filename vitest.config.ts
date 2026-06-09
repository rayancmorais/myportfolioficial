import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "path";

export default defineConfig({
  plugins: [react()],
  test: {
    // Browser-like environment — required for React Testing Library
    environment: "jsdom",
    // Auto-import jest-dom matchers (toBeInTheDocument, etc.)
    setupFiles: ["./src/tests/setup.ts"],
    globals: true,
    coverage: {
      provider: "v8",
      reporter: ["text", "lcov", "html"],
      include: ["src/**/*.{ts,tsx}"],
      exclude: [
        "src/types/**",        // types-only — nothing to cover
        "src/app/**",          // Next.js App Router files (use e2e)
        "src/**/*.stories.tsx",
        "src/tests/**",
      ],
      thresholds: {
        lines: 70,
        functions: 70,
        branches: 60,
      },
    },
  },
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});

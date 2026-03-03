import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import path from "path"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ["react", "react-dom", "axios"],
          ui: ["@radix-ui/react-checkbox", "@radix-ui/react-label", "@radix-ui/react-select", "@radix-ui/react-slot"],
        },
      },
    },
  },
})
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/YVTCWeb/", // Add this line - must match your repository name
});

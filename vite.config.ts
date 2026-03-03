import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  server: { host: "::", port: 3001 },
  plugins: [react()],
});

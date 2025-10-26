import { loadEnv, defineConfig, Modules } from "@medusajs/framework/utils"

// Load environment variables
loadEnv(process.env.NODE_ENV || "development", process.cwd())

export default defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS || "http://localhost:8000",
      adminCors: process.env.ADMIN_CORS || "http://localhost:5173",
      authCors: process.env.AUTH_CORS || "http://localhost:8000",
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    },
  },

  modules: {
    [Modules.API_KEY]: {
      resolve: "@medusajs/api-key",
    },
  },

  // ✅ Enable admin dashboard plugin
  plugins: [
    {
      resolve: "@medusajs/admin-ui",
      options: {
        autoRebuild: true,
        path: "app", // This will serve the UI at /app
      },
    },
  ],
})

import { loadEnv, defineConfig } from '@medusajs/framework/utils'
import { Modules } from "@medusajs/framework/utils"

export default defineConfig({
  // ...existing config
  modules: {
    [Modules.API_KEY]: {
      resolve: "@medusajs/api-key",
    },
    // other modules...
  },
})

loadEnv(process.env.NODE_ENV || 'development', process.cwd())

module.exports = defineConfig({
  projectConfig: {
    databaseUrl: process.env.DATABASE_URL,
    http: {
      storeCors: process.env.STORE_CORS!,
      adminCors: process.env.ADMIN_CORS!,
      authCors: process.env.AUTH_CORS!,
      jwtSecret: process.env.JWT_SECRET || "supersecret",
      cookieSecret: process.env.COOKIE_SECRET || "supersecret",
    }
  }
})

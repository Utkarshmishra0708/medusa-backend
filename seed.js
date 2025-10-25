import { getContainer } from "@medusajs/framework"
import { Modules } from "@medusajs/framework/utils"

async function main() {
  const container = getContainer()
  const regionModule = container.resolve(Modules.REGION)
  const productModule = container.resolve(Modules.PRODUCT)

  await regionModule.createRegions({
    name: "United States",
    currency_code: "usd",
    countries: [{ iso_2: "us" }],
  })

  await productModule.createProducts({
    title: "Medusa Hoodie",
    handle: "medusa-hoodie",
    description: "A comfy hoodie for developers.",
    options: [{ title: "Size", values: ["S", "M", "L"] }],
    variants: [
      {
        title: "Hoodie Small",
        prices: [{ amount: 4900, currency_code: "usd" }],
      },
    ],
  })

  console.log("✅ Seed completed successfully!")
  process.exit(0)
}

main().catch((err) => {
  console.error("❌ Seed failed:", err)
  process.exit(1)
})
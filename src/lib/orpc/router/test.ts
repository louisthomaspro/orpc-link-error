
import { pub } from "@/lib/orpc/middlewares"

export const test = pub
  .handler(async () => {
    return { success: true }
  })


import { pub } from "@/lib/orpc/middlewares"
import myService from "@/lib/server-utils"

export const test = pub
  .handler(async () => {
    return { success: true }
  })

export const test2 = pub
  .handler(async () => {
    await myService.serverUtilsTest()
    return { success: true }
  })

import { pub } from "@/lib/orpc/middlewares"
import myService from "@/lib/service"

export const test1 = pub
  .handler(async () => {
    return { success: true }
  })

export const test2 = pub
  .handler(async () => {
    await myService.serviceFunction1()
    return { success: true }
  })
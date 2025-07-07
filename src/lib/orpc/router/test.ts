
import { pub } from "@/lib/orpc/middlewares"
import myService from "@/lib/service"
import { unstable_cache } from "next/cache"

export const test1 = pub
  .handler(async () => {
    return { success: true }
  })

export const test2 = pub
  .handler(async () => {
    await myService.serviceFunction1()
    return { success: true }
  })

export const test3 = pub.handler(async () => {
  const response = await unstable_cache(async () => asyncFunction(), ["test3"], {
    revalidate: false,
  })()

  return response
})

const asyncFunction = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000))
  return { success: true }
}
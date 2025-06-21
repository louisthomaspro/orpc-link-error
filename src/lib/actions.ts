"use server"

// import "@/lib/orpc/orpc.server";

import { client } from "@/lib/orpc"
import { handleCredits } from "@/lib/server-utils"

export const serverActionTest = async () => {
  const res = await client.test()
  await handleCredits()
  console.log("serverActionTest", res)
}
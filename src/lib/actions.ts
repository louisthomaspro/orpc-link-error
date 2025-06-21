"use server"

// import "@/lib/orpc/orpc.server";

import { client } from "@/lib/orpc"

export const serverActionTest = async () => {
  const res = await client.test()
  console.log("serverActionTest", res)
}
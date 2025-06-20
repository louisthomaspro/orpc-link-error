"use server"

import { client } from "@/lib/orpc"

export const serverActionTest1 = async () => {
  console.log("serverActionTest1")
}

export const serverActionTest2 = async () => {
  const res = await client.test()
  console.log("serverActionTest2", res)
}
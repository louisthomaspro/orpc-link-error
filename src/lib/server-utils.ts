import { client } from "@/lib/orpc"
import "server-only"

export const handleCredits = async () => {
  const res = await client.test()
  console.log("handleCredits", res)
}
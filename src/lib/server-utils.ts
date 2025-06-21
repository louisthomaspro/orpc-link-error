import { client } from "@/lib/orpc"
import "server-only"

const serverUtilsTest = async () => {
  console.log("handleCredits")
}

// Doing orpc call but no used
const handleCredits = async () => {
  const res = await client.test2()
  console.log("handleCredits2", res)
}

const myService = {
  serverUtilsTest,
  handleCredits,
}

export default myService

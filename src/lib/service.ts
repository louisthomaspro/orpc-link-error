import "server-only"

import { client } from "@/lib/orpc"

const serviceFunction1 = async () => {
  await client.test2()
  console.log("serviceFunction2 with orpc call")
}

const myService = {
  serviceFunction1,
}

export default myService

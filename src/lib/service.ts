import "server-only"

import { client } from "@/lib/orpc"

const serviceFunction1 = async () => {
  console.log("serviceFunction1")
}

const serviceFunction2 = async () => {
  await client.test2()
  console.log("serviceFunction2 with orpc call")
}

const myService = {
  serviceFunction1,
  serviceFunction2,
}

export default myService

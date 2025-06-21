import { createORPCClient } from "@orpc/client"
import { RPCLink } from "@orpc/client/fetch"
import type { RouterClient } from "@orpc/server"
import { createRouterUtils } from "@orpc/tanstack-query"

import { router } from "@/lib/orpc/router"

// https://orpc.unnoq.com/docs/adapters/next
// https://orpc.unnoq.com/docs/best-practices/optimize-ssr
declare global {
  var $client: RouterClient<typeof router> | undefined
}

const link = new RPCLink({
  url: () => {
    if (typeof window === 'undefined') {
      throw new Error('RPCLink is not allowed on the server side.')
    }

    return `${window.location.origin}/rpc`
  },
})



export const client: RouterClient<typeof router> = globalThis.$client ?? createORPCClient(link)

export const orpc = createRouterUtils(client)

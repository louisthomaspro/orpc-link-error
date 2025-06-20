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
  url: `${typeof window !== 'undefined' ? window.location.origin : 'http://localhost:3000'}/rpc`,
  headers: async () => {
    if (typeof window !== 'undefined') {
      return {}
    }

    const { headers } = await import('next/headers')
    return Object.fromEntries(await headers())
  },
})



export const client: RouterClient<typeof router> = globalThis.$client ?? createORPCClient(link)

export const orpc = createRouterUtils(client)

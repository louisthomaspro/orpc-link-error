This repository demonstrates an issue when using server actions with oRPC using "Optimized SSR" in a [Next.js](https://nextjs.org) project.\

### Issue

1. When importing a server action in page.tsx that uses orpc client.

Fixes:
- Use "Normal SSR" instead of "Optimized SSR" (https://orpc.unnoq.com/docs/adapters/next#client)
- Import orpc.server.ts in the server action.
- Use intrumentation.ts to import orpc.server.ts

2.

### Links

- [oRPC Normal SSR](https://orpc.unnoq.com/docs/adapters/next#client)
- [oRPC Optimized SSR](https://orpc.unnoq.com/docs/adapters/next#optimize-ssr)
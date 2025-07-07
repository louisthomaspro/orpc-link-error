import { client } from "@/lib/orpc";
// import { serverActionTest } from "@/lib/actions";

export default async function Home() {
  const res = await client.test3()
  // await serverActionTest()

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <pre className="bg-gray-100 p-4 rounded-lg overflow-auto text-gray-900">
        {JSON.stringify(res, null, 2)}
      </pre>
    </div>
  );
}

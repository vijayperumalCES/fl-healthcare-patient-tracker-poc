import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
import { AppClient } from "./app.client";
import { getQueryClient, trpc } from "@/trpc/server";
import { Suspense } from "react";
//import { caller } from "@/trpc/server";

const Page = () => {
  const queryClient = getQueryClient();
  void queryClient.prefetchQuery(trpc.getPatients.queryOptions());
  return(
    <div className="min-h-screen min-w-screen flex item-center justify-center">
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppClient />
        </Suspense>
      </HydrationBoundary>
    </div>
  )
}

export default Page;
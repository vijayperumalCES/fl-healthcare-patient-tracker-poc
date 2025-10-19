//"use client";
import { Button } from "@/components/ui/button";
import { requireAuth } from "@/lib/auth-utils";
import { caller } from "@/trpc/server";
import { LogoutButton } from "./logout";
// import { dehydrate, HydrationBoundary } from "@tanstack/react-query";
// import { AppClient } from "./app.client";
// import { getQueryClient, trpc } from "@/trpc/server";
// import { Suspense } from "react";
// import { authClient } from "@/lib/auth-client";
// import { requireAuth } from "@/lib/auth-utils";
//import { caller } from "@/trpc/server";

const Page = async() => {
  await requireAuth()
  //const { data} = authClient.useSession();
  // const queryClient = getQueryClient();
  // void queryClient.prefetchQuery(trpc.getPatients.queryOptions());
  const data = await caller.getUsers();
  return(
    <div className="min-h-screen min-w-screen flex item-center justify-center">
      {/* <HydrationBoundary state={dehydrate(queryClient)}>
        <Suspense fallback={<div>Loading...</div>}>
          <AppClient />
        </Suspense>
      </HydrationBoundary> */}
      {/* {JSON.stringify(data)} */}
      {/* <Button onClick={() => authClient.signOut()}>
        Logout
      </Button> */}
      Protected Server Component

        {JSON.stringify(data, null, 2)}

        <LogoutButton />
      
    </div>
  )
}

export default Page;
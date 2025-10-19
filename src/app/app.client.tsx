"use client";
import { useTRPC } from "@/trpc/client";
import { useSuspenseQuery } from "@tanstack/react-query";

export const AppClient = () => {
    const trpc = useTRPC();
    const { data: patients } = useSuspenseQuery(trpc.getPatients.queryOptions());

  return <div>{JSON.stringify(patients)}</div>;
}
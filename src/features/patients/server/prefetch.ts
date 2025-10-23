import type { inferInput } from "@trpc/tanstack-react-query";
import { trpc, prefetch } from "@/trpc/server";

type Input = inferInput<typeof trpc.patients.getMany>;

/**
 * Prefetches the medicines collection for the provided input parameters.
 *
 * This function constructs query options using `trpc.medicines.getMany.queryOptions`
 * with the supplied `params` and delegates the resulting options to the shared
 * `prefetch` utility to prime the cache or trigger background fetching.
 *
 * The function is asynchronous and resolves when `prefetch` completes. It does not
 * return the fetched data — it only ensures the request has been initiated and any
 * client-side cache has been populated according to the `prefetch` implementation.
 *
 * @param params - Input parameters forwarded to `trpc.medicines.getMany.queryOptions`.
 *                 These parameters control filtering, pagination, or other query-specific
 *                 behavior expected by the `getMany` endpoint.
 *
 * @returns A promise that resolves once the underlying `prefetch` call completes.
 *
 * @remarks
 * - Any errors thrown by `trpc.medicines.getMany.queryOptions` or by `prefetch`
 *   are propagated to the caller; callers should handle or await errors as needed.
 * - This function does not perform deduplication beyond whatever `prefetch`
 *   implements; concurrent invocations with the same params may result in multiple
 *   in-flight fetches unless the prefetch layer prevents them.
 * - No cancellation token is supported here; to cancel an in-flight request, the
 *   underlying `prefetch` implementation must provide cancellation semantics.
 *
 * @example
 * // Prime the cache for the first page of medicines before navigating to the list view
 * await prefetchMedicines({ page: 1, pageSize: 20 });
 *
 * @see trpc.patients.getMany.queryOptions
 */
export const prefetchPatients = (params: Input) => {
    return prefetch(trpc.patients.getMany.queryOptions(params));
};

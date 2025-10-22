import { useTRPC } from "@/trpc/client";
import { useQueryClient, useSuspenseQuery } from "@tanstack/react-query";
import { useMedicinesParams } from "./use-medicines-params";
import { useRouter } from 'next/navigation';
import { toast } from 'sonner';

/**
 * Suspense-enabled hook that fetches the medicines list using the TRPC client and the current
 * medicines query parameters.
 *
 * This hook:
 * - Reads the current query parameters from useMedicinesParams.
 * - Constructs the query options for the medicines.getMany TRPC procedure.
 * - Executes the query via useSuspenseQuery so the hook integrates with React Suspense.
 *
 * Behavior:
 * - While the query is loading the hook will throw a Promise so a surrounding Suspense boundary
 *   can render a fallback UI.
 * - If the query errors the hook will propagate (throw) the error; handle this via an Error
 *   Boundary.
 * - Results are subject to TRPC/react-query caching and invalidation semantics configured in the
 *   application.
 *
 * Usage notes:
 * - Call this hook unconditionally at the top level of a React function component or another hook.
 * - Do not call from non-React contexts or conditionally within a component body.
 *
 * @returns The resolved result of the medicines.getMany TRPC query (type inferred from the server
 * procedure). While loading it throws a Promise (for Suspense); on failure it throws an Error.
 * @throws Promise when the query is pending (for Suspense) or Error when the query fails.
 * @see useMedicinesParams - for the shape and derivation of query parameters.
 * @see useSuspenseQuery - for details about Suspense integration and configuration.
 * @example
 * // In a component rendered inside <Suspense fallback={...}>
 * // const medicines = useSuspenseMedicines();
 */
export const useSuspenseMedicines = () => {
    const trpc = useTRPC();
    const [params] = useMedicinesParams();
    return useSuspenseQuery(trpc.medicines.getMany.queryOptions(params));
}


// export const useCreateMedicine = () => {
//     const trpc = useTRPC();
//     const queryClient = useQueryClient();
//     const router = useRouter();
//     return trpc.medicines.create.mutationOptions({
//         onSuccess: (data) => {
//             toast.success(`Medicine "${data.name}" created successfully`);
//             queryClient.invalidateQueries(trpc.medicines.getMany.queryOptions());
//             router.push('/medicines');
//         },
//         onError: (error) => {
//             toast.error(`Failed to create medicine: ${error.message}`);
//         }
//     });
// }

// export const useUpdateMedicine = () => {
//     const trpc = useTRPC();
//     return trpc.medicines.update.useMutation();
// }

// export const useDeleteMedicine = () => {
//     const trpc = useTRPC();
//     return trpc.medicines.delete.useMutation();
// }
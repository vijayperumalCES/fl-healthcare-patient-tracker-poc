import {
  MedicinesContainer,
  MedicinesList,
} from "@/features/medicines/components/MedicinesList";
import { prefetchMedicines } from "@/features/medicines/server/prefetch";
import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SearchParams } from "nuqs";
import { medicinesParamsLoader } from "@/features/medicines/server/params-loader";

type props = {
  searchParams: Promise<SearchParams>;
};

const MedicinesPage = async ({ searchParams }: props) => {
  await requireAuth();
  const params = await medicinesParamsLoader(searchParams);
  prefetchMedicines(params);

  return (
    <MedicinesContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<div>Failed to load medicines.</div>}>
          <Suspense fallback={<div>Loading medicines...</div>}>
            <MedicinesList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </MedicinesContainer>
  );
};

export default MedicinesPage;

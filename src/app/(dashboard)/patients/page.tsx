import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SearchParams } from "nuqs";
import { prefetchDoctors } from "@/features/doctors/server/prefetch";
import { patientsParamsLoader } from "@/features/patients/server/params-loader";
import { PatientsContainer, PatientsList } from "@/features/patients/components/PatientsList";

type props = {
  searchParams: Promise<SearchParams>;
};

const PatientsPage = async ({ searchParams }: props) => {
  await requireAuth();
  const params = await patientsParamsLoader(searchParams);
  prefetchDoctors(params);

  return (
    <PatientsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<div>Failed to load Patients.</div>}>
          <Suspense fallback={<div>Loading Patients...</div>}>
            <PatientsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </PatientsContainer>
  );
};

export default PatientsPage;

import { requireAuth } from "@/lib/auth-utils";
import { HydrateClient } from "@/trpc/server";
import { Suspense } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { SearchParams } from "nuqs";
import { DoctorsContainer, DoctorsList } from "@/features/doctors/components/DoctorsList";
import { doctorsParamsLoader } from "@/features/doctors/server/params-loader";
import { prefetchDoctors } from "@/features/doctors/server/prefetch";

type props = {
  searchParams: Promise<SearchParams>;
};

const DoctorsPage = async ({ searchParams }: props) => {
  await requireAuth();
  const params = await doctorsParamsLoader(searchParams);
  prefetchDoctors(params);

  return (
    <DoctorsContainer>
      <HydrateClient>
        <ErrorBoundary fallback={<div>Failed to load Doctors.</div>}>
          <Suspense fallback={<div>Loading Doctors...</div>}>
            <DoctorsList />
          </Suspense>
        </ErrorBoundary>
      </HydrateClient>
    </DoctorsContainer>
  );
};

export default DoctorsPage;

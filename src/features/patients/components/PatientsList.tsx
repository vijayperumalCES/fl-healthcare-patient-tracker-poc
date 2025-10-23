"use client";

import { DataTable } from "@/components/data-table";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import {  useSuspensePatients } from "../hooks/use-patients";
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image"


export const PatientsList = () => {
  const { data: patients } = useSuspensePatients();

  return (
    
    <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                {patients?.items.map((pat) => (
                    <Card key={pat.id} className="@container/card">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{pat.name}</CardTitle>
                      {/* <CardDescription className="text-sm text-muted-foreground">
                      {(doc.specialties && doc.specialties.length) ? doc.specialties.join(", ") : "General"}
                      </CardDescription> */}
                      <CardAction>
                      {/* <Badge variant="outline">
                        {pat.experienceYr != null ? `${pat.experienceYr} yrs` : "N/A"}
                      </Badge> */}
                      </CardAction>
                    </CardHeader>
                    <CardFooter className="flex-col items-start gap-1.5 text-md">
    
                      {/* <div className="text-sm text-muted-foreground">
                      Education: {pat.education || "Not provided"}
                      </div>
     */}
                      {/* <div className="flex flex-wrap gap-2">
                      {(pat.specialties && pat.specialties.length)
                        ? pat.specialties.map((s: string) => (
                          <Badge key={s} variant="default" className="text-xs">
                          {s}
                          </Badge>
                        ))
                        : <Badge variant="outline" className="text-xs">General</Badge>}
                      </div> */}
                    </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
};

export const PatientsHeader = ({ disabled }: { disabled: boolean }) => {
  return (
    <>
      <EntityHeader
        isCreating={false}
        title="Patients"
        description="List of patients available"
        newButtonLabel="Add Patient"
        disabled={disabled}
        onNew={() => {}}
      />
    </>
  );
};

export const PatientsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer header={<PatientsHeader disabled={false} />}>
      {children}
    </EntityContainer>
  );
};

"use client";

import { DataTable } from "@/components/data-table";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { useSuspenseDoctors } from "../hooks/use-doctors";
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image"


export const DoctorsList = () => {
  const { data: doctors } = useSuspenseDoctors();

  return (
    
    <div className="flex flex-1 flex-col">
          <div className="@container/main flex flex-1 flex-col">
            <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
              <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
                {doctors?.items.map((doc) => (
                    <Card key={doc.id} className="@container/card">
                    <CardHeader>
                      <CardTitle className="text-lg font-semibold">{doc.name}</CardTitle>
                      {/* <CardDescription className="text-sm text-muted-foreground">
                      {(doc.specialties && doc.specialties.length) ? doc.specialties.join(", ") : "General"}
                      </CardDescription> */}
                      <CardAction>
                      <Badge variant="outline">
                        {doc.experienceYr != null ? `${doc.experienceYr} yrs` : "N/A"}
                      </Badge>
                      </CardAction>
                    </CardHeader>
    
                    <img
                     
                      src={doc.imageUrl || "/default-doctor.png"}
                      alt={doc.name}
                      className="mb-1 h-75 w-full object-cover"
                    />

                      {/* <Image
                        width={400}
                        height={400}
                        src={doc?.imageUrl ?? "/default-doctor.png"} // ✅ safe fallback
                        alt={doc.name}
                        className="mb-1 h-40 w-full object-cover rounded-lg"
                      /> */}
                          
                    <CardFooter className="flex-col items-start gap-1.5 text-md">
    
                      <div className="text-sm text-muted-foreground">
                      Education: {doc.education || "Not provided"}
                      </div>
    
                      <div className="flex flex-wrap gap-2">
                      {(doc.specialties && doc.specialties.length)
                        ? doc.specialties.map((s: string) => (
                          <Badge key={s} variant="default" className="text-xs">
                          {s}
                          </Badge>
                        ))
                        : <Badge variant="outline" className="text-xs">General</Badge>}
                      </div>
                    </CardFooter>
                    </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
  );
};

export const DoctorsHeader = ({ disabled }: { disabled: boolean }) => {
  return (
    <>
      <EntityHeader
        isCreating={false}
        title="Doctors"
        description="List of doctors available"
        newButtonLabel="Add Doctor"
        disabled={disabled}
        onNew={() => {}}
      />
    </>
  );
};

export const DoctorsContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer header={<DoctorsHeader disabled={false} />}>
      {children}
    </EntityContainer>
  );
};

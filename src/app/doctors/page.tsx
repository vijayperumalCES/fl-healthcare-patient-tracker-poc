/* eslint-disable @next/next/no-async-client-component */
"use client";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardAction,
  // CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useTRPC } from "@/trpc/client";
//import prisma from "@/lib/db";
import { useQuery } from "@tanstack/react-query";

const Doctor = () => {
  const trpc = useTRPC();
  const { data: doctors } = useQuery(trpc.getDoctors.queryOptions());
  //const doctors = await prisma.doctor.findMany();
  return (
    <div className="flex flex-1 flex-col">
      <div className="@container/main flex flex-1 flex-col gap-2">
        <div className="flex flex-col gap-4 py-4 md:gap-6 md:py-6">
          <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
            {doctors?.map((doc) => (
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
                  className="mb-1 h-40 w-full object-cover"
                />

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

export default Doctor;

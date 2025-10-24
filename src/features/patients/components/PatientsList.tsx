"use client";

import { DataTable } from "@/components/data-table";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import {  useSuspensePatients } from "../hooks/use-patients";
import { Card, CardAction, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image"
import { Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";


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
                      <div className="flex items-center gap-3 w-full">
                        <div className="w-14 h-14 rounded-full bg-muted-foreground/10 flex items-center justify-center text-sm font-medium">
                          {pat.name
                          ? pat.name
                            .split(" ")
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join("")
                            .toUpperCase()
                          : "P"}
                        </div>

                        <div className="flex-1 min-w-0">
                        <CardTitle className="text-lg font-semibold truncate">
                          {pat.name ?? "Unnamed Patient"}
                        </CardTitle>
                        <div className="text-sm text-muted-foreground truncate">
                          {pat.gender ? `${pat.gender}` : ""}
                          {pat.dob ? ` • ${Math.floor((Date.now() - new Date(pat.dob).getTime()) / (365.25 * 24 * 60 * 60 * 1000))} yrs` : ""}
                          {/* {pat.mrn ? ` • MRN: ${pat.mrn}` : ""} */}
                        </div>
                        </div>

                        <CardAction>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="sm" variant="outline">Visits</Button>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Visits — {pat.name ?? "Patient"}</DialogTitle>
                              <DialogDescription>
                                No visit information available.
                                {/* {pat.visits && pat.visits.length ? `${pat.visits.length} visit(s)` : "No visit information available."} */}
                              </DialogDescription>
                            </DialogHeader>

                            <div className="mt-4 flex flex-col gap-3">
                              {/* {pat.visits && pat.visits.length ? (
                                pat.visits.map((v: any, idx: number) => (
                                  <div key={idx} className="border rounded-md p-3">
                                    <div className="flex items-center justify-between text-sm font-medium">
                                      <div>{v.type ?? "Visit"}</div>
                                      <div className="text-muted-foreground">{v.date ? new Date(v.date).toLocaleString() : "Unknown date"}</div>
                                    </div>
                                    {v.provider && <div className="text-sm text-muted-foreground mt-1">Provider: {v.provider}</div>}
                                    {v.reason && <div className="text-sm mt-1">Reason: {v.reason}</div>}
                                    {v.notes && <div className="text-sm mt-1 text-muted-foreground">Notes: {v.notes}</div>}
                                  </div>
                                ))
                              ) : (
                                <div className="text-sm text-muted-foreground">No visits recorded for this patient.</div>
                              )} */}
                            </div>

                            <DialogFooter>
                              <DialogClose asChild>
                                <Button variant="ghost">Close</Button>
                              </DialogClose>
                            </DialogFooter>
                          </DialogContent>
                        </Dialog>
                        </CardAction>
                      </div>
                      </CardHeader>

                      <CardFooter className="flex flex-col items-start gap-2 text-sm">
                      <div className="w-full flex flex-col sm:flex-row sm:justify-between text-muted-foreground">
                        <span className="truncate">{pat.phone ?? "No phone"}</span>
                        <span className="truncate">{pat.email ?? "No email"}</span>
                      </div>

                      {/* {pat.address && (
                        <div className="w-full text-muted-foreground truncate">{pat.address}</div>
                      )}

                      <div className="flex flex-wrap gap-2 mt-1">
                        {(pat.conditions && pat.conditions.length) ? (
                        pat.conditions.slice(0, 4).map((c: string) => (
                          <Badge key={c} variant="outline" className="text-xs">
                          {c}
                          </Badge>
                        ))
                        ) : (
                        <Badge variant="ghost" className="text-xs">
                          No known conditions
                        </Badge>
                        )}
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

"use client";

import { DataTable } from "@/components/data-table";
import { useSuspenseMedicines } from "../hooks/use-medicines";
import { EntityContainer, EntityHeader } from "@/components/entity-components";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

export const MedicinesList = () => {
  const { data: medicines } = useSuspenseMedicines();

  return (
    
    <div>
        {/* <DataTable data={medicines.items} /> */}
    <Table>
        <TableHeader>
            <TableRow>
                {/* <TableHead className="w-[100px]">ID</TableHead> */}
                <TableHead>Name</TableHead>
                <TableHead>Synonyms</TableHead>
                <TableHead>Indications</TableHead>
            </TableRow>
        </TableHeader>
        <TableBody>
            {medicines?.items?.map((medicine) => (
                <TableRow key={medicine.id}>
                    {/* <TableCell className="font-medium">{medicine.id}</TableCell> */}
                    <TableCell className="font-medium">{medicine.name}</TableCell>
                    <TableCell>
                        {medicine.synonyms && medicine.synonyms.length
                            ? medicine.synonyms.join(", ")
                            : "—"}
                    </TableCell>
                    <TableCell>
                        {medicine.indications && medicine.indications.length
                            ? medicine.indications.join(", ")
                            : "—"}
                    </TableCell>
                </TableRow>
            ))}
        </TableBody>
    </Table>
    </div>
  );
};

export const MedicinesHeader = ({ disabled }: { disabled: boolean }) => {
  return (
    <>
      <EntityHeader
        isCreating={false}
        title="Medicines"
        description="List of medicines available"
        newButtonLabel="Add Medicine"
        disabled={disabled}
        onNew={() => {}}
      />
    </>
  );
};

export const MedicinesContainer = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return (
    <EntityContainer header={<MedicinesHeader disabled={false} />}>
      {children}
    </EntityContainer>
  );
};

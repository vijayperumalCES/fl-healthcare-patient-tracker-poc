"use client";

import { DataTable } from "@/components/data-table";
import { useSuspenseMedicines } from "../hooks/use-medicines";
import { EntityContainer, EntityHeader } from "@/components/entity-components";

export const MedicinesList = () => {
  const { data: medicines } = useSuspenseMedicines();

  return (
    
    <div>
        {/* <DataTable data={medicines.items} /> */}
      <table className="table table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Synonyms</th>
            <th>Indications</th>
          </tr>
        </thead>
        <tbody>
          {medicines.items.map((medicine) => (
            <tr key={medicine.id}>
              <td>{medicine.id}</td>
              <td>{medicine.name}</td>
              <td>{medicine.synonyms.join(", ")}</td>
              <td>{medicine.indications.join(", ")}</td>
            </tr>
          ))}
        </tbody>
      </table>
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

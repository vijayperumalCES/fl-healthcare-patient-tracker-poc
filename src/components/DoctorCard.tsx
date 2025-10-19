// components/DoctorCard.tsx
import Link from "next/link";
import { Doctor } from "@/types/doctor";

interface Props {
  doctor: Partial<Doctor>;
  view: "grid" | "list";
}

export const DoctorCard = ({ doctor, view }: Props) => {
  return (
    <Link href={`/doctors/${doctor.id}`}>
      <div
        className={`border rounded-lg p-4 hover:shadow-md cursor-pointer transition flex ${
          view === "grid" ? "flex-col items-center text-center" : "flex-row items-center"
        }`}
      >
        <img
          src={doctor.imageUrl || "/default-doctor.png"}
          alt={doctor.name}
          className={`rounded-full ${
            view === "grid" ? "w-24 h-24 mb-4" : "w-16 h-16 mr-4"
          } object-cover`}
        />

        <div className={`${view === "list" ? "flex-1" : ""}`}>
          <h2 className="text-lg font-semibold">{doctor.name}</h2>
          {doctor.education && <p className="text-sm text-gray-500">{doctor.education}</p>}
          {doctor.specialties && (
            <p className="text-sm text-gray-600">
              Specialties: {doctor.specialties.join(", ")}
            </p>
          )}
          {doctor.experienceYr && (
            <p className="text-sm text-gray-500">
              Experience: {doctor.experienceYr} years
            </p>
          )}
        </div>
      </div>
    </Link>
  );
};

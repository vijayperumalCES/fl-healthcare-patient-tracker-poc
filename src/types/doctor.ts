// types/doctor.ts
export interface Doctor {
    id: string;
    name: string;
    education?: string;
    specialties: string[];
    experienceYr?: number;
    imageUrl?: string;
  }
  
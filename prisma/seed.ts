// prisma/seed.ts
import { PrismaClient } from "@prisma/client";
import { faker } from "@faker-js/faker";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding DB...");

  // Create some medicines
  const medNames = [
    { name: "Aspirin", synonyms: ["Acetylsalicylic acid"], indications: ["Pain", "Fever"] },
    { name: "Paracetamol", synonyms: ["Acetaminophen"], indications: ["Pain", "Fever"] },
    { name: "Metformin", synonyms: ["Glucophage"], indications: ["Type 2 Diabetes"] },
  ];

  for (const m of medNames) {
    await prisma.medicine.upsert({
      where: { name: m.name },
      update: {},
      create: {
        name: m.name,
        synonyms: m.synonyms,
        indications: m.indications,
      },
    });
  }

  // Create 50 doctors
  const specialtiesPool = [
    "Cardiology",
    "Internal Medicine",
    "Family Medicine",
    "General Practice",
    "Geriatrics",
    "Emergency Medicine",
    "Critical Care Medicine",
    "Hospital Medicine",
    "General Surgery",
    "Orthopedics",
    "Neurosurgery",
    "Cardiothoracic Surgery",
    "Vascular Surgery",
    "Plastic & Reconstructive Surgery",
    "Urology",
    "Pediatric Surgery",
    "Transplant Surgery",
    "Bariatric Surgery",
    "ENT (Otolaryngology)",
    "Ophthalmology",
    "Obstetrics and Gynecology (OB/GYN)",
    "Pediatrics",
    "Neonatology",
    "Reproductive Endocrinology & Infertility",
    "Maternal-Fetal Medicine",
    "Endocrinology",
    "Pulmonology",
    "Gastroenterology",
    "Nephrology",
    "Rheumatology",
    "Hematology",
    "Oncology",
    "Infectious Diseases",
    "Allergy & Immunology",
    "Radiology",
    "Nuclear Medicine",
    "Pathology",
    "Laboratory Medicine",
    "Clinical Genetics",
    "Neurology",
    "Psychiatry",
    "Pain Management",
    "Sleep Medicine",
    "Dentistry",
    "Oral & Maxillofacial Surgery",
    "Periodontics",
    "Orthodontics",
    "Physical Medicine & Rehabilitation (PM&R)",
    "Sports Medicine",
    "Occupational Medicine",
    "Preventive Medicine",
    "Epidemiology",
    "Community Medicine",
    "Travel Medicine",
    "Lifestyle Medicine",
    "Palliative Care",
    "Addiction Medicine",
    "Geriatric Psychiatry",
    "Telemedicine",
    "Integrative Medicine",
    "Clinical Pharmacology",
    "Aerospace Medicine",
    "Hyperbaric Medicine",
  ];

  const doctorPromises = [];
  for (let i = 0; i < 50; i++) {
    const name = `${faker.person.firstName()} ${faker.person.lastName()}`;
    // Assuming specialties is a string array in the schema.
    const specialties = [faker.helpers.arrayElement(specialtiesPool)];
    doctorPromises.push(
      prisma.doctor.create({
        data: {
          name,
          education: faker.helpers.arrayElement(["MBBS", "MD", "MS", "DNB"]),
          specialties,
          experienceYr: faker.number.int({ min: 3, max: 30 }),
          imageUrl: faker.image.avatar(),
          contact: faker.internet.email(),
          remarks: faker.lorem.sentence(),
        },
      })
    );
  }
  await Promise.all(doctorPromises);

  // Create 200 patients
  const patientPromises = [];
  const genders = ["MALE", "FEMALE", "OTHER"] as const;
  for (let i = 0; i < 200; i++) {
    patientPromises.push(
      prisma.patient.create({
        data: {
          name: faker.person.fullName(),
          dob: faker.date.birthdate({ min: 1, max: 90, mode: "age" }),
          gender: faker.helpers.arrayElement(genders),
          phone: faker.phone.number(),
          email: faker.internet.email(),
        },
      })
    );
  }
  await Promise.all(patientPromises);

  // Fetch only the IDs, as per the query
  const allPatients = await prisma.patient.findMany({ select: { id: true } });
  const allDoctors = await prisma.doctor.findMany({ select: { id: true } });

  // Create 5 visits
  const visitPromises = [];
  for (let i = 0; i < 5; i++) {
    visitPromises.push(
      prisma.visit.create({
        data: {
          patientId: faker.helpers.arrayElement(allPatients).id,
          doctorId: faker.helpers.arrayElement(allDoctors).id,
          date: faker.date.recent({ days: 90 }),
          notes: faker.lorem.sentence(),
          treatment: faker.lorem.words(3),
        },
      })
    );
  }
  await Promise.all(visitPromises);

  console.log("Seeding finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });


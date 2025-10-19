import { baseProcedure, createTRPCRouter } from "../init";
import prisma from "@/lib/db";
export const appRouter = createTRPCRouter({
  getPatients: baseProcedure.query(() => {
    return prisma.patient.findMany();
  }),
   getDoctors: baseProcedure.query(() => {
    return prisma.doctor.findMany();
  }),
});
// export type definition of API
export type AppRouter = typeof appRouter;

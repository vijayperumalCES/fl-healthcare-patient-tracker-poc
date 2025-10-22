import { medicinesRouter } from "@/features/medicines/server/routers";
import { baseProcedure, createTRPCRouter, protectedProcedure } from "../init";
import prisma from "@/lib/db";
import { doctorsRouter } from "@/features/doctors/server/routers";
export const appRouter = createTRPCRouter({

  getUsers: protectedProcedure.query(({ ctx }) => {
    return prisma.user.findMany({
      where: {
        id: ctx.auth.user.id,
      },
    });

    
  }),
  medicines: medicinesRouter,
  doctors: doctorsRouter,
});
//   getPatients: baseProcedure.query(() => {
//     return prisma.patient.findMany();
//   }),
//    getDoctors: baseProcedure.query(() => {
//     return prisma.doctor.findMany();
//   }),
// export type definition of API
export type AppRouter = typeof appRouter;

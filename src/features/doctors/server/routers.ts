import { createTRPCRouter, protectedProcedure } from "@/trpc/init";
import prisma from "@/lib/db";
import z from "zod";
import { PAGINATION } from "@/config/constants";

export const doctorsRouter = createTRPCRouter({
  getOne: protectedProcedure
    .input(z.object({ id: z.uuid() }))
    .query(async ({ input }) => {
      return prisma.doctor.findUnique({
        where: { id: input.id },
      });
  }),
  getMany: protectedProcedure
    .input(
      z.object({
        page: z.number().default(PAGINATION.DEFAULT_PAGE),
        pageSize: z
          .number()
          .min(PAGINATION.DEFAULT_PAGE_SIZE)
          .max(PAGINATION.MAX_PAGE_SIZE)
          .default(PAGINATION.DEFAULT_PAGE_SIZE),
        search: z.string().default(""),
      })
    )
    .query(async ({ input }) => {
      const { page, pageSize, search } = input;
      const [items, totalCount] = await Promise.all([
        prisma.doctor.findMany({
          skip: (page - 1) * pageSize,
          take: pageSize,
          where: {
            name: {
              contains: search,
              mode: "insensitive",
            },
          },
          orderBy: {
            name: "desc",
          },
        }),
        prisma.medicine.count({}),
      ]);

      const totalPages = Math.ceil(totalCount / pageSize);
      const hasNextPage = page < totalPages;
      const hasPreviousPage = page > 1;
      return {
        items,
        page,
        pageSize,
        totalCount,
        totalPages,
        hasNextPage,
        hasPreviousPage,
      };
}),
  // create: protectedProcedure.mutation(({ ctx }) => {
  //   return prisma.doctor.create({
  //     data: {
  //       name: "Insulin",
  //       synonyms: ["Novolin", "Humulin"],
  //       indications: ["Thyroid Disorder", "Pain"],
  //       //createdById: ctx.auth.user.id,
  //     },
  //   });
  // }),
  update: protectedProcedure
    .input(
      z.object({
        id: z.uuid(),
        name: z.string().optional(),
        synonyms: z.array(z.string()).optional(),
        atcCode: z.string().optional(),
        indications: z.array(z.string()).optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      const { id, ...data } = input;
      return prisma.doctor.update({
        where: { id },
        data: {
          ...data,
          //updatedById: ctx.auth.user.id,
        },
      });
  }),
  remove: protectedProcedure
    .input(z.object({ id: z.uuid() }))
    .mutation(async ({ input }) => {
      return prisma.doctor.delete({
        where: { id: input.id },
      });
    }),
});

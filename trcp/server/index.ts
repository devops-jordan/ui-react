import { z } from "zod";
import { publicProcedure, router } from "./trcp";
import { userRouter } from "./user/user";

export const appRouter = router({
  userRouter
})

export type AppRouter = typeof appRouter
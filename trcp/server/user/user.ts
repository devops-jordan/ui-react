import { z } from "zod";
import { publicProcedure, router } from "../trcp";

export const userRouter = router({
  getTodos: publicProcedure.query(async () => {
    return [{ name: "jordan", race: "alexander" }]
  }),
  addTodo: publicProcedure
    .input(z.object({ name: z.string(), race: z.string() }))
    .mutation((opts) => {
      const { input } = opts
    })
})
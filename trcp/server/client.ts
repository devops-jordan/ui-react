import { createTRPCNext } from "@trpc/next";
import { AppRouter } from ".";

export const trpc = createTRPCNext<AppRouter>({})
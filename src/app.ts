import { Elysia } from "elysia";
import { userRoutes } from "./routes/user.routes";
import { openapi } from "@elysiajs/openapi";


export const app = new Elysia()
    .use(openapi())  // enable OpenAPI docs
  .use(userRoutes)
  .get("/", () => "Elysia + Bun + Neon + Drizzle CRUD API 🚀")
  .get("/health", () => ({ status: "ok" }));

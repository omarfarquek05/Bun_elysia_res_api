import { Elysia } from "elysia";
import { UserController } from "../controllers/user.controller";

export const userRoutes = new Elysia({ prefix: "/users" })
    
    .post("/", async ({ body }) => {
        return await UserController.create(body as { name: string; email: string; age: number });
    })
    .get("/", async () => {
        return await UserController.getAll();
    })
    .get("/:id", async ({ params }) => {
        const user = await UserController.getOne(Number(params.id));
        return user ?? { message: "User not found" };
    })
    .put("/:id", async ({ params, body }) => {
        const updated = await UserController.update(Number(params.id), body as Partial<{ name: string; email: string; age: number }>);
        return updated ?? { message: "User not found" };
    })
    .delete("/:id", async ({ params }) => {
        return await UserController.delete(Number(params.id));
    });

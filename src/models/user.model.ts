import { db } from "../db";
import { usersTable } from "../db/schema";
import { eq } from "drizzle-orm";

export const UserModel = {
    //post 
    create: async (data:
        {
        name: string;
        email: string;
        age: number
    }) => {
        return db.insert(usersTable)
                 .values(data)
                 .returning();
    },

    //get all
    findAll: async () => {
        return db.select().from(usersTable);
    },

   //get by id
    findById: async (id: number) => {
        const [user] = await db.select().from(usersTable).where(eq(usersTable.id, id));
        return user;
    },

    //update
    update: async (id: number, data: Partial<{ name: string; email: string; age: number }>) => {
        const [user] = await db.update(usersTable).set(data).where(eq(usersTable.id, id)).returning();
        return user;
    },

    //delete
    delete: async (id: number) => {
        await db.delete(usersTable).where(eq(usersTable.id, id));
        return { message: "User deleted" };
    },
};

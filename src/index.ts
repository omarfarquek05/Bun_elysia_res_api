import { app } from "./app";

const port = Bun.env.PORT ?? 3000;

app.listen(port);

console.log(`🦊 Server running at http://localhost:${port}`);



//------------------------------------------------elysia + bun + drizzle + neon test code below------------------------------------------------
// import { Elysia } from "elysia";
// import "dotenv/config";
// import { drizzle } from 'drizzle-orm/neon-http';

// import { eq } from 'drizzle-orm';
// import { usersTable } from './db/schema';
  

// console.log("Database URL:", process.env.DATABASE_URL);

// const db = drizzle(process.env.DATABASE_URL!);

// async function main() {
//   const user: typeof usersTable.$inferInsert = {
//     name: 'John',
//     age: 30,
//     email: 'john@example.com',
//   };
//   await db.insert(usersTable).values(user);
//   console.log('New user created!')
//   const users = await db.select().from(usersTable);
//   console.log('Getting all users from the database: ', users)
//   /*
//   const users: {
//     id: number;
//     name: string;
//     age: number;
//     email: string;
//   }[]
//   */
//   await db
//     .update(usersTable)
//     .set({
//       age: 31,
//     })
//     .where(eq(usersTable.email, user.email));
//   console.log('User info updated!')
//   await db.delete(usersTable).where(eq(usersTable.email, user.email));
//   console.log('User deleted!')
// }
// main();

// const port = Bun.env.PORT ?? 3000;

// const app = new Elysia()
//   .get("/", () => "Hello from Elysia + Bun 🚀")
//   .get("/health", () => ({ status: "ok" }))
//   .listen(port);

// console.log(
//   `🦊 Elysia is running at http://localhost:${port}`
// );


//------------------------------------------------figlet + bun test code below------------------------------------------------

// import figlet from 'figlet';

// const server = Bun.serve({
//   port: 3000,
//   routes: {
//     "/": () => new Response('Bun!'),
//     "/figlet": () => {
//       const body = figlet.textSync('Bun!');
//       return new Response(body);
//     }
//   }
// });

// console.log(`Listening on ${server.url}`);

import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const usersTable = pgTable("users", {
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar({ length: 255 }).notNull(),
  age: integer().notNull(),
  email: varchar({ length: 255 }).notNull().unique(),
});


// when schema changes, run the following command to generate a new migration:
// bunx drizzle-kit generate:migration --name add_users_table --schema src/db/schema.ts --out src/db/migrations
// bunx drizzle-kit push       # Push tables to Neon
//bunx drizzle-kit studio
//bunx drizzle-kit migrate:up  # Apply migrations
//bunx drizzle-kit migrate:down # Revert last migration
//bunx drizzle-kit migrate:status # Check migration status
//bunx drizzle-kit generate:types --out src/db/types.ts --schema src/db/schema.ts
//bunx drizzle-kit generate:types --out src/db/types.ts --schema src/db/schema.ts
//bunx drizzle-kit generate:types --out src/db/types.ts --schema src/db/schema.ts --pg

//bunx drizzle-kit generate
//bunx drizzle-kit push

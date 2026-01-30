import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

const { Pool } = pg;

let DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error(
    "DATABASE_URL must be set. Did you forget to provision a database?",
  );
}

// Ensure sslmode is set to verify-full to avoid warnings and prepare for future library updates.
if (!/sslmode=/.test(DATABASE_URL)) {
  const separator = DATABASE_URL.includes('?') ? '&' : '?';
  DATABASE_URL += `${separator}sslmode=verify-full`;
}

export const pool = new Pool({
  connectionString: DATABASE_URL,
});
export const db = drizzle(pool, { schema });

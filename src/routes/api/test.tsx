import { json } from "solid-start";
import db, { initDB } from "~/db";

export async function GET() {
    await initDB()
    return json(await db.query("SELECT * FROM users"));
}
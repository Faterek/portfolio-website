import { json } from "solid-start";
import db from "~/db";

export async function GET() {
    return json(await db.query("SELECT * FROM users"));
}
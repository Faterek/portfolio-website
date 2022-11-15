import { json } from "solid-start";
import db from "~/db";
import { login } from "~/db/session";

export async function GET() {
    return json(await login({username: "test", passwd: "test"}));
}
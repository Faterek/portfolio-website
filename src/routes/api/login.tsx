import { APIEvent, json } from "solid-start";
import { login } from "~/db/session";

export async function GET({request}: APIEvent) {
    const url = new URL(request.url);
    const username = url.searchParams.get("login");
    const password = url.searchParams.get("password");
    return json(await login({username: username, passwd: password}));
}
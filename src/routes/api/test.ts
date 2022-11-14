import { json } from "solid-start";

export function GET() {
    return json({response: "API Works"});
}
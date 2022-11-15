import { json } from "solid-start";

export async function GET(){
    return json({error: 404, message: "Not found"})
}
import { createServerData$, redirect } from "solid-start/server";

export function routeData() {
    return createServerData$(async () => {
        throw redirect("/blog/1");
    });
}
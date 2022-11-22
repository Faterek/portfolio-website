import { createServerData$, redirect } from "solid-start/server";
import { getUser } from "~/db/session";

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user)
            throw redirect("/");
        if (user)
            throw redirect("/admin/panel");
    });
}
import { useRouteData } from "solid-start";  
import { createServerAction$, createServerData$, redirect } from "solid-start/server";
import { getUser } from "~/db/session";

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user)
            throw redirect("/");
        return user;
    });
}

export default function UpdateProfile() {
    const user = useRouteData<typeof routeData>();
    const [createPost, { Form }] = createServerAction$(async (form: FormData) => {
        
    })
    return (
        <div class="mt-16">
            <Form>

            </Form>
        </div>
    )
}
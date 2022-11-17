import { useRouteData } from "solid-start";
import { createServerAction$, createServerData$, redirect } from "solid-start/server";
import { getUser, logout } from "~/db/session";

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(request);
    if (!user)
        throw redirect("/");
    return user;
  });
}

export default function AdminPanel(){
    const user = useRouteData<typeof routeData>();
    const [, { Form }] = createServerAction$((f: FormData, { request }) => logout(request));

    return (
        <div class="mt-16">
            <h1>Hello {user()?.username}</h1>
            <h3>Message board</h3>
            <Form>
            <button name="logout" type="submit">
                Logout
            </button>
            </Form>
        </div>
    );
}
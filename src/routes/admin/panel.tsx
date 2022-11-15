import { useRouteData } from "solid-start";
import server$, { createServerAction$, createServerData$, redirect } from "solid-start/server";
import { getUser, logout } from "~/db/session";

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(request);

    if (!user) {
      throw redirect("/");
    }

    return user;
  });
}

export default function AdminPanel(){
    const user = useRouteData<typeof routeData>();
    const [, { Form }] = createServerAction$((f: FormData, { request }) => logout(request));

    return (
        <main class="text-center text-white p-[0.1rem]">
            <h1 class="text-6xl font-thin my-16">Hello {user()?.username}</h1>
            <h3 class="text-4xl font-thin my-16">Message board</h3>
            <Form>
            <button name="logout" type="submit">
                Logout
            </button>
            </Form>
        </main>
    );
}
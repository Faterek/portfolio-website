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
const [, { Form }] = createServerAction$(async (form: FormData, { request }) => {
    //     console.log(form.values())
    logout(request)
    })

    return (
        <div class="mt-16">
            <h1>Hello {user()?.username}</h1>
            <h3>Actions:</h3>

                <br /><button name="create-post" class="submit-button" value="create-post">
                    Create new blog post
                </button><br /> 
                <br /><button name="logout" class="submit-button" value="logout">
                    Logout
                </button>
        </div>
    );
}
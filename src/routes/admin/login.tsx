import { createUserSession, getUser, login } from "~/db/session";
import { Show } from "solid-js";
import { useRouteData } from "solid-start";
import { FormError } from "solid-start/data";
import { createServerAction$, createServerData$, redirect } from "solid-start/server";

export function routeData() {
    return createServerData$(async (_, { request }) => {
        if (await getUser(request)) {
            throw redirect("/admin/panel");
        }
        return {};
    });
}

export default function Login() {
    const data = useRouteData<typeof routeData>();
  
    const [loggingIn, { Form }] = createServerAction$(async (form: FormData) => {
        const username = form.get("username");
        const passwd = form.get("password");
        if (
            typeof username !== "string" ||
            typeof passwd !== "string"
        ) {
            throw new FormError(`Form not submitted correctly.`);
        }
  
        const fields = {username, passwd };
   
        const user = await login({ username, passwd });
        if (!user) {
            throw new FormError(`Username/Password combination is incorrect`, {
                fields
            });
        }
        return createUserSession(`${user.id}`, "/admin/panel");
        
    });
  
    return (
        <main class="text-center text-white p-[0.1rem]">
            <h1 class="text-6xl font-thin uppercase my-16" >Login</h1>
            <Form>
                <div>
                    <label for="username-input">Username:</label>
                    <input name="username" placeholder="Username" class="text-black focus:text-black"/>
                </div>
                <div>
                    <label for="password-input">Password:</label>
                    <input name="password" type="password" placeholder="Password" class="text-black focus:text-black"/>
                </div>
                <Show when={loggingIn.error?.fieldErrors?.username || loggingIn.error?.fieldErrors?.passwd}>
                    <p role="alert">{loggingIn.error.fieldErrors.passwd}</p>
                </Show>
                <Show when={loggingIn.error}>
                    <p role="alert" id="error-message">
                        {loggingIn.error.message}
                    </p>
                </Show>
                <button type="submit">{data() ? "Login" : ""}</button>
            </Form>
        </main>
    );
}
  
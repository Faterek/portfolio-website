import { createUserSession, getUser, login } from "~/db/session";
import { Show } from "solid-js";
import { useParams, useRouteData } from "solid-start";
import { FormError } from "solid-start/data";
import { createServerAction$, createServerData$, redirect } from "solid-start/server";

function validateUsername(username: unknown) {
    if (typeof username !== "string") return `Wrong username or password`;
}
  
function validatePassword(password: unknown) {
    if (typeof password !== "string") return `Wrong username or password`;
}

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
    const params = useParams();
  
    const [loggingIn, { Form }] = createServerAction$(async (form: FormData) => {
        const username = form.get("username");
        const passwd = form.get("password");
        const redirectTo = form.get("redirectTo") || "/admin/panel";
        if (
            typeof username !== "string" ||
            typeof passwd !== "string" ||
            typeof redirectTo !== "string"
        ) {
            throw new FormError(`Form not submitted correctly.`);
        }
  
        const fields = {username, passwd };
        const fieldErrors = {
            username: validateUsername(username),
            passwd: validatePassword(passwd)
        };
        
        if (Object.values(fieldErrors).some(Boolean)) {
            throw new FormError("Fields invalid", { fieldErrors, fields });
        }
   
        const user = await login({ username, passwd });
        if (!user) {
            throw new FormError(`Username/Password combination is incorrect`, {
                fields
            });
        }
        return createUserSession(`${user.id}`, redirectTo);
        
    });
  
    return (
        <main class="text-center text-white p-[0.1rem]">
            <h1 class="text-6xl font-thin uppercase my-16" >Login</h1>
            <Form>
                <input type="hidden" name="redirectTo" value={params.redirectTo ?? "/admin/panel"} />
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
  
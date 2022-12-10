import { createUserSession, getUser, login } from '~/db/session';
import { Show } from 'solid-js';
import { useRouteData } from 'solid-start';
import { FormError } from 'solid-start/data';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';

export function routeData() {
    return createServerData$(async (_, { request }) => {
        if (await getUser(request)) throw redirect('/admin/panel');
        return {};
    });
}

export default function Login() {
    const data = useRouteData<typeof routeData>();

    const [loggingIn, { Form }] = createServerAction$(async (form: FormData) => {
        const username = form.get('username');
        const passwd = form.get('password');
        if (typeof username !== 'string' || typeof passwd !== 'string')
            throw new FormError(`Form not submitted correctly.`);

        const fields = { username, passwd };

        const user = await login({ username, passwd });
        if (!user) throw new FormError(`Incorrect credentials`, { fields });

        return createUserSession(`${user.id}`, '/admin/panel');
    });

    return (
        <div class='mt-16'>
            <h1>Login</h1>
            <br />
            <Form>
                <div>
                    <label for='username-input'>Username:</label> <br />
                    <input
                        name='username'
                        placeholder='Username'
                        class='text-black focus:text-black rounded-md p-1'
                    />
                </div>
                <br />
                <div>
                    <label for='password-input'>Password:</label> <br />
                    <input
                        name='password'
                        type='password'
                        placeholder='Password'
                        class='text-black focus:text-black rounded-md p-1'
                    />
                </div>
                <Show when={loggingIn.error}>
                    <p role='alert' id='error-message'>
                        {loggingIn.error.message}
                    </p>
                </Show>
                <br />
                <button type='submit' class='submit-button'>
                    {data() ? 'Login' : ''}
                </button>
            </Form>
        </div>
    );
}

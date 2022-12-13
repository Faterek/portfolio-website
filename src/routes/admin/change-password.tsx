import { Show } from 'solid-js';
import { FormError, useNavigate, useRouteData } from 'solid-start';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';
import { getUser, updateUserPassword } from '~/db/session';

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user) throw redirect('/');
        return user;
    });
}

export default function ChangePassword() {
    const user = useRouteData<typeof routeData>();
    const navigate = useNavigate();
    const onClickGoBack = async () => {
        navigate('/admin/panel');
    };

    const [updatePassword, { Form }] = createServerAction$(async (form: FormData) => {
        const password = form.get('password');
        const newpassword = form.get('newpassword');
        const newpasswordrepeat = form.get('newpasswordrepeat');
        const userID = form.get('userID');

        if (
            typeof password !== 'string' ||
            typeof newpassword !== 'string' ||
            typeof newpasswordrepeat !== 'string' ||
            typeof userID !== 'string'
        ) {
            throw new FormError(`Form not submitted correctly.`);
        }

        if (newpassword !== newpasswordrepeat) {
            throw new FormError(`Passwords do not match.`);
        }

        const updatePass = await updateUserPassword({ userID, password, newPassword: newpassword });
        if (updatePass != null) {
            throw redirect('/admin/panel');
        } else {
            throw new FormError(`Error updating password.`);
        }
    });

    return (
        <div class='mx-[18.5%] py-16'>
            <Form>
                <input type='hidden' name='userID' value={user()?.id} />
                <label for='password-input'>Old password: </label>
                <br />
                <br />

                <input
                    type='password'
                    name='password'
                    class='text-black focus:text-black rounded-md p-1'
                ></input>
                <br />
                <br />

                <label for='newpassword-input'>New password: </label>
                <br />
                <br />

                <input
                    type='password'
                    name='newpassword'
                    class='text-black focus:text-black rounded-md p-1'
                ></input>
                <br />
                <br />

                <label for='newpasswordrepeat-input'>Repeat new password: </label>
                <br />
                <br />
                <input
                    type='password'
                    name='newpasswordrepeat'
                    class='text-black focus:text-black rounded-md p-1'
                ></input>
                <br />
                <br />

                <Show when={updatePassword.error}>
                    <p role='alert' id='error-message'>
                        {updatePassword.error.message}
                    </p>
                    <br />
                </Show>

                <button class='submit-button mr-2' onClick={onClickGoBack}>
                    Go back
                </button>
                <button type='submit' class='submit-button'>
                    Update password
                </button>
            </Form>
        </div>
    );
}

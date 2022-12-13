import { useNavigate, useRouteData } from 'solid-start';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';
import { getUser, logout } from '~/db/session';

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user) throw redirect('/');
        return user;
    });
}

export default function AdminPanel() {
    const user = useRouteData<typeof routeData>();
    const [loggingOut, { Form }] = createServerAction$((f: FormData, { request }) =>
        logout(request),
    );
    const navigate = useNavigate();
    const onClickNewPost = async () => {
        navigate('/admin/new-post');
    };
    const onClickUpdateProfile = async () => {
        navigate('/admin/update-profile');
    };
    const onClickChangePassword = async () => {
        navigate('/admin/change-password');
    };

    return (
        <div class='mx-[18.5%] py-16'>
            <h1>Hello {user()?.username}</h1>
            <h3>Actions:</h3> <br />
            <button class='submit-button' onClick={onClickNewPost}>
                Create new blog post
            </button>
            <br />
            <br />
            <button class='submit-button' onClick={onClickUpdateProfile}>
                Update profile
            </button>
            <br />
            <br />
            <button class='submit-button' onClick={onClickChangePassword}>
                Change password
            </button>
            <br />
            <br />
            <br />
            <Form>
                <button name='logout' class='submit-button' value='logout'>
                    Logout
                </button>
            </Form>
        </div>
    );
}

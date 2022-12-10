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

    return (
        <div class='my-16'>
            <h1>Hello {user()?.username}</h1>
            <h3>Actions:</h3> <br />
            <button
                name='create-post'
                class='submit-button'
                value='create-post'
                onClick={onClickNewPost}
            >
                Create new blog post
            </button>{' '}
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

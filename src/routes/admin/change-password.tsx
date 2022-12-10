import { useNavigate, useRouteData } from 'solid-start';
import { createServerData$, redirect } from 'solid-start/server';
import { getUser } from '~/db/session';

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

    return (
        <div class='my-16'>
            <button name='back' class='submit-button' value='back' onClick={onClickGoBack}>
                Go back
            </button>
        </div>
    );
}

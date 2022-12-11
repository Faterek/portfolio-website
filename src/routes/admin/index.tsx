import { createServerData$ } from 'solid-start/server';
import { getUser } from '~/db/session';
import { Navigate, useRouteData } from 'solid-start';

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user) return '/';
        if (user) return '/admin/panel';
    });
}

export default function ToBlogPage() {
    const redirect = useRouteData<typeof routeData>();
    return <Navigate href={redirect()} />;
}

// @refresh reload
import { Suspense } from 'solid-js';
import {
    Body,
    ErrorBoundary,
    FileRoutes,
    Head,
    Html,
    Meta,
    Routes,
    Scripts,
    Title,
} from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import NavSidebar from './components/NavSidebar';
import { getUser } from './db/session';
import './root.css';

export default function Root() {
    const user = createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        return user;
    });
    return (
        <Html lang='en'>
            <Head>
                <Title>Seweryn Fater</Title>
                <Meta charset='utf-8' />
                <Meta name='viewport' content='width=device-width, initial-scale=1' />
                <Meta property='og:type' content='website' />
                <Meta property='og:title' content='Seweryn Fater portfolio website' />
                <Meta property='og:description' content='website description' />
                <Meta property='og:url' content='https://fater.cf' />
                <Meta property='og:image' content='full thumbnail path' />
            </Head>
            <Body>
                <Suspense fallback='Loading...'>
                    <ErrorBoundary>
                        <div class='mx-[18.5%] text-center text-white p-[0.1rem]'>
                            <NavSidebar user={user()} />
                            <Routes>
                                <FileRoutes />
                            </Routes>
                        </div>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}

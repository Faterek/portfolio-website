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
                <Meta property='og:site_name' content='fater.cf' />
                <Meta property='og:title' content='Seweryn Fater portfolio website' />
                <Meta
                    property='og:description'
                    content='A portfolio website (and a blog) of Seweryn Fater'
                />
                <Meta property='og:url' content='https://fater.cf' />
                <Meta property='og:image' content='/static/og-baner.jpg' />
                {/* https://codesandbox.io/s/solid-app-router-suspense-options-4txtnk?file=/style.css */}
            </Head>
            <Body>
                <Suspense fallback='Loading...'>
                    <ErrorBoundary>
                        <NavSidebar user={user()} />
                        <Routes>
                            <FileRoutes />
                        </Routes>
                    </ErrorBoundary>
                </Suspense>
                <Scripts />
            </Body>
        </Html>
    );
}

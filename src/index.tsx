/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import i18next from 'i18next';
import HttpBackend from 'i18next-http-backend';
import { TransProvider } from '@mbarzda/solid-i18next';

import App from './App';

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
    );
}

render(() => {
    const instance = i18next.createInstance();
    instance.use(HttpBackend);

    return (
        <TransProvider instance={instance as any} options={{ debug: true, fallbackLng: 'en' }}>
            <Router>
                <App />
            </Router>
        </TransProvider>
    );
}, root!);

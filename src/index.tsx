/* @refresh reload */
import './index.css';
import { render } from 'solid-js/web';
import { Router } from '@solidjs/router';
import { TransProvider } from '@mbarzda/solid-i18next';

import App from './App';

import enLang from './i18n/en.json';
import plLang from './i18n/pl.json';

const i18nextOptions = { resources: { en: enLang, pl: plLang } };

const root = document.getElementById('root');

if (import.meta.env.DEV && !(root instanceof HTMLElement)) {
    throw new Error(
        'Root element not found. Did you forget to add it to your index.html? Or maybe the id attribute got mispelled?',
    );
}

render(
    () => (
        <TransProvider options={i18nextOptions}>
            <Router>
                <App />
            </Router>
        </TransProvider>
    ),
    root!,
);

import { createSignal } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import Index from './routes/Index';

export default function App() {
    const [lang, setLang] = createSignal(localStorage.getItem('lang'));
    if (!lang()) {
        setLang(navigator.languages.find((lang) => lang === 'pl') ? 'pl' : 'en');
        localStorage.setItem('lang', lang() as string);
    } else {
        setLang(localStorage.getItem('lang')!);
    }

    return (
        <>
            <Routes>
                <Route path='/' component={Index} />
            </Routes>
        </>
    );
}

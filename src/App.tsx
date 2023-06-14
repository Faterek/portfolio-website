import { createSignal } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import Home from './routes/Home';

export default function App() {
    const [lang, setLang] = createSignal(localStorage.getItem('lang'));
    if (!lang()) {
        setLang(navigator.languages.find((lang) => lang === 'pl') ? 'pl' : 'en');
        localStorage.setItem('lang', lang());
    } else {
        setLang(localStorage.getItem('lang')!);
    }

    return (
        <>
            <Routes>
                <Route path='/' component={Home} />
            </Routes>
        </>
    );
}

import { createSignal, createEffect } from 'solid-js';
import { useTransContext } from '@mbarzda/solid-i18next';

export default function NavBar(props: any) {
    const [lang, setLang] = createSignal(localStorage.getItem('lang'));
    const [, { changeLanguage }] = useTransContext();

    createEffect(() => {
        changeLanguage(lang() as string);
        localStorage.setItem('lang', lang() as string);
    });

    return (
        <nav class='nav'>
            <div class='p-2 h-[4.5rem] w-[5rem] text-center font-semibold'>
                <button
                    class='lang-button rounded-t-md'
                    classList={{ 'bg-gray-500/60': lang() === 'en' }}
                    onClick={() => setLang('en')}
                >
                    English
                </button>
                <hr class='w-[5rem]' />
                <button
                    class='lang-button rounded-b-md'
                    classList={{ 'bg-gray-500/60': lang() === 'pl' }}
                    onClick={() => setLang('pl')}
                >
                    Polski
                </button>
            </div>
            <div class='h-[4.5rem] w-full flex justify-center items-center gap-[0.3rem] mx-3'>
                {props.children}
            </div>
            <div class='w-[7rem]'></div>
        </nav>
    );
}

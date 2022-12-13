import { Show } from 'solid-js';
import { A } from 'solid-start';

export default function NavSidebar(props: { user?: any }) {
    return (
        <nav class='fixed z-[1] w-[15%] h-[100vh] '>
            <label id='icon' for='menu-toggle'>
                <svg
                    width='50'
                    height='50'
                    viewBox='0 0 100 100'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect
                        id='menu-bottom'
                        x='12'
                        y='77'
                        width='75'
                        height='12'
                        rx='6'
                        fill='white'
                    />
                    <rect
                        id='menu-middle'
                        x='12'
                        y='44'
                        width='75'
                        height='12'
                        rx='6'
                        fill='white'
                    />
                    <rect id='menu-top' x='12' y='11' width='75' height='12' rx='6' fill='white' />
                </svg>
            </label>
            <input
                type='button'
                class='hidden'
                id='menu-toggle'
                onclick={() => console.log(`eoo`)}
            />
            <ul id='menu' class='a ml-2 mt-4'>
                <li class='menu-items'>
                    <A class='menu-links' href='/'>
                        Home
                    </A>
                </li>
                <li class='menu-items'>
                    <A class='menu-links' href='/about'>
                        About Me
                    </A>
                </li>
                <li class='menu-items'>
                    <A class='menu-links' href='/blog/page/1'>
                        Blog
                    </A>
                </li>
                <li class='menu-items'>
                    <A class='menu-links' href='/projects'>
                        Projects
                    </A>
                </li>
                <li class='menu-subitems'>
                    <A class='menu-links' href='/projects/throw-em'>
                        Throw 'em
                    </A>
                </li>
                <li class='menu-subitems mb-2'>
                    <A class='menu-links' href='/projects/this-website'>
                        This website
                    </A>
                </li>
                <li class='menu-items'>
                    <A class='menu-links' href='/contact'>
                        Contact
                    </A>
                </li>
                <Show when={props.user != null}>
                    <Show when={props.user.username != null}>
                        <li class='menu-items'>
                            <A class='menu-links' href='/admin/panel'>
                                Admin panel
                            </A>
                        </li>
                    </Show>
                </Show>
            </ul>
        </nav>
    );
}

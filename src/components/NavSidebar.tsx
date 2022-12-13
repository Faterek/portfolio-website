import { createSignal, Show } from 'solid-js';
import { A, redirect, useNavigate } from 'solid-start';

export default function NavSidebar(props: { user?: any }) {
    const [menuOpen, setMenuOpen] = createSignal(false);
    const navigate = useNavigate();
    return (
        <>
            <label
                id='icon'
                for='menu-toggle'
                class='fixed z-[2] mt-1 ml-1 cursor-pointer select-none'
                onclick={(event) => {
                    event.preventDefault();
                    setMenuOpen(!menuOpen());
                }}
            >
                <svg
                    width='50'
                    height='50'
                    viewBox='0 0 100 100'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                >
                    <rect
                        id='menu-bottom'
                        class={`${menuOpen() ? 'menu-open' : ''}`}
                        x='12'
                        y='77'
                        width='75'
                        height='12'
                        rx='6'
                        fill='white'
                    />
                    <rect
                        id='menu-middle'
                        class={`${menuOpen() ? 'menu-open' : ''}`}
                        x='12'
                        y='44'
                        width='75'
                        height='12'
                        rx='6'
                        fill='white'
                    />
                    <rect
                        id='menu-top'
                        class={`${menuOpen() ? 'menu-open' : ''}`}
                        x='12'
                        y='11'
                        width='75'
                        height='12'
                        rx='6'
                        fill='white'
                    />
                </svg>
            </label>
            <input
                type='button'
                class='hidden'
                id='menu-toggle'
                onclick={(event) => event.stopPropagation}
            />
            <nav class={`fixed z-[1] h-[100vh] select-none ${menuOpen() ? 'w-64' : 'w-16'}`}>
                <ul id='menu' class={`a ml-2 mt-20`}>
                    <li class='menu-items'>
                        <A
                            class={`menu-links ${menuOpen() ? 'animate-textFadeIn' : 'hidden'}`}
                            href='/'
                        >
                            Home
                        </A>
                        <img
                            src='/static/home.svg'
                            alt='Home'
                            width='32rem'
                            class='ml-auto mr-[1.1rem]'
                            onclick={() => navigate('/')}
                        />
                    </li>
                    <li class='menu-items'>
                        <A
                            id='aboute-me-link'
                            class={`menu-links ${menuOpen() ? 'animate-textFadeIn' : 'hidden'}`}
                            href='/about'
                        >
                            About Me
                        </A>
                        <img
                            src='/static/about-me.svg'
                            alt='About me'
                            width='32rem'
                            class='ml-auto mr-[1.1rem] '
                            onclick={() => navigate('/about')}
                        />
                    </li>
                    <li class='menu-items'>
                        <A
                            class={`menu-links ${menuOpen() ? 'animate-textFadeIn' : 'hidden'}`}
                            href='/blog/page/1'
                        >
                            Blog
                        </A>
                        <img
                            src='/static/blog.svg'
                            alt='Blog'
                            width='32rem'
                            class='ml-auto mr-[1.1rem]'
                            onclick={() => navigate('/blog')}
                        />
                    </li>
                    <li class='menu-items'>
                        <A
                            class={`menu-links ${menuOpen() ? 'animate-textFadeIn' : 'hidden'}`}
                            href='/projects'
                        >
                            Projects
                        </A>
                        <img
                            src='/static/home.svg'
                            alt='Home'
                            width='32rem'
                            class='ml-auto mr-[1.1rem]'
                        />
                    </li>
                    <li class='menu-subitems'>
                        <A
                            id='project-throwem-link'
                            class={`menu-links flex h-16 items-center ${
                                menuOpen() ? 'animate-textFadeIn' : 'hidden'
                            }`}
                            href='/projects/throw-em'
                        >
                            Throw 'em
                        </A>
                    </li>
                    <li id='project-website-link' class='menu-subitems'>
                        <A
                            class={`menu-links flex h-16 items-center ${
                                menuOpen() ? 'animate-textFadeIn' : 'hidden'
                            }`}
                            href='/projects/this-website'
                        >
                            This website
                        </A>
                    </li>
                    <li class='menu-items'>
                        <A
                            class={`menu-links ${menuOpen() ? 'animate-textFadeIn' : 'hidden'}`}
                            href='/contact'
                        >
                            Contact
                        </A>
                        <img
                            src='/static/home.svg'
                            alt='Home'
                            width='32rem'
                            class='ml-auto mr-[1.1rem]'
                        />
                    </li>
                    <Show when={props.user != null}>
                        <Show when={props.user.username != null}>
                            <li class='menu-items'>
                                <A
                                    class={`menu-links ${
                                        menuOpen() ? 'animate-textFadeIn' : 'hidden'
                                    }`}
                                    href='/admin/panel'
                                >
                                    Admin panel
                                </A>
                                <img
                                    src='/static/home.svg'
                                    alt='Home'
                                    width='32rem'
                                    class='ml-auto mr-[1.1rem]'
                                />
                            </li>
                        </Show>
                    </Show>
                </ul>
            </nav>
        </>
    );
}

import { A } from "solid-start";

export default function NavSidebar(props) {
    return (
        <nav>
            <input type="checkbox" id="menu-toggle"/>
            <label id="icon" for="menu-toggle">
                <svg width="50" height="50" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g id="menu-frame">
                        <rect id="menu-bottom" x="12" y="77" width="75" height="12" rx="6" fill="darkgray"/>
                        <rect id="menu-middle" x="12" y="44" width="75" height="12" rx="6" fill="darkgray"/>
                        <rect id="menu-top" x="12" y="11" width="75" height="12" rx="6" fill="darkgray"/>
                    </g>
                </svg>
            </label>
            <ul id="menu">
                <li class="menu-items w-[100%] indent-[25px]"><A class="menu-items route" href="/">Home</A></li>
                <li class="menu-items w-[100%] indent-[25px]"><A class="menu-items route" href="/about">About Me</A></li>
                <li class="menu-items w-[100%] indent-[25px]"><A class="menu-items route" href="/blog/page/1">Blog</A></li>
                <li class="menu-items w-[100%] indent-[25px]"><A class="menu-items route" href="/projects">Projects</A></li>
                <li class="menu-subitems w-[100%] indent-[40px]"><A class="menu-subitems route" href="/projects/throw-em">Throw 'em</A></li>
                <li class="menu-subitems w-[100%] indent-[40px]"><A class="menu-subitems route" href="/projects/this-website">This website</A></li>
                <li class="menu-items w-[100%] indent-[25px]"><A class="menu-items route" href="/contact">Contact</A></li>
                {props.children}
            </ul>
        </nav>
    )
}
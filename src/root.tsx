// @refresh reload
import { Suspense } from "solid-js";
import {
  A,
  Body,
  ErrorBoundary,
  FileRoutes,
  Head,
  Html,
  Meta,
  Routes,
  Scripts,
  Title,
} from "solid-start";
import "./root.css";
export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Seweryn Fater</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body>
        <Suspense>
          <ErrorBoundary>
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
              <li class="menu-items w-[170px] indent-[25px]"><A class="menu-items route" href="/">Home</A></li>
              <li class="menu-items w-[170px] indent-[25px]"><A class="menu-items route" href="/about">About</A></li>
              <li class="menu-items w-[170px] indent-[25px]"><A class="menu-items route" href="/projects">Projects</A></li>
              <li class="menu-subitems w-[170px] indent-[40px]"><A class="menu-subitems route" href="/projects/throw-em">Throw 'em</A></li>
              <li class="menu-subitems w-[170px] indent-[40px]"><A class="menu-subitems route" href="/projects/this-website">This website</A></li>
              <li class="menu-items w-[170px] indent-[25px]" id="contact"><A class="menu-items route" href="/contact">Contact</A></li>
            </ul>
            <div class="mx-[18.5%]">
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

// @refresh reload
import { createSignal, onMount, Suspense } from "solid-js";
import { A, Body, ErrorBoundary, FileRoutes, Head, Html, Meta, Routes, Scripts, Title } from "solid-start";
import "./root.css";
const [bodyClass, setBodyClass] = createSignal("preload")
onMount( async () => {
  setTimeout( async () => {
    setBodyClass("")
  }, 400)
})

export default function Root() {
  return (
    <Html lang="en">
      <Head>
        <Title>Seweryn Fater</Title>
        <Meta charset="utf-8" />
        <Meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Body class={bodyClass()}>
        <Suspense fallback="Loading...">
          <ErrorBoundary>
            <div class="mx-[18.5%] text-center text-white p-[0.1rem]">
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

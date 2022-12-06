import { Component, For, Show } from "solid-js";
import { A, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { fetchBlogPosts } from "~/db/blog";

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((page) => fetchBlogPosts(page), {
        key: () => props.params.page
    });
}

type Post = {
    route: string,
    name: string
}

export default function BlogPage() {
    const posts = useRouteData<typeof routeData>();
    return(
        <div class="mt-16">
            <Show when={posts()} fallback={<p>Loading...</p>}>
                <For each={posts() as unknown[]}>
                    {(item: Post) => (<div><A href={`/blog/post/${item.route}`}>{item.name}</A></div>)}
                </For>
            </Show>
        </div>
    )
}
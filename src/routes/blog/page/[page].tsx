import { Component, Show } from "solid-js";
import { A, RouteDataArgs, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import { fetchBlogPosts } from "~/db/blog";

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((page) => fetchBlogPosts(page), {
        key: () => props.params.page
      });
}

const BlogPage: Component = () => {
    const posts = useRouteData<typeof routeData>();
    return(
        <div class="mt-16">
            <Show when={posts()}>
                <Show when={posts()[0]}>
                    <div><A href={`/blog/post/${posts()[0].route}`}>{posts()[0].name}</A></div>
                </Show>
                <Show when={posts()[1]}>
                    <div><A href={`/blog/post/${posts()[1].route}`}>{posts()[1].name}</A></div>
                </Show>
                <Show when={posts()[2]}>
                    <div><A href={`/blog/post/${posts()[2].route}`}>{posts()[2].name}</A></div>
                </Show>
                <Show when={posts()[3]}>
                    <div><A href={`/blog/post/${posts()[3].route}`}>{posts()[3].name}</A></div>
                </Show>
                <Show when={posts()[4]}>
                    <div><A href={`/blog/post/${posts()[4].route}`}>{posts()[4].name}</A></div>
                </Show>
            </Show>
        </div>
    )
}
export default BlogPage
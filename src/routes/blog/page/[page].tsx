import { Component, Show } from "solid-js";
import { RouteDataArgs, useRouteData } from "solid-start";
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
                <div> {posts()[0].name}</div>
            </Show>
        </div>
    )
}
export default BlogPage
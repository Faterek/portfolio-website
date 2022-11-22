import { marked } from "marked";
import { Component, Show } from "solid-js";
import { RouteDataArgs, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server"
import { fetchBlogPost } from "~/db/blog"

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((postName) => fetchBlogPost(postName), {
        key: () => props.params.postName,
      });
}

const BlogPost: Component = () => {
    const post = useRouteData<typeof routeData>();

    return(
        <div>
            <Show when={post()}>
                <h1>{post().name}</h1><br />
                <div innerHTML={marked.parse(post().content)} class="text-left"></div>
            </Show>
        </div>
    )
}

export default BlogPost
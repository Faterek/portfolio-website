import { marked } from "marked";
import { Component, Show } from "solid-js";
import { RouteDataArgs, useRouteData } from "solid-start"
import { createServerData$ } from "solid-start/server"
import { fetchBlogPost } from "~/db/blog"

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((postName) => fetchBlogPost(postName), {
        key: () => props.params.postName
      });
}

const BlogPost: Component = () => {
    const post = useRouteData<typeof routeData>();
    return(
        <div class="mt-16">
            <Show when={post()}>
                <h1>{post().name}</h1><br />
                <h2>{post().username}</h2>
                <img src={post().image} alt={post().username} class="w-[100px] h-[100px]"/>
                <div innerHTML={marked.parse(post().content)} class="text-left"></div>
            </Show>
        </div>
    )
}

export default BlogPost
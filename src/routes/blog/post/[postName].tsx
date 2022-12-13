import { marked } from 'marked';
import { Show } from 'solid-js';
import { Meta, RouteDataArgs, useParams, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { fetchBlogPost } from '~/db/blog';

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((postName) => fetchBlogPost(postName), {
        key: () => props.params.postName,
    });
};

export default function BlogPost() {
    const post = useRouteData<typeof routeData>();
    const params = useParams<{ postName: string }>();
    return (
        <>
            <Meta property='og:url' content={`https://fater.cf/blog/post/${params.postName}`} />
            <div class='mx-[18.5%] py-16'>
                <Show when={post()}>
                    <h1>{post().name}</h1>
                    <br />
                    <h2>{post().username}</h2>
                    <img src={post().image} alt={post().username} class='w-[100px] h-[100px]' />
                    <div innerHTML={marked.parse(post().content)} class='text-left'></div>
                </Show>
            </div>
        </>
    );
}

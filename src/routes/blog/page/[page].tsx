import { For, Show } from 'solid-js';
import { A, Meta, RouteDataArgs, useParams, useRouteData } from 'solid-start';
import { createServerData$ } from 'solid-start/server';
import { fetchBlogPosts } from '~/db/blog';

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((page) => fetchBlogPosts(page), {
        key: () => props.params.page,
    });
};

type Post = {
    route: string;
    name: string;
};

export default function BlogPage() {
    const posts = useRouteData<typeof routeData>();
    const params = useParams<{ page: string }>();
    return (
        <>
            <Meta property='og:url' content={`https://fater.cf/blog/post/${params.page}`} />
            <div class='mx-[18.5%] py-16'>
                <Show when={posts()}>
                    <For each={posts() as unknown[]}>
                        {(item: Post) => (
                            <div>
                                <A href={`/blog/post/${item.route}`}>{item.name}</A>
                            </div>
                        )}
                    </For>
                </Show>
            </div>
        </>
    );
}

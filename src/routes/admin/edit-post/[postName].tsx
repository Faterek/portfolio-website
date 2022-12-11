import { marked } from 'marked';
import { createSignal } from 'solid-js';
import { FormError, RouteDataArgs, useNavigate, useRouteData } from 'solid-start';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';
import { editBlogPost, fetchBlogPost } from '~/db/blog';
import { getUser } from '~/db/session';
import '../marked.css';

export const routeData = (props: RouteDataArgs) => {
    return createServerData$((postName) => fetchBlogPost(postName), {
        key: () => props.params.postName,
    });
};

export default function EditBlogPost() {
    const navigate = useNavigate();
    const user = createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user) throw redirect('/');
        return user;
    });
    const post = useRouteData<typeof routeData>();

    const [editPost, { Form }] = createServerAction$(async (form: FormData) => {
        const name = form.get('postname');
        const content = form.get('content');
        const poster = form.get('username');

        if (typeof name !== 'string' || typeof content !== 'string' || typeof poster !== 'string')
            throw new FormError(`Form not submitted correctly.`);

        const edit = await editBlogPost();

        if (edit != null) {
            throw redirect('/admin/panel');
        } else {
            throw new FormError(`There was an error creating new post.`);
        }
    });

    marked.setOptions({
        gfm: true,
        breaks: true,
    });

    const [parsed, setParsed] = createSignal('');

    const onClickGoBack = async () => {
        navigate('/admin/panel');
    };

    return (
        <div class='my-16 text-left'>
            <Form>
                <input type='hidden' name='username' value={user()?.username} />
                <input type='hidden' name='postroute' value={post()?.route} />
                <div class='grid grid-cols-2 grid-rows-test gap-x-4'>
                    <div class='col-span-2 auto-cols-min'>
                        <label for='postname-input'>Postname: </label>
                        <input
                            type='text'
                            name='postname'
                            value={post()?.name}
                            class='mt-2 bg-[#454a4d] rounded-lg  outline-1 outline outline-[darkgray] outline-offset-2 p-1 w-[100%]'
                        />
                    </div>

                    <label for='content-textarea'>Content:</label>
                    <label for='preview' class=''>
                        Preview:
                    </label>
                    <textarea
                        name='content'
                        onInput={(e) =>
                            setParsed(marked.parse((e.target as HTMLTextAreaElement).value))
                        }
                        value={post()?.content}
                        class='markedEditor mt-1'
                    ></textarea>
                    <div
                        ref={(el) => (el.innerHTML = marked.parse(post()?.content))}
                        innerHTML={parsed()}
                        class='markedOutput mt-1 break-words'
                    ></div>
                    <div class=' col-span-2 flex mt-4'>
                        <button class='submit-button' onClick={onClickGoBack}>
                            Go back
                        </button>
                        <button type='submit' class='submit-button ml-auto'>
                            Create post
                        </button>
                    </div>
                </div>
            </Form>
        </div>
    );
}

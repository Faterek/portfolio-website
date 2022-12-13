import { useNavigate, useRouteData } from 'solid-start';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';
import { getUser } from '~/db/session';
import { marked } from 'marked';
import { createSignal } from 'solid-js';
import { FormError } from 'solid-start/data/Form';
import { createBlogPost } from '~/db/blog';
import './marked.css';

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user) throw redirect('/');
        return user;
    });
}

export default function NewPost() {
    const user = useRouteData<typeof routeData>();
    const [createPost, { Form }] = createServerAction$(async (form: FormData) => {
        const name = form.get('postname');
        const content = form.get('content');
        const poster = form.get('username');

        if (typeof name !== 'string' || typeof content !== 'string' || typeof poster !== 'string')
            throw new FormError(`Form not submitted correctly.`);

        const create = await createBlogPost({ name, content, poster });

        if (create != null) {
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

    const navigate = useNavigate();
    const onClickGoBack = async () => {
        navigate('/admin/panel');
    };
    return (
        <div class='mx-[18.5%] py-16'>
            <Form>
                <input type='hidden' name='username' value={user()?.username} />
                <div class='grid grid-cols-2 grid-rows-test gap-x-4'>
                    <div class='col-span-2 auto-cols-min'>
                        <label for='postname-input'>Postname: </label>
                        <input
                            type='text'
                            name='postname'
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
                        class='markedEditor mt-1'
                    ></textarea>
                    <div innerHTML={parsed()} class='markedOutput mt-1 break-words'></div>
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

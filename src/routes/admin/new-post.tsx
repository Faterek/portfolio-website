import { useRouteData } from "solid-start";
import { createServerData$, redirect } from "solid-start/server";
import { getUser } from "~/db/session";
import { marked } from 'marked';
import { createSignal } from 'solid-js';
import "./marked.css";

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user)
            throw redirect("/");
        return user;
    });
}
export default function NewPost(){
    marked.setOptions({
        gfm: true,
        breaks: true
    })
    
    const [parsed, setParsed] = createSignal("")
    const user = useRouteData<typeof routeData>();
    return (
        <div class="mt-16">
            <div class="rounded-lg">
                <textarea onInput={(e) => setParsed(marked.parse((e.target as HTMLTextAreaElement).value))} class="markedEditor"></textarea>
            </div>
            <div innerHTML={parsed()} class="markedOutput"></div>
        </div>
    );
}
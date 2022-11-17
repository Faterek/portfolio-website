import { marked } from 'marked';
import { createSignal } from 'solid-js';
import "./marked.css";
marked.setOptions({
    gfm: true,
    breaks: true
})

const [parsed, setParsed] = createSignal("")

export default function MarkedParser(){
    return (
        <div class="mt-16">
            <div class="rounded-lg">
                <textarea onInput={(e) => setParsed(marked.parse((e.target as HTMLTextAreaElement).value))} class="markedEditor"></textarea>
            </div>
            <div innerHTML={parsed()} class="markedOutput"></div>
        </div>
    )
}
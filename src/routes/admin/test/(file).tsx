import { Show } from "solid-js";
import { FormError } from "solid-start";
import { createServerAction$ } from "solid-start/server";
import fs from "fs"

export default function Login() {
    const [sendFile, { Form }] = createServerAction$(async (form: FormData) => {
        const file = form.get("pliczek");
        if ( typeof file !== "object") 
            throw new FormError(`Form not submitted correctly.`);
            console.log(file);
        const buffer = Buffer.from( await file.arrayBuffer() );
        fs.writeFile(`public/images/${file.name}`, buffer, (err) => {
            if (err) return console.log(err);
        });
    });
  
    return (
        <div class="mt-16">
            <h1>Wysyłanie pliku</h1><br />
            <Form>
                <div>
                    <label for="pliczek-input">Plik:</label> <br />
                    <input name="pliczek" type="file"/>
                </div>
                <Show when={sendFile.error}>
                    <p role="alert" id="error-message">
                        {sendFile.error.message}
                    </p>
                </Show>
                <br /><button type="submit" class="submit-button">Send file</button>
            </Form>
        </div>
    );
}
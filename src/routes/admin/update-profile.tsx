import { FormError, useRouteData } from "solid-start";  
import { createServerAction$, createServerData$, redirect } from "solid-start/server";
import { getUser } from "~/db/session";
import fs from "fs"
import { createSignal } from "solid-js";
import Cropper from "cropperjs"

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user)
            throw redirect("/");
        return user;
    });
}

export default function UpdateProfile() {
    const user = useRouteData<typeof routeData>();
    const [preview, setPreview] = createSignal("")
    const [source, setSource] = createSignal((target: HTMLImageElement) => {
        new Cropper(target)
        return preview()

    })
    const [updateProfile, { Form }] = createServerAction$(async (form: FormData) => {
        const file = form.get("avatar");
        const displayName = form.get("displayname");
        if ( typeof file !== "object") 
            throw new FormError(`Form not submitted correctly.`);
        
        const buffer = Buffer.from( await file.arrayBuffer() );
        fs.writeFile(`public/images/profile/${file.name}`, buffer, (err) => {
            if (err) return console.log(err);
        });
    })
    return (
        <div class="mt-16">
            <Form>
                <input type="hidden" name="username" value={user()?.username} />
                <label for="displayname-input">Display name: </label><br /><br />
                <input type="text" name="displayname" class="text-black focus:text-black rounded-md p-1"></input><br /><br /><br />
                <label for="avatar-input">Profile image: </label><br /><br />
                <div class="rounded-lg w-[50vh] h-[50vh] outline-1 outline outline-[darkgray] outline-offset-2 p-2 mx-auto inline-block align-middle">
                    <img src={(event) => setSource(event.currentTarget)} class="max-w-[100%] max-h-[100%] w-auto h-auto m-auto block"/>
                </div><br /><br />
                <input name="avatar" type="file" onchange={(event) => setPreview(URL.createObjectURL(event.currentTarget.files[0]))}></input><br /><br /><br />
                <button type="submit" class="submit-button ml-auto">Update</button>
            </Form>
        </div>
    )
}
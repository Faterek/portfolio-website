import { FormError, useRouteData } from "solid-start";  
import { createServerAction$, createServerData$, redirect } from "solid-start/server";
import { getUser } from "~/db/session";
import fs from "fs"
import { createEffect, createSignal, Show } from "solid-js";
import Cropper from "cropperjs"
import "cropperjs/dist/cropper.css"

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
    Cropper.setDefaults({
        viewMode: 2,
        dragMode: "move",
        aspectRatio: 1,
        movable: false,
        zoomable: false,
        autoCropArea: 1,
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        minContainerWidth: 100,
        minContainerHeight: 100
    })

    const [preview, setPreview] = createSignal<string>()
    const [imgSelector, setImgSelector] = createSignal<HTMLImageElement>()
    const [cropper, setCropper] = createSignal<Cropper>()
    const [cropVisible, setCropVisible] = createSignal(false)
    const [submitVisible, setSubmitVisible] = createSignal(false)
    createEffect(() => setCropper(new Cropper(imgSelector())))

    const [updateProfile, { Form }] = createServerAction$(async (form: FormData) => {
        const avatar = form.get("avatar");
        const displayName = form.get("displayname");
        if (typeof avatar !== "object" || typeof displayName !== "string") 
            throw new FormError(`Form not submitted correctly.`);
        const buffer = Buffer.from( await avatar.arrayBuffer() );
        fs.writeFile(`public/images/${avatar.name}`, buffer, (err) => {
            if (err) return console.log(err);
        });

    })
    return (
        <div class="mt-16">
            <Form>
                <input type="hidden" name="username" value={user()?.username} />

                <label for="displayname-input">Display name: </label><br /><br />
                    <input type="text" name="displayname" class="text-black focus:text-black rounded-md p-1"></input><br /><br />

                <label for="description-textarea">Description:</label><br /><br />
                    <textarea name="description" class="nonresize-textarea w-[50vh] h-[12vh]" ></textarea><br /><br />

                <label for="avatar-input">Profile image: </label><br /><br />
                    <div class="rounded-sm w-[50vh] h-[50vh] outline-1 outline outline-[darkgray] outline-offset-2 mx-auto">
                        <img ref={(el) => {setImgSelector(el)}} id="avatar-img" src={preview()} class="max-w-[100%] block"/>
                    </div><br/><br/>

                <input type="file"
                    onchange={(event) => {
                        setPreview(URL.createObjectURL(event.currentTarget.files[0]))
                        cropper().destroy()
                        setCropper(new Cropper(imgSelector()))
                        setCropVisible(true)
                        setSubmitVisible(false)
                    }}
                ></input><br /><br /><br />

                <input type="button" value="Crop" class={`submit-button ml-auto ${cropVisible() ? "" : "hidden"}`}
                    onClick={() => {
                        cropper().getCroppedCanvas({width: 1024, height: 1024}).toBlob((blob) => {
                            const file = new File([blob], `${user()?.username}-image.png`, {type: "image/png", lastModified: new Date().getTime()})
                            const container = new DataTransfer();
                            container.items.add(file);
                            const fileInput = document.getElementById("avatar") as HTMLInputElement
                            fileInput.files = container.files
                            cropper().destroy()
                            setPreview(URL.createObjectURL(container.files[0]))
                        })
                        setSubmitVisible(true)
                        setCropVisible(false)
                    }}
                ></input>

                <input type="file" class="hidden" accept="image/png" id="avatar" name="avatar"/>

                <Show when={updateProfile.error}>
                    <p role="alert" id="error-message">
                        {updateProfile.error.message}
                    </p>
                </Show>

                <button type="submit" class={`submit-button ml-auto ${submitVisible() ? "" : "hidden"}`}>Update</button>
            </Form>
        </div>
    )
}
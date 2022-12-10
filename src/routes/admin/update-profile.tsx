import { FormError, useNavigate, useRouteData } from 'solid-start';
import { createServerAction$, createServerData$, redirect } from 'solid-start/server';
import { getUser, updateUser } from '~/db/session';
import { createEffect, createSignal, Show } from 'solid-js';
import Cropper from 'cropperjs';
import fs from 'fs';

import 'cropperjs/dist/cropper.css';

export function routeData() {
    return createServerData$(async (_, { request }) => {
        const user = await getUser(request);
        if (!user) throw redirect('/');
        return user;
    });
}

export default function UpdateProfile() {
    const user = useRouteData<typeof routeData>();
    Cropper.setDefaults({
        viewMode: 2,
        dragMode: 'move',
        aspectRatio: 1,
        movable: false,
        zoomable: false,
        autoCropArea: 1,
        minCropBoxWidth: 100,
        minCropBoxHeight: 100,
        minContainerWidth: 100,
        minContainerHeight: 100,
    });

    const [preview, setPreview] = createSignal<string>();
    const [imgSelector, setImgSelector] = createSignal<HTMLImageElement>();
    const [cropper, setCropper] = createSignal<Cropper>();
    const [cropVisible, setCropVisible] = createSignal<boolean>(false);

    createEffect(() => setCropper(new Cropper(imgSelector())));

    const navigate = useNavigate();

    const onClickGoBack = async () => {
        navigate('/admin/panel');
    };
    const [updateProfile, { Form }] = createServerAction$(async (form: FormData) => {
        const [changes, setChanges] = createSignal<number>(0);
        const [profilePicturePath, setProfilePicturePath] = createSignal<string>();
        const profilePicture = form.get('avatar');
        const displayName = form.get('displayname');
        const description = form.get('description');
        const userID = form.get('userID');
        const username = form.get('username');

        if (!username || typeof username !== 'string' || !userID || typeof userID !== 'string') {
            throw new FormError(`Form not submitted correctly.`);
        }

        if ((profilePicture as File).size != 0) {
            if (
                typeof profilePicture !== 'object' ||
                profilePicture.name != `${username}-image.png`
            ) {
                throw new FormError(`Profile picture is not valid.`);
            }
            setProfilePicturePath(`public/images/${profilePicture.name}`);
            setChanges(changes() + 1);
        }

        if (displayName != '') {
            if (typeof displayName !== 'string') {
                throw new FormError(`Display name is not valid.`);
            }
            if (displayName.length > 30) {
                throw new FormError(`Display name is too long. Max 30 characters.`);
            }
            if (displayName.length < 5) {
                throw new FormError(`Display name is too short. Min 5 character.`);
            }
            setChanges(changes() + 1);
        }

        if (description != '') {
            if (typeof description !== 'string') {
                throw new FormError(`Description is not valid.`);
            }
            if (description.length > 300) {
                throw new FormError(`Description is too long. Max 300 characters.`);
            }
            if (description.length < 10) {
                throw new FormError(`Description is too short. Min 10 character.`);
            }
            setChanges(changes() + 1);
        }

        if (changes() === 0) {
            throw new FormError(`No changes were made.`);
        }

        const profileInformationsToUpdate = {
            userID,
            ...(displayName && { displayName }),
            ...(description && { description }),
            ...(profilePicturePath() && { profilePicturePath: profilePicturePath() }),
        };

        if (profilePicturePath()) {
            const buffer = Buffer.from(await (profilePicture as File).arrayBuffer());
            fs.writeFile(profilePicturePath(), buffer, (err) => {
                if (err) throw new FormError(`Error writing file: ${err}`);
            });
        }
        await updateUser(profileInformationsToUpdate);
        if (updateUser != null) {
            throw redirect('/admin/panel');
        } else {
            throw new FormError(`Error updating profile.`);
        }
    });
    return (
        <div class='my-16'>
            <Form>
                <input type='hidden' name='userID' value={user()?.id} />
                <input type='hidden' name='username' value={user()?.username} />
                <label for='displayname-input'>Display name: </label>
                <br />
                <br />
                <input
                    type='text'
                    name='displayname'
                    class='text-black focus:text-black rounded-md p-1'
                ></input>
                <br />
                <br />

                <label for='description-textarea'>Description:</label>
                <br />
                <br />
                <textarea
                    name='description'
                    class='nonresize-textarea w-[50vh] h-[12vh]'
                ></textarea>
                <br />
                <br />

                <label for='avatar-input'>Profile image: </label>
                <br />
                <br />
                <div class='rounded-sm w-[50vh] h-[50vh] outline-1 outline outline-[darkgray] outline-offset-2 mx-auto'>
                    <img
                        ref={(el) => {
                            setImgSelector(el);
                        }}
                        id='avatar-img'
                        src={preview()}
                        class='max-w-[100%] block'
                    />
                </div>
                <br />
                <br />

                <label for='avatar-user' class='cursor-pointer submit-button'>
                    Upload profile image
                </label>
                <input
                    type='file'
                    id='avatar-user'
                    class='hidden'
                    accept='image/*'
                    onchange={(event) => {
                        setPreview(URL.createObjectURL(event.currentTarget.files[0]));
                        cropper().destroy();
                        setCropper(new Cropper(imgSelector()));
                        setCropVisible(true);
                    }}
                ></input>
                <br />
                <br />

                <input
                    type='button'
                    value='Crop'
                    class={`submit-button ml-auto ${cropVisible() ? '' : 'hidden'}`}
                    onClick={() => {
                        cropper()
                            .getCroppedCanvas({ width: 1024, height: 1024 })
                            .toBlob((blob) => {
                                const file = new File([blob], `${user()?.username}-image.png`, {
                                    type: 'image/png',
                                    lastModified: new Date().getTime(),
                                });
                                const container = new DataTransfer();
                                container.items.add(file);
                                const fileInput = document.getElementById(
                                    'avatar',
                                ) as HTMLInputElement;
                                fileInput.files = container.files;
                                cropper().destroy();
                                setPreview(URL.createObjectURL(container.files[0]));
                            });
                        setCropVisible(false);
                    }}
                ></input>
                <br />
                <br />
                <br />

                <input type='file' class='hidden' accept='image/png' id='avatar' name='avatar' />

                <Show when={updateProfile.error}>
                    <p role='alert' id='error-message'>
                        {updateProfile.error.message}
                    </p>
                </Show>

                <button class='submit-button mr-2' onClick={onClickGoBack}>
                    Go back
                </button>
                <button type='submit' class='submit-button ml-auto'>
                    Update profile
                </button>
            </Form>
        </div>
    );
}

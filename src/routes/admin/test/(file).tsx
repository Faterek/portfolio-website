export default function Test(){
    const uploadAvatar = async (event: Event & { currentTarget: HTMLInputElement; target: Element; }) => {
        try { 
            if (
                !event.currentTarget.files ||
                event.currentTarget.files.length === 0
            ) {
                throw new Error("You must select an image to upload.");
            }
    
            const file = event.currentTarget.files[0];
            console.log(file);
        } catch (error) {
            if (error instanceof Error) {
                alert(error.message);
            }
        }
    };
    
    return <input type="file" onChange={uploadAvatar} />;
    // https://stackoverflow.com/questions/69075652/reactjs-how-to-upload-images-from-front-end-to-public-folder
    // https://stackoverflow.com/questions/2496710/writing-to-files-in-node-js
}
import { useParams } from "solid-start";

export default function BlogPost(){
    const params = useParams()
    return (
        <div>
            <p>Current param: {params.postName}</p>
        </div>
    )
}
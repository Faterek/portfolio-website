import { useParams } from 'solid-start';

export default function blogPage() {
    const params = useParams();
    return <div>dziaua {params.postID}</div>;
}

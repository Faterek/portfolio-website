import { useParams } from "solid-start"

export default function BlogPage() {
    const params = useParams()
    return(
        <div>
            dziaua {params.page}
        </div>
    )
}
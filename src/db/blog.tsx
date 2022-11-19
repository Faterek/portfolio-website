import db from "."

export async function fetchBlogPost(postName:string){
    db.query("SELECT name, time, content, poster.name, poster.img, poster.about FROM posts WHERE route = $postName", {postName})
}

export async function fetchBlogPosts(page:number){
    db.query("SELECT name, time, description, poster.name, poster.img FROM posts ORDER BY time DESC LIMIT 10 START $page", {page})
}

export async function createBlogPost() {
    db.query("")
}

export async function editBlogPost() {
    db.query("")
}
import db from "."
type NewPost = {
    name: string;
    route: string;
    content: string;
    poster: string;
}

export async function fetchBlogPost(name:string){
    db.query("SELECT name, time, content, poster.name, poster.img, poster.about FROM posts WHERE route = $name", {name})
}

export async function fetchBlogPosts(page:number){
    const pg = ((page - 1) * 10) + 1
    db.query("SELECT name, time, description, poster.name, poster.img FROM posts ORDER BY time DESC LIMIT 10 START $pg", {pg})
}

export async function createBlogPost({name, route, content, poster}: NewPost) {
    const duplicatePostName = await db.query("SELECT * FROM posts WHERE route = $route;", { route });
    if (duplicatePostName[0].result[0] != false) return null;
    const post = await db.query("INSERT INTO posts (route, name, poster, time, content) VALUES ($route, $name, $poster, time::now(), $content)", {
        route,
        name,
        poster,
        content
    })
}

export async function editBlogPost() {
    db.query("")
}
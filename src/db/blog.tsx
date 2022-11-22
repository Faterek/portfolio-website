import db from "."
type NewPost = {
    name: string;
    content: string;
    poster: string;
}

export async function fetchBlogPost(route: string){
    const query = await db.query("SELECT name, content FROM posts WHERE route = $route", { route })
    return await query[0].result[0]
}

export async function fetchBlogPosts(page:number){
    const pg = ((page - 1) * 10) + 1
    db.query("SELECT name, time, description, poster.name, poster.img FROM posts ORDER BY time DESC LIMIT 10 START $pg", {pg})
}

export async function createBlogPost({name, content, poster}: NewPost) {
    const route = name
            .toLowerCase()
            .replaceAll(' ', '-')
            .replaceAll('ą', 'a')
            .replaceAll('ć', 'c')
            .replaceAll('ę', 'e')
            .replaceAll('ł', 'l')
            .replaceAll('ń', 'n')
            .replaceAll('ó', 'o')
            .replaceAll('ś', 's')
            .replaceAll('ż', 'z')
            .replaceAll('ź', 'z');
    
    console.log(name + " " + content + " " + poster + " " + route)
    const duplicatePostName = await db.query("SELECT * FROM posts WHERE route = $route;", { route });
    if (duplicatePostName[0].result != false) return null;
    const post = await db.query("INSERT INTO posts (route, name, poster, time, content) VALUES ($route, $name, $poster, time::now(), $content)", {
        route,
        name,
        poster,
        content
    })
    console.log(post[0].result[0])
    return post[0].result[0]
}

export async function editBlogPost() {
    db.query("")
}
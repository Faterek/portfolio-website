import { json } from "solid-start";
import db from "."
type NewPost = {
    name: string;
    content: string;
    poster: string;
}

export async function fetchBlogPost(route: string){
    const query = await db.query("SELECT name, content, poster.displayname AS username, poster.image AS image FROM posts WHERE route = $route", { route })
    return query[0].result[0]
}

export async function fetchBlogPosts(page: string){
    const pg = ((+page - 1) * 10)
    if (typeof pg !== "number" ) return json({error: "Invalid page number"});
    if (pg == 0){
        const posts = await db.query("SELECT name, route FROM posts ORDER BY time DESC LIMIT 10;")
        return posts[0].result
    }
    if (pg > 0) {
        const posts = await db.query("SELECT name, route FROM posts ORDER BY time DESC LIMIT 10 START $pg;", { pg })
        return posts[0].result
    }
    return json({error: "Invalid page number"})
    
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
            .replaceAll('ź', 'z')
            .replaceAll(',', '')
            .replaceAll('.', '')
            .replaceAll(':', '')
            .replaceAll('!', '')
            .replaceAll('?', '');
    
    const duplicatePostName = await db.query("SELECT * FROM posts WHERE route = $route;", { route });
    if (duplicatePostName[0].result != false) return null;
    const user = await db.query(`SELECT id FROM users WHERE username = $poster;`, { poster });
    const post = await db.query(`INSERT INTO posts (route, name, poster, time, content) VALUES ($route, $name, $user, time::now(), $content)`, {
        route,
        name,
        user: user[0].result[0].id,
        content
    })
    return post[0].result[0]
}

export async function editBlogPost() {
    db.query("")
}
import Surreal from 'surrealdb.js';
import { config } from 'dotenv';
config();

const {
    SURREAL_DB_URL: db_url,
    SURREAL_DB_LOGIN: db_login,
    SURREAL_DB_PASSWORD: db_pass,
    SURREAL_DB_NS: db_ns,
    SURREAL_DB_DB: db_db,
} = process.env;

const db = new Surreal(db_url);
export async function initDB() {
    try {
        if (!db_login || !db_pass || !db_url) throw new Error('DB_USERNAME or DB_PASSWORD not set');

        await db
            .connect(db_url)
            .then(() => {
                console.log('Connected to database');
            })
            .catch((err) => {
                console.log('Error connecting to database', err);
            });

        await db
            .signin({
                user: db_login,
                pass: db_pass,
            })
            .then(() => {
                console.log('Signed in to database');
            })
            .catch((err) => {
                console.log('Error signing in to database', err);
            });

        await db.use(db_ns, db_db);
    } catch (err) {
        console.error(err);
    }
}
export default db;

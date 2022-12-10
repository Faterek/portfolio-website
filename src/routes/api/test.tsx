import { json } from 'solid-start';
import db from '~/db';

type SurrealResponse = {
    status: string;
    time: string;
    result: Array<any>;
};

export async function GET() {
    const queryResult = (await db.query('SELECT * FROM users'))[0] as SurrealResponse;
    const result = {
        status: queryResult.status,
        time: queryResult.time,
        result: queryResult.result[0],
    };
    return json(result);
}

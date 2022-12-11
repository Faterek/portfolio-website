import { StartServer, createHandler, renderAsync } from 'solid-start/entry-server';
import { initDB } from '~/db';
initDB();
export default createHandler(renderAsync((event) => <StartServer event={event} />));

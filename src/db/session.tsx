import { redirect } from 'solid-start/server';
import { createCookieSessionStorage } from 'solid-start/session';
import { config } from 'dotenv';
import db from '.';

type LoginForm = {
    username: string;
    passwd: string;
};

config();

const { SESSION_SECRET: sessionSecret } = process.env;

const storage = createCookieSessionStorage({
    cookie: {
        name: 'SESSION',
        secure: true,
        secrets: [sessionSecret],
        sameSite: 'lax',
        path: '/',
        maxAge: 60 * 60 * 24 * 30, // second * minutes * hours * days 30 days
        httpOnly: true,
    },
});

export async function login({ username, passwd }: LoginForm) {
    const users = await db.query('SELECT * FROM users WHERE username = $username;', { username });

    if (users[0].result == false) return null;
    const user = users[0].result[0];

    const isCorrectPassword = await db.query(
        'SELECT * FROM crypto::argon2::compare($hash , $pass);',
        { hash: user.password, pass: passwd },
    );
    if (isCorrectPassword[0].result[0] == false) return null;

    return user;
}

export async function updateUser(userUpdateInfo: {
    userID: string;
    displayName?: string;
    description?: string;
    profilePicturePath?: string;
}) {
    const userID = userUpdateInfo.userID;
    const displayName = userUpdateInfo.displayName;
    const description = userUpdateInfo.description;
    const profilePicturePath = userUpdateInfo.profilePicturePath;

    const updateFields = `${displayName ? 'displayname = $displayName,' : ''} ${
        description ? 'description = $description,' : ''
    } ${profilePicturePath ? 'image = $profilePicturePath,' : ''}`.trim();

    const updateVars = {
        userID: userID,
        ...(displayName && { displayName }),
        ...(description && { description }),
        ...(profilePicturePath && { profilePicturePath }),
    };

    const updateResult = await db.query(
        `UPDATE $userID SET ${updateFields.substring(0, updateFields.length - 1)}`,
        updateVars,
    );
    return updateResult[0].result[0];
}

export async function logout(request: Request) {
    const session = await storage.getSession(request.headers.get('Cookie'));
    return redirect('/', {
        headers: {
            'Set-Cookie': await storage.destroySession(session),
        },
    });
}

export function getUserSession(request: Request) {
    return storage.getSession(request.headers.get('Cookie'));
}

export async function createUserSession(userId: string, redirectTo: string) {
    const session = await storage.getSession();
    session.set('userId', userId);
    return redirect(redirectTo, {
        headers: {
            'Set-Cookie': await storage.commitSession(session),
        },
    });
}

export async function requireUserId(
    request: Request,
    redirectTo: string = new URL(request.url).pathname,
) {
    const session = await getUserSession(request);
    const userId = session.get('userId');
    if (!userId || typeof userId !== 'string') {
        const searchParams = new URLSearchParams([['redirectTo', redirectTo]]);
        throw redirect(`/login?${searchParams}`);
    }
    return userId;
}

export async function getUserId(request: Request) {
    const session = await getUserSession(request);
    const userId = session.get('userId');
    if (!userId || typeof userId !== 'string') return null;
    return userId;
}

export async function getUser(request: Request) {
    const userId = await getUserId(request);
    if (typeof userId !== 'string') {
    }

    try {
        const request = await db.query('SELECT * FROM users WHERE id = $userId;', { userId });
        const user = request[0].result[0];
        return user;
    } catch {
        throw logout(request);
    }
}

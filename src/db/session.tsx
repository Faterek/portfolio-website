import { redirect } from "solid-start/server";
import { createCookieSessionStorage } from "solid-start/session";
import db from "."
type LoginForm = {
    username: string;
    passwd: string;
};

export async function login({ username, passwd }: LoginForm) {
  const user = await db.query("SELECT * FROM users WHERE username = $username;", { username });

  if (user[0].result == false) return null;
  const result = user[0].result[0]

  const isCorrectPassword = await db.query("SELECT * FROM crypto::argon2::compare($hash , $pass);", { hash: result.password, pass: passwd })
  if (isCorrectPassword[0].result[0] == false) return null;

  return user[0].result;
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "FaterSite_session",
    secure: true,
    secrets: [import.meta.env.SESSION_SECRET],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30, // second * minutes * hours * days 30 days
    httpOnly: true
  }
});

export function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") return null;
  return userId;
}

export async function logout(request: Request) {
  const session = await storage.getSession(request.headers.get("Cookie"));
  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session)
    }
  });
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([["redirectTo", redirectTo]]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  if (typeof userId !== "string") {
    return null;
  }

  try {
    const user = await db.query("SELECT * FROM users WHERE id = $userId;", { userId })
    return user;
  } catch {
    throw logout(request);
  }
}

export async function createUserSession(userId: string, redirectTo: string) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session)
    }
  });
}
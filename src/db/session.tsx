import db from "."
type LoginForm = {
    username: string;
    passwd: string;
};

export async function login({ username, passwd }: LoginForm) {
  const user = await db.query("SELECT username, password FROM users WHERE username = $username;", { username });
  if (user[0].result == false) return null;
  const result = user[0].result[0]
  const hashPasswd = result.password;
  const isCorrectPassword = await db.query("SELECT * FROM crypto::argon2::compare($hash , $pass);", { hash: hashPasswd, pass: passwd })
  if (isCorrectPassword[0].result[0] == false) return null;
  return user;
}
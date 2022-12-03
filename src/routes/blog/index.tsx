import { redirect } from "solid-start/server";
 
export function GET() {
  return redirect('/blog/page/1');
}
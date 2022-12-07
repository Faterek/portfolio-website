import { createSignal } from "solid-js";
import { A, useRouteData } from "solid-start";
import { createServerData$ } from "solid-start/server";
import NavSidebar from "~/components/NavSidebar";
import { getUser } from "~/db/session";

export function routeData() {
  return createServerData$(async (_, { request }) => {
    const user = await getUser(request);
    return user;
  });
}

export default function Home() {
  const user = useRouteData<typeof routeData>();
  const [adminPanel, setAdminPanel] = createSignal();
  if(user() != null) setAdminPanel(<li class="menu-items w-[100%] indent-[25px]"><A class="menu-items route" href="/admin/panel">Admin panel</A></li>);
  return (
    <div class="mt-16">
      <NavSidebar>
        {adminPanel()}
      </NavSidebar>
      <h1>
        Hello world!
      </h1>
      <h2>
        Header 2
      </h2>
      <h3>
        Header 3
      </h3>
      <p>
        Some sample text<br />
        Multi line
      </p>
    </div>
  );
}

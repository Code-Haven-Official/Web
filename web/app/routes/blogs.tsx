import { Link } from "@remix-run/react";
import NavBar from "~/components/nav";

import { useOptionalUser } from "~/utils";

export default function Blogs() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen bg-white">
      
    </main>
  );
}

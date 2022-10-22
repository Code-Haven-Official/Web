import { Link } from "@remix-run/react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  let result = 1 + 2

  
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
        <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
          
      </div>
    </main>
  );
}

import { Link } from "@remix-run/react";
import NavBar from "~/components/navbar";
import { useEffect, useState } from "react";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  const [showSpace, setShowSpace] = useState(true);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.code == "Space") {
        setShowSpace(false);
      }
    };
    document.addEventListener("keydown", keyDownHandler);

    return () => {
      document.removeEventListener("keydown", keyDownHandler);
    };
  }, [])
  
  return (
    <main className="relative min-h-screen bg-white sm:flex sm:items-center sm:justify-center">
      <div className="mx-auto max-w-7xl py-2 px-4 sm:px-6 lg:px-8">
        <p className={`text-2xl p-3 ${showSpace == true? "" : "hidden"}`} >Press <kbd className="kbd kbd-lg mx-2">Space</kbd> to start.</p>
        
      </div>
    </main>
  );
}

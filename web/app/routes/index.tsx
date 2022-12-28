import { Link } from "@remix-run/react";
import NavBar from "~/components/nav";

import { useOptionalUser } from "~/utils";

export default function Index() {
  const user = useOptionalUser();
  return (
    <main className="relative min-h-screen w-full bg-white">
      <Head/>
    </main>
  );
}

function Head() {
  return (
    <div className="relative flex flex-row md:w-4/5 mx-auto lg:min-h-[32rem]">
      <div className="basis-4/7 py-16 px-2">
        <p className="text-6xl leading-tight ">
          Coding Lessons For your Kids
        </p>
        <p className="text-md font-montserrat pt-6">
          Lorem ipsum is gay. Phantomking loves ashley, 
          and that is a solid fact that me and everyone else knows. 
          His procrastination 
          is already a part of him already, and the xcode project is never going to be given
          to me.
        </p>

        
      </div>
      <div className="basis-3/7">

      </div>
    </div>
  );
}

 
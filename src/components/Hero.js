import Link from "next/link";
import Navbar from "./Navbar";
import Image from "next/image";

export default function Hero() {
   return (
      <header className="h-svh">
         <Navbar></Navbar>
         <div className="w-10/12 mx-auto mt-16 text-xl ">
            <div className="flex justify-between">
               <div className="flex flex-col gap-16 mt-16 w-full font-bold">
                  <p className="text-base">
                     &lt;!DOCTYPE_
                     <span className="text-primary">
                        ME
                     </span>
                     &gt;
                  </p>
                  <div className="text-5xl font-bold pl-12 flex flex-col gap-2">
                     <h1 className="select-none">
                        Hi
                        <span className="text-primary ease-in-out duration-300 animate-pulse">
                           _Welcome
                        </span>
                     </h1>
                     <h2>
                        <span className="text-primary ease-in-out duration-300 animate-pulse">
                           To_
                        </span>
                        ZooBackend
                     </h2>
                  </div>
                  <p className="select-none text-primary ease-in-out duration-300">
                     &lt;qodr_developer&gt;
                  </p>
                  <p className="font-bold mt-16 text-accent">
                     <Link href="https://instagram.com/xandoalka">
                        &gt; contact_me
                     </Link>
                  </p>
               </div>
               <div className="w-full flex justify-center brightness-50 hue-rotate-15 hover:brightness-75 transition-all duration-500 ease-in-out">
                  <Image
                     src="/hero.png"
                     alt="hero"
                     width={500}
                     height={500}
                     className="aspect-auto"
                  />
               </div>
            </div>
         </div>
      </header>
   );
}

import Link from "next/link";

export default function Navbar() {
   return (
      <nav className="h-16 bg-base-300 sticky top-0 left-0 w-full backdrop-blur">
         <div className="flex h-full items-center justify-between w-11/12 mx-auto">
            <h1 className="text-3xl font-bold">
               <Link href="/">Zoobackend</Link>
            </h1>
            <ul className="flex gap-4 items-center">
               <li className="btn btn-primary w-20 min-h-10 h-10">
                  <Link href="/login">Login</Link>
               </li>
               <li className="btn btn-neutral w-20 min-h-10 h-10">
                  <Link href="/signup">Signup</Link>
               </li>
            </ul>
         </div>
      </nav>
   );
}

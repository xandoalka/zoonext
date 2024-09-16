import Link from "next/link";

export default function Footer() {
   return (
      <footer className="h-16 border-t border-neutral">
         <div className="flex h-full items-center justify-center">
            <p>Copyright &copy; {new Date().getFullYear()} - All Rights Reserved by <Link href={"https://instagram.com/xandoalka"} className="text-accent">Xanzu</Link></p>
         </div>
      </footer>
   );
}

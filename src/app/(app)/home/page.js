'use client'

import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";

export default function Page() {
   const router = useRouter();
   const handleLogout = async() => {
      try {
         await axiosInstance.post('/api/auth/logout');
         router.push('/login');
      } catch (error) {
         console.error('Logout failed:', error);
      }
   };

   return (
      <div>
         <button className="btn btn-primary" onClick={handleLogout}>Log Out</button>
      </div>
   );
}
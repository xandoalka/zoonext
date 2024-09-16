"use client";
// import { createContext } from 'react';
// import { useRouter } from 'next/navigation';
// import { useQuery, QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { axiosInstance } from '@/lib/axios';

// const AuthContext = createContext();

// const fetchUser = async () => {
//     const response = await axiosInstance.get('/api/auth/me');
//     return response;
// };

// export const AuthProvider = ({ children }) => {
//     const router = useRouter();
//     const { data: user, isLoading: loading } = useQuery({
//         queryKey: ['user'],
//         queryFn: fetchUser,
//         onSuccess: (data) => {
//             if (data) {
//                 router.push('/home');
//             }
//         },
//         onError: (error) => {
//             console.error('Failed to fetch user:', error);
//             router.push('/login');
//         },
//     });

//     return (
//         <AuthContext.Provider value={{ user, loading }}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// const queryClient = new QueryClient();

// export const AuthProviderWithQueryClient = ({ children }) => (
//     <QueryClientProvider client={queryClient}>
//         <AuthProvider>{children}</AuthProvider>
//     </QueryClientProvider>
// );

// export default AuthContext;

import { useEffect, useState } from "react"; // Tambahkan useState dan useEffect
import { createContext } from "react";
import { useRouter } from "next/navigation";
import { axiosInstance } from "@/lib/axios";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
   const router = useRouter();
   const [user, setUser] = useState(null);
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      const getUser = async () => {
         try {
            const userData = await axiosInstance.get("/api/auth/me");
            if (userData) {
               setUser(userData);
               router.push("/home"); 
            } else {
               console.log(userData);
               router.push("/login");
            }
            console.log(userData);
         } catch (error) {
            router.push("/login");
            console.error("Failed to fetch user:", error);
         } finally {
            setLoading(false);
         }
      };

      getUser();
   }, [ router ]);

   return (
      <AuthContext.Provider value={{ user, loading }}>
         {children}
      </AuthContext.Provider>
   );
};

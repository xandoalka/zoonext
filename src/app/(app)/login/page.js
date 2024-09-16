'use client'
import { axiosInstance } from "@/lib/axios";
import { useRouter } from "next/navigation";
// import { useLogin } from "@/features/auth/useLogin";
import { useRef } from "react";

export default function Page() {
   const emailRef = useRef(null)
   const passwordRef = useRef(null)
   const router = useRouter()

   // const { mutate } = useLogin({
   //    onSuccess: () => {
   //       router.push('/home')
   //    }
   // })

   const handlesubmit = async(e) => {
      e.preventDefault();
      const email = emailRef.current.value;
      const password = passwordRef.current.value;

      try {
         await axiosInstance.post('/api/auth/login', { email, password }, { withCredentials: true });
         router.push('/home');
      } catch (error) {
         console.error('Login failed:', error);
      }
   }
   return (
      <main className="h-svh flex justify-center items-center bg-base-content">
         <div className="w-96 px-10 min-h-fit py-12 rounded-lg bg-base-100">
            <h1 className="text-3xl text-center font-bold">Login</h1>
            <form onSubmit={handlesubmit}>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Email</span>
                  </label>
                  <input type="email" placeholder="email" className="input input-bordered" ref={emailRef}/>
               </div>
               <div className="form-control">
                  <label className="label">
                     <span className="label-text">Password</span>
                  </label>
                  <input type="password" placeholder="password" className="input input-bordered" ref={passwordRef}/>
               </div>
               <div className="form-control">
                  <label className="label">
                     <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                  </label>
               </div>
               <div className="form-control mt-6">
                  <button type="submit" className="btn btn-primary">Login</button>
               </div>
            </form>
         </div>
      </main>
   );
}
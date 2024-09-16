import localFont from "next/font/local";
import "../globals.css";
import { AuthProvider, AuthProviderWithQueryClient } from "@/components/contexts/AuthContext";

const geistSans = localFont({
   src: "../fonts/GeistVF.woff",
   variable: "--font-geist-sans",
   weight: "100 900",
});
const geistMono = localFont({
   src: "../fonts/GeistMonoVF.woff",
   variable: "--font-geist-mono",
   weight: "100 900",
});

export default function layout({ children }) {
   return (
      <html lang="en">
         <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
         >
            {/* <AuthProviderWithQueryClient> */}
            <AuthProvider>
               {children}
            </AuthProvider>
            {/* </AuthProviderWithQueryClient> */}
         </body>
      </html>
   );
}

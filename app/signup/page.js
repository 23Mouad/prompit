"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import "@styles/style.css";
import logovv from "@assets/logovv.png";
import { signIn, getProviders } from "next-auth/react";

const metadata = {
   title: "signup",
   description: "signup page",
};

export default function Signup() {
   const [providers, setProviders] = React.useState(null);

   React.useEffect(() => {
      const setupProviders = async () => {
         const reponse = await getProviders();
         setProviders(reponse);
      };

      setupProviders();
   }, []);

   return (
      <main className="signupage">
         <div>
            <Image
               src={logovv}
               width={200}
               height={200}
               alt="logo image"
               priority
            />
            <h5 className=" text-white">Welcome to Prompt It</h5>
            <h6 className=" text-white-50 mb-5">
               Log in or Register with your Email{" "}
            </h6>
            {providers && Object.values(providers).length > 0 ? (
               Object.values(providers).map((provider) => (
                  <button
                     className="btn btn-primary signout w-100 rounded-4"
                     onClick={() => signIn(provider.id)}
                     key={provider.name}
                     type="button"
                  >
                     Continue with {provider.name}
                  </button>
               ))
            ) : (
               <button className="btn btn-secondary w-100 rounded-4" disabled>
                  Wait for Providers
               </button>
            )}
         </div>
      </main>
   );
}

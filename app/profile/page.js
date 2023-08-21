"use client ";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Profile from "@components/profile";
import Navbar from "@components/Navbar";

const MyProfile = () => {
   const { data: session } = useSession();
   const router = useRouter();
   const [data, setData] = useState([]);

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await fetch("/api/users/[id]/prompts");
         const data = await res.json();
      };
      fetchPosts();
   }, []);

   const editPrompt = async() > {};
   const deletePrompt = async() > {};
   return (
      <>
         <Navbar />{" "}
         <Profile
            name="my"
            desc="Welcome to your profile"
            data={[]}
            editPrompt={editPrompt}
            deletePrompt={deletePrompt}
         />
      </>
   );
};

export default MyProfile;

"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Profile from "@components/profile";
import Navbar from "@components/Navbar";

const MyProfile = () => {
   const { data: session } = useSession();
   const router = useRouter();
   const [isdata, setData] = useState([]);

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await fetch(`/api/users/${session?.user.id}/prompts`);
         const data = await res.json();
         setData(data);
      };
      if (session?.user.id) fetchPosts();
   }, [session?.user.id]);

   const editPrompt = (post) => {
      router.push(`/edit-prompt?id=${post._id}`);
   };
   const deletePrompt = async () => {};
   return (
      <>
         <Navbar />{" "}
         <Profile
            name="My"
            desc="Welcome to your profile"
            data={isdata}
            editPrompt={editPrompt}
            deletePrompt={deletePrompt}
         />
      </>
   );
};

export default MyProfile;

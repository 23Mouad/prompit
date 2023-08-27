"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import Profile from "@components/Profile";
import Navbar from "@components/Navbar";
import Swal from "sweetalert2";
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
   const deletePrompt = async (post) => {
      try {
         const confirm = await Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
         });

         if (confirm.isConfirmed) {
            const response = await fetch(`/api/prompt/${post._id}`, {
               method: "DELETE",
            });

            if (response.ok) {
               const filteredPosts = isdata.filter(
                  (item) => item._id !== post._id
               );
               setData(filteredPosts);
               Swal.fire("Deleted!", "Your post has been deleted.", "success");
            } else {
               throw new Error("Failed to delete post.");
            }
         }
      } catch (error) {
         console.error(error);
         Swal.fire(
            "Error",
            "An error occurred while deleting the post.",
            "error"
         );
      }
   };
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

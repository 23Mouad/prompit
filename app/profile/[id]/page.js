"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Navbar from "@components/Navbar";
import Profile from "@components/Profile";

const OtherProfile = () => {
   const [isdata, setData] = useState([]);
   const params = useParams();

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await fetch(`/api/users/${params.id}/prompts`);
         const data = await res.json();
         setData(data);
      };
      if (params.id) fetchPosts();
   }, [params.id]);

   return (
      <>
         <Navbar />
         <Profile
            name={isdata[0]?.creator?.username || "User"}
            desc={`Welcome to ${isdata[0]?.creator?.username} profile`}
            data={isdata}
         />
      </>
   );
};

export default OtherProfile;

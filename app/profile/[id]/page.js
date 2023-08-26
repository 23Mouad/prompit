"use client";
import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "@components/Navbar";
import Profile from "@components/Profile";
const OtherProfile = () => {
   const [isdata, setData] = useState([]);
   const searchParamsi = useSearchParams();

   useEffect(() => {
      const fetchPosts = async () => {
         const res = await fetch(`/api/users/${searchParamsi.id}/prompts`);
         const data = await res.json();
         setData(data);
      };
      if (searchParamsi.id) fetchPosts();
   }, [searchParamsi.id]);

   return (
      <>
         <Navbar />
         <Profile
            name={isdata.creator?.username || "User"}
            desc={`Welcome to ${isdata.creator?.username} profile`}
            data={isdata}
         />
      </>
   );
};

export default OtherProfile;

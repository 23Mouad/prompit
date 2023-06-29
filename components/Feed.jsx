"use client";
import React from "react";
import Cardprompt from "./Cardprompt";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { Grid, Skeleton, Stack } from "@mui/material";

const PromptsList = ({ data, handleTagClick }) => {
   if (data.length === 0) {
      return (
         <Grid
            container
            spacing={4}
            justifyContent="center"
            alignItems="center"
            mt={3}
            padding={4}
         >
            <Grid item xs={12} sm={6} md={4} marginBottom={2}>
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
               <Skeleton variant="circular" width={80} height={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
            <Grid item xs={12} sm={6} md={4} marginTop={2}>
               <Skeleton variant="circular" height={80} width={80} />
               <Skeleton variant="rectangular" height={150} />
               <Skeleton variant="rounded" height={150} />
            </Grid>
         </Grid>
      );
   }

   return (
      <div className="prompts-list">
         {data.map((prompt) => (
            <Grid
               key={prompt._id}
               container
               spacing={4}
               justifyContent="center"
               alignItems="center"
               mt={3}
               padding={4}
            >
               <Cardprompt
                  key={prompt._id}
                  prompt={prompt}
                  handleTagClick={handleTagClick}
               />
            </Grid>
         ))}
      </div>
   );
};

const Feed = () => {
   const [posts, setPosts] = React.useState([]);
   const [search, setsearch] = React.useState("");

   const handlechange = (e) => {
      setsearch(e.target.value);
   };

   React.useEffect(() => {
      const fetchdata = async () => {
         const res = await fetch("/api/prompt");
         const data = await res.json();
         setPosts(data);
      };
      fetchdata();
   }, []);

   const handleTagClick = (tag) => {
      setsearch(tag);
   };

   return (
      <div className=" p-1 p-sm-2 p-md-4 p-lg-5">
         <form className="search ">
            <input
               type="text"
               className="search-input"
               placeholder="Search for a movie"
               value={search}
               onChange={handlechange}
            />
         </form>
         <PromptsList data={posts} handleTagClick={handleTagClick} />
      </div>
   );
};
export default Feed;

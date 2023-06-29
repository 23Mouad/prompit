"use client";
import React from "react";
import Cardprompt from "./Cardprompt";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";

const PromptsList = ({ data, handleTagClick }) => {
   if (data.length === 0) {
      return <h1 className="text-center">No prompts found</h1>;
   }

   return (
      <div className="prompts-list">
         {data.map((prompt) => (
            <Cardprompt
               key={prompt.id}
               prompt={prompt}
               handleTagClick={handleTagClick}
            />
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

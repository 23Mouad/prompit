"use client";
import React from "react";
import Cardprompt from "./Cardprompt";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import LoadingCards from "@components/Loadingcrds";

const PromptsList = ({ data, handleTagClick }) => {
   if (data.length === 0) {
      return <LoadingCards />;
   }

   return (
      <div className="container">
         <div className="prompts-list m-0 row align-items-start p-md-4  ">
            {data.map((prompt) => (
               <Cardprompt
                  key={prompt._id}
                  prompt={prompt}
                  handleTagClick={handleTagClick}
               />
            ))}
         </div>
      </div>
   );
};

const Feed = () => {
   const [posts, setPosts] = React.useState([]);
   const [search, setsearch] = React.useState("");
   const [FilterdPosts, setFiltredPosts] = React.useState([]);

   // const handlechange = (e) => {
   //    setsearch(e.target.value);
   // };

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

   //? BELLOW THIS COMMENT THE CODE OF FRONTEND

   return (
      <div className=" p-1 p-sm-2 p-md-4 p-lg-5">
         <div className="search  me-auto ms-auto w-25 ">
            <input
               type="text"
               className="search__input"
               placeholder="Type your text"
               value={search}
               onChange={(e) => setsearch(e.target.value)}
            />
            <button className="search__button">
               <svg
                  className="search__icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
               >
                  <g>
                     <path d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"></path>
                  </g>
               </svg>
            </button>
         </div>
         <PromptsList data={posts} handleTagClick={handleTagClick} />
      </div>
   );
};
export default Feed;

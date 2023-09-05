"use client";
import React from "react";
import Cardprompt from "@components/Cardprompt";
import LoadingCards from "./loadingcrds";
import Skeleton from "@mui/material/Skeleton";
import Box from "@mui/material/Box";

const Profile = ({ desc, data, deletePrompt, editPrompt, name }) => {
   const [isSmall, setIsSmall] = React.useState(false);

   React.useEffect(() => {
      window.innerWidth < 768 ? setIsSmall(true) : setIsSmall(false);
   }, []);
   return (
      <>
         {data.length !== 0 ? (
            <div className="p-3 p-sm-1 pt-sm-2 p-md-5 ">
               <h1 className=" text-primary-emphasis">{name} Profile</h1>
               <p>{desc}</p>
            </div>
         ) : (
            <div className="p-3 p-sm-1 pt-sm-2 p-md-5 w-75 ">
               <Skeleton
                  variant="rounded"
                  height={45}
                  animation="wave"
                  sx={{ marginBottom: isSmall ? "4px" : "8px" }}
               />
               <Skeleton variant="rounded" height={25} animation="wave" />
            </div>
         )}
         <div className=" p-3 p-sm-1 p-md-3 my-2">
            {data.length === 0 ? (
               <LoadingCards />
            ) : (
               data.map((prompt) => (
                  <div
                     className="prompts-list m-0 row row-cols-sm-2 row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 align-items-start p-md-2 p-lg-4  "
                     key={prompt._id}
                  >
                     <Cardprompt
                        key={prompt._id}
                        prompt={prompt}
                        deletePrompt={() =>
                           deletePrompt && deletePrompt(prompt)
                        }
                        editPrompt={() => editPrompt && editPrompt(prompt)}
                     />
                  </div>
               ))
            )}
         </div>
      </>
   );
};

export default Profile;

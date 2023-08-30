"use client";
import React from "react";
import Cardprompt from "@components/Cardprompt";
import LoadingCards from "./loadingcrds";

const Profile = ({ desc, data, deletePrompt, editPrompt, name }) => {
   return (
      <>
         <div className="p-3 p-sm-1 pt-sm-2 p-md-5 ">
            <h1 className=" text-primary-emphasis">{name} Profile</h1>
            <p>{desc}</p>
         </div>
         <div className=" p-3 p-sm-1 p-md-3 my-2">
            <div className="prompts-list m-0 row row-cols-sm-2 row-cols-1 row-cols-md-2 row-cols-lg-3 g-2 align-items-start p-md-2 p-lg-4  ">
               {data.length === 0 ? (
                  <LoadingCards />
               ) : (
                  data.map((prompt) => (
                     <Cardprompt
                        key={prompt._id}
                        prompt={prompt}
                        deletePrompt={() =>
                           deletePrompt && deletePrompt(prompt)
                        }
                        editPrompt={() => editPrompt && editPrompt(prompt)}
                     />
                  ))
               )}
            </div>
         </div>
      </>
   );
};

export default Profile;

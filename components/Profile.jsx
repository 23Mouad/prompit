"use client";
import React from "react";
import Cardprompt from "@components/Cardprompt";
import LoadingCards from "@components/Loadingcrds";
const Profile = ({ desc, data, deletePrompt, editPrompt, name }) => {
   return (
      <>
         <h1 className=" text-primary-emphasis">{name} Profile</h1>
         <p>{desc}</p>
         <div className="container my-4">
            <div className="prompts-list m-0 row align-items-start p-md-4  ">
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

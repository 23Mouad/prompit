import React from "react";
import Image from "next/image";
import { Grid } from "@mui/material";
const Cardprompt = ({ handleTagClick, prompt }) => {
   return (
      <Grid item xs={12} sm={6} md={4} marginBottom={2}>
         <Grid container padding={4}>
            <Grid item xs={4} sm={3} md={2} marginBottom={2}>
               <Image
                  alt="profile picture"
                  className="rounded-circle"
                  width={40}
                  height={40}
                  src={prompt.creator.image}
               />
            </Grid>
         </Grid>
         <h2>{prompt.title}</h2>
         <p>{prompt.description}</p>
         <div className="tags">
            {prompt.tags.map((tag) => (
               <span
                  key={tag}
                  className="tag"
                  onClick={() => handleTagClick(tag)}
               >
                  #{tag}
               </span>
            ))}
         </div>
      </Grid>
   );
};

export default Cardprompt;

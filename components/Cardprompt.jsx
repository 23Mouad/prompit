"use client";
import React from "react";
import { Grid } from "@mui/material";
import Link from "next/link";
import Chip from "@mui/material/Chip";
import TagRoundedIcon from "@mui/icons-material/TagRounded";
import Avatar from "@mui/material/Avatar";
import ContentCopyOutlinedIcon from "@mui/icons-material/ContentCopyOutlined";
import ContentCopyTwoToneIcon from "@mui/icons-material/ContentCopyTwoTone";
import { Margin } from "@mui/icons-material";
import { useRouter, usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import "@styles/style.css";

function stringToColor(string) {
   let hash = 0;
   let i;

   /* eslint-disable no-bitwise */
   for (i = 0; i < string.length; i += 1) {
      hash = string.charCodeAt(i) + ((hash << 5) - hash);
   }

   let color = "#";

   for (i = 0; i < 3; i += 1) {
      const value = (hash >> (i * 8)) & 0xff;
      color += `00${value.toString(16)}`.slice(-2);
   }
   /* eslint-enable no-bitwise */

   return color;
}

function stringAvatar(name) {
   return {
      sx: {
         bgcolor: stringToColor(name),
      },
      children: `${name.split(" ")[0][0].toUpperCase()}${
         name && name.split(" ")[1] && name.split(" ")[1][0]
            ? name.split(" ")[1][0].toUpperCase()
            : ""
      }`,
   };
}

const Cardprompt = ({ handleTagClick, prompt, editPrompt, deletePrompt }) => {
   const [copied, setCopied] = React.useState(false);

   const copyToClipboard = () => {
      navigator.clipboard.writeText(prompt.prompt);
      setCopied(true);
      setTimeout(() => setCopied(false), 3000);
   };

   const { data: session } = useSession();
   const router = useRouter();
   const path = usePathname();

   return (
      <div className="col-12 col-sm-6 col-md-4  row bg-body-tertiary p-xs-1 p-sm-2 mb-2 border border-2 border-opacity-25 border-secondary mx-0 ">
         <div className="avoid-break">
            <div className=" justify-content-between d-flex p-1 ">
               <div className=" d-flex">
                  <Grid
                     item
                     xs={2}
                     sm={2}
                     md={2}
                     padding={1}
                     marginBottom={2}
                     marginTop={1}
                  >
                     <Link
                        href={`/profile?id=${prompt.creator._id}`}
                        className=" text-decoration-none "
                     >
                        <Avatar {...stringAvatar(prompt.creator.username)} />
                     </Link>
                  </Grid>
                  <Grid item xs={6} sm={6} md={6} marginBottom={2}>
                     <h5 className=" text-black mb-0">
                        {prompt.creator.username}
                     </h5>
                     <h6 className=" text-black-50">{prompt.creator.email}</h6>
                  </Grid>
               </div>
               <Grid
                  item
                  xs={2}
                  sm={2}
                  md={2}
                  sx={{
                     marginRight: "5px",
                  }}
               >
                  {copied ? (
                     <ContentCopyTwoToneIcon
                        className="text-black-50"
                        onClick={copyToClipboard}
                     />
                  ) : (
                     <ContentCopyOutlinedIcon
                        className="text-black-50"
                        onClick={copyToClipboard}
                     />
                  )}
               </Grid>
            </div>
            <h4 className=" text-secondary-emphasis rubik">{prompt.title}</h4>
            <p className=" text-secondary rubik">{prompt.prompt}</p>
            <div className="tags mt-3">
               {prompt.tags.map((tag) => (
                  <Chip
                     key={tag}
                     variant="outlined"
                     onClick={() => handleTagClick(tag)}
                     icon={<TagRoundedIcon />}
                     label={tag}
                     cursor="pointer"
                     className="me-2 mb-2"
                  />
               ))}
            </div>
            {session?.user?.id === prompt.creator._id &&
               path === "/profile" && (
                  <div className="d-flex justify-content-center gap-3 pt-2 mt-4">
                     <p
                        className=" text-success pointer-event"
                        onClick={editPrompt}
                        style={{ cursor: "pointer" }}
                     >
                        Edit
                     </p>
                     <p
                        className=" text-danger pointer-event "
                        onClick={deletePrompt}
                        style={{ cursor: "pointer" }}
                     >
                        Delete
                     </p>
                  </div>
               )}
         </div>
      </div>
   );
};

export default Cardprompt;

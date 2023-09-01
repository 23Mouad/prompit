"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import logopng from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

const Navbar = () => {
   const { data: session } = useSession();
   const [isSmall, setIsSmall] = React.useState(false);

   React.useEffect(() => {
      window.innerWidth < 768 ? setIsSmall(true) : setIsSmall(false);
   }, []);

   const [anchorEl, setAnchorEl] = React.useState(null);
   const open = Boolean(anchorEl);
   const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
   };
   const handleClose = () => {
      setAnchorEl(null);
   };

   return (
      <nav className="navbari d-flex justify-content-between align-items-center p-0 ">
         <div className="logo-site d-flex align-items-center">
            <Link href="/">
               <Image
                  src={logopng}
                  alt="Website Logo"
                  className=" img-fluid"
                  width={70}
                  height={70}
                  priority
               />
            </Link>
            <h5>
               <Link href="/">Promp it</Link>
            </h5>
         </div>
         <div>
            {session?.user ? (
               <>
                  {isSmall === false ? (
                     <>
                        <Link
                           href="/profile"
                           style={{ marginRight: "10px" }}
                           title="Profile"
                        >
                           <Image
                              src={session.user.image}
                              alt="profile picture"
                              className="rounded-circle"
                              width={40}
                              height={40}
                              priority
                           />
                        </Link>

                        <Link
                           href="/create"
                           className="btn btn-outline-dark rounded-5 me-2 p-2 pe-3 ps-3 "
                           title="Create a prompt"
                        >
                           Create a prompt
                        </Link>
                        <button
                           className="btn btn-outline-danger rounded-5 me-2 p-2 pe-3 ps-3 "
                           onClick={() => signOut()}
                           title="Log out"
                        >
                           Logout
                        </button>
                     </>
                  ) : (
                     <>
                        <Button
                           id="fade-button"
                           aria-controls={open ? "fade-menu" : undefined}
                           aria-haspopup="true"
                           aria-expanded={open ? "true" : undefined}
                           onClick={handleClick}
                        >
                           <FontAwesomeIcon
                              icon={faBars}
                              style={{ color: "#171717" }}
                              size="xl"
                           />
                        </Button>
                        <Menu
                           id="fade-menu"
                           MenuListProps={{
                              "aria-labelledby": "fade-button",
                           }}
                           anchorEl={anchorEl}
                           open={open}
                           onClose={handleClose}
                           TransitionComponent={Fade}
                        >
                           <MenuItem>
                              {" "}
                              <Link href="/profile" title="Profile">
                                 Profile
                              </Link>
                           </MenuItem>
                           <MenuItem>
                              <Link href="/create" title="Create a prompt">
                                 Create prompt
                              </Link>
                           </MenuItem>
                           <MenuItem onClick={() => signOut()}>Logout</MenuItem>
                        </Menu>
                     </>
                  )}
               </>
            ) : (
               <Link
                  href="/signup"
                  className="btn btn-dark rounded-5 me-2 p-2 pe-3 ps-3 "
               >
                  Sign In
               </Link>
            )}
         </div>
      </nav>
   );
};

export default Navbar;

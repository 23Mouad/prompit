"use client";
import React from "react";
import Link from "next/link";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import Image from "next/image";
import logopng from "../assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faRightFromBracket } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
   const { data: session } = useSession();

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
                  {window.innerWidth > 768 ? (
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
                           title="Sign out"
                        >
                           Sign Out
                        </button>
                     </>
                  ) : (
                     <>
                        <Link
                           href="/profile"
                           style={{ marginRight: "10px" }}
                           title="profile"
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
                           style={{ marginRight: "10px" }}
                           title="create a prompt"
                        >
                           <FontAwesomeIcon
                              icon={faPlus}
                              size="2xl"
                              style={{ color: "#1f1f1f" }}
                           />
                        </Link>
                        <button
                           onClick={() => signOut()}
                           title="sign out"
                           className=" border-0 bg-transparent"
                        >
                           <FontAwesomeIcon
                              icon={faRightFromBracket}
                              size="2xl"
                              style={{ color: "#DC3545" }}
                           />
                        </button>
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

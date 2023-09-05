"use client";
import Image from "next/image";
import LandingDesign from "../assets/landingdesign.png";

import Link from "next/link";

const LandingPage = () => {
   return (
      <div className=" landing-page mb-2">
         <div className="row m-0">
            <div className="col-md-6 order-2 order-md-1 secondpart m-0 p-5">
               <h2 className=" mt-5">
                  AI<span className=" text-white">-Powered </span>Prompts
               </h2>
               <h5 className=" text-white mt-3 mt-md-5">
                  <span className=" text-dark fw-bold">Prompt it</span> is an
                  open-source AI prompting tool for modern world to help you
                  write better.
               </h5>
               <div className="d-flex mt-5 ">
                  <button
                     onClick={() => {
                        window.scrollBy(0, 50);
                     }}
                     className="btn btn-dark rounded-0 me-2 pe-3 ps-3"
                  >
                     Discover
                  </button>
                  <Link
                     href="/create"
                     className="btn btn-outline-dark rounded-0 me-2 pe-3 ps-3"
                  >
                     Create
                  </Link>
               </div>
            </div>
            <div className="col-md-6 order-1 order-md-2 p-0 overflow-y-hidden"></div>
         </div>
      </div>
   );
};

export default LandingPage;

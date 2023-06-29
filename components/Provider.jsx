"use client";
import { SessionProvider } from "next-auth/react";

const Provider = (props) => {
   return (
      <SessionProvider session={props.session}>
         {props.children}
      </SessionProvider>
   );
};

export default Provider;

import Image from "next/image";
import Link from "next/link";
import "@styles/style.css";
import Landingpage from "@components/Landingpage";
import Navbar from "../components/Navbar";
import Provider from "@components/Provider";
import Feed from "@components/Feed";

export default function Home() {
   return (
      <main className="main">
         <Provider>
            <Navbar />
         </Provider>
         <Landingpage />
         <Feed />
      </main>
   );
}

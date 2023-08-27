import "@styles/style.css";
import Landingpage from "@components/Landingpage";
import Navbar from "../components/Navbar";
import Provider from "@components/Provider";
import Feed from "@components/Feed";
import Head from "next/head";

export default function Home() {
   return (
      <main className="main">
         <Head>
            <title>Prompt it</title>
         </Head>
         <Provider>
            <Navbar />
         </Provider>
         <Landingpage />
         <Feed />
      </main>
   );
}

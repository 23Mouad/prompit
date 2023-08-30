import "@styles/style.css";
import Landingpage from "@components/Landingpage";
import Navbar from "../components/Navbar";
import Provider from "@components/Provider";
import Feed from "@components/Feed";

export const metadata = {
   title: "Promp it",
   description:
      "Prompt it is an open-source AI prompting tool for modern world to help you write better.",
   openGraph: {
      title: "Promp it",
      description:
         "Prompt it is an open-source AI prompting tool for modern world to help you write better.",
      keywords: [
         "Next.js",
         "Prompt",
         "Prompt it",
         "Ai ",
         "chatGPT",
         "vercel",
         "JavaScript",
      ],
   },
   keywords: [
      "Next.js",
      "Prompt",
      "Prompt it",
      "Ai ",
      "chatGPT",
      "vercel",
      "JavaScript",
   ],
};

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

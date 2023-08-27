import "../styles/style.css";
import { Inter } from "next/font/google";

import "@node_modules/bootstrap/dist/css/bootstrap.min.css";
import Provider from "@components/Provider";
const inter = Inter({ subsets: ["latin"] });

// export const metadata = {
//    title: "Prompt it",
//    description: "ai powered prompt generator",
// };

export default function RootLayout({ children }) {
   return (
      <html lang="en">
         <body className={inter.className} suppressHydrationWarning={true}>
            <Provider>{children}</Provider>
         </body>
      </html>
   );
}

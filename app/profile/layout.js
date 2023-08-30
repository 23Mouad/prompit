export const metadata = {
   title: "My Profile",
   description: "Check your profile and your prompts",
   openGraph: {
      title: "My Profile",
      description: "Check your profile and your prompts",
   },
};
export default function CreateLayout({ children }) {
   return <section>{children} </section>;
}

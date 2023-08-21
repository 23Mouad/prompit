"use client";
import Navbar from "@components/Navbar";
import Provider from "@components/Provider";
import Profile from "@components/Profile";

const ProfilePage = () => {
   return (
      <>
         <Provider>
            <Navbar />
            <Profile />
         </Provider>
      </>
   );
};

export default ProfilePage;

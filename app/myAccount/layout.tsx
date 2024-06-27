// // import Navbar from "@/components/Navbar";import React from "react";
import Navbar from "./_components/Navbar";
import LeftSideBar from "./_components/LeftSideBar";
import React from "react";
import MobileView from "../components/MobileView";


const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
    <MobileView />
    <main className="relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col overflow-x-auto px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>
    </main>
  </div>

    
  );
};

export default Layout;
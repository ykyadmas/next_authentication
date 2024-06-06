// // import Navbar from "@/components/Navbar";import React from "react";
import React from "react";
import Navbar from "./_comopnents/Navbar/Navbar";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/Auth";
import LeftSideBar from "./_comopnents/LeftSideBar";



const Layout = async({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  // const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;
  if (session?.user.role !== 'INSURANCEOFFICER'){
    return <h1>You are not an Insurance Officer</h1>
  }
  return (
    <main className="relative">
      <Navbar />
      <div className="flex">
        <LeftSideBar />
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-36 max-md:pb-14 sm:px-14">
          <div className="mx-auto w-full max-w-5xl">{children}</div>
        </section>
      </div>

      {/* <Toaster /> */}
    </main>
  );
};

export default Layout;
"use client"
import React from "react";
import Link from "next/link";
import SubInsurances from "../components/SubInsurances";
import { useSession } from "next-auth/react";



const Insurance = () => {

  const{data:session}=useSession()

  return (
 <div>
  {session && session.user ? (
 <div className='position flex justify-end gap-4 bg-gray-500 p-5'>
 <Link href="/" className='mt-2 text-white'>Back to Home</Link>
 <Link className="btn btn-xs mt-2 rounded-full  text-black" href="/api/auth/signout">Signout</Link>
 </div>
  ):(
<div className='flex justify-end gap-4 bg-gray-500'>
  <Link href="/auth/signup" className='btn btn-primary'>Sign up</Link>
   <Link href="/api/auth/signin" className='btn btn-primary'>Sign in</Link>
  </div>
  )}
    
  <SubInsurances/>
  
 </div>
  );
};

export default Insurance;
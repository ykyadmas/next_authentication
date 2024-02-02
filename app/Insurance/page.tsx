import React from "react";
import Link from "next/link";
import Image from "next/image";
import SubInsurances from "../components/SubInsurances";



const Insurance = () => {
  return (
 <div>
     <div className='flex justify-end bg-gray-500 gap-4 p-5 position'>
    <Link href="/" className='mt-2 text-white'>Back to Home</Link>
    <Link className="btn btn-xs rounded-full mt-2  text-black" href="/api/auth/signout">Signout</Link>

  
    </div>
  <SubInsurances/>
  
 </div>
  );
};

export default Insurance;
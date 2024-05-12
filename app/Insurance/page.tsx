import React from "react";
import Link from "next/link";
import SubInsurances from "../components/SubInsurances";



const Insurance = () => {
  return (
 <div>
     <div className='position flex justify-end gap-4 bg-gray-500 p-5'>
    <Link href="/" className='mt-2 text-white'>Back to Home</Link>
    <Link className="btn btn-xs mt-2 rounded-full  text-black" href="/api/auth/signout">Signout</Link>

  
    </div>
  <SubInsurances/>
  
 </div>
  );
};

export default Insurance;
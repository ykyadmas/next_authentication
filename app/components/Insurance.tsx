import React from "react";
import Link from "next/link";
import Image from "next/image";



const Insurance = () => {
  return (
  <div className="bg-primary-content">
    <h1 className="text-black">Our Policy Proposals</h1>
    <h1 className="ml-80  border-b-blue-700 inline-block font-bold text-4xl justify-center mt-7 mb-8 border decorate ">Type Of Our Proposals</h1>
    <div className="grid grid-cols-4 gap-16 justify-center">
    <div>
    <Link href="/ProposalSubmit">
   <Image 
      src="/insurance.jpg" 
      width={300} height={300} 
      alt="Image"/>
    <p>Private Proposal Policy</p>
   </Link>
    </div>
    <div>
   <Link href="/ProposalSubmit">
   <Image 
      src="/insurance.jpg" 
      width={300} height={300} 
      alt="Image"/>
    <p>Trade Proposal Policy</p>
   </Link>
    </div>
    <div>
   <Link href="/ProposalSubmit">
   <Image 
      src="/insurance.jpg" 
      width={300} height={300} 
      alt="Image"/>
    <p>Trade Proposal Policy</p>
   </Link>
    </div>
    <div>
   <Link href="/ProposalSubmit">
   <Image 
      src="/insurance.jpg" 
      width={300} height={300} 
      alt="Image"/>
    <p>Trade Proposal Policy</p>
   </Link>
    </div>
  </div>
  </div>
  );
};

export default Insurance;
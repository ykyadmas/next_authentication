import React from "react";
import Link from "next/link";



const Insurance = () => {
  return (
  <div>
  <Link href="#home" className='mt-2 text-white'>Home</Link>
  <Link href="#about" className='mt-2 text-white'>About</Link>
  <Link href="#proposal" className='mt-2 text-white'>Proposals</Link>
  <Link href="#contact" className='mt-2 text-white'>Contact</Link>
  <Link href="#proposalDisplay" className="mt-2 text-white">Your Proposal</Link>
  </div>
  );
};

export default Insurance;
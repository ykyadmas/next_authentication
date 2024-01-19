import React from "react";
import Link from "next/link";
import Image from "next/image";



const ProjectCard = () => {
  return (
  <div className="bg-primary-content">
  <h1 className="flex justify-center mt-3 font-bold text-3xl text-black">Our Policy Proposals</h1>
<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4">
       <div>
        <Link href="/Insurance">
        <Image src="/insurance.jpg" width={500} height={400} alt="image"/>

        </Link>
   <Link href="/Insurance">
   <p>Trade Ploicy Proposal</p>

  </Link>
       </div>

        <div className="mt-4 text-left flex flex-col h-full">
          <div className="flex flex-row justify-start mt-8">
        <Link href="/Insurance">
        <Image src="/insurance.jpg" alt="image" width={500} height={400}/>
                     </Link>
          </div>
         <Link href="/Insurance"><p>Trade Ploicy Proposal</p></Link>

        </div>
      </div>   
  </div>
  );
};

export default ProjectCard;
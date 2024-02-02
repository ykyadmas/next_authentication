import React from "react";
import Link from "next/link";
import Image from "next/image";
import DetailPrivateInsurance from "./DetailPrivateInsurance";
import DetailCommercialInsurance from "./DetailCommercialInsurance";



const ProjectCard = () => {
  return (
  <div className="bg-primary-content" id="proposal">
  <h1 className="flex justify-center mt-3 font-bold text-3xl text-black">Our Policy Proposals</h1>
<div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4">
<DetailPrivateInsurance />
<DetailCommercialInsurance />
      </div>  
 
  </div>
  );
};

export default ProjectCard;
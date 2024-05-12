import React from "react";
import DetailPrivateInsurance from "./DetailPrivateInsurance";
import DetailCommercialInsurance from "./DetailCommercialInsurance";



const ProjectCard = () => {
  return (
  <div className="bg-primary-content" id="proposal">
  <h1 className="mt-3 flex justify-center text-3xl font-bold text-black">Our Policy Proposals</h1>
<div className="items-center gap-8 px-4 py-8 md:grid md:grid-cols-2">
<DetailPrivateInsurance />
<DetailCommercialInsurance />
      </div>  
 
  </div>
  );
};

export default ProjectCard;
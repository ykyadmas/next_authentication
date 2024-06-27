import React from "react";
import DetailPrivateInsurance from "./DetailPrivateInsurance";
import DetailCommercialInsurance from "./DetailCommercialInsurance";

const ProjectCard = () => {
  return (
    <div className="bg-primary-content" id="proposal">
      <h1 className="mt-3 flex justify-center text-center text-2xl font-bold text-black md:text-3xl">
        Our Policy Proposals
      </h1>
      <div className="flex flex-col items-center gap-8 px-4 py-8 md:grid md:grid-cols-2">
        <div className="lg:m-auto">
          <DetailPrivateInsurance />
        </div>
        <DetailCommercialInsurance />
      </div>
    </div>
  );
};

export default ProjectCard;

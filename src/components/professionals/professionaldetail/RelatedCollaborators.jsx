import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../../mock/Data";

const RelatedCollaborators = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:px-60 mt-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-3xl border-r border-gray-400 pr-4">
            Collaborators
          </div>
          <div className="text-gray-500 font-semibold pl-4">
            12 projects added
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="relative">
                <img
                  src={project.img}
                  alt="Project"
                  className="w-full h-40 sm:h-60 object-cover"
                />
                <div className="absolute inset-0 flex flex-col gap-2 items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white p-2">
                  <p className="text-sm sm:text-lg font-bold text-center">
                    {project.title}
                  </p>
                  <p className="text-xs sm:text-sm">{project.subtitle}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedCollaborators;

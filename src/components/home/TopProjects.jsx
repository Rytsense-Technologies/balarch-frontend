import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { projects } from "../../mock/Data";
import PatrocinosCards from "../common/PatrocinosCards";

const TopProjects = () => {
  return (
    <>
      <div className="py-5 lg:py-10 px-5 lg:px-40">
        <h1 className="mb-5 lg:mb-10 flex items-center gap-2 lg:gap-10 justify-center text-xl lg:text-3xl font-semibold">
          <VscDebugRestart /> Lo más reciente
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-8">
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
      <PatrocinosCards />
    </>
  );
};

export default TopProjects;

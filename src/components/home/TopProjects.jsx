import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { projects } from "../../mock/Data";
import PatrocinosCards from "../common/PatrocinosCards";

const TopProjects = () => {
  return (
    <>
      <div className="py-10 lg:px-40">
        <h1 className="mb-10 flex items-center gap-10 justify-center  text-3xl font-semibold">
          <VscDebugRestart /> Lo mos reciente
        </h1>
        <div className="grid grid-cols-4 gap-8">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className=" relative">
                <img src={project.img} alt="Image 1" className="w-full h-60" />
                <div className="absolute inset-0 flex flex-col gap-4 items-center justify-end  opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black  bg-opacity-50 text-white">
                  <p className="text-xl text-center font-bold">
                    {project.title}
                  </p>
                  <p className="text-sm">{project.subtitle}</p>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
        <PatrocinosCards />
      </div>
    </>
  );
};

export default TopProjects;

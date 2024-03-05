import React from "react";
import { projects } from "../../mock/Data";
import ProjectFilter from "./ProjectFilter";

const ProjectsList = () => {
  return (
    <div className="grid grid-cols-8 gap-4 py-10 lg:px-40">
      <div className="col-span-2">
        <ProjectFilter />
      </div>

      <div className="col-span-6">
        <div className="flex items-center  mb-5">
          <div className="text-3xl font-bold border-r border-gray-400 pr-4">
            Lo más reciente
          </div>
          <div className="text-gray-500 font-semibold pl-4">
            17 PROYECTOS REGISTRADOS
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-3 gap-8 mt-5">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div className="relative">
                <img src={project.img} alt="Image 1" className="w-full h-60" />
                <div className="absolute inset-0 flex flex-col gap-4 items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <div className="border-2 border-white p-4 hover:border-transparent hover:border-white hover:rounded-lg hover:p-6 hover:mx-4 hover:my-4">
                    <p className="text-xl text-center font-bold">
                      {project.title}
                    </p>
                    <p className="text-sm">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;

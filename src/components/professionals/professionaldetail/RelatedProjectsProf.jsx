import React from "react";
import { useNavigate } from "react-router-dom";
import { projects } from "../../../mock/Data";

const RelatedProjectsProf = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="lg:px-60 mt-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="text-4xl border-r border-gray-400 pr-4">Projects</div>
          <div className="text-gray-500 font-semibold pl-4">
            12 projects added
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-5">
          {projects.map((project, index) => (
            <React.Fragment key={index}>
              <div
                className="relative cursor-pointer"
                onClick={() => navigate("/proyectoss/name")}
              >
                <img src={project.img} alt="Image 1" className="w-full h-60" />
                <div className="absolute inset-0 flex flex-col gap-4 items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                  <div className="hover:border-transparent  hover:rounded-lg hover:p-6 hover:mx-4 hover:my-4">
                    <p className="text-xl text-center font-bold">
                      {project.title}
                    </p>
                    <p className="text-sm text-center">{project.subtitle}</p>
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProjectsProf;

import React from "react";
import { VscDebugRestart } from "react-icons/vsc";
import { cards, projects } from "../../mock/Data";

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
        <section className="text-gray-600 body-font">
          <div className="flex flex-col text-center w-full mt-5">
            <h1 className="sm:text-sm text-sm  title-font font-semibold  text-gray-500">
              PATROCINADOS
            </h1>
          </div>
          <div className="grid grid-cols-5 gap-4">
            {cards.map((card, index) => (
              <React.Fragment key={index}>
                <div className="p-2 w-full flex text-center justify-center">
                  <div className="border-4 border-gray-300 px-8 py-6">
                    <img src={card.img} className="w-40" />
                    <h2 className="title-font font-semibold text-xl text-gray-900">
                      {card.title}
                    </h2>
                    <p className="text-xs">{card.subtitle}</p>
                  </div>
                </div>
              </React.Fragment>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default TopProjects;

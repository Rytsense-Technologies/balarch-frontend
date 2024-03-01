import React from "react";
import { VscDebugRestart } from "react-icons/vsc";

const TopProjects = () => {
  const projects = [
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/11/MG_5664_65.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/09/fom-university-pavilion-j-mayer-h-architects_4-1.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/11/03-LIVING-K11.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/09/casa-quinchuyaku-emilio-lopez-herrera-arquitecto_3.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/09/chez-nous-office-atelier-du-pont_1.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/09/universidad-de-lima-engineering-innovation-center-sasaki_8.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/09/tree-house-at-bambu-indah-ibuku_4.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
    {
      img: "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
      title: "Remodelación del Mercado del Ninot",
      subtitle: "Barcelona, España",
    },
  ];

  const cards = [
    {
      img: "https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg",
      title: "ArquiTechs",
      subtitle: "GUADALAJARA, MX",
    },
    {
      img: "https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg",
      title: "ArquiTechs",
      subtitle: "GUADALAJARA, MX",
    },
    {
      img: "https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg",
      title: "ArquiTechs",
      subtitle: "GUADALAJARA, MX",
    },
    {
      img: "https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg",
      title: "ArquiTechs",
      subtitle: "GUADALAJARA, MX",
    },
    {
      img: "https://t3.ftcdn.net/jpg/04/06/91/62/360_F_406916265_hxmrv7wgw9SZN9871yebxQJAX7HsHdNp.jpg",
      title: "ArquiTechs",
      subtitle: "GUADALAJARA, MX",
    },
  ];
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

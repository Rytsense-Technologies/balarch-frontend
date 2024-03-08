import React, { useState } from "react";
import { AiFillBoxPlot, AiOutlineMail } from "react-icons/ai";
import { BsHeart, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaRegBuilding,
} from "react-icons/fa";
import { FaInstagram, FaRegCircleUser } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import PatrocinosCards from "../components/common/PatrocinosCards";
import { projects } from "../mock/Data";
const ProfessionalDetailPage = () => {
  const [experiences, setExperiences] = useState([
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
    {
      title: "Arquitecto Senior",
      company: "IDOM Construcciones",
      duration: "6 meses",
    },
  ]);
  const [visibleCount, setVisibleCount] = useState(3);

  // Handler function for "Load More" button click
  const handleLoadMore = () => {
    setVisibleCount(experiences.length); // Show all experiences
  };
  return (
    <>
      <div className="transform duration-200 easy-in-out">
        <div className=" h-52 overflow-hidden">
          <img
            className="w-full"
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/centro-para-la-cultura-y-las-artes-de-la-ribera-ars-degrees-atelier-de-arquitecturas_18.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full   "
            src="https://s3-alpha-sig.figma.com/img/4848/0ec7/07945ef13cae2295443e720ca5d9250a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXRi5mNkQqAtZ94PjVSGAmeNUYAkoFh6JrbH~cbHIn~0ztAVZmlPb0bPsAK5ywCK6lPtlX27ceaB-ackwcIWi65ftbxruw1VjN-598iao4G4MdD6yxqUThvyq8Ivc6O855yLWFSLPTELaGVUqTylZqheviGlFGGb6w8kx8RzmmykMcMediG35wW007BLSSXismUMsaE~~CdPgpE8ken6ik1A9F1omAjeSvE4LsGlLVMeEN2GndlDHmBbZsIBSEr4-XkLtmFMg3U5CItT14BYKjygYPfXyH2EhgXex~0LvWc7tNfEmuHV6KxSBiXuF~Pel1SUVhYzmBAxm0enO8zduQ__"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="px-14 py-10">
            <div className="flex items-center justify-center">
              <div className="text-2xl border-r border-gray-400 pr-4">
                Casa Quinchuyaku
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
                <BsHeart />
                <FiSend />
              </div>
            </div>
          </div>
          <div className="px-60 flex flex-col gap-4 justify-center">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              volutpat suscipit elit ac euismod. Curabitur sed erat sit amet
              neque viverra tempus sed ac arcu. Suspendisse dignissim nunc sed
              nibh facilisis fringilla. Proin at massa sit amet nisl eleifend
              elementum. In vel lectus consequat, molestie nibh molestie,
              ultricies tortor. Praesent quis consectetur nisi, non scelerisque
              augue. Praesent nec dui nec ipsum finibus facilisis vel non velit.
              Vivamus egestas lectus in pharetra tincidunt. Vestibulum accumsan
              arcu at lacinia molestie. Etiam at pellentesque justo.
            </span>
            <div className="flex ">
              <div className="bg-gray-900 w-1/2 p-6 text-gray-300">
                <h1 className="text-center mb-5">Datos Clave</h1>
                <ul className="px-10 flex flex-col gap-4 border-blue-gray-50">
                  <li className="flex items-center gap-4">
                    <span>
                      <FaRegCircleUser />
                    </span>
                    <p className="font-normal">Arquitecto Senior</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <AiFillBoxPlot />
                    </span>
                    <p className="font-normal">17 Años de experiencia</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <BsStack />
                    </span>
                    <p className="font-normal">12 Proyectos</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <FaRegBuilding />
                    </span>
                    <p className="font-normal">
                      Corporativo, Comercial, Residencial,  Diseño Interior
                    </p>
                  </li>
                </ul>
              </div>
              <div className=" w-1/2 p-6 text-gray-800">
                <h1 className="text-center mb-5">Datos Clave</h1>
                <ul className="px-10 flex flex-col gap-4 border-blue-gray-50">
                  <li className="flex items-center gap-4">
                    <span>
                      <FaLink />
                    </span>
                    <p className="font-normal">https://vidalstudio.com</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <p className="font-normal">jorge@vidalstudio.com</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <FaPhoneAlt />
                    </span>
                    <p className="font-normal">+52 325 231 6789</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <CiLocationOn />
                    </span>
                    <p className="font-normal">CDMX</p>
                  </li>
                </ul>
                <div className="px-10 mt-10 text-lg text-gray-500 flex items-center gap-4">
                  <FaLinkedin />
                  <FaInstagram />
                  <FaFacebook />
                </div>
              </div>
            </div>
            <div className="bg-gray-200 flex ">
              <div className="w-1/2 p-6 flex flex-col justify-center">
                <div className="flex items-center justify-center gap-6">
                  <h1 className="font-bold ">Experiencia</h1>
                  {experiences.length > visibleCount && (
                    <button
                      onClick={handleLoadMore}
                      className=" border border-gray-800 text-gray-900 font-medium py-1 px-2 rounded"
                    >
                      View all
                    </button>
                  )}
                </div>
                <section className="text-gray-600 body-font">
                  <div className="container mx-auto flex flex-wrap">
                    {experiences
                      .slice(0, visibleCount)
                      .map((experience, index) => (
                        <div
                          key={index}
                          className="flex relative pt-5 pb-5 sm:items-center mx-auto"
                        >
                          <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                            <div className="h-full w-1 bg-gray-400 pointer-events-none"></div>
                          </div>
                          <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm"></div>
                          <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                            <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                              <h2 className="font-bold title-font text-gray-900 mb-1 text-md">
                                {experience.title}
                              </h2>
                              <p className="leading-relaxed">
                                {experience.company} {experience.duration}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                  </div>
                </section>
              </div>
              <div className="w-1/2 p-6">
                <div className="flex items-center justify-center gap-6">
                  <h1 className="font-bold ">Experiencia</h1>
                  {experiences.length > visibleCount && (
                    <button
                      onClick={handleLoadMore}
                      className=" border border-gray-800 text-gray-900 font-medium py-1 px-2 rounded"
                    >
                      View all
                    </button>
                  )}
                </div>
                <section className="text-gray-600 body-font">
                  <div className="container  mx-auto flex flex-wrap">
                    <div className="flex relative pt-5 pb-5 sm:items-center \ mx-auto">
                      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-400 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm"></div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-bold  title-font text-gray-900 mb-1 text-md">
                            Arquitecto Senior
                          </h2>
                          <p className="leading-relaxed">
                            IDOM Construcciones 6 meses
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="flex relative pt-5 pb-5 sm:items-center \ mx-auto">
                      <div className="h-full w-6 absolute inset-0 flex items-center justify-center">
                        <div class="h-full w-1 bg-gray-400 pointer-events-none"></div>
                      </div>
                      <div className="flex-shrink-0 w-6 h-6 rounded-full mt-10 sm:mt-0 inline-flex items-center justify-center bg-gray-500 text-white relative z-10 title-font font-medium text-sm"></div>
                      <div className="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                        <div className="flex-grow sm:pl-6 mt-6 sm:mt-0">
                          <h2 className="font-bold  title-font text-gray-900 mb-1 text-md">
                            Arquitecto Senior
                          </h2>
                          <p className="leading-relaxed">
                            IDOM Construcciones 6 meses
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            <div>
              <div className="flex items-center">
                <div className="text-4xl border-r border-gray-400 pr-4">
                  Proyectos
                </div>
                <div className="text-gray-500 font-semibold pl-4">
                  12 proyectos Agregados
                </div>
              </div>
              <div className="grid grid-cols-3 gap-8 mt-5">
                {projects.map((project, index) => (
                  <React.Fragment key={index}>
                    <div
                      className="relative cursor-pointer"
                      onClick={() => navigate("/proyectoss/name")}
                    >
                      <img
                        src={project.img}
                        alt="Image 1"
                        className="w-full h-60"
                      />
                      <div className="absolute inset-0 flex flex-col gap-4 items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                        <div className="hover:border-transparent  hover:rounded-lg hover:p-6 hover:mx-4 hover:my-4">
                          <p className="text-xl text-center font-bold">
                            {project.title}
                          </p>
                          <p className="text-sm text-center">
                            {project.subtitle}
                          </p>
                        </div>
                      </div>
                    </div>
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
          <PatrocinosCards />
        </div>
      </div>
    </>
  );
};

export default ProfessionalDetailPage;

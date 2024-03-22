import { AiOutlineBuild } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { CiCamera, CiLocationOn } from "react-icons/ci";
import { FaRegCircleUser } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosArrowForward } from "react-icons/io";
import { MdCalendarMonth, MdOutlineDatasetLinked } from "react-icons/md";
import {
  TbAffiliate,
  TbChartAreaLineFilled,
  TbMessageCircleMinus,
} from "react-icons/tb";
const ProjectInfo = ({ projectDetails }) => {
  const projectStat = [
    {
      id: 1,
      icon: <FaRegCircleUser />,
      title: "Architecture",
      desc: projectDetails.Architecture,
    },
    {
      id: 2,
      icon: <TbMessageCircleMinus />,
      title: "Ingeniería por",
      desc: "Armando Asociados",
    },
    {
      id: 3,
      icon: <MdOutlineDatasetLinked />,
      title: "Diseño Interior",
      desc: "Ítnika",
    },
    {
      id: 4,
      icon: <CiCamera />,
      title: "Fotografías por",
      desc: "Federico Armentia",
    },
    {
      id: 5,
      icon: <TbChartAreaLineFilled />,
      title: "Área Total",
      desc: projectDetails.Area,
    },
    {
      id: 6,
      icon: <CiLocationOn />,
      title: "Ciudad",
      desc: "CDMX",
    },
    {
      id: 7,
      icon: <MdCalendarMonth />,
      title: "Año",
      desc: "2002",
    },
    {
      id: 8,
      icon: <HiBuildingOffice2 />,
      title: "Categoría",
      desc: "Corporativo",
    },
    {
      id: 9,
      icon: <AiOutlineBuild />,
      title: "Productos",
      desc: "Lamilux, Cemex, Vidrimex Panels, más...",
    },
    {
      id: 10,
      icon: <TbAffiliate />,
      title: "Profesionales",
      desc: "Enrique Centeno, Mauricio Islas, más...",
    },
  ];
  const columns = projectStat.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);

  const noimg =
    "https://stage-dihomx.com/wp-content/uploads/2023/09/casa-quinchuyaku-emilio-lopez-herrera-arquitecto_3.jpg";
  return (
    <>
      <div>
        <img src={projectDetails.ImageMain1 || noimg} alt="" />
      </div>
      <div className="flex flex-col items-center justify-center gap-6 py-10 border-b-2 border-gray-300">
        <nav className="flex" aria-label="Breadcrumb">
          <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
            <li aria-current="page">
              <div className="flex items-center">
                <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  inicio
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <IoIosArrowForward />
                <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Proyectos
                </span>
              </div>
            </li>
            <li aria-current="page">
              <div className="flex items-center">
                <IoIosArrowForward />
                <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                  Edificio corporativo cemex cdmx
                </span>
              </div>
            </li>
          </ol>
        </nav>
        <div className="flex items-center ">
          <div className="text-4xl border-r border-gray-400 pr-4">
            {projectDetails.ProjectName}
          </div>
          <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
            <BsHeart />
            <FiSend />
          </div>
        </div>
        <div className="px-20 grid grid-cols-3 gap-4">
          {columns.map((column, index) => (
            <div key={index} className="flex flex-col gap-4">
              {column.map((item) => (
                <div key={item.id} className="flex items-center gap-2">
                  <div className="text-gray-500 text-xl">{item.icon}</div>

                  <div className="text-md text-gray-500">{item.title}:</div>
                  <div className="text-md text-gray-800 font-semibold">
                    {item.desc}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default ProjectInfo;

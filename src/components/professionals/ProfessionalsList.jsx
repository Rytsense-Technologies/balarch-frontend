import { Button } from "@material-tailwind/react";
import { BsBuildings, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProfessionalsFilter } from "./ProfessionalsFilter";

const ProfessionalsList = () => {
  const navigate = useNavigate();
  const items = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-10 lg:grid-cols-8 lg:px-40">
      <div className="lg:col-span-2">
        <ProfessionalsFilter />
      </div>

      <div className="lg:col-span-6">
        <div className="mb-5">
          <div className="flex  items-center">
            <div className="text-2xl font-semibold border-r border-gray-400 pr-4">
              Especialidad
            </div>
            <div className="text-gray-500 text-sm capitalize font-semibold pl-4">
              50 profesionales encontrados
            </div>
          </div>
        </div>
        <hr />
        <div className="text-gray-500 text-sm font-semibold mt-2">
          Arquitectura
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-1">
          {items.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => navigate("/profesionaless/name")}
            >
              <img
                className="rounded-full my-5 mx-5 shadow-lg w-20 object-cover"
                src="https://s3-alpha-sig.figma.com/img/4d01/f859/b7af55c841792480bf2786a796756d09?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=mr-iPHchiEc8CwFM~4icl65~q~6cfbVuzun2OlGBDrt3uhyUb6VGvAu2A8vRseumRkF~Ub6OQ-bxQXlAKnTiWzLVgsezeWz1W7qi14yws1pe4s4YRe~~szF6v8GqaZFvrlonfltGqWGPuDF1YeCEjAjXfVEhGWxGAWCihcMuUeenrbUqQcTL95WtS0cArP6XEN5oRYi5FgiExuzhAxFHeXCnSweCeYGcgihdHFJQgb54I-H0nndRTKc0OFrOpkvsXIePR-2ODbledm3m~TU6yy05QD2JqcckDpyU4t363CjiZ8NmpEhS6RkoG5YKrKxocRvCRHBsqPSXH5EEYb8d2g__"
                alt="Extra large avatar"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <div className="text-xl border-r font-semibold border-gray-400 pr-4">
                    Jorge Vidal Studio
                  </div>
                  <div className="text-gray-500 font-semibold pl-4">
                    Arquitectura
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris volutpat suscipit elit ac euismod. Curabitur sed erat
                  sit amet neque viverra tempus
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CiLocationOn />
                    <span>CDMX</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsStack />
                    <span>6 Proyectos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsBuildings />
                    <span>Corporative</span>
                  </div>
                </div>
                <div className="flex w-full md:w-auto gap-4 my-5">
                  <button className="flex flex-row border border-gray-800 rounded-lg p-2 items-center gap-2">
                    Guardar <MdFavoriteBorder />
                  </button>
                  <Button variant="filled" size="sm">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center text-xl py-5 gap-4 cursor-pointer">
          <FaArrowLeft /> 1/5 <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsList;

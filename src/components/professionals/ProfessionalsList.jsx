import { Button } from "@material-tailwind/react";
import React from "react";
import { BsBuildings, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { ProfessionalsFilter } from "./ProfessionalsFilter";

const ProfessionalsList = () => {
  // Create an array of length 10
  const items = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-8 gap-4 py-10 lg:px-40">
      <div className="col-span-2">
        <ProfessionalsFilter />
      </div>

      <div className="col-span-6">
        <div className="flex items-center  mb-5">
          <div className="text-3xl font-bold border-r border-gray-400 pr-4">
            Especialidad
          </div>
          <div className="text-gray-500 font-semibold pl-4">
            50 profesionales encontrados
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 gap-8 mt-5">
          {/* Map over the items array */}
          {items.map((_, index) => (
            <div
              key={index} // Use index as key
              className="flex flex-col  items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
            >
              {/* Your content here */}
              {/* Example content */}
              <img
                className="rounded-full my-5 mx-5 shadow-lg w-36 h-36"
                src="https://i.pinimg.com/736x/8d/47/e1/8d47e1a2ec7065cd56657da28f7168aa.jpg"
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
                <div className="flex items-center gap-8">
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
                <div className="flex w-max gap-4 my-5">
                  <Button
                    variant="outlined"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    Guardar <MdFavoriteBorder />
                  </Button>
                  <Button variant="filled" size="sm">
                    Ver Prefil
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProfessionalsList;

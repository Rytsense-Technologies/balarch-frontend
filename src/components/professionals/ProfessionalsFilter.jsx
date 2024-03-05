import React from "react";
import { FaArrowRight } from "react-icons/fa";

export const ProfessionalsFilter = () => {
  const filterNames = [
    "Lo más reciente",
    "especialidad",
    "tipo de proyectos",
    "orden alfabético",
  ];
  return (
    <div>
      <h1 className="text-lg text-gray-400 font-bold">Buscar profesionales</h1>
      <div className="flex flex-col gap-4 mt-2 font-semibold capitalize">
        {filterNames.map((filterName, index) => (
          <div className="flex items-center gap-4" key={index}>
            <span className="hover:underline hover:underline-offset-8">
              {filterName}
            </span>
            <FaArrowRight />
          </div>
        ))}
      </div>
      <div className="py-20 mt-10  h-40 w-40 p-4  bg-gray-300">
        <span className="flex justify-center text-sm">Sponser</span>
      </div>
    </div>
  );
};

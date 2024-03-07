import { FaArrowRight } from "react-icons/fa";

export const ProductFilter = () => {
  const filterNames = [
    "Lo más reciente",
    "especialidad",
    "tipo de proyectos",
    "orden alfabético",
  ];
  return (
    <div className="max-w-lg mx-auto px-4">
      <h1 className="text-lg text-gray-400 font-bold mt-8 mb-4">
        Buscar profesionales
      </h1>
      <div className="flex flex-col gap-4 font-semibold capitalize">
        {filterNames.map((filterName, index) => (
          <div className="flex items-center justify-between" key={index}>
            <span className="hover:underline hover:underline-offset-8">
              {filterName}
            </span>
            <FaArrowRight />
          </div>
        ))}
      </div>
      <div className="py-10 mt-6 h-20 w-full p-4 bg-gray-300">
        <span className="flex justify-center text-sm">Sponsor</span>
      </div>
    </div>
  );
};

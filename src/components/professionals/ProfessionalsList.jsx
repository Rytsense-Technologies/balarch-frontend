import { Button } from "@material-tailwind/react";
import { BsBuildings, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProfessionalsFilter } from "./ProfessionalsFilter";

const ProfessionalsList = () => {
  const navigate = useNavigate();
  const items = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 md:grid-cols-8 gap-4 py-10 lg:px-40">
      <div className="col-span-1 md:col-span-2">
        <ProfessionalsFilter />
      </div>

      <div className="col-span-1 md:col-span-6">
        <div className="flex flex-col">
          <div className="text-3xl font-bold border-b border-gray-400 mb-4">
            Especialidad
          </div>
          <div className="text-gray-500 font-semibold mb-4">
            50 profesionales encontrados
          </div>
        </div>
        <hr className="mb-4" />
        <div className="grid grid-cols-1 gap-8">
          {items.map((_, index) => (
            <div
              key={index}
              className="bg-white border-2 border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700
                         md:flex-row md:hover:bg-white"
              onClick={() => navigate("/profesionales/name")}
            >
              <img
                className="w-full md:w-36 rounded-t-lg md:rounded-t-none md:rounded-l-lg"
                src="https://i.pinimg.com/736x/8d/47/e1/8d47e1a2ec7065cd56657da28f7168aa.jpg"
                alt="Avatar"
              />
              <div className="p-4">
                <div className="text-xl font-semibold mb-2">
                  Jorge Vidal Studio
                </div>
                <div className="text-gray-500 font-semibold mb-2">
                  Arquitectura
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris volutpat suscipit elit ac euismod. Curabitur sed erat
                  sit amet neque viverra tempus
                </p>
                <div className="flex items-center justify-between">
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
                <div className="flex justify-between mt-4">
                  <Button
                    variant="outlined"
                    size="sm"
                    className="flex items-center gap-2"
                  >
                    Guardar <MdFavoriteBorder />
                  </Button>
                  <Button variant="filled" size="sm">
                    Ver Perfil
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

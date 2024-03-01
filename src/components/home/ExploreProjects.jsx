import { FiSearch } from "react-icons/fi";

const ExploreProjects = () => {
  const projectNames = [
    "España",
    "Ajijic",
    "Estados Unidos",
    "Greenwich",
    "Paraguay",
    "San Bernardino",
    "Brasil",
    "Jardim Goiás",
    "China",
    "Beijing",
    "Indonesia",
    "Kecamatan Ubud",
    "Lima",
    "París",
    "Ecuador",
    "Tailandia",
    "Bangkok",
    "Alemania",
    "Düsseldorf",
    "Barcelona",
    "Mérida",
    "CDMX",
    "México",
  ];
  return (
    <div className="bg-gray-200">
      <div className="py-20 lg:px-60 flex flex-col items-center justify-center">
        <h1 className="text-2xl flex items-center gap-4 font-semibold mb-20">
          <FiSearch /> Explorar Proyectos
        </h1>
        <div className="grid grid-cols-5 gap-10">
          {projectNames.map((projectName, index) => (
            <div key={index}>
              <span className="text-xl font-semibold underline hover:text-sky-600 cursor-pointer">
                {projectName}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ExploreProjects;

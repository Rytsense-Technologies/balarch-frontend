import { FiSearch } from "react-icons/fi";

const ExploreProjects = () => {
  const projectNames = [
    "Spain",
    "Ajijic",
    "United States",
    "Greenwich",
    "Paraguay",
    "San Bernardino",
    "Brazil",
    "Jardim Goiás",
    "China",
    "Beijing",
    "Indonesia",
    "Kecamatan Ubud",
    "Lima",
    "Paris",
    "Ecuador",
    "Thailand",
    "Bangkok",
    "Germany",
    "Düsseldorf",
    "Barcelona",
    "Merida",
    "Mexico City",
    "Mexico",
  ];

  return (
    <div className="  sm:px-6">
      <h1 className="text-2xl flex items-center justify-center gap-4 font-semibold mb-8 mt-10">
        <FiSearch /> Explore Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-8">
        {projectNames.map((projectName, index) => (
          <div key={index} className="text-center">
            <span className="text-lg font-semibold underline  hover:text-sky-600 cursor-pointer">
              {projectName}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExploreProjects;

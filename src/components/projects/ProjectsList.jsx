import { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import ProjectFilter from "./ProjectFilter";

const ProjectsList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://54.167.20.39:8080/api/getAll");
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProjects(data.Result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  console.log(projects);
  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-10 lg:grid-cols-8 lg:px-40">
      <div className="lg:col-span-2">
        <ProjectFilter />
      </div>

      <div className="lg:col-span-6">
        <div className="mb-5">
          <div className="flex  items-center">
            <div className="text-2xl border-r font-semibold border-gray-400 pr-4">
              Lo más reciente
            </div>
            <div className="text-gray-500 text-sm font-semibold pl-4">
              {projects.length} PROYECTOS REGISTRADOS
            </div>
          </div>
        </div>
        <hr />
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => navigate("/proyectoss/name")}
            >
              <div className="group">
                <img
                  src={project.Image1Main}
                  alt="Project"
                  className="w-full h-60 shadow-lg transition-opacity duration-300 ease-in-out  hover:bg-black group-hover:opacity-80"
                />
                <div className="absolute inset-0 flex flex-col gap-4 items-center border-2 border-gray-200 rounded-lg p-4 mx-4 my-4 justify-end opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                  <div className="text-white">
                    <p className="text-xl text-center font-bold">
                      {project.ProjectName}
                    </p>
                    <p className="text-sm text-center">{project.Country}</p>
                  </div>
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

export default ProjectsList;

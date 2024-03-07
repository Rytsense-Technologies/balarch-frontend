import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { projects } from "../../mock/Data";
import ProjectFilter from "./ProjectFilter";

const ProjectsList = () => {
  const navigate = useNavigate();
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
              <img src={project.img} alt="Project" className="w-full h-60" />
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-end opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                <div className="hover:border-transparent  hover:rounded-lg hover:p-6 hover:mx-4 hover:my-4">
                  <p className="text-xl text-center font-bold">
                    {project.title}
                  </p>
                  <p className="text-sm text-center">{project.subtitle}</p>
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

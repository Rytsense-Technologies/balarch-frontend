import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import ProjectFilter from "./ProjectFilter";

const ProjectsList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const noImg =
    "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/getAll`
        );
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

  const navigateToProjectDetail = async (projectId) => {
    try {
      const token = localStorage.getItem("accessToken");
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/getByProjectId`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ ProjectId: projectId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch project details");
      }

      const data = await response.json();
      navigate(`/project/${projectId}`, {
        state: { projectDetails: data.Result },
      });
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

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
        {projects.length === 0 && (
          <div className="flex justify-center items-center h-screen">
            <img
              src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
              alt="Centered Image"
            />
          </div>
        )}
        <div className="grid grid-cols-1 gap-10 mt-5 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative cursor-pointer"
              onClick={() => navigateToProjectDetail(project.ProjectId)}
            >
              <img
                src={project.Image1Main || noImg}
                alt="Project"
                className="w-full   shadow-md object-cover cursor-pointer"
              />
              <div className="absolute inset-0  opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 text-white p-2 flex items-center justify-center">
                <div className="border-2 border-gray-200 rounded-sm px-20 py-20 p-20">
                  <p className="text-md font-bold flex justify-end">
                    {project.ProjectName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 0 && (
          <div className="flex items-end justify-center text-xl py-5 gap-4 cursor-pointer">
            <FaArrowLeft /> 1/5 <FaArrowRight />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;

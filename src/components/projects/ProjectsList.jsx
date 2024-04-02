import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { useNavigate } from "react-router";
import loader from "../../assets/images/loader.gif";
import ProjectFilter from "./ProjectFilter";

const ProjectsList = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;

  const noImg =
    "https://media.istockphoto.com/id/1055079680/vector/black-linear-photo-camera-like-no-image-available.jpg?s=612x612&w=0&k=20&c=P1DebpeMIAtXj_ZbVsKVvg-duuL0v9DlrOZUvPG6UJk=";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${
            import.meta.env.VITE_APP_BASE_BACKEND_API_URL
          }api/getAll?page=${currentPage}&page=${itemsPerPage}`
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
  }, [currentPage]);

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

  const handlePagination = (direction) => {
    if (direction === "prev") {
      setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
    } else {
      setCurrentPage((prevPage) => prevPage + 1);
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
              The most recent
            </div>
            <div className="text-gray-500 text-sm font-semibold pl-4">
              {projects.length} REGISTERED PROJECTS
            </div>
          </div>
        </div>
        <hr />
        {loading && (
          <div className="flex justify-center ">
            <img src={loader} alt="Loading" />
          </div>
        )}
        {projects.length === 0 && (
          <div className="flex justify-center items-center h-screen">
            <img
              src="https://cdn.dribbble.com/users/774806/screenshots/3823110/something-went-wrong.gif"
              alt="Error"
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
                src={project.ImageUrls[0] || noImg}
                alt="Project"
                className="w-full h-44 shadow-md object-cover cursor-pointer"
              />
              <div className="absolute inset-0  opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-40 text-white p-2 flex items-center justify-center">
                <div className="border-2 border-gray-200 rounded-sm px-20 py-18 p-10">
                  <p className="text-sm font-bold text-center">
                    {project.ProjectName}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {projects.length > 0 && (
          <div className="flex items-end justify-center text-xl mt-10 gap-4 cursor-pointer">
            <FaArrowLeft onClick={() => handlePagination("prev")} />{" "}
            {currentPage}/{Math.ceil(projects.length / itemsPerPage)}{" "}
            <FaArrowRight onClick={() => handlePagination("next")} />
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectsList;

import { useState } from "react";
import { BsPrinter } from "react-icons/bs";
import { RiDeleteBin6Line } from "react-icons/ri";
import { RxUpdate } from "react-icons/rx";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const AddProjectPage = () => {
  const [ProjectName, setProjectName] = useState("");
  const [ProjectDescription, setProjectDescription] = useState("");
  const [Concept, setConcept] = useState("");
  const [Innovation, setInnovation] = useState("");
  const [Area, setArea] = useState("");
  const [Country, setCountry] = useState("");
  const [Year, setYear] = useState("");
  const [Typology, setTypology] = useState("");
  const [Phase, setPhase] = useState("");
  const [Architecture, setArchitecture] = useState("");
  const [Style, setStyle] = useState("");
  const [Material, setMaterial] = useState("");
  const [Colors, setColors] = useState("");
  const [OwnerId, setOwnerId] = useState("");
  const [Collaborators, setCollaborators] = useState("");
  const [MembershipId, setMembershipId] = useState("");

  const handleAddProject = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await fetch(
        `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/insertprojects`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({
            ProjectName,
            ProjectDescription,
            Concept,
            Innovation,
            Area,
            Country,
            Year,
            Typology,
            Phase,
            Architecture,
            Style,
            Material,
            Colors,
            OwnerId,
            Collaborators,
            MembershipId,
          }),
        }
      );

      if (response.ok) {
        toast.success("Project added successfully");
      } else {
        const errorData = await response.json();
        if (response.status === 500) {
          throw new Error("Internal server error");
        } else if (response.status === 400) {
          throw new Error("Bad Request");
        } else {
          throw new Error(errorData.message || "An error occurred");
        }
      }
    } catch (error) {
      toast.error(error.message || "Something went wrong");
    }
  };
  return (
    <>
      <div className="float-right flex items-center gap-4 text-gray-600">
        <Link to="" className="flex items-center gap-2">
          <RxUpdate /> Update Project
        </Link>
        <Link to="" className="flex items-center gap-2">
          <RiDeleteBin6Line /> Delete
        </Link>
        <Link to="" className="flex items-center gap-2">
          <BsPrinter /> Scam Report
        </Link>
      </div>
      <div className=" w-full mt-10 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Project Details
      </div>

      <div className="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Project Name
          </label>
          <input
            type="text"
            id="first_name"
            name="ProjectName"
            value={ProjectName}
            onChange={(e) => setProjectName(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Description
          </label>
          <input
            type="text"
            id="first_name"
            name="ProjectDescription"
            value={ProjectDescription}
            onChange={(e) => setProjectDescription(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Concept
          </label>
          <input
            type="text"
            id="first_name"
            name="Concept"
            value={Concept}
            onChange={(e) => setConcept(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Innovation
          </label>
          <input
            type="text"
            id="first_name"
            name="Innovation"
            value={Innovation}
            onChange={(e) => setInnovation(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Area
          </label>
          <input
            type="text"
            id="first_name"
            name="Area"
            value={Area}
            onChange={(e) => setArea(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Country
          </label>
          <input
            type="text"
            id="first_name"
            name="Country"
            value={Country}
            onChange={(e) => setCountry(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Year
          </label>
          <input
            type="text"
            id="first_name"
            name="Year"
            value={Year}
            onChange={(e) => setYear(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Typology
          </label>
          <input
            type="text"
            id="first_name"
            name="Typology"
            value={Typology}
            onChange={(e) => setTypology(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Phase
          </label>
          <input
            type="text"
            id="first_name"
            name="Phase"
            value={Phase}
            onChange={(e) => setPhase(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Architecture
          </label>
          <input
            type="text"
            id="first_name"
            name="Architecture"
            value={Architecture}
            onChange={(e) => setArchitecture(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Style
          </label>
          <input
            type="text"
            id="first_name"
            name="Style"
            value={Style}
            onChange={(e) => setStyle(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Materials
          </label>
          <input
            type="text"
            id="first_name"
            name="Material"
            value={Material}
            onChange={(e) => setMaterial(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Colors
          </label>
          <input
            type="text"
            id="first_name"
            name="Colors"
            value={Colors}
            onChange={(e) => setColors(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            OwnerId
          </label>
          <input
            type="text"
            id="first_name"
            name="OwnerId"
            value={OwnerId}
            onChange={(e) => setOwnerId(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Collaborators
          </label>
          <input
            type="text"
            id="first_name"
            name="Collaborators"
            value={Collaborators}
            onChange={(e) => setCollaborators(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            MembershipId
          </label>
          <input
            type="text"
            id="first_name"
            name="MembershipId"
            value={MembershipId}
            onChange={(e) => setMembershipId(e.target.value)}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            required
          />
        </div>
      </div>
      <div>
        <label
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          for="multiple_files"
        >
          Upload images
        </label>
        <input
          className="bg-gray-50 border cursor-pointer border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          id="multiple_files"
          type="file"
          multiple
        />
      </div>
      <button
        className=" w-full mt-10 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        type="submit"
        onClick={handleAddProject}
      >
        Add Project
      </button>
    </>
  );
};
export default AddProjectPage;

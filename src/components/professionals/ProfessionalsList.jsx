import { Button } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { BsBuildings, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { ProfessionalsFilter } from "./ProfessionalsFilter";

const ProfessionalsList = () => {
  const navigate = useNavigate();
  const [professionals, setProfessionals] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const noimg =
    "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg";

  const loader =
    "https://res.cloudinary.com/bytesizedpieces/image/upload/v1656084931/article/a-how-to-guide-on-making-an-animated-loading-image-for-a-website/animated_loader_gif_n6b5x0.gif";

  const errorImage =
    "https://t4.ftcdn.net/jpg/05/24/04/51/360_F_524045110_UXnCx4GEDapddDi5tdlY96s4g0MxHRvt.jpg";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const token = localStorage.getItem("accessToken");
        const response = await fetch(
          "http://54.167.20.39:8080/api/signup/getAllUsers",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setProfessionals(data.Result);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const navigateToProfessionalDetail = async (UserId) => {
    try {
      const token = localStorage.getItem("accessToken");

      if (!token) {
        toast.warn("Please log in to view user details.");
        return;
      }

      const response = await fetch(
        "http://54.167.20.39:8080/api/signup/getByUserId",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ UserId: UserId }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to fetch project details");
      }

      const data = await response.json();
      navigate(`/professionals/${UserId}`, {
        state: { userDetails: data.Result },
      });
    } catch (error) {
      console.error("Error fetching project details:", error);
    }
  };

  if (error) {
    return <div>Something went wrong: {error}</div>;
  }

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-10 lg:grid-cols-8 lg:px-40">
      <div className="lg:col-span-2">
        <ProfessionalsFilter />
      </div>

      <div className="lg:col-span-6">
        <div className="mb-5">
          <div className="flex  items-center">
            <div className="text-2xl font-semibold border-r border-gray-400 pr-4">
              Specialty
            </div>
            <div className="text-gray-500 text-sm capitalize font-semibold pl-4">
              {professionals.length} professionals found
            </div>
          </div>
        </div>
        <hr />
        <div className="text-gray-500 text-sm font-semibold mt-2">
          Architecture
        </div>
        {loading && (
          <div className="flex justify-center ">
            <img src={loader} />
          </div>
        )}
        {error && (
          <div className="flex justify-center ">
            <img src={errorImage} />
          </div>
        )}
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-1">
          {professionals.map((user, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700 cursor-pointer"
              onClick={() => navigateToProfessionalDetail(user.UserId)}
            >
              <img
                className="rounded-full my-5 mx-5 shadow-lg w-20 object-cover"
                src={noimg}
                alt="Extra large avatar"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <div className="text-xl border-r font-semibold border-gray-400 pr-4">
                    {user.Name}
                  </div>
                  <div className="text-gray-500 font-semibold pl-4">
                    {user.ProfessionPositionName}
                  </div>
                </div>

                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  {user.ShortBio &&
                    user.ShortBio.split(" ").slice(0, 20).join(" ")}{" "}
                  {user.ShortBio && user.ShortBio.split(" ").length > 20
                    ? "..."
                    : ""}
                </p>

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CiLocationOn />
                    <span>USA</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsStack />
                    <span>6 Projects</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsBuildings />
                    <span>Corporate</span>
                  </div>
                </div>
                <div className="flex w-full md:w-auto gap-4 my-5">
                  <button className="flex flex-row border border-gray-800 rounded-lg p-2 items-center gap-2">
                    Keep <MdFavoriteBorder />
                  </button>
                  <Button variant="filled" size="sm">
                    View profile
                  </Button>
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

export default ProfessionalsList;

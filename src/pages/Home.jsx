import TopProjects from "../components/home/TopProjects";
import BannerCarousal from "./../components/common/BannerCarousal";
import PatrocinosCards from "./../components/common/PatrocinosCards";

const Home = () => {
  const token = localStorage.getItem("accessToken");
  return (
    <div className="">
      <BannerCarousal />
      <TopProjects />
      <PatrocinosCards />
      <div className="flex justify-center mb-10">
        <button
          className={`relative group block w-32 mb-6 py-3 px-5 text-center border border-gray-800 text-sm font-semibold text-gray-800 bg-gray-300 ${
            !token
              ? "hover:bg-blue-gray-900 hover:text-white"
              : "cursor-not-allowed opacity-50"
          } rounded-full overflow-hidden`}
          type="submit"
          disabled={!token}
        >
          <span className="relative"> PUBLISH</span>
        </button>
      </div>
    </div>
  );
};

export default Home;

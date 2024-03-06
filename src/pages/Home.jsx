import ExploreProjects from "../components/common/ExploreProjects";
import TopProjects from "../components/home/TopProjects";
import BannerCarousal from "./../components/common/BannerCarousal";

const Home = () => {
  return (
    <div className="">
      <BannerCarousal />
      <TopProjects />
      <div className="bg-gray-200 py-5 lg:px-40">
        <ExploreProjects />
      </div>
    </div>
  );
};

export default Home;

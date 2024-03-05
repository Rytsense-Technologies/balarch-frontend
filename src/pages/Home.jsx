import ExploreProjects from "../components/common/ExploreProjects";
import TopProjects from "../components/home/TopProjects";
import BannerCarousal from "./../components/common/BannerCarousal";

const Home = () => {
  return (
    <div className="">
      <BannerCarousal />
      <TopProjects />
      <ExploreProjects />
    </div>
  );
};

export default Home;

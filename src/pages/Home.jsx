import ExploreProjects from "../components/home/ExploreProjects";
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

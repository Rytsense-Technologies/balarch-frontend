import PublishButton from "../components/common/PublishButton";
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
      <PublishButton />
    </div>
  );
};

export default Home;

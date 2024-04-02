import BannerCarousal from "../components/common/BannerCarousal";
import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import ProjectsList from "../components/projects/ProjectsList";
import PublishButton from "./../components/common/PublishButton";

const Projects = () => {
  return (
    <div className="">
      <PagesHeading
        title={"Projects"}
        subtitle={"17 REGISTERED PROJECTS"}
        description={
          "Explore and discover residential works, interior design, landscaping, urban planning, and more. Get inspired by the global architectural culture at Balarch. Projects created by the most inspiring architects of the moment."
        }
      />

      <BannerCarousal />
      <ProjectsList />
      <div className="bg-gray-200 py-5 lg:px-40">
        <ExploreProjects />
      </div>

      <PublishButton />
    </div>
  );
};

export default Projects;

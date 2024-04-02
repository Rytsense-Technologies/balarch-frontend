import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import PublishButton from "../components/common/PublishButton";

import ProfessionalsList from "../components/professionals/ProfessionalsList";
import PatrocinosCards from "./../components/common/PatrocinosCards";

const Professionals = () => {
  return (
    <div className="py-5">
      <PagesHeading
        title={"Professionals"}
        subtitle={"1,233 registered professionals"}
        description={
          "Find construction sector professionals in the specialized directory Balarch. Find architects, engineers, contractors, renderers, and other professionals in the sector. Let's build community."
        }
      />
      <PatrocinosCards />
      <ProfessionalsList />
      <div className="bg-gray-200 py-5 lg:px-40">
        <ExploreProjects />
      </div>
      <PublishButton />
    </div>
  );
};

export default Professionals;

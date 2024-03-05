import React from "react";
import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import PatrocinosCards from "../components/common/PatrocinosCards";
import ProfessionalsList from "../components/professionals/ProfessionalsList";

const Professionals = () => {
  return (
    <div className="py-5">
      <PagesHeading
        title={"Profesionales"}
        subtitle={"1,233 profesionales registrados"}
        description={
          "Encuentra profesionales del sector de la construcción en el directorio especializado Balarch. Encuentra  arquitectos, ingenieros, contratistas, renderistas, y otros profesionales del sector. Hagamos comunidad."
        }
      />
      <PatrocinosCards />
      <ProfessionalsList />
      <ExploreProjects />
    </div>
  );
};

export default Professionals;

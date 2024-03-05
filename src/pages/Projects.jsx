import BannerCarousal from "../components/common/BannerCarousal";
import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import ProjectsList from "../components/projects/ProjectsList";

const Projects = () => {
  return (
    <div className="">
      <PagesHeading
        title={"Proyectos"}
        subtitle={"17 PROYECTOS REGISTRADOS"}
        description={
          "Explora y descubre obras residenciales, diseño interior, paisajismo, urbanismo y más. Inspírate de la cultura arquitectónica global en Balarch. Proyectos hechos por los arquitectos más inspiradores del momento."
        }
      />
      <BannerCarousal />
      <ProjectsList />
      <ExploreProjects />
      <div className="bg-gray-500">
        <section
          className="text-white body-font"
          style={{
            backgroundImage:
              'url("https://stage-dihomx.com/wp-content/uploads/2023/10/your-background-image.jpg")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        >
          <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
            <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
              <span className="mb-5">HAZ VISIBLE TU TRABAJO</span>
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-white">
                El espacio de exhibición de arquitectura más vanguardista del
                momento.
              </h1>
              <span className="mt-5 underline">Crea tu perfil profesional</span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
              <img
                className="object-cover object-center rounded"
                alt="hero"
                src="https://stage-dihomx.com/wp-content/uploads/2023/10/pc-abajo.png"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects;

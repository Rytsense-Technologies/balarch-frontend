import { LuEye } from "react-icons/lu";
import BannerCarousal from "../components/common/BannerCarousal";
import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";
import ProjectsList from "../components/projects/ProjectsList";

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
        <h1 className="flex items-center text-xl font-semibold justify-center gap-4 py-20 mb-5">
          <LuEye /> Most viewed
        </h1>
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 mb-20">
          <div className="relative grid h-[15rem] w-full max-w-[25rem] flex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center text-gray-700">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://s3-alpha-sig.figma.com/img/a69b/57c5/99beb7a57f656d640f7e79fcaf6a4fb0?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=VxCwkCYwg7xKD7ASNl1tGJ7oFPj~uP3KiIPUz-9eM98m1CWJ4jOGtb8cDLYw6aCBoUcRNGxcloOMn8VBkM9GnAGaYfUvaCthuXn9~uUfuw2q3aV963O9kCRVFZub1dP~epNkHnI-ntoQEDWS50nNFGfEB7LM4nPwLEZIdbY1XUCe7B~BwWVXcCR45My6kuN4qbBdQfGHNAIQ9cc32VonHqBu-uDXP1IfZKBeniQTSmWNqA9wWRPHD~lAWMTtmKuEr7L5M8c2LmNclPB7UIjk0aLcmR5KWp8GwtyhQ5wzEA7HDcOgLju3d7yRvX6TFgOyD4-NMlLuu7ZE8TWN1RVPVw__')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-3 block font-sans text-sm font-medium leading-[1.5] tracking-normal text-white antialiased">
                BMV Tower Corporate, CDMX
              </h2>
            </div>
          </div>
          <div className="relative grid h-[15rem] w-full max-w-[25rem] flex-col items-end justify-center overflow-hidden bg-white bg-clip-border text-center text-gray-700">
            <div className="absolute inset-0 m-0 h-full w-full overflow-hidden rounded-none bg-transparent bg-[url('https://s3-alpha-sig.figma.com/img/b1be/61fd/e9f4243d74a1e088720c91d3b2d4bf13?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NTVvICijRTnvuGup1fTQD43AS9MialG1rsuuA2gSlXDM4XaYZlmOz7iu5~ce25NRSfu~~j-lZdMtOdXN4emS-KY9GfItAcXMlLjFRPDbFzmA3lZwYeAjm3xIp3ptuddss2rHRUeySBnp~K4MmDqJAXNQ7LZF1ZbhwN4HcHQLLueZHOsUD6fYq3qtzmODkFLH06acOz68T54d5e0yDF~wP~PaYHLwLoggKNdfL2FdMxJbKXDMPx47hZb0xxToQHqRIO9wGDxO7mUTw4bghNn07jBm04lVNmmH2BySAoDBe1xw435jIXdPb0ER5pUqllDiCLGCm~Adbt4wV~sNx87Nbw__')] bg-cover bg-clip-border bg-center text-gray-700 shadow-none">
              <div className="absolute inset-0 w-full h-full to-bg-black-10 bg-gradient-to-t from-black/80 via-black/50"></div>
            </div>
            <div className="relative p-6 px-6 py-14 md:px-12">
              <h2 className="mb-3 block font-sans text-sm font-medium leading-[1.5] tracking-normal text-white antialiased">
                Weiz Corporate Park, Brussels
              </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-500 h-[40rem]">
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
              <span className="mb-5">MAKE YOUR WORK VISIBLE</span>
              <h1 className="title-font sm:text-5xl text-4xl mb-4 font-semibold text-white">
                The most avant-garde architecture exhibition space in the world
                moment.
              </h1>
              <span className="mt-5 underline">
                Create your professional profile
              </span>
            </div>
            <div className="lg:max-w-lg lg:w-full md:w-1/2 top-0 w-5/6">
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

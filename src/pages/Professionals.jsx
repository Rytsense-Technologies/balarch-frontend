import ExploreProjects from "../components/common/ExploreProjects";
import PagesHeading from "../components/common/PagesHeading";

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
        <div className="flex flex-col lg:flex-row items-center justify-center gap-4 py-20">
          <div className="bg-gray-900 h-[10rem] w-full max-w-[25rem] flex">
            <div>
              <img
                className="h-[11rem] w-full max-w-[25rem] mx-auto -my-5"
                src="https://s3-alpha-sig.figma.com/img/4ebd/e014/9948a95154fd426001961d974dbab830?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=oZ55Q-gzKRcACN0Y1gr1Oh96YdNBOX1cNHKRNSWL1T3hGqI9zRDTOPpCjhQBZNQQcQyta8qUUG6bdzlW9ZS-SXFQrh5Ra1pspQwvLnxC7N3rB-Tsg~TahGDSYeJaOSwW6O8cgaM8wdLz9yoeliTiGmY82x7yBLily~D3w7VhcfZ1Cxccs75~vLxWCXhBrOxfIaYmMt6FJQYdMJeYrJEdNhu-Qedtc6Dvw3~qp3xpFT45CGU9LlKv4QuZz5xQe0E7mQMHxecHOb1LP0IZ8bk6~-b8m-aVxaWfWDHhebHiR1OynzX588nDaq4Dp2tDME09thwVmc7CiXNvlHSHHv7I6w__"
              />
            </div>
            <div className="text-white px-5 flex flex-col justify-center">
              <span className="text-sm">professional directory</span>
              <h1 className="text-3xl">Create your professional profile</h1>
              <span className="text-sm">Free Registration</span>
            </div>
          </div>
          <div className="bg-gray-500 h-[10rem] w-full max-w-[25rem]">
            <div className="text-white px-5 flex justify-center">
              <span className="text-sm py-20">Sponsor</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;

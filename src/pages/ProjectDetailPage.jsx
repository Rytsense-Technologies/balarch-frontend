import { IoIosAddCircleOutline } from "react-icons/io";
import ss2 from "../assets/images/ss2.png";
import ProjectDetailInfo from "../components/projects/projectdetail/ProjectDetailInfo";
import ProjectInfo from "../components/projects/projectdetail/ProjectInfo";
import { SocialMediaBar } from "../components/projects/projectdetail/SocialMediaBar";
const ProjectDetailPage = () => {
  const images = [
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
    "https://stage-dihomx.com/wp-content/uploads/2023/09/paw-pets-spa-office-aio_5.jpg",
  ];

  return (
    <>
      <div className="py-10 lg:px-40">
        <ProjectInfo />

        <div className="py-5 grid grid-cols-5 gap-8">
          {images.map((img, index) => (
            <div className="relative " key={index}>
              <img
                src={img}
                alt="Image 1"
                className="w-[20rem] h-[15rem] object-cover"
              />
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                <div className="hover:border-transparent  hover:rounded-lg hover:p-6 hover:mx-4 hover:my-4">
                  <IoIosAddCircleOutline className="text-6xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
        <SocialMediaBar />
        <ProjectDetailInfo />
      </div>
      <div>
        <img src={ss2} alt="" />
      </div>
    </>
  );
};

export default ProjectDetailPage;

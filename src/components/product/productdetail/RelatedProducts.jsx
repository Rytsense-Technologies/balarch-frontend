import { IoIosAddCircleOutline } from "react-icons/io";
import { projects } from "../../../mock/Data";

const RelatedProducts = () => {
  return (
    <>
      <div className="lg:px-60 mt-5">
        <div className="flex flex-col items-center md:flex-row">
          <div className="text-4xl border-b border-gray-400 mb-4 md:mb-0 md:pr-4">
            Productos
          </div>
          <div className="text-gray-500 font-semibold pl-4">
            12 productos relacionados
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-5">
          {projects.map((project, index) => (
            <div className="relative" key={index}>
              <img
                src={project.img}
                alt={`Image ${index + 1}`}
                className="w-full h-[15rem] object-cover md:w-[20rem]"
              />
              <div className="absolute inset-0 flex flex-col gap-4 items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300 bg-black bg-opacity-50 text-white">
                <div className="hover:border-transparent hover:rounded-lg hover:p-6 hover:mx-4 hover:my-4">
                  <IoIosAddCircleOutline className="text-6xl" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RelatedProducts;

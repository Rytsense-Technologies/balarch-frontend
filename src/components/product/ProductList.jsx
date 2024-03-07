import { Button } from "@material-tailwind/react";
import { BsBuildings, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa6";
import { MdFavoriteBorder } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import { ProductFilter } from "./ProductFilter";

const ProductList = () => {
  const navigate = useNavigate();
  const items = Array.from({ length: 10 });

  return (
    <div className="grid grid-cols-1 gap-4 px-4 py-10 lg:grid-cols-8 lg:px-40">
      <div className="lg:col-span-2">
        <ProductFilter />
      </div>

      <div className="lg:col-span-6">
        <div className="mb-5">
          <div className="flex  items-center">
            <div className="text-4xl border-r border-gray-400 pr-4">
              Categorías
            </div>
            <div className="text-gray-500 font-semibold pl-4">
              50 proveedores encontrados
            </div>
          </div>
        </div>
        <hr />
        <div className="text-gray-500 text-sm font-semibold mt-2">
          PROYECTOS REGISTRADOS
        </div>
        <div className="grid grid-cols-1 gap-4 mt-5 sm:grid-cols-2 lg:grid-cols-1">
          {items.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center bg-white border-2 border-gray-200 rounded-lg shadow md:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
              onClick={() => navigate("/productos/name")}
            >
              <img
                className="rounded-full my-5 mx-5 shadow-lg w-36 h-36"
                src="https://s3-alpha-sig.figma.com/img/aa7d/3134/91b893ff59b70b782d3aa6668ce1cc2a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRikz-gU5vVhF5BOGVq4JYuk1PQteSve6ALlsDGokHxVZG54eYwV0RnoYlu2Y9kJhXHkoDxT~9apbfT3j2pdDSTtqPbSfKrSAL8KIJ4K7EkINx9d2PWilC4BcSEcwO5wFEMUMF6jwn~cG0AJ62yiDarvmHL8uSmZdYaIRiK6GFBszF63xYUEa9BXnx6FvAxW6lS1Cx1u~EVFQzIcproubdx-DZKVJcfWEY8uv7aY2XU3DfiNUsaHupqQknnkt-U2zm9Uqh9EWDnh5fymC7VFd0a7JYBhR9vIGFvx1G4xg9t0yY3VfO6~0nqSLlnvJFCjAWlAEs06Nhfcj3ogBnr6yg__"
                alt="Extra large avatar"
              />
              <div className="flex flex-col justify-between p-4 leading-normal">
                <div className="flex items-center">
                  <div className="text-xl border-r font-semibold border-gray-400 pr-4">
                    Cementera de Occidente
                  </div>
                  <div className="text-gray-500 font-semibold pl-4">
                    Arquitectura
                  </div>
                </div>
                <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris volutpat suscipit elit ac euismod. Curabitur sed erat
                  sit amet neque viverra tempus.
                </p>
                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                  <div className="flex items-center gap-2 text-sm font-medium">
                    <CiLocationOn />
                    <span>Guadalajara</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsStack />
                    <span>+500 productos</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <BsBuildings />
                    <span>Construcción</span>
                  </div>
                </div>
                <div className="flex w-full md:w-auto gap-4 my-5">
                  <button className="flex flex-row border border-gray-800 rounded-lg p-2 items-center gap-2">
                    Guardar <MdFavoriteBorder />
                  </button>
                  <Button variant="filled" size="sm">
                    Ver Perfil
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex items-center justify-center text-xl py-5 gap-4 cursor-pointer">
          <FaArrowLeft /> 1/5 <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default ProductList;

import { Button } from "@material-tailwind/react";
import { AiFillBoxPlot, AiOutlineMail } from "react-icons/ai";
import { BsHeart, BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaLink, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaInstagram, FaRegCircleUser } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { IoIosAddCircleOutline } from "react-icons/io";

import { projects } from "../mock/Data";
const ProductDetailPage = () => {
  return (
    <>
      <div className="transform duration-200 easy-in-out">
        <div className=" h-52 overflow-hidden">
          <img
            className="w-full"
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/centro-para-la-cultura-y-las-artes-de-la-ribera-ars-degrees-atelier-de-arquitecturas_18.jpg"
            alt=""
          />
        </div>
        <div className="flex justify-center px-5  -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full   "
            src="https://s3-alpha-sig.figma.com/img/aa7d/3134/91b893ff59b70b782d3aa6668ce1cc2a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRikz-gU5vVhF5BOGVq4JYuk1PQteSve6ALlsDGokHxVZG54eYwV0RnoYlu2Y9kJhXHkoDxT~9apbfT3j2pdDSTtqPbSfKrSAL8KIJ4K7EkINx9d2PWilC4BcSEcwO5wFEMUMF6jwn~cG0AJ62yiDarvmHL8uSmZdYaIRiK6GFBszF63xYUEa9BXnx6FvAxW6lS1Cx1u~EVFQzIcproubdx-DZKVJcfWEY8uv7aY2XU3DfiNUsaHupqQknnkt-U2zm9Uqh9EWDnh5fymC7VFd0a7JYBhR9vIGFvx1G4xg9t0yY3VfO6~0nqSLlnvJFCjAWlAEs06Nhfcj3ogBnr6yg__"
            alt=""
          />
        </div>
        <div className=" ">
          <div className="px-14 py-10">
            <div className="flex items-center justify-center">
              <div className="text-2xl border-r border-gray-400 pr-4">
                Cementera de Occidente
              </div>
              <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
                <BsHeart />
                <FiSend />
              </div>
            </div>
          </div>
          <div className="px-60 flex flex-col gap-6 justify-center">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              volutpat suscipit elit ac euismod. Curabitur sed erat sit amet
              neque viverra tempus sed ac arcu. Suspendisse dignissim nunc sed
              nibh facilisis fringilla. Proin at massa sit amet nisl eleifend
              elementum. In vel lectus consequat, molestie nibh molestie,
              ultricies tortor. Praesent quis consectetur nisi, non scelerisque
              augue. Praesent nec dui nec ipsum finibus facilisis vel non velit.
              Vivamus egestas lectus in pharetra tincidunt. Vestibulum accumsan
              arcu at lacinia molestie. Etiam at pellentesque justo.
            </span>
            <div className="flex">
              <div className="bg-gray-900 w-1/2 p-6 text-gray-300">
                <h1 className="text-center mb-5">Datos Clave</h1>
                <ul className="px-10 flex flex-col gap-4 border-blue-gray-50">
                  <li className="flex items-center gap-4">
                    <span>
                      <FaRegCircleUser />
                    </span>
                    <p className="font-normal">
                      Relacionado con 6 Profesionale
                    </p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <AiFillBoxPlot />
                    </span>
                    <p className="font-normal">Construcción</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <BsStack />
                    </span>
                    <p className="font-normal">Participa en 9 Proyectos</p>
                  </li>
                </ul>
              </div>
              <div className=" w-1/2 p-6 text-gray-800">
                <h1 className="text-center mb-5">Datos Clave</h1>
                <ul className="px-10 flex flex-col gap-4 border-blue-gray-50">
                  <li className="flex items-center gap-4">
                    <span>
                      <FaLink />
                    </span>
                    <p className="font-normal">https://vidalstudio.com</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <AiOutlineMail />
                    </span>
                    <p className="font-normal">jorge@vidalstudio.com</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <FaPhoneAlt />
                    </span>
                    <p className="font-normal">+52 325 231 6789</p>
                  </li>
                  <li className="flex items-center gap-4">
                    <span>
                      <CiLocationOn />
                    </span>
                    <p className="font-normal">CDMX</p>
                  </li>
                </ul>
                <div className="px-10 mt-10 text-lg text-gray-500 flex items-center gap-4">
                  <FaLinkedin />
                  <FaInstagram />
                  <FaFacebook />
                </div>
              </div>
            </div>

            <div className="flex items-center">
              <div className="text-4xl border-r border-gray-400 pr-4">
                Productos
              </div>
              <div className="text-gray-500 font-semibold pl-4">
                12 productos relacionados
              </div>
            </div>
            <div className="grid grid-cols-3 gap-8 mt-5">
              {projects.map((project, index) => (
                <div className="relative " key={index}>
                  <img
                    src={project.img}
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

            <div className="mb-10">
              <div className="flex items-center">
                <div className="text-4xl border-r border-gray-400 pr-4">
                  Productos
                </div>
                <div className="text-gray-500 font-semibold pl-4">
                  12 productos relacionados
                </div>
              </div>
              <div className="grid grid-cols-4 gap-8 mt-5">
                {projects.map((project, index) => (
                  <div
                    className="flex flex-col items-center gap-2 justify-center border border-gray-500  py-5"
                    key={index}
                  >
                    <img
                      src="https://s3-alpha-sig.figma.com/img/4848/0ec7/07945ef13cae2295443e720ca5d9250a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXRi5mNkQqAtZ94PjVSGAmeNUYAkoFh6JrbH~cbHIn~0ztAVZmlPb0bPsAK5ywCK6lPtlX27ceaB-ackwcIWi65ftbxruw1VjN-598iao4G4MdD6yxqUThvyq8Ivc6O855yLWFSLPTELaGVUqTylZqheviGlFGGb6w8kx8RzmmykMcMediG35wW007BLSSXismUMsaE~~CdPgpE8ken6ik1A9F1omAjeSvE4LsGlLVMeEN2GndlDHmBbZsIBSEr4-XkLtmFMg3U5CItT14BYKjygYPfXyH2EhgXex~0LvWc7tNfEmuHV6KxSBiXuF~Pel1SUVhYzmBAxm0enO8zduQ__"
                      alt="avatar"
                      className="relative inline-block h-[8rem] w-[8rem] !rounded-full object-cover object-center"
                    />
                    <h1>Jorge Vidal Studio</h1>
                    <p>Arquitecto sr</p>
                    <Button variant="filled" size="sm">
                      Ver Perfil
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <PatrocinosCards />
        </div>
      </div>
    </>
  );
};

export default ProductDetailPage;

import { Button } from "@material-tailwind/react";
import { AiOutlineBuild, AiOutlineMail } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { CiCamera, CiLocationOn } from "react-icons/ci";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin, FaRegCircleUser } from "react-icons/fa6";
import { FiSend } from "react-icons/fi";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { IoIosAddCircleOutline, IoIosArrowForward } from "react-icons/io";
import { MdCalendarMonth, MdOutlineDatasetLinked } from "react-icons/md";
import {
  TbAffiliate,
  TbChartAreaLineFilled,
  TbMessageCircleMinus,
} from "react-icons/tb";
import ss1 from "../assets/images/ss1.png";
import ss2 from "../assets/images/ss2.png";
const ProjectDetailPage = () => {
  const projectStat = [
    {
      id: 1,
      icon: <FaRegCircleUser />,
      title: "Arquitectura por",
      desc: "Jorge Vidal Studio",
    },
    {
      id: 2,
      icon: <TbMessageCircleMinus />,
      title: "Ingeniería por",
      desc: "Armando Asociados",
    },
    {
      id: 3,
      icon: <MdOutlineDatasetLinked />,
      title: "Diseño Interior",
      desc: "Ítnika",
    },
    {
      id: 4,
      icon: <CiCamera />,
      title: "Fotografías por",
      desc: "Federico Armentia",
    },
    {
      id: 5,
      icon: <TbChartAreaLineFilled />,
      title: "Área Total",
      desc: "1,680 m2",
    },
    {
      id: 6,
      icon: <CiLocationOn />,
      title: "Ciudad",
      desc: "CDMX",
    },
    {
      id: 7,
      icon: <MdCalendarMonth />,
      title: "Año",
      desc: "2002",
    },
    {
      id: 8,
      icon: <HiBuildingOffice2 />,
      title: "Categoría",
      desc: "Corporativo",
    },
    {
      id: 9,
      icon: <AiOutlineBuild />,
      title: "Productos",
      desc: "Lamilux, Cemex, Vidrimex Panels, más...",
    },
    {
      id: 10,
      icon: <TbAffiliate />,
      title: "Profesionales",
      desc: "Enrique Centeno, Mauricio Islas, más...",
    },
  ];

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

  const columns = projectStat.reduce((acc, item, index) => {
    const chunkIndex = Math.floor(index / 4);

    if (!acc[chunkIndex]) {
      acc[chunkIndex] = [];
    }

    acc[chunkIndex].push(item);

    return acc;
  }, []);
  return (
    <>
      <div className="py-10 lg:px-40">
        <div>
          <img
            src="https://stage-dihomx.com/wp-content/uploads/2023/09/casa-quinchuyaku-emilio-lopez-herrera-arquitecto_3.jpg"
            alt=""
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-6 py-10 border-b-2 border-gray-300">
          <nav className="flex" aria-label="Breadcrumb">
            <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
              <li aria-current="page">
                <div className="flex items-center">
                  <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    inicio
                  </span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <IoIosArrowForward />
                  <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Proyectos
                  </span>
                </div>
              </li>
              <li aria-current="page">
                <div className="flex items-center">
                  <IoIosArrowForward />
                  <span className="ms-1 text-md font-medium text-gray-500 md:ms-2 dark:text-gray-400">
                    Edificio corporativo cemex cdmx
                  </span>
                </div>
              </li>
            </ol>
          </nav>
          <div className="flex items-center ">
            <div className="text-4xl border-r border-gray-400 pr-4">
              Casa Quinchuyaku
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
              <BsHeart />
              <FiSend />
            </div>
          </div>
          <div className="px-20 grid grid-cols-3 gap-4">
            {columns.map((column, index) => (
              <div key={index} className="flex flex-col gap-4">
                {column.map((item) => (
                  <div key={item.id} className="flex items-center gap-2">
                    <div className="text-gray-500 text-xl">{item.icon}</div>

                    <div className="text-md text-gray-500">{item.title}:</div>
                    <div className="text-md text-gray-800 font-semibold">
                      {item.desc}
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
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
        <div className="py-5 bg-gray-200 p-4 flex justify-center">
          <div className="flex items-center text-xl text-gray-700 font-bold gap-4">
            <span>compartir proyecto:</span>

            <FaFacebook />
            <FaLinkedin />
            <AiOutlineMail />
            <FaInstagram className="border-r border-gray-600" />
            <BsHeart />
          </div>
        </div>
        <div className="px-20 py-20 grid grid-cols-12 gap-20">
          <div className="col-span-8 flex flex-col gap-6">
            <h1 className="text-2xl font-semibold">Descripción</h1>
            <span className="text-md">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              volutpat suscipit elit ac euismod. Curabitur sed erat sit amet
              neque viverra tempus sed ac arcu. Suspendisse dignissim nunc sed
              nibh facilisis fringilla. Proin at massa sit amet nisl eleifend
              elementum. In vel lectus consequat, molestie nibh molestie,
              ultricies tortor. Praesent quis consectetur nisi, non scelerisque
              augue. Praesent nec dui nec ipsum finibus facilisis vel non velit.
              Vivamus egestas lectus in pharetra tincidunt. Vestibulum accumsan
              arcu at lacinia molestie. Etiam at pellentesque justo. Curabitur
              at interdum enim. In odio lectus, scelerisque non tempus non,
              pretium pharetra augue. Nulla rutrum sapien non augue tincidunt,
              vitae scelerisque mi rhoncus. Mauris ultricies tempor magna vitae
              accumsan
            </span>
            <h1 className="text-2xl font-semibold">Concepto</h1>
            <span className="text-md">
              Vivamus gravida massa porttitor nunc vulputate, vitae convallis
              arcu lacinia. Praesent ac ante lacinia lectus molestie tempor sed
              in nunc. Vestibulum non lobortis metus. Sed porttitor eros vitae
              erat pulvinar, a finibus ligula fermentum. Proin varius massa eget
              dui ullamcorper viverra. Sed scelerisque finibus tortor non
              imperdiet. Proin blandit lorem eget ultrices posuere. Morbi
              suscipit eros a ligula dignissim sollicitudin. Cras interdum,
              justo sit amet vehicula semper, orci eros faucibus nunc, sed
              accumsan odio ex nec mi. Suspendisse potenti. Vivamus et ligula in
              felis ultricies placerat. Suspendisse in ipsum vel dolor semper
              egestas a vitae purus.
            </span>
            <h1 className="text-2xl font-semibold">Innovaciones</h1>
            <span className="text-md">
              Suspendisse sit amet tristique arcu. Donec eu ornare metus. Mauris
              a vulputate nisi. Nulla venenatis purus enim, at venenatis lacus
              hendrerit a. Morbi a orci accumsan, suscipit tellus in, suscipit
              lectus. Quisque volutpat elementum ex, auctor ornare lorem blandit
              sed. Morbi mollis, purus id accumsan accumsan, sapien quam
              molestie metus, non elementum lectus est ac ipsum. Pellentesque
              vel semper risus. Pellentesque habitant morbi tristique senectus
              et netus et malesuada fames ac turpis egestas.
            </span>
            <div>
              <img src={ss1} />
              <img src="https://s3-alpha-sig.figma.com/img/e825/8ed5/f69fb4e54f5e0e9286918cb0576cd5b4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gU~VOjrhlPH7sJUpCZz2t1Q4SlLmTaZWSaaIjIbRDuSuFoxSDb-uIrBZyjbsJ9JpwperoW-sgs-RYiS28ln~Lc8OkEH3K-Jvk3VYc2Ssay-VjquuzzukBsc8N6ewrBUb0ObigpLiv7AABgnzRJd1LDtLNdb-x8~UmL4HnhRLvKVPbV7Ng3h9G~ojXCLe6vh4Bx5SqSQTPmaLJHY2eM7dogQhs2nJmO7-6TVewcjiz89kDYZhLK74ZlfQLPpytXKhFpgBWZcLMOOjWUWJcVcC94MAuZfcuzmQTPYDuvQNbVZheh1IT-AN6eeztTyPnCQtTtRa-MxvOnvRxoKic~5w9g__" />
            </div>
            <h1 className="text-2xl font-semibold">Conclusiones</h1>
            <span className="text-md">
              Donec a efficitur enim, fermentum feugiat tellus. Nullam dignissim
              bibendum aliquet. Aliquam malesuada mattis turpis, non rhoncus
              quam placerat aliquam. Aliquam id eros ac nisl tempor lacinia et
              pulvinar eros. Cras vitae purus ac metus tincidunt hendrerit vel
              eget tortor. Quisque luctus placerat diam sit amet fermentum.
              Praesent placerat magna erat, a rhoncus sem tincidunt et.
              Pellentesque convallis non dolor vel elementum. Quisque porttitor
              eleifend est, id condimentum massa hendrerit nec. Sed non mollis
              neque, et gravida nisl. Nunc a venenatis arcu, id volutpat metus.
              Vivamus non tortor non massa pellentesque aliquam ut at risus.
              Duis at maximus leo. Sed odio nisl, ornare sed turpis at,
              facilisis porttitor magna. Integer sit amet libero sed tellus
              venenatis ultrices.
            </span>
            <h1 className="text-2xl font-semibold">Ubicación</h1>
            <span className="text-md">
              Av. Reforma No. 324 Col. Cuauhtémoc, CP. 06740, CDMX
            </span>
            <img src="https://s3-alpha-sig.figma.com/img/7518/7127/073ea1d5dde2df37d3d26ab05c93b123?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i8IV8kb~V4mkhArPjidRRWmvJVa2zDpmNKEFfzhB72zoHVMlQLzU5K9ZiSlF2-~hpXXI41JVW5Gl12Y7cfh7BRPhCPSQBaueWp2fn72MjETsopGSrON73c1KzwEndVbJXaKPO0LtBpqcoJbLtPIK1PIZqrkpHpCffnMLYkXY2XYeaP4XVWI8g4JvuzRZXO9oLlWJY2KOncLo26NzzTbqk5Q7y8-zrCoVA7UHnJoVi671pXbbpvrZfcfpqtYCYEFh0UfmZx9iKjMceOqQ9lj8BBOtosRuuH6EtSnQXiN1ahlN4LVdRfLZICK6N5t57PbUWSCQZm80UFum-mrRLR7d7A__" />
            <div className="py-5 bg-gray-200 p-4 flex justify-center">
              <div className="flex items-center text-xl text-gray-700 font-bold gap-4">
                <span>compartir proyecto:</span>

                <FaFacebook />
                <FaLinkedin />
                <AiOutlineMail />
                <FaInstagram className="border-r border-gray-600" />
                <BsHeart />
              </div>
            </div>
            <div className="bg-gray-300 flex justify-center p-12">
              <h1>Sponser</h1>
            </div>
          </div>

          <div className="col-span-4 flex flex-col gap-4 items-center">
            <div className="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
              <img src="https://s3-alpha-sig.figma.com/img/4848/0ec7/07945ef13cae2295443e720ca5d9250a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXRi5mNkQqAtZ94PjVSGAmeNUYAkoFh6JrbH~cbHIn~0ztAVZmlPb0bPsAK5ywCK6lPtlX27ceaB-ackwcIWi65ftbxruw1VjN-598iao4G4MdD6yxqUThvyq8Ivc6O855yLWFSLPTELaGVUqTylZqheviGlFGGb6w8kx8RzmmykMcMediG35wW007BLSSXismUMsaE~~CdPgpE8ken6ik1A9F1omAjeSvE4LsGlLVMeEN2GndlDHmBbZsIBSEr4-XkLtmFMg3U5CItT14BYKjygYPfXyH2EhgXex~0LvWc7tNfEmuHV6KxSBiXuF~Pel1SUVhYzmBAxm0enO8zduQ__" />
            </div>
            <h1 className="text-xl font-bold underline capitalize">
              jorge vidal studio
            </h1>
            <Button>Guardar Perfil</Button>
            <h1 className="text-xl text-gray-500">Ver más proyectos</h1>
            <img src="https://s3-alpha-sig.figma.com/img/3ff9/de81/2e7d02be3ed72e34d3a8f0e9db87df54?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdkCsYG441T0N3ZV7Yw-7Bx3A1vjHt7lwEgBwrkfxtgj4lNQSsILbdA80npzkPHwanSKnrf246dsdZt1oi2lF~GjPzm2c6thJJCKZ9Pf2U72HT5J-5Qawv7JDF011R8pskG5DqwGLDDDXwNdgPVDdqR0fNj4~gK93pvj3cEE8Wxe9WZsznCweIoC0sDA1kzwNdKG4nTJPhJxN9kJm0PhIvyE2MN-KKtJQb9gx~YCP07UJDjtNqY-rWPwSGr0377kbMleo2Zyn70d6BfciJjiVhD5jfEogkFqqRtdyqC32MnD7SKptyrq3HMFeDnPbzmid3kSsuG6BQpkGNjJs5lm0Q__" />
            <span className="text-xl">Alcázar 311, Monterrey</span>
            <div className="bg-gray-300 flex justify-center p-12">
              <h1>Sponser</h1>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img src={ss2} />
      </div>
    </>
  );
};

export default ProjectDetailPage;

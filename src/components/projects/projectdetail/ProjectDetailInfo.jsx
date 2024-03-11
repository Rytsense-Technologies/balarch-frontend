import { Button } from "@material-tailwind/react";
import ss1 from "../../../assets/images/ss1.png";
import { SocialMediaBar } from "./SocialMediaBar";

const ProjectDetailInfo = () => {
  return (
    <>
      <div className="px-20 py-20 grid grid-cols-12 gap-20">
        <div className="col-span-8 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Descripción</h1>
          <span className="text-md">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat suscipit elit ac euismod. Curabitur sed erat sit amet neque
            viverra tempus sed ac arcu. Suspendisse dignissim nunc sed nibh
            facilisis fringilla. Proin at massa sit amet nisl eleifend
            elementum. In vel lectus consequat, molestie nibh molestie,
            ultricies tortor. Praesent quis consectetur nisi, non scelerisque
            augue. Praesent nec dui nec ipsum finibus facilisis vel non velit.
            Vivamus egestas lectus in pharetra tincidunt. Vestibulum accumsan
            arcu at lacinia molestie. Etiam at pellentesque justo. Curabitur at
            interdum enim. In odio lectus, scelerisque non tempus non, pretium
            pharetra augue. Nulla rutrum sapien non augue tincidunt, vitae
            scelerisque mi rhoncus. Mauris ultricies tempor magna vitae accumsan
          </span>
          <h1 className="text-2xl font-semibold">Concepto</h1>
          <span className="text-md">
            Vivamus gravida massa porttitor nunc vulputate, vitae convallis arcu
            lacinia. Praesent ac ante lacinia lectus molestie tempor sed in
            nunc. Vestibulum non lobortis metus. Sed porttitor eros vitae erat
            pulvinar, a finibus ligula fermentum. Proin varius massa eget dui
            ullamcorper viverra. Sed scelerisque finibus tortor non imperdiet.
            Proin blandit lorem eget ultrices posuere. Morbi suscipit eros a
            ligula dignissim sollicitudin. Cras interdum, justo sit amet
            vehicula semper, orci eros faucibus nunc, sed accumsan odio ex nec
            mi. Suspendisse potenti. Vivamus et ligula in felis ultricies
            placerat. Suspendisse in ipsum vel dolor semper egestas a vitae
            purus.
          </span>
          <h1 className="text-2xl font-semibold">Innovaciones</h1>
          <span className="text-md">
            Suspendisse sit amet tristique arcu. Donec eu ornare metus. Mauris a
            vulputate nisi. Nulla venenatis purus enim, at venenatis lacus
            hendrerit a. Morbi a orci accumsan, suscipit tellus in, suscipit
            lectus. Quisque volutpat elementum ex, auctor ornare lorem blandit
            sed. Morbi mollis, purus id accumsan accumsan, sapien quam molestie
            metus, non elementum lectus est ac ipsum. Pellentesque vel semper
            risus. Pellentesque habitant morbi tristique senectus et netus et
            malesuada fames ac turpis egestas.
          </span>
          <div>
            <img src={ss1} />
            <img src="https://s3-alpha-sig.figma.com/img/e825/8ed5/f69fb4e54f5e0e9286918cb0576cd5b4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gU~VOjrhlPH7sJUpCZz2t1Q4SlLmTaZWSaaIjIbRDuSuFoxSDb-uIrBZyjbsJ9JpwperoW-sgs-RYiS28ln~Lc8OkEH3K-Jvk3VYc2Ssay-VjquuzzukBsc8N6ewrBUb0ObigpLiv7AABgnzRJd1LDtLNdb-x8~UmL4HnhRLvKVPbV7Ng3h9G~ojXCLe6vh4Bx5SqSQTPmaLJHY2eM7dogQhs2nJmO7-6TVewcjiz89kDYZhLK74ZlfQLPpytXKhFpgBWZcLMOOjWUWJcVcC94MAuZfcuzmQTPYDuvQNbVZheh1IT-AN6eeztTyPnCQtTtRa-MxvOnvRxoKic~5w9g__" />
          </div>
          <h1 className="text-2xl font-semibold">Conclusiones</h1>
          <span className="text-md">
            Donec a efficitur enim, fermentum feugiat tellus. Nullam dignissim
            bibendum aliquet. Aliquam malesuada mattis turpis, non rhoncus quam
            placerat aliquam. Aliquam id eros ac nisl tempor lacinia et pulvinar
            eros. Cras vitae purus ac metus tincidunt hendrerit vel eget tortor.
            Quisque luctus placerat diam sit amet fermentum. Praesent placerat
            magna erat, a rhoncus sem tincidunt et. Pellentesque convallis non
            dolor vel elementum. Quisque porttitor eleifend est, id condimentum
            massa hendrerit nec. Sed non mollis neque, et gravida nisl. Nunc a
            venenatis arcu, id volutpat metus. Vivamus non tortor non massa
            pellentesque aliquam ut at risus. Duis at maximus leo. Sed odio
            nisl, ornare sed turpis at, facilisis porttitor magna. Integer sit
            amet libero sed tellus venenatis ultrices.
          </span>
          <h1 className="text-2xl font-semibold">Ubicación</h1>
          <span className="text-md">
            Av. Reforma No. 324 Col. Cuauhtémoc, CP. 06740, CDMX
          </span>
          <img src="https://s3-alpha-sig.figma.com/img/7518/7127/073ea1d5dde2df37d3d26ab05c93b123?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=i8IV8kb~V4mkhArPjidRRWmvJVa2zDpmNKEFfzhB72zoHVMlQLzU5K9ZiSlF2-~hpXXI41JVW5Gl12Y7cfh7BRPhCPSQBaueWp2fn72MjETsopGSrON73c1KzwEndVbJXaKPO0LtBpqcoJbLtPIK1PIZqrkpHpCffnMLYkXY2XYeaP4XVWI8g4JvuzRZXO9oLlWJY2KOncLo26NzzTbqk5Q7y8-zrCoVA7UHnJoVi671pXbbpvrZfcfpqtYCYEFh0UfmZx9iKjMceOqQ9lj8BBOtosRuuH6EtSnQXiN1ahlN4LVdRfLZICK6N5t57PbUWSCQZm80UFum-mrRLR7d7A__" />
          <SocialMediaBar />
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
    </>
  );
};

export default ProjectDetailInfo;

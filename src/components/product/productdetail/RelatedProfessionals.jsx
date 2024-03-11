import { Button } from "@material-tailwind/react";
import { projects } from "../../../mock/Data";

const RelatedProfessionals = () => {
  return (
    <>
      <div className="mb-10 lg:px-60 mt-5">
        <div className="flex flex-col md:flex-row items-center">
          <div className="text-4xl border-b border-gray-400 md:border-r md:border-b-0 md:pr-4 mb-4 md:mb-0">
            Productos
          </div>
          <div className="text-gray-500 font-semibold pl-4">
            12 productos relacionados
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-5">
          {projects.map((project, index) => (
            <div
              className="flex flex-col items-center gap-2 justify-center border border-gray-500 py-5"
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
    </>
  );
};

export default RelatedProfessionals;

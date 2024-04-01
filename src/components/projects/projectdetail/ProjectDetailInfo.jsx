import { Button } from "@material-tailwind/react";
import ss1 from "../../../assets/images/ss1.png";
import { SocialMediaBar } from "./SocialMediaBar";

const ProjectDetailInfo = ({ projectDetails }) => {
  return (
    <>
      <div className="px-20 py-20 grid grid-cols-12 gap-20">
        <div className="col-span-8 flex flex-col gap-6">
          <h1 className="text-2xl font-semibold">Description</h1>
          <span className="text-md">{projectDetails.ProjectDescription}</span>
          <h1 className="text-2xl font-semibold">Concept</h1>
          <span className="text-md">{projectDetails.Concept}</span>
          <h1 className="text-2xl font-semibold">Innovations</h1>
          <span className="text-md">{projectDetails.Innovation}</span>
          <div>
            <img src={ss1} />
            <img src="https://s3-alpha-sig.figma.com/img/e825/8ed5/f69fb4e54f5e0e9286918cb0576cd5b4?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gU~VOjrhlPH7sJUpCZz2t1Q4SlLmTaZWSaaIjIbRDuSuFoxSDb-uIrBZyjbsJ9JpwperoW-sgs-RYiS28ln~Lc8OkEH3K-Jvk3VYc2Ssay-VjquuzzukBsc8N6ewrBUb0ObigpLiv7AABgnzRJd1LDtLNdb-x8~UmL4HnhRLvKVPbV7Ng3h9G~ojXCLe6vh4Bx5SqSQTPmaLJHY2eM7dogQhs2nJmO7-6TVewcjiz89kDYZhLK74ZlfQLPpytXKhFpgBWZcLMOOjWUWJcVcC94MAuZfcuzmQTPYDuvQNbVZheh1IT-AN6eeztTyPnCQtTtRa-MxvOnvRxoKic~5w9g__" />
          </div>

          <SocialMediaBar />
          <div className="bg-gray-300 flex justify-center p-12">
            <h1>Sponsor</h1>
          </div>
        </div>

        <div className="col-span-4 flex flex-col gap-4 items-center">
          <div className="relative w-40 h-40 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
            <img src="https://s3-alpha-sig.figma.com/img/4848/0ec7/07945ef13cae2295443e720ca5d9250a?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=DXRi5mNkQqAtZ94PjVSGAmeNUYAkoFh6JrbH~cbHIn~0ztAVZmlPb0bPsAK5ywCK6lPtlX27ceaB-ackwcIWi65ftbxruw1VjN-598iao4G4MdD6yxqUThvyq8Ivc6O855yLWFSLPTELaGVUqTylZqheviGlFGGb6w8kx8RzmmykMcMediG35wW007BLSSXismUMsaE~~CdPgpE8ken6ik1A9F1omAjeSvE4LsGlLVMeEN2GndlDHmBbZsIBSEr4-XkLtmFMg3U5CItT14BYKjygYPfXyH2EhgXex~0LvWc7tNfEmuHV6KxSBiXuF~Pel1SUVhYzmBAxm0enO8zduQ__" />
          </div>
          <h1 className="text-xl font-bold underline capitalize">
            Jorge Vidal Studio
          </h1>
          <Button>Save Profile</Button>
          <h1 className="text-xl text-gray-500">View more projects</h1>
          <img src="https://s3-alpha-sig.figma.com/img/3ff9/de81/2e7d02be3ed72e34d3a8f0e9db87df54?Expires=1710720000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=pdkCsYG441T0N3ZV7Yw-7Bx3A1vjHt7lwEgBwrkfxtgj4lNQSsILbdA80npzkPHwanSKnrf246dsdZt1oi2lF~GjPzm2c6thJJCKZ9Pf2U72HT5J-5Qawv7JDF011R8pskG5DqwGLDDDXwNdgPVDdqR0fNj4~gK93pvj3cEE8Wxe9WZsznCweIoC0sDA1kzwNdKG4nTJPhJxN9kJm0PhIvyE2MN-KKtJQb9gx~YCP07UJDjtNqY-rWPwSGr0377kbMleo2Zyn70d6BfciJjiVhD5jfEogkFqqRtdyqC32MnD7SKptyrq3HMFeDnPbzmid3kSsuG6BQpkGNjJs5lm0Q__" />
          <span className="text-xl">Alcázar 311, Monterrey</span>
          <div className="bg-gray-300 flex justify-center p-12">
            <h1>Sponsor</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectDetailInfo;

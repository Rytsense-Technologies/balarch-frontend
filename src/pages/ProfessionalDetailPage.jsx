import { BsHeart } from "react-icons/bs";
import { FiAlertCircle } from "react-icons/fi";
import { useLocation } from "react-router";
import PublishButton from "../components/common/PublishButton";
import ProfessionalInfo from "../components/professionals/professionaldetail/ProfessionalInfo";
import RelatedCollaborators from "../components/professionals/professionaldetail/RelatedCollaborators";
import RelatedProjectsProf from "../components/professionals/professionaldetail/RelatedProjectsProf";
import ProfessionalExperience from "./../components/professionals/professionaldetail/ProfessionalExperience";

const ProfessionalDetailPage = () => {
  const location = useLocation();
  const { userDetails } = location.state;
  const noimg = "https://cdn-icons-png.flaticon.com/512/149/149071.png";
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
        <div className="flex justify-center px-5 -mt-12">
          <img
            className="h-32 w-32 bg-white p-2 rounded-full"
            src="https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg"
            alt=""
          />
        </div>

        <div className="px-14 py-10">
          <div className="flex items-center justify-center">
            <div className="text-2xl border-r border-gray-400 pr-4">
              {userDetails.Name}
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
              <BsHeart />
              <FiAlertCircle />
            </div>
          </div>
        </div>

        <div className="lg:px-60 flex flex-col gap-6 px-5 text-center justify-center">
          <span>{userDetails.ShortBio}</span>
        </div>

        <ProfessionalInfo userDetails={userDetails} />
        <ProfessionalExperience />
        <RelatedProjectsProf />
        <RelatedCollaborators />
        <PublishButton />
      </div>
    </>
  );
};

export default ProfessionalDetailPage;

import { BsHeart } from "react-icons/bs";
import { FiSend } from "react-icons/fi";
import PatrocinosCards from "../components/common/PatrocinosCards";
import ProfessionalInfo from "../components/professionals/professionaldetail/ProfessionalInfo";
import RelatedProjectsProf from "../components/professionals/professionaldetail/RelatedProjectsProf";
import ProfessionalExperience from "./../components/professionals/professionaldetail/ProfessionalExperience";
const ProfessionalDetailPage = () => {
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
            src="https://s3-alpha-sig.figma.com/img/4848/0ec7/07945ef13cae2295443e720ca5d9250a?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GQID7XxN-7MM42aSH6smkjrqgvzoSjCuScjEOa8KPZPpJo0vCiO1xxsqQWFPwCr9ttidw3eQlJob~jpk8HDP1q0kAwSaqvHXSHhh0VPEvjxv6jfHLmCVlcE4LrUbkiuCfUml8rnHQIDpxHzflBoNcwpSgKgSdGLq0C50U-Dr2eypGpWanj7KN-1mbS-ik44w3YqaLnMH6dKk4Yu399Z9b-uoJYLWXuhoHCBWK95A2~tbVd6izxAbW65~QIwReRtT~8XRwsWfE0z7QqtFIK7XrX5v2KrZXfi0t0Xar6j8joboctpJttXjo5-Rh6UxmLKTRyGOjjNmyYiT2dEzHpZS0w__"
            alt=""
          />
        </div>

        <div className="px-14 py-10">
          <div className="flex items-center justify-center">
            <div className="text-2xl border-r border-gray-400 pr-4">
              Jorge Vidal Studio
            </div>
            <div className="flex items-center gap-4 text-gray-500 text-lg cursor-pointer font-semibold pl-4">
              <BsHeart />
              <FiSend />
            </div>
          </div>
        </div>

        <div className="lg:px-60 flex flex-col gap-6 px-5 text-center justify-center">
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
            volutpat suscipit elit ac euismod. Curabitur sed erat sit amet neque
            viverra tempus sed ac arcu. Suspendisse dignissim nunc sed nibh
            facilisis fringilla. Proin at massa sit amet nisl eleifend
            elementum. In vel lectus consequat, molestie nibh molestie,
            ultricies tortor. Praesent quis consectetur nisi, non scelerisque
            augue. Praesent nec dui nec ipsum finibus facilisis vel non velit.
            Vivamus egestas lectus in pharetra tincidunt. Vestibulum accumsan
            arcu at lacinia molestie. Etiam at pellentesque justo.
          </span>
        </div>

        <ProfessionalInfo />
        <ProfessionalExperience />
        <RelatedProjectsProf />
        <PatrocinosCards />
      </div>
    </>
  );
};

export default ProfessionalDetailPage;

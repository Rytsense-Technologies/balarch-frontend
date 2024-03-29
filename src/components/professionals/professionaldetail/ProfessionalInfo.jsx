import { AiFillBoxPlot, AiOutlineMail } from "react-icons/ai";
import { BsStack } from "react-icons/bs";
import { CiLocationOn } from "react-icons/ci";
import {
  FaFacebook,
  FaLink,
  FaLinkedin,
  FaPhoneAlt,
  FaRegBuilding,
} from "react-icons/fa";
import { FaInstagram, FaRegCircleUser } from "react-icons/fa6";

const ProfessionalInfo = ({ userDetails }) => {
  return (
    <>
      <div className="flex flex-col lg:flex-row lg:px-60 mt-10">
        <div className="lg:w-1/2 p-6 text-gray-300 bg-gray-900">
          <h1 className="text-center mb-5">Key Data</h1>
          <ul className="px-10 flex flex-col gap-4 border-blue-gray-50">
            <li className="flex items-center gap-4">
              <span>
                <FaRegCircleUser />
              </span>
              <p className="font-normal">Senior Architect</p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <AiFillBoxPlot />
              </span>
              <p className="font-normal">17 Years of Experience</p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <BsStack />
              </span>
              <p className="font-normal">12 Projects</p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <FaRegBuilding />
              </span>
              <p className="font-normal">
                Corporate, Commercial, Residential, Interior Design
              </p>
            </li>
          </ul>
        </div>
        <div className="lg:w-1/2 p-6 text-gray-800">
          <h1 className="text-center mb-5">Contact Information</h1>
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
              <p className="font-normal">{userDetails.Email}</p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <FaPhoneAlt />
              </span>
              <p className="font-normal">{userDetails.ContactPhoneNumber}</p>
            </li>
            <li className="flex items-center gap-4">
              <span>
                <CiLocationOn />
              </span>
              <p className="font-normal">{userDetails.Country.countryName}</p>
            </li>
          </ul>
          <div className="px-10 mt-10 text-lg text-gray-500 flex items-center gap-4">
            <FaLinkedin />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalInfo;

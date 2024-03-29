import { AiOutlineMail } from "react-icons/ai";
import { BsHeart } from "react-icons/bs";
import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

export const SocialMediaBar = () => {
  return (
    <>
      <div className="py-5 bg-gray-200 p-4 flex justify-center">
        <div className="flex items-center text-xl text-gray-700 font-bold gap-4">
          <span>share project:</span>

          <FaFacebook />
          <FaLinkedin />
          <AiOutlineMail />
          <FaInstagram className="border-r border-gray-600" />
          <BsHeart />
        </div>
      </div>
    </>
  );
};

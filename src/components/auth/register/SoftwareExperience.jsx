import React from "react";
import ae from "../../../assets/images/sw-exp-logo/ae.jpeg";
import cad from "../../../assets/images/sw-exp-logo/cad.png";
import dynamo from "../../../assets/images/sw-exp-logo/dynamo.jpeg";
import enscape from "../../../assets/images/sw-exp-logo/enscape.png";
import {
  default as grasshoppe,
  default as illustrator,
} from "../../../assets/images/sw-exp-logo/illustrator.png";
import indesign from "../../../assets/images/sw-exp-logo/indesign.png";
import lumion from "../../../assets/images/sw-exp-logo/lumion.jpeg";
import max from "../../../assets/images/sw-exp-logo/max.png";
import pr from "../../../assets/images/sw-exp-logo/pr.png";
import rvt from "../../../assets/images/sw-exp-logo/rvt.png";
import sketchup from "../../../assets/images/sw-exp-logo/sketchup.jpeg";
import twin from "../../../assets/images/sw-exp-logo/twin.png";
import vectorwork from "../../../assets/images/sw-exp-logo/vectorwork.png";

const SoftwareExperience = ({ handlePrevious, isSubmitting }) => {
  const images = [
    ae,
    cad,
    dynamo,
    enscape,
    grasshoppe,
    illustrator,
    indesign,
    lumion,
    max,
    pr,
    rvt,
    sketchup,
    twin,
    vectorwork,
  ];
  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {images.map((image, index) => (
          <img key={index} src={image} className="m-2 w-20 cursor-pointer" />
        ))}
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={handlePrevious}
        >
          Previous
        </button>

        <button
          type="submit"
          disabled={isSubmitting}
          className="text-white float-right bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </>
  );
};

export default SoftwareExperience;

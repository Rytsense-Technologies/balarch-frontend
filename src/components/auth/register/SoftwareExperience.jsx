import React, { useState } from "react";
import ae from "../../../assets/images/sw-exp-logo/ae.jpeg";
import cad from "../../../assets/images/sw-exp-logo/cad.png";
import dynamo from "../../../assets/images/sw-exp-logo/dynamo.jpeg";
import enscape from "../../../assets/images/sw-exp-logo/enscape.png";
import grasshoppe from "../../../assets/images/sw-exp-logo/grasshoppe.png";
import illustrator from "../../../assets/images/sw-exp-logo/illustrator.png";
import indesign from "../../../assets/images/sw-exp-logo/indesign.png";
import lumion from "../../../assets/images/sw-exp-logo/lumion.jpeg";
import max from "../../../assets/images/sw-exp-logo/max.png";
import pr from "../../../assets/images/sw-exp-logo/pr.png";
import rvt from "../../../assets/images/sw-exp-logo/rvt.png";
import sketchup from "../../../assets/images/sw-exp-logo/sketchup.jpeg";
import twin from "../../../assets/images/sw-exp-logo/twin.png";
import vectorwork from "../../../assets/images/sw-exp-logo/vectorwork.png";

const SoftwareExperience = ({
  handlePrevious,
  isSubmitting,
  selectedSoftwareLogos,
  setSelectedSoftwareLogos,
}) => {
  const [toastMessage, setToastMessage] = useState("");

  const images = [
    { name: "After effects", src: ae },
    { name: "Autocad", src: cad },
    { name: "Dynamo", src: dynamo },
    { name: "Enscape", src: enscape },
    { name: "Grasshopper", src: grasshoppe },
    { name: "Illustrator", src: illustrator },
    { name: "Indesign", src: indesign },
    { name: "Lumion", src: lumion },
    { name: "3ds max", src: max },
    { name: "Premier pro", src: pr },
    { name: "Revit", src: rvt },
    { name: "Sketchup", src: sketchup },
    { name: "Twinmotion", src: twin },
    { name: "Vectorworks", src: vectorwork },
  ];

  const toggleImageSelection = (imageName) => {
    if (
      selectedSoftwareLogos.length >= 6 &&
      !selectedSoftwareLogos.includes(imageName)
    ) {
      setToastMessage("Maximum 6 images allowed.");
      return;
    }

    const index = selectedSoftwareLogos.indexOf(imageName);
    if (index === -1) {
      setSelectedSoftwareLogos([...selectedSoftwareLogos, imageName]);
    } else {
      const updatedSelectedImages = [...selectedSoftwareLogos];
      updatedSelectedImages.splice(index, 1);
      setSelectedSoftwareLogos(updatedSelectedImages);
    }
    setToastMessage("");
  };

  return (
    <>
      <div className="flex flex-wrap gap-6 justify-center mt-10">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              className={`m-2 w-20 cursor-pointer ${
                selectedSoftwareLogos.includes(image.name)
                  ? ""
                  : "filter grayscale"
              }`}
              onClick={() => toggleImageSelection(image.name)}
            />
            {selectedSoftwareLogos.includes(image.name) && (
              <div className="absolute top-0 right-0 bg-green-500 text-white rounded-full p-1">
                ✓
              </div>
            )}
          </div>
        ))}
      </div>
      {toastMessage && <div className="text-red-500 mt-2">{toastMessage}</div>}
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

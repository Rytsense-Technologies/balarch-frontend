import React, { useState } from "react";
import { IoMdAdd, IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import InputField from "./../../common/form/InputField";

const ProfessionalInfo = ({
  handleNext,
  handlePrevious,
  CompanyProfessionalExperience1,
  PositionProfessionalExperience1,
  YearProfessionalExperience1,
  setCompanyProfessionalExperience1,
  setPositionProfessionalExperience1,
  setYearProfessionalExperience1,
  CompanyProfessionalExperience2,
  PositionProfessionalExperience2,
  YearProfessionalExperience2,
  setCompanyProfessionalExperience2,
  setPositionProfessionalExperience2,
  setYearProfessionalExperience2,
  CompanyProfessionalExperience3,
  PositionProfessionalExperience3,
  YearProfessionalExperience3,
  setCompanyProfessionalExperience3,
  setPositionProfessionalExperience3,
  setYearProfessionalExperience3,
}) => {
  const [experienceCount, setExperienceCount] = useState(1);

  const addExperience = () => {
    setExperienceCount((prevCount) => prevCount + 1);
  };

  const deleteExperience = (index) => {
    const updatedCount = experienceCount - 1;
    setExperienceCount(updatedCount);
  };

  const renderExperienceFields = () => {
    const fields = [];
    for (let i = 1; i <= experienceCount; i++) {
      const companySetter = `setCompanyProfessionalExperience${i}`;
      const positionSetter = `setPositionProfessionalExperience${i}`;
      const yearSetter = `setYearProfessionalExperience${i}`;

      fields.push(
        <div key={i}>
          <div className="flex items-center justify-between">
            <span className="text-gray-900 mt-5 flex items-center gap-2 cursor-pointer">
              Professional Experience {i}
            </span>
            <button
              type="button"
              onClick={() => deleteExperience(i)}
              className="text-red-500 hover:text-red-700"
            >
              <IoMdClose />
            </button>
          </div>
          <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <InputField
                type={"text"}
                label={"Company Name"}
                name={`CompanyProfessionalExperience${i}`}
                id={`CompanyProfessionalExperience${i}`}
                onChange={(e) => {
                  const setter = eval(companySetter);
                  setter(e.target.value);
                }}
              />
            </div>
            <div className="sm:col-span-3">
              <InputField
                type={"text"}
                label={"Position"}
                name={`PositionProfessionalExperience${i}`}
                id={`PositionProfessionalExperience${i}`}
                onChange={(e) => {
                  const setter = eval(positionSetter);
                  setter(e.target.value);
                }}
              />
            </div>
            <div className="sm:col-span-3">
              <InputField
                type={"number"}
                label={"Year"}
                name={`YearProfessionalExperience${i}`}
                id={`YearProfessionalExperience${i}`}
                onChange={(e) => {
                  const setter = eval(yearSetter);
                  setter(e.target.value);
                }}
              />
            </div>
          </div>
        </div>
      );
    }
    return fields;
  };

  return (
    <>
      {renderExperienceFields()}
      <Link
        type="button"
        onClick={addExperience}
        className="mt-4 text-blue-900 flex items-center gap-2 underline font-bold py-2 px-4 rounded"
      >
        <IoMdAdd /> Add Experience
      </Link>
      <div className="mt-10">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
          onClick={handlePrevious}
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white float-right bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ProfessionalInfo;

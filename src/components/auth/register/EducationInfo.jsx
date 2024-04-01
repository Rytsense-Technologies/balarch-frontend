import React from "react";
import InputField from "../../common/form/InputField";
import SelectField from "../../common/form/SelectField";

const EducationInfo = ({ handleNext, handlePrevious }) => {
  const selectedOptions = [
    { label: "Bachelor", value: "Bachelor" },
    { label: "Master", value: "Master" },
    { label: "Associate", value: "Associate" },
  ];

  return (
    <>
      <div>
        <span className="text-gray-900 font-medium mt-5 flex items-center gap-2 cursor-pointer">
          Education 1
        </span>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <SelectField
              selectoptions={selectedOptions}
              title={"Education Degree"}
              name="EducationDegree1"
              required
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="text"
              label="Institute or School"
              name="EducationalInstitute1"
              required
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="text"
              label="Title or Career"
              name="EducationTitle1"
              required
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="number"
              label="Finish Year"
              name="EducationYear1"
              required
            />
          </div>
        </div>

        <span className="text-gray-900 font-medium mt-5 flex items-center gap-2 cursor-pointer">
          Education 2
        </span>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <SelectField
              selectoptions={selectedOptions}
              title={"Education Degree"}
              name="EducationDegree2"
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="text"
              label="Institute or School"
              name="EducationalInstitute2"
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="text"
              label="Title or Career"
              name="EducationTitle2"
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="number"
              label="Finish Year"
              name="EducationYear2"
            />
          </div>
        </div>

        <span className="text-gray-900 font-medium mt-5 flex items-center gap-2 cursor-pointer">
          Education 3
        </span>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <SelectField
              selectoptions={selectedOptions}
              title={"Education Degree"}
              name="EducationDegree3"
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="text"
              label="Institute or School"
              name="EducationalInstitute3"
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="text"
              label="Title or Career"
              name="EducationTitle3"
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              type="number"
              label="Finish Year"
              name="EducationYear3"
            />
          </div>
        </div>
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
          className="text-white float-right bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
          onClick={handleNext}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default EducationInfo;

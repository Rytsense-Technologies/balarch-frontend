import SelectField from "../../common/form/SelectField";
import InputField from "./../../common/form/InputField";

const EducationInfo = ({
  handleNext,
  handlePrevious,
  EducationalInstitute1,
  EducationTitle1,
  EducationDegree1,
  EducationYear1,
  EducationalInstitute2,
  EducationTitle2,
  EducationDegree2,
  EducationYear2,
  EducationalInstitute3,
  EducationTitle3,
  EducationDegree3,
  EducationYear3,
  setEducationDegree1,
  setEducationDegree2,
  setEducationDegree3,
  setEducationTitle1,
  setEducationTitle2,
  setEducationTitle3,
  setEducationYear1,
  setEducationYear2,
  setEducationYear3,
  setEducationalInstitute1,
  setEducationalInstitute2,
  setEducationalInstitute3,
}) => {
  return (
    <>
      <div>
        <span className="text-blue-900 underline mt-10 flex items-center gap-2 cursor-pointer">
          Education 1
        </span>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              title={"Education Degree"}
              name={EducationDegree1}
              value={EducationDegree1}
              onChange={(e) => setEducationDegree1(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Institute or School"}
              name={EducationalInstitute1}
              value={EducationalInstitute1}
              onChange={(e) => setEducationalInstitute1(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Title or Career"}
              name={EducationTitle1}
              value={EducationTitle1}
              onChange={(e) => setEducationTitle1(e.target.value)}
            />
          </div>

          <div className="sm:col-span-3">
            <InputField
              label={"Finish Year"}
              name={EducationYear1}
              value={EducationYear1}
              onChange={(e) => setEducationYear1(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div>
        <span className="text-blue-900 underline mt-10 flex items-center gap-2 cursor-pointer">
          Education 2
        </span>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              title={"Education Degree"}
              name={EducationDegree2}
              value={EducationDegree2}
              onChange={(e) => setEducationDegree2(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Institute or School"}
              name={EducationalInstitute2}
              value={EducationalInstitute2}
              onChange={(e) => setEducationalInstitute2(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Title or Career"}
              name={EducationTitle2}
              value={EducationTitle2}
              onChange={(e) => setEducationTitle2(e.target.value)}
            />
          </div>

          <div className="sm:col-span-3">
            <InputField
              label={"Finish Year"}
              name={EducationYear2}
              value={EducationYear2}
              onChange={(e) => setEducationYear2(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <span className="text-blue-900 underline mt-10 flex items-center gap-2 cursor-pointer">
          Education 3
        </span>
        <div className="mt-5 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              title={"Education Degree"}
              name={EducationDegree3}
              value={EducationDegree3}
              onChange={(e) => setEducationDegree3(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Institute or School"}
              name={EducationalInstitute3}
              value={EducationalInstitute3}
              onChange={(e) => setEducationalInstitute3(e.target.value)}
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Title or Career"}
              name={EducationTitle3}
              value={EducationTitle3}
              onChange={(e) => setEducationTitle3(e.target.value)}
            />
          </div>

          <div className="sm:col-span-3">
            <InputField
              label={"Finish Year"}
              name={EducationYear3}
              value={EducationYear3}
              onChange={(e) => setEducationYear3(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white float-right bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default EducationInfo;

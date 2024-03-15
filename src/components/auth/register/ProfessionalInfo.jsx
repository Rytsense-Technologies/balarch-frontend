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
}) => {
  return (
    <>
      <div>
        <span className="text-blue-900 underline mt-10 flex items-center gap-2 cursor-pointer">
          Professional Experience 1
        </span>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              label={"Company Name"}
              name={CompanyProfessionalExperience1}
              id={CompanyProfessionalExperience1}
              onChange={(e) =>
                setCompanyProfessionalExperience1(e.target.value)
              }
            />
          </div>

          <div className="sm:col-span-3">
            <InputField
              label={"Position Name"}
              name={PositionProfessionalExperience1}
              id={PositionProfessionalExperience1}
              onChange={(e) =>
                setPositionProfessionalExperience1(e.target.value)
              }
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Year"}
              name={YearProfessionalExperience1}
              id={YearProfessionalExperience1}
              onChange={(e) => setYearProfessionalExperience1(e.target.value)}
            />
          </div>
        </div>
      </div>

      <div>
        <span className="text-blue-900 underline mt-10 flex items-center gap-2 cursor-pointer">
          Professional Experience 2
        </span>
        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
          <div className="sm:col-span-3">
            <InputField
              label={"Company Name"}
              name={CompanyProfessionalExperience2}
              id={CompanyProfessionalExperience2}
              onChange={(e) =>
                setCompanyProfessionalExperience2(e.target.value)
              }
            />
          </div>

          <div className="sm:col-span-3">
            <InputField
              label={"Position Name"}
              name={PositionProfessionalExperience2}
              id={PositionProfessionalExperience2}
              onChange={(e) =>
                setPositionProfessionalExperience2(e.target.value)
              }
            />
          </div>
          <div className="sm:col-span-3">
            <InputField
              label={"Year"}
              name={YearProfessionalExperience2}
              id={YearProfessionalExperience2}
              onChange={(e) => setYearProfessionalExperience2(e.target.value)}
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

export default ProfessionalInfo;

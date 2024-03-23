import SelectField from "../../common/form/SelectField";
import InputField from "./../../common/form/InputField";

const PersonalInfo = ({ handleNext, isSubmitting }) => {
  const selectedoptions = [
    { label: "Education", value: "Education" },
    { label: "IT", value: "IT" },
    { label: "Business", value: "Business" },
    { label: "Architech", value: "Architech" },
  ];

  const occupations = [
    { label: "Student", value: "Student" },
    { label: "company", value: "company" },
    { label: "product", value: "product" },
    { label: "professional", value: "professional" },
  ];

  const concentration = [{ label: "Residential", value: "Residential" }];

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputField type={"email"} label={"Email"} name={"Email"} required />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type={"password"}
            label={"Password"}
            name={"Password"}
            required
          />
        </div>
        <div className="sm:col-span-3">
          <InputField type={"text"} label={"Name"} name={"Name"} required />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type={"text"}
            label={"Biography"}
            name={"ShortBio"}
            required
          />
        </div>

        <div className="sm:col-span-3">
          <SelectField
            selectoptions={selectedoptions}
            title={"Professional Position Category"}
            name={"Profession"}
            required
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type={"text"}
            label={"Professional Position"}
            name={"ProfessionPositionName"}
            required
          />
        </div>
        <div className="sm:col-span-3">
          <SelectField
            selectoptions={occupations}
            title={"Occupation"}
            name={"Occupation"}
            required
          />
        </div>
        <div className="sm:col-span-3">
          <SelectField
            selectoptions={concentration}
            title={"Concentration"}
            name={"Concentration"}
            required
          />
        </div>
      </div>
      <div className="mt-10">
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

export default PersonalInfo;

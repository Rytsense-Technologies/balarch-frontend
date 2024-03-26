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

  const country = [
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "Mexico", value: "Mexico" },
  ];

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
          <label
            className="block text-sm font-medium leading-6 text-gray-500"
            for="small_size"
          >
            Profile Picture
          </label>
          <input
            className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
            id="small_size"
            type="file"
            name="ProfilePicture"
          />
        </div>
        <div className="sm:col-span-3">
          <SelectField selectoptions={country} title="Country" name="Country" />
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

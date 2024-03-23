import React from "react";
import InputField from "./../../common/form/InputField";
import SelectField from "./../../common/form/SelectField";

const ContactInfo = ({ handleNext, handlePrevious }) => {
  const industry = [
    { label: "Industry1", value: "Industry1" },
    { label: "Industry2", value: "Industry2" },
    { label: "Industry3", value: "Industry3" },
  ];

  const country = [
    { label: "USA", value: "USA" },
    { label: "Canada", value: "Canada" },
    { label: "Mexico", value: "Mexico" },
  ];

  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <SelectField
            selectoptions={industry}
            title="Industry"
            name="Industry"
            required
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            type="number"
            label="Start Year"
            name="StartYear"
            required
          />
        </div>

        <div className="sm:col-span-3">
          <InputField type="text" label="Website Link" name="WebsiteLink" />
        </div>
        <div className="sm:col-span-3">
          <InputField
            type="text"
            label="Contact Email Address"
            name="ContactEmailAddress"
            required
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            type="number"
            label="Contact Phone Number"
            name="ContactPhoneNumber"
            required
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type="text"
            label="Profile Picture"
            name="ProfilePicture"
            required
          />
        </div>
        <div className="sm:col-span-3">
          <SelectField selectoptions={country} title="Country" name="Country" />
        </div>
        <div className="sm:col-span-3">
          <InputField
            type="text"
            label="MagazineShippingAddress"
            name="MagazineShippingAddress"
            required
          />
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

export default ContactInfo;

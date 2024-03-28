import { ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
import { useAppContext } from "../../../context/AppContext";
import InputField from "./../../common/form/InputField";

const PersonalInfo = ({ handleNext, isSubmitting }) => {
  const { profileType } = useAppContext();
  const [country, setCountry] = useState([]);
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

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_APP_BASE_BACKEND_API_URL}api/getAllCountries`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setCountry(data.Result);
      } catch (error) {
        console.error(
          "There has been a problem with your fetch country:",
          error
        );
      }
    };

    fetchData();
  }, []);

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
          <div>
            <label
              htmlFor="country"
              className="block text-sm font-medium leading-6 text-gray-500"
            >
              Country
            </label>
            <Field
              as="select"
              name="Country"
              className="w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500"
            >
              <option value="" disabled selected>
                Select an option
              </option>
              {country.map((option) => (
                <option key={option.CountryId} value={option.CountryId}>
                  {option.CountryName}
                </option>
              ))}
            </Field>
            <ErrorMessage
              name="Country"
              component="div"
              className="text-red-500 text-xs"
            />
          </div>
        </div>
        {(profileType === "Company" || profileType === "Product") && (
          <div className="sm:col-span-3">
            <InputField
              type={"text"}
              label={"Operations"}
              name={"Operations"}
            />
          </div>
        )}
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

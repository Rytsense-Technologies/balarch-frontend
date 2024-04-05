import { ErrorMessage, Field } from "formik";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { getAllCountries } from "../../../service/MainService";

const CountrySelect = () => {
  const [country, setCountry] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const CountryList = await getAllCountries();
        setCountry(CountryList);
      } catch (error) {
        toast.error(error.message || "Something went wrong");
      }
    };

    fetchData();
  }, []);
  return (
    <div>
      <label
        htmlFor="country"
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        Country <span className="text-red-500">*</span>
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
  );
};

export default CountrySelect;

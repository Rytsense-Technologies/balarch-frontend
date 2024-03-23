import { ErrorMessage, Field } from "formik";
import React from "react";

const SelectField = ({ title, selectoptions, name, required }) => {
  return (
    <div>
      <label
        htmlFor={title.toLowerCase()}
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        {title} {required && <span className="text-red-500">*</span>}
      </label>
      <Field
        as="select"
        id={name}
        name={name}
        required={required}
        className="w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500"
      >
        <option value="" disabled selected>
          Select an option
        </option>
        {selectoptions.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </Field>
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default SelectField;

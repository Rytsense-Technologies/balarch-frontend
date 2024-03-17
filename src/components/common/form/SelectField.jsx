import React from "react";

const SelectField = ({ title, selectoptions, value, onChange }) => {
  return (
    <div>
      <label
        htmlFor="countries"
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        {title}
      </label>
      <select
        id="countries"
        className="w-full border mt-2 border-gray-300 rounded-md py-3 px-3 shadow-sm focus:outline-none focus:border-blue-500"
        value={value}
        onChange={onChange}
      >
        <option value="">Select</option>

        {selectoptions.map((option, index) => (
          <option key={index} value={option.value}>
            {option.id}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

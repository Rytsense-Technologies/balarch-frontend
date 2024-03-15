import React from "react";

const SelectField = ({ title, selectoptions }) => {
  return (
    <div>
      <label
        for="countries"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {title}
      </label>
      <select
        id="countries"
        className="w-full border mt-2 border-gray-300 rounded-md py-3 px-3 shadow-sm focus:outline-none focus:border-blue-500"
      >
        {selectoptions.map((option, index) => (
          <div key={index}>
            <option value={option.value}>{option.id}</option>
          </div>
        ))}
      </select>
    </div>
  );
};

export default SelectField;

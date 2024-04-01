import { ErrorMessage, Field } from "formik";

const InputField = ({ label, name, type, required, inputType, rows }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      {inputType === "textarea" ? (
        <Field
          type={type}
          name={name}
          required={required}
          as={inputType}
          rows={rows}
          className="w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500"
        />
      ) : (
        <Field
          type={type}
          name={name}
          required={required}
          className="w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500"
        />
      )}
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default InputField;

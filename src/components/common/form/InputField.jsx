import { ErrorMessage, Field } from "formik";

const InputField = ({ label, name, type, required, onChange }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor="password"
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        {label} {required && <span className="text-red-500">*</span>}
      </label>
      <Field
        type={type}
        name={name}
        required={required}
        className="w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500"
      />
      <ErrorMessage
        name={name}
        component="div"
        className="text-red-500 text-xs"
      />
    </div>
  );
};

export default InputField;

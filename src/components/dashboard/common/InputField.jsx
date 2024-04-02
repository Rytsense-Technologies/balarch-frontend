import { ErrorMessage, Field } from "formik";

const InputField = ({ label, name, type, autoComplete, textarea, rows }) => {
  if (textarea) {
    return (
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <Field
            as="textarea"
            name={name}
            autoComplete={autoComplete}
            rows={rows}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
    );
  } else {
    return (
      <div className="sm:col-span-2">
        <label className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        <div className="mt-2">
          <Field
            name={name}
            type={type}
            autoComplete={autoComplete}
            className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          />
        </div>
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-xs"
        />
      </div>
    );
  }
};

export default InputField;

const InputField = ({ label, name, value, onChange, type }) => {
  return (
    <div>
      <label
        htmlFor="city"
        className="block text-sm font-medium leading-6 text-gray-500"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          type={type}
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-md py-2 px-3 shadow-sm focus:outline-none focus:border-blue-500"
        />
      </div>
    </div>
  );
};

export default InputField;

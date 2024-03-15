import InputField from "./../../common/form/InputField";

const PersonalInfo = ({
  handleNext,
  handlePrevious,
  Email,
  setEmail,
  Password,
  setPassword,
  Name,
  setName,
  ShortBio,
  setShortBio,
  Profession,
  setProfession,
}) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputField
            label={"Email"}
            name={Email}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"Password"}
            name={Password}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Name"}
            name={Name}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"Biography"}
            name={ShortBio}
            value={ShortBio}
            onChange={(e) => setShortBio(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"Professional Position"}
            name={Profession}
            value={Profession}
            onChange={(e) => setProfession(e.target.value)}
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

export default PersonalInfo;

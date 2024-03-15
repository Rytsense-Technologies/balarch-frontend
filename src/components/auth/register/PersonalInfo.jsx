import InputField from "./../../common/form/InputField";

const PersonalInfo = ({
  handleNext,
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
  ProfessionalPosition,
  setProfessionalPosition,
}) => {
  const selectoptions = [
    { id: "Education", value: "Education" },
    { id: "IT", value: "IT" },
    { id: "Business", value: "Business" },
  ];
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
            label={"Professional Position Category"}
            name={ProfessionalPosition}
            value={ProfessionalPosition}
            onChange={(e) => setProfessionalPosition(e.target.value)}
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

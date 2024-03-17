import SelectField from "../../common/form/SelectField";
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
  ProfessionPositionName,
  setProfessionPositionName,
}) => {
  const selectedoptions = [
    { id: "Education", value: "Education" },
    { id: "IT", value: "IT" },
    { id: "Business", value: "Business" },
    { id: "Architech", value: "Architech" },
  ];

  const handleSelectchange = (event) => {
    setProfession(event.target.value);
  };
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputField
            type={"email"}
            label={"Email"}
            name={Email}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type={"Password"}
            label={"Password"}
            name={Password}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            type={"text"}
            label={"Name"}
            name={Name}
            value={Name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type={"text"}
            label={"Biography"}
            name={ShortBio}
            value={ShortBio}
            onChange={(e) => setShortBio(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <SelectField
            selectoptions={selectedoptions}
            title={"Professional Position Category"}
            value={Profession}
            onChange={handleSelectchange}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            type={"text"}
            label={"Professional Position"}
            name={ProfessionPositionName}
            value={ProfessionPositionName}
            onChange={(e) => setProfessionPositionName(e.target.value)}
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

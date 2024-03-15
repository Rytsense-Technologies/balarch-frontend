import InputField from "./../../common/form/InputField";
import SelectField from "./../../common/form/SelectField";

const ContactInfo = ({
  handleNext,
  handlePrevious,
  StartYear,
  WebsiteLink,
  ContactEmailAddress,
  ContactPhoneNumber,
  ProfilePicture,
  Country,
  MagazineShippingAddress,
  setStartYear,
  setWebsiteLink,
  setContactEmailAddress,
  setContactPhoneNumber,
  setProfilePicture,
  setCountry,
  setMagazineShippingAddress,
}) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputField
            label={"Industrial Start Year"}
            name={StartYear}
            value={StartYear}
            onChange={(e) => setStartYear(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"Site URL"}
            name={WebsiteLink}
            value={WebsiteLink}
            onChange={(e) => setWebsiteLink(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Contact Email"}
            name={ContactEmailAddress}
            value={ContactEmailAddress}
            onChange={(e) => setContactEmailAddress(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Contact Phone"}
            name={ContactPhoneNumber}
            value={ContactPhoneNumber}
            onChange={(e) => setContactPhoneNumber(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"Profile picture"}
            name={ProfilePicture}
            value={ProfilePicture}
            onChange={(e) => setProfilePicture(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Country"}
            name={Country}
            value={Country}
            onChange={(e) => setCountry(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Magazine Shipping Address"}
            name={MagazineShippingAddress}
            value={MagazineShippingAddress}
            onChange={(e) => setMagazineShippingAddress(e.target.value)}
          />
        </div>
      </div>
      <div className="mt-10">
        <button
          type="button"
          className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800"
        >
          Previous
        </button>
        <button
          type="button"
          className="text-white float-right bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-3 py-2 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Next
        </button>
      </div>
    </>
  );
};

export default ContactInfo;

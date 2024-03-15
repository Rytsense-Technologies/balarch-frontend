import InputField from "./../../common/form/InputField";

const OtherInfo = ({
  handleNext,
  handlePrevious,
  OperationRange,
  FacebookIconLink,
  InstagramIconLink,
  IssueIconLink,
  XIconLink,
  YoutubeIconLink,
  YearExperience,
  setOperationRange,
  setFacebookIconLink,
  setInstagramIconLink,
  setIssueIconLink,
  setXIconLink,
  setYoutubeIconLink,
  setYearExperience,
  signUp,
}) => {
  return (
    <>
      <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
        <div className="sm:col-span-3">
          <InputField
            label={"Operations"}
            name={OperationRange}
            value={OperationRange}
            onChange={(e) => setOperationRange(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"Facebook URL"}
            name={FacebookIconLink}
            value={FacebookIconLink}
            onChange={(e) => setFacebookIconLink(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Instagram URL"}
            name={InstagramIconLink}
            value={InstagramIconLink}
            onChange={(e) => setInstagramIconLink(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Issue URL"}
            name={IssueIconLink}
            value={IssueIconLink}
            onChange={(e) => setIssueIconLink(e.target.value)}
          />
        </div>

        <div className="sm:col-span-3">
          <InputField
            label={"X URL"}
            name={XIconLink}
            value={XIconLink}
            onChange={(e) => setXIconLink(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Youtube URL"}
            name={YoutubeIconLink}
            value={YoutubeIconLink}
            onChange={(e) => setYoutubeIconLink(e.target.value)}
          />
        </div>
        <div className="sm:col-span-3">
          <InputField
            label={"Software Experience"}
            name={YearExperience}
            value={YearExperience}
            onChange={(e) => setYearExperience(e.target.value)}
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
        >
          Submit
        </button>
      </div>
    </>
  );
};

export default OtherInfo;

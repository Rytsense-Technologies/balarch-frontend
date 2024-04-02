import React from "react";
import { MdCloudUpload } from "react-icons/md";

const PublishButton = () => {
  return (
    <div className="flex justify-center">
      <button
        type="button"
        className="py-2.5 px-5 flex items-center gap-2 me-2 mb-10 mt-10 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border-2 border-gray-800 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
      >
        <MdCloudUpload className="text-lg" /> Publish
      </button>
    </div>
  );
};

export default PublishButton;

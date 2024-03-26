import React from "react";
import { VscEdit } from "react-icons/vsc";

export const MyProfile = () => {
  const personal = [
    { key: "First Name" },
    { key: "Last Name" },
    { key: "Email" },
    { key: "Phone" },
    { key: "Bio" },
    { key: "Gender & Date of Birth" },
  ];
  return (
    <>
      <div className="mb-10">
        <h3 className="text-md font-bold text-gray-900 dark:text-white mb-2">
          My Profile
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex min-w-0 gap-x-4">
            <img
              className="h-20 w-20 flex-none rounded-full bg-gray-50"
              src="https://s3-alpha-sig.figma.com/img/2588/b21c/8c64a52772784a3c354fa08294114e35?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLgh7xoOHGuZQqjSi6~ephVHVq0Nct1SGaSm98okWUsYMibLTnuPuqFErs2BLncQbG0KoGf48EooGt2qsalGufSTcYQQN8vGAS6efDJaJyRJlrVJddcgWjsEi57HZvPzPq9jZl-lUApAnDkTyi8JoIuCzOY-pQNhl30o1LC2iyUwg93UyfsWaeJ6-Lj0dTmHI87c2s17k6emFbB3FFMeMobOiNYpiEduyFtzc3UxUQQfBgoeiTcwHT1FBwpNaasEjkCe4wQbYlFMIhkIzj0Yl8jveBJbup9AIGKh~bk3cYcze4E7y~QXA~91jMDPgqCvY9NHfBfDIQWGINsQMerJ4w__"
              alt=""
            />
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">
                Profile Name
              </p>
              <p className="mt-1 truncate text-sm leading-5 text-blue-400">
                Civil Engineer
              </p>
              <p className="mt-1 truncate text-sm leading-5 text-blue-400">
                UK
              </p>
            </div>
          </div>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 flex items-center gap-2 text-md font-medium text-blue-300 focus:outline-none  rounded-full border border-blue-300   focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <VscEdit /> Edit
          </button>
        </div>
      </div>

      <div>
        <h3 className="text-md font-bold text-gray-900 dark:text-white mb-5">
          Personal Information
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <li className="flex justify-between gap-x-40 py-5">
              <div className="flex min-w-0 gap-x-20">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    First Name
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    First Name
                  </p>
                </div>
              </div>
              <div className="">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Last Name
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Last Name
                  </p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-40 py-5">
              <div className="flex min-w-0 gap-x-20">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Email
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Email
                  </p>
                </div>
              </div>
              <div className="">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Phone
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Phone
                  </p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-40 py-5">
              <div className="flex min-w-0 gap-x-20">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Bio
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Civil Engineer
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col ">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Gender & Date of Birth
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Female 24/04/2000
                  </p>
                </div>
              </div>
            </li>
          </div>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 flex items-center gap-2 text-md font-medium text-blue-300 focus:outline-none  rounded-full border border-blue-300   focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <VscEdit /> Edit
          </button>
        </div>
      </div>

      <div className="mb-5 mt-6">
        <h3 className="text-md font-bold text-gray-900 dark:text-white mb-5">
          Address
        </h3>
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <li className="flex justify-between gap-x-40 py-5">
              <div className="flex min-w-0 gap-x-20">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Country
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    First Name
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    City/State
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Last Name
                  </p>
                </div>
              </div>
            </li>
            <li className="flex justify-between gap-x-40 py-5">
              <div className="flex min-w-0 gap-x-20">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Postal Code
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Email
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="min-w-0 flex-auto">
                  <p className="text-md font-normal leading-6 text-blue-400">
                    Tax ID
                  </p>
                  <p className="mt-1 truncate text-md leading-5 font-semibold text-gray-800">
                    Phone
                  </p>
                </div>
              </div>
            </li>
          </div>
          <button
            type="button"
            className="py-2.5 px-5 me-2 mb-2 flex items-center gap-2 text-md font-medium text-blue-300 focus:outline-none  rounded-full border border-blue-300   focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            <VscEdit /> Edit
          </button>
        </div>
      </div>
    </>
  );
};

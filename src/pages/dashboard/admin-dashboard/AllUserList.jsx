import React, { useState } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import SearchBar from "../../../components/dashboard/common/SearchBar";
import TopHeader from "../../../components/dashboard/user-dashboard/TopHeader";

const AllUserList = () => {
  const numberOfRows = 8;
  const [popoverVisible, setPopoverVisible] = useState(false);
  const [popoverPosition, setPopoverPosition] = useState({ x: 0, y: 0 });

  const handlePopover = (e) => {
    setPopoverVisible(true);
    setPopoverPosition({ x: e.clientX, y: e.clientY });
  };

  const closePopover = () => {
    setPopoverVisible(false);
  };

  const renderTableRows = () => {
    let rows = [];

    for (let i = 0; i < numberOfRows; i++) {
      rows.push(
        <tr
          key={i}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="px-6 py-4">
            <div className="flex items-center gap-2">
              <img
                className="w-10 h-10 rounded-full"
                src="https://s3-alpha-sig.figma.com/img/2588/b21c/8c64a52772784a3c354fa08294114e35?Expires=1712534400&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=GLgh7xoOHGuZQqjSi6~ephVHVq0Nct1SGaSm98okWUsYMibLTnuPuqFErs2BLncQbG0KoGf48EooGt2qsalGufSTcYQQN8vGAS6efDJaJyRJlrVJddcgWjsEi57HZvPzPq9jZl-lUApAnDkTyi8JoIuCzOY-pQNhl30o1LC2iyUwg93UyfsWaeJ6-Lj0dTmHI87c2s17k6emFbB3FFMeMobOiNYpiEduyFtzc3UxUQQfBgoeiTcwHT1FBwpNaasEjkCe4wQbYlFMIhkIzj0Yl8jveBJbup9AIGKh~bk3cYcze4E7y~QXA~91jMDPgqCvY9NHfBfDIQWGINsQMerJ4w__"
                alt="Rounded avatar"
              />
              <span className="text-gray-900">Ebere Moses</span>
            </div>
          </td>
          <td className="px-6 py-4">Copper</td>
          <td className="px-6 py-4">Software Developer</td>
          <td className="px-6 py-4">eberemoses56677@gmail.com</td>
          <td className="px-6 py-4">
            <div className="bg-green-100 flex items-center gap-2 text-green-800 text-xs font-bold me-2 px-2.5 py-2.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span className="w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              Active
            </div>
          </td>
          <td className="px-6 py-4">
            <HiDotsVertical
              className="cursor-pointer"
              onClick={handlePopover}
            />
          </td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <>
      <TopHeader />
      <SearchBar />
      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Plan
              </th>
              <th scope="col" className="px-6 py-3">
                Occupation
              </th>
              <th scope="col" className="px-6 py-3">
                Email Address
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
              <th scope="col" className="px-6 py-3"></th>
            </tr>
          </thead>
          <tbody>
            {/* Render the table rows */}
            {renderTableRows()}
          </tbody>
        </table>
        {popoverVisible && (
          <div
            className="absolute bg-white border rounded shadow-md p-2"
            style={{
              top: popoverPosition.y + 10,
              left: popoverPosition.x,
            }}
            onClick={closePopover}
          >
            <div>View</div>
            <div>Delete</div>
          </div>
        )}
        <div className="flex justify-between bg-white w-full p-4 px-10">
          <div className="flex items-center gap-2">
            <FaArrowLeftLong /> Previous
          </div>
          <nav aria-label="Page navigation example">
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  className="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Next</span>
                  <svg
                    className="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex items-center gap-2">
            Next
            <FaArrowRightLong />
          </div>
        </div>
      </div>
    </>
  );
};

export default AllUserList;

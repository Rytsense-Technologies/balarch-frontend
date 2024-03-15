import React from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { IoAddOutline } from "react-icons/io5";
import SearchBar from "../../../components/dashboard/common/SearchBar";

const AllUserList = () => {
  // Create an array to hold the number of rows you want to repeat
  const numberOfRows = 8;

  // Function to generate table rows
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
                src="https://s3-alpha-sig.figma.com/img/14a8/d7fd/907b72a960031fcfee51a21cc6450fe2?Expires=1711324800&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fnSofUrT7LvxreiFW2dkYFQNZeXKEmw2cDANLqsHALTkNt2dxnwQzqcDM1YrwA03rHU1EQ-ZVQcR7QAF1cvHAGOXicKQlJxCJLjId5uXP8~S7jVW8ZWVHDhG462-1eEKHj0dX~QsL~GVZgJeNDi4XPVn41vf-H58Mqs853jRNEm8CXkpvHzdmGRvXzpDIafdX2iNCIVEQ3K6AgdYWiabmKGuKc15cQ3U12g9I~iLx7l4Rw220ILZw2xq3ua-VV4CVwYftdqMpMQB~lIHBAlUtt63YrCofhw-NUVPRRVnhMLhWDjTdMGrGzBqj0Z35~BqyQ~6ueTV4-X4~YFoczFDHQ__"
                alt="Rounded avatar"
              />
              <span className="text-gray-900">Ebere Moses</span>
            </div>
          </td>
          <td className="px-6 py-4">Copper</td>
          <td className="px-6 py-4">+234 5656 5555</td>
          <td className="px-6 py-4">eberemoses56677@gmail.com</td>
          <td className="px-6 py-4">
            <span className="bg-green-100 text-green-800 text-xs font-bold me-2 px-2.5 py-2.5 rounded-full dark:bg-green-900 dark:text-green-300">
              Green
            </span>
          </td>
          <td className="px-6 py-4">
            <HiDotsVertical />
          </td>
        </tr>
      );
    }

    return rows;
  };

  return (
    <>
      <div className="float-right">
        <button
          type="button"
          className=" flex items-center gap-2 bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
        >
          <IoAddOutline /> Add User
        </button>
      </div>
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
                Phone Number
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
        <div className="flex justify-between bg-white w-full p-4 px-10">
          <div className="flex items-center gap-2">
            <FaArrowLeftLong /> Previous
          </div>
          <nav aria-label="Page navigation example">
            <ul class="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Previous</span>
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  1
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  2
                </a>
              </li>
              <li>
                <a
                  href="#"
                  aria-current="page"
                  class="z-10 flex items-center justify-center px-3 h-8 leading-tight text-blue-600 border border-blue-300 bg-blue-50 hover:bg-blue-100 hover:text-blue-700 dark:border-gray-700 dark:bg-gray-700 dark:text-white"
                >
                  3
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  4
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  5
                </a>
              </li>
              <li>
                <a
                  href="#"
                  class="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span class="sr-only">Next</span>
                  <svg
                    class="w-2.5 h-2.5 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
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

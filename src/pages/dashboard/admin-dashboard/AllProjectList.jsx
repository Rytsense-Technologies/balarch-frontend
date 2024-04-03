import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from "react-router-dom";
import SearchBar from "../../../components/dashboard/common/SearchBar";
import TopHeader from "../../../components/dashboard/user-dashboard/TopHeader";

const AllProjectList = () => {
  const navigate = useNavigate();

  const numberOfRows = 8;

  const renderTableRows = () => {
    let rows = [];

    for (let i = 0; i < numberOfRows; i++) {
      rows.push(
        <tr
          key={i}
          className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
        >
          <td className="px-6 py-4">XYZ</td>
          <td className="px-6 py-4">USA</td>
          <td className="px-6 py-4">XXX</td>

          <td className="px-6 py-4 flex items-center gap-4">
            <div className="bg-blue-100 flex items-center gap-2 text-blue-400 text-xs font-bold me-2 px-2.5 py-2.5 rounded-full dark:bg-green-900 dark:text-green-300">
              <span className="w-3.5 h-3.5 bg-blue-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
              Approved
            </div>
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
      <TopHeader />
      <SearchBar />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
              <th scope="col" className="px-6 py-3">
                Category
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
            <ul className="flex items-center -space-x-px h-8 text-sm">
              <li>
                <a
                  href="#"
                  className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"
                >
                  <span className="sr-only">Previous</span>
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

export default AllProjectList;

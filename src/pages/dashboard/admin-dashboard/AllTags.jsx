import React from "react";
import SearchBar from "../../../components/dashboard/common/SearchBar";
import TopHeader from "../../../components/dashboard/user-dashboard/TopHeader";

const AllTags = () => {
  return (
    <>
      <TopHeader />
      <SearchBar />

      <div className="relative overflow-x-auto shadow-md sm:rounded-lg bg-gray-50">
        <div className="p-2 px-10 mb-10 text-sm">
          <h1 className="font-bold">Recently used:</h1>
          <div className="flex items-center gap-2">
            <p className="text-blue-300 font-medium">#designer</p>
            <p>#designer</p>
            <p>#designer</p>
            <p>#designer</p>
            <p>#designer</p>
            <p>#designer</p>
            <p>#designer</p>
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500  dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase  dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Product name
              </th>
              <th scope="col" className="px-6 py-3">
                Tags
              </th>
              <th scope="col" className="px-6 py-3">
                Category
              </th>
              <th scope="col" className="px-6 py-3">
                Location
              </th>
            </tr>
          </thead>
          <tbody>
            {[...Array(10)].map((_, index) => (
              <tr
                key={index}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <th className="px-6 py-4  whitespace-nowrap dark:text-white">
                  XYZ project
                </th>
                <td className="px-6 py-4 text-blue-300 font-medium">
                  #designer
                </td>
                <td className="px-6 py-4">xxxxxxxx</td>
                <td className="px-6 py-4">USA</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default AllTags;

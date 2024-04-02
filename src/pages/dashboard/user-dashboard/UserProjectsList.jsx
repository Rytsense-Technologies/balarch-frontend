import { IoMdAdd } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { RiDeleteBinLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";
import TopHeader from "../../../components/dashboard/user-dashboard/TopHeader";

const UserProjectsList = () => {
  const navigate = useNavigate();
  return (
    <div>
      <TopHeader tabName={"Projects"} />
      <div className="float-right mb-5">
        <button
          type="button"
          className="flex items-center gap-2 text-gray-900 bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
          onClick={() => navigate("/add-new-project")}
        >
          <IoMdAdd /> Add New Project
        </button>
      </div>

      <div className="mt-10">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Preview
              </th>
              <th scope="col" className="px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                School Project
              </th>
              <td className="px-6 py-4">
                <img
                  src="https://images.adsttc.com/media/images/5b1a/10ab/f197/cc7c/8200/021b/newsletter/image4.jpg?1528434849"
                  className="h-32 w-32 mx-auto"
                />
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <MdEdit className="text-blue-400 text-lg" /> Edit
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <RiDeleteBinLine className="text-red-500 text-lg" /> Delete
                  </button>
                </div>
              </td>
            </tr>

            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                School Project
              </th>
              <td className="px-6 py-4">
                <img
                  src="https://images.adsttc.com/media/images/5b1a/10ab/f197/cc7c/8200/021b/newsletter/image4.jpg?1528434849"
                  className="h-32 w-32 mx-auto"
                />
              </td>

              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-4">
                  <button
                    type="button"
                    className="flex items-center gap-2 text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <MdEdit className="text-blue-400 text-lg" /> Edit
                  </button>
                  <button
                    type="button"
                    className="flex items-center gap-2 text-gray-900 bg-gray-200 border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-full text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700"
                  >
                    <RiDeleteBinLine className="text-red-500 text-lg" /> Delete
                  </button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserProjectsList;

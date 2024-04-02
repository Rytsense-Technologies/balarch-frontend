import TopHeader from "../../../components/dashboard/user-dashboard/TopHeader";

const UserCollaborators = () => {
  return (
    <div>
      <TopHeader tabName={"Requested Collaborations"} />
      <div className="mt-10">
        <table className="w-full text-sm text-center rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Project Name
              </th>
              <th scope="col" className="px-6 py-3">
                Type of Collaboration
              </th>
              <th scope="col" className="px-6 py-3">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white dark:bg-gray-800">
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                <div className="flex flex-col items-center gap-2">
                  <button
                    type="button"
                    className="text-gray-900 bg-[#F7BE38] hover:bg-[#F7BE38]/90 focus:ring-4 focus:outline-none focus:ring-[#F7BE38]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#F7BE38]/50 me-2 mb-2"
                  >
                    School Project
                  </button>
                  <p>User1234 requested for Approval</p>
                </div>
              </th>
              <td className="px-6 py-4">Engineering/ Electrical Engineering</td>

              <td className="px-6 py-4">
                <div className="flex flex-col items-center gap-2">
                  <p>21:50:32, Mar 07,2024</p>
                  <div className="flex items-center gap-4">
                    <p className="text-red-500">Reject</p>
                    <button
                      type="button"
                      className="px-3 py-2 text-xs text-white bg-gradient-to-r from-cyan-200 via-cyan-300 to-cyan-400 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg  text-center me-2 mb-2"
                    >
                      Approval
                    </button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserCollaborators;

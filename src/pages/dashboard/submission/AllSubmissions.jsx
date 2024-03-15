export default function AllSubmissions() {
  return (
    <>
      <div className="flex items-center gap-4">
        <div className="inline-flex rounded-md shadow-sm mb-10" role="group">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-gray-900 bg-transparent border border-gray-900 rounded-s-lg hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            All Notifications
          </button>
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white  bg-gray-500  border-t border-b border-gray-900 hover:bg-gray-900 hover:text-white focus:z-10 focus:ring-2 focus:ring-gray-500 focus:bg-gray-900 focus:text-white dark:border-white dark:text-white dark:hover:text-white dark:hover:bg-gray-700 dark:focus:bg-gray-700"
          >
            Requests
          </button>
        </div>
      </div>

      <div>
        {[...Array(10)].map((_, index) => (
          <ul key={index} role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 px-5 py-5  bg-white p-2 border-b border-gray-600 rounded-md">
              <div className="min-w-0 flex-auto">
                <button
                  type="button"
                  className="focus:outline-none text-white bg-orange-300 hover:bg-yellow-500 focus:ring-4 focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-1.5 me-2 mb-2 dark:focus:ring-yellow-900"
                >
                  xxxxxxxx
                </button>
                <p className="mt-1 truncate text-sm leading-5 text-gray-700">
                  User1234 Requested for Approval
                </p>
              </div>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  21:50:32 , Mar 07,2024
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <span className="text-red-600">Reject</span>
                  <span className="bg-blue-500 text-white text-xs font-bold me-2 px-2.5 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Approval
                  </span>
                </div>
              </div>
            </li>
          </ul>
        ))}
      </div>
    </>
  );
}

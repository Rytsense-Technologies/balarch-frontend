export default function ScamReport() {
  return (
    <>
      <div>
        <div className="flex justify-between gap-x-6 px-5 py-5  bg-white p-2 mb-2 rounded-md">
          <h1>Name</h1>
          <h1>Report</h1>
          <h1>Mark As</h1>
        </div>
        {[...Array(10)].map((_, index) => (
          <ul key={index} role="list" className="divide-y divide-gray-100">
            <li className="flex justify-between gap-x-6 px-5 py-5  bg-white p-2 border-b border-gray-600 rounded-md">
              <p className="mt-1 truncate text-sm leading-5 text-gray-700">
                User1234
              </p>

              <button
                type="button"
                className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-red-800 focus:outline-none bg-white rounded-full border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
              >
                Report content
              </button>

              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900">
                  21:50:32 , Mar 07,2024
                </p>

                <div className="flex items-center gap-4 mt-2">
                  <span className="text-red-600">Scam</span>
                  <span className="bg-blue-500 text-white text-xs font-bold me-2 px-2.5 py-1.5 rounded-full dark:bg-green-900 dark:text-green-300">
                    Declined
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

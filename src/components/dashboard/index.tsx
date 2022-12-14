const Dashboard = () => {
  return (
    <>
      <main className="p-6 space-y-6 sm:p-10">
        <div className="flex flex-col justify-between space-y-6 md:space-y-0 md:flex-row">
          <div className="mr-6">
            <h1 className="mb-2 text-4xl font-semibold">Dashboard</h1>
            <h2 className="text-gray-600 ml-0.5">Mobile UX/UI Design course</h2>
          </div>
          <div className="flex flex-wrap items-start justify-end -mb-3">
            <button className="inline-flex px-5 py-3 mb-3 text-purple-600 border border-purple-600 rounded-md hover:text-purple-700 focus:text-purple-700 hover:bg-purple-100 focus:bg-purple-100">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 h-5 w-5 -ml-1 mt-0.5 mr-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
              Manage dashboard
            </button>
            <button className="inline-flex px-5 py-3 mb-3 ml-6 text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:bg-purple-700">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="flex-shrink-0 w-6 h-6 mr-2 -ml-1 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              Create new dashboard
            </button>
          </div>
        </div>
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center p-8 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-purple-600 bg-purple-100 rounded-full">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">62</span>
              <span className="block text-gray-500">Students</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-green-600 bg-green-100 rounded-full">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">6.8</span>
              <span className="block text-gray-500">Average mark</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-red-600 bg-red-100 rounded-full">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"
                />
              </svg>
            </div>
            <div>
              <span className="inline-block text-2xl font-bold">9</span>
              <span className="inline-block text-xl font-semibold text-gray-500">
                (14%)
              </span>
              <span className="block text-gray-500">
                Underperforming students
              </span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-blue-600 bg-blue-100 rounded-full">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">83%</span>
              <span className="block text-gray-500">Finished homeworks</span>
            </div>
          </div>
        </section>
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 xl:grid-rows-3 xl:grid-flow-col">
          <div className="flex flex-col bg-white rounded-lg shadow md:col-span-2 md:row-span-2">
            <div className="px-6 py-5 font-semibold border-b border-gray-100">
              The number of applied and left students per month
            </div>
            <div className="flex-grow p-4">
              <div className="flex items-center justify-center h-full px-4 py-16 text-3xl font-semibold text-gray-400 bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                Chart
              </div>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-yellow-600 bg-yellow-100 rounded-full">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path fill="#fff" d="M12 14l9-5-9-5-9 5 9 5z" />
                <path
                  fill="#fff"
                  d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">25</span>
              <span className="block text-gray-500">Lections left</span>
            </div>
          </div>
          <div className="flex items-center p-8 bg-white rounded-lg shadow">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-16 h-16 mr-6 text-teal-600 bg-teal-100 rounded-full">
              <svg
                aria-hidden="true"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <div>
              <span className="block text-2xl font-bold">139</span>
              <span className="block text-gray-500">
                Hours spent on lections
              </span>
            </div>
          </div>

          <div className="row-span-3 bg-white rounded-lg shadow">
            <div className="flex items-center justify-between px-6 py-5 font-semibold border-b border-gray-100">
              <span>Students by average mark</span>
              <button
                type="button"
                className="inline-flex justify-center px-1 -mr-1 text-sm font-medium leading-5 text-gray-500 bg-white rounded-md hover:text-gray-600"
                id="options-menu"
                aria-haspopup="true"
                aria-expanded="true"
              >
                Descending
                <svg
                  className="w-5 h-5 ml-1 -mr-1"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {/* Refer here for full dropdown menu code: https://tailwindui.com/components/application-ui/elements/dropdowns */}
            </div>
            <div className="overflow-y-auto" style={{ maxHeight: "24rem" }}>
              <ul className="p-6 space-y-6">
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/women/82.jpg"
                      alt="Annette Watson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Annette Watson</span>
                  <span className="ml-auto font-semibold">9.3</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/men/81.jpg"
                      alt="Calvin Steward profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Calvin Steward</span>
                  <span className="ml-auto font-semibold">8.9</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/men/80.jpg"
                      alt="Ralph Richards profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Ralph Richards</span>
                  <span className="ml-auto font-semibold">8.7</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/men/79.jpg"
                      alt="Bernard Murphy profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Bernard Murphy</span>
                  <span className="ml-auto font-semibold">8.2</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/women/78.jpg"
                      alt="Arlene Robertson profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Arlene Robertson</span>
                  <span className="ml-auto font-semibold">8.2</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/women/77.jpg"
                      alt="Jane Lane profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Jane Lane</span>
                  <span className="ml-auto font-semibold">8.1</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/men/76.jpg"
                      alt="Pat Mckinney profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Pat Mckinney</span>
                  <span className="ml-auto font-semibold">7.9</span>
                </li>
                <li className="flex items-center">
                  <div className="w-10 h-10 mr-3 overflow-hidden bg-gray-100 rounded-full">
                    <img
                      src="https://randomuser.me/api/portraits/men/75.jpg"
                      alt="Norman Walters profile picture"
                    />
                  </div>
                  <span className="text-gray-600">Norman Walters</span>
                  <span className="ml-auto font-semibold">7.7</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col row-span-3 bg-white rounded-lg shadow">
            <div className="px-6 py-5 font-semibold border-b border-gray-100">
              Students by type of studying
            </div>
            <div className="flex-grow p-4">
              <div className="flex items-center justify-center h-full px-4 py-24 text-3xl font-semibold text-gray-400 bg-gray-100 border-2 border-gray-200 border-dashed rounded-md">
                Chart
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Dashboard;

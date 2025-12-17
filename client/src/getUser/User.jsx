import React from "react";
// You likely don't need "./User.css" anymore if you use Tailwind
// import "./User.css";

function User() {
  return (
    <div className="flex justify-center mt-10 px-4">
      {/* Container for the table with shadow and rounded corners */}
      <div className="w-full max-w-5xl overflow-hidden rounded-lg shadow-lg border border-gray-200">
        <button className="bg-blue-500 rounded-lg text-white cursor-pointer transform transition-all transfom-de hover:bg-blue-400 p-2 m-2">Add User</button>

        <table className="w-full text-left border-collapse bg-white">
          {/* Table Header */}
          <thead className="bg-gray-800 text-white">
            <tr>
              <th
                scope="col"
                className="py-4 px-6 text-sm font-semibold uppercase tracking-wider"
              >
                Sr.No
              </th>
              <th
                scope="col"
                className="py-4 px-6 text-sm font-semibold uppercase tracking-wider"
              >
                Name
              </th>
              <th
                scope="col"
                className="py-4 px-6 text-sm font-semibold uppercase tracking-wider"
              >
                Email
              </th>
              <th
                scope="col"
                className="py-4 px-6 text-sm font-semibold uppercase tracking-wider"
              >
                Address
              </th>
              <th
                scope="col"
                className="py-4 px-6 text-sm font-semibold uppercase tracking-wider text-center"
              >
                Actions
              </th>
            </tr>
          </thead>

          {/* Table Body */}
          <tbody className="text-gray-700">
            {/* Row 1 */}
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition duration-150">
              <td className="py-4 px-6 font-medium">1</td>
              <td className="py-4 px-6">John</td>
              <td className="py-4 px-6">John@gmail.com</td>
              <td className="py-4 px-6">Mars</td>
              <td className="py-4 px-6 text-center space-x-2">
                {/* Update Button */}
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm">
                  Update
                </button>

                {/* Delete Button */}
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm">
                  Delete
                </button>
              </td>
            </tr>

            {/* Example of a second row to see the effect */}
            <tr className="border-b border-gray-200 hover:bg-gray-50 transition duration-150">
              <td className="py-4 px-6 font-medium">2</td>
              <td className="py-4 px-6">Ali</td>
              <td className="py-4 px-6">ali@minhaj.edu.pk</td>
              <td className="py-4 px-6">Lahore</td>
              <td className="py-4 px-6 text-center space-x-2">
                <button className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm">
                  Update
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm">
                  Delete
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;

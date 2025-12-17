import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
// You likely don't need "./User.css" anymore if you use Tailwind
// import "./User.css";

function User() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/users");
        setUsers(response.data);
      } catch (error) {
        console.log("Error while fetching the data: ", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="flex justify-center mt-10 px-4">
      {/* Container for the table with shadow and rounded corners */}
      <div className="w-full max-w-5xl overflow-hidden rounded-lg shadow-lg border border-gray-200">
        <div className="h-14 p-auto content-center">
          <Link
            to="/add"
            className="bg-blue-500 rounded-lg h-6 text-white cursor-pointer transform transition-all transfom-de hover:bg-blue-400 p-2 m-2"
          >
            Add User
          </Link>
        </div>

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
            {users.map((user, index) => {
              return (
                // FIX: Add the key here!
                <tr
                  key={user._id}
                  className="border-b border-gray-200 hover:bg-gray-50 transition duration-150"
                >
                  <td className="py-4 px-6 font-medium">{index + 1}</td>
                  <td className="py-4 px-6">{user.name}</td>
                  <td className="py-4 px-6">{user.email}</td>
                  <td className="py-4 px-6">{user.address}</td>
                  <td className="py-4 px-6 text-center space-x-2">
                    {/* Update Button */}
                    <Link
                      to={`/update/` + user._id}
                      className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm"
                    >
                      Update
                    </Link>

                    {/* Delete Button */}
                    <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm">
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default User;

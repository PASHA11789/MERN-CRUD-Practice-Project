import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

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

  const deleteUser = async (userId) => {
    try {
      const response = await axios.delete(
        `http://localhost:8000/api/delete/user/${userId}`
      );

      // Remove the deleted user from the state immediately
      setUsers((prevUsers) => prevUsers.filter((user) => user._id !== userId));

      toast.success(response.data.message, { position: "top-right" });
    } catch (error) {
      console.log("Error deleting user:", error);
      toast.error("Failed to delete user", { position: "top-right" });
    }
  };

  return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-5xl overflow-hidden rounded-lg shadow-lg border border-gray-200">
        {/* ADD USER BUTTON */}
        <Link
          to="/add"
          className="inline-block bg-blue-500 rounded-lg text-white cursor-pointer hover:bg-blue-400 px-4 py-2 m-4 font-medium transition duration-150"
        >
          Add User
        </Link>
        {users.length === 0 ? (
          <div className="w-full p-2.5 bg-gray-700 flex flex-col justify-center content-center align-center ">
            <h3 className="text-orange-300 font-bold text-4xl">No data to display</h3>
            <p className="text-white text-2xl"> Add users to continue</p>
          </div>
        ) : (
          <table className="w-full text-left border-collapse bg-white">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-4 px-6 text-sm font-semibold uppercase">
                  Sr.No
                </th>
                <th className="py-4 px-6 text-sm font-semibold uppercase">
                  Name
                </th>
                <th className="py-4 px-6 text-sm font-semibold uppercase">
                  Email
                </th>
                <th className="py-4 px-6 text-sm font-semibold uppercase">
                  Address
                </th>
                <th className="py-4 px-6 text-sm font-semibold uppercase text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {users.map((user, index) => {
                return (
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
                        className="inline-block bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm"
                      >
                        Update
                      </Link>

                      {/* Delete Button */}
                      <button
                        onClick={() => deleteUser(user._id)} // 3. Connect the function here
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm transition shadow-sm"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}

export default User;

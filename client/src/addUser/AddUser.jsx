import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom"; // 1. Added useNavigate
import toast from "react-hot-toast";

function AddUser() {
  const users = {
    name: "",
    email: "",
    address: "",
  };

  const [user, setUser] = useState(users);
  const navigate = useNavigate(); // 2. Initialize the hook

  const inputHandler = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const submitForm = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8000/api/user", user);

      toast.success(response.data.message, { position: "top-right" });
      navigate("/");
    } catch (error) {
      console.log("Error creating user:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8 border border-gray-200">
        {/* Header Section */}
        <div className="flex items-center mb-6">
          <Link
            to="/"
            className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition duration-150 shadow-sm"
          >
            ← Back
          </Link>
          <h3 className="grow text-2xl font-bold text-center text-gray-800 pr-16">
            Add New User
          </h3>
        </div>

        {/* Form Section */}
        <form className="space-y-4" onSubmit={submitForm}>
          {/* Name Field */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter your name"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Email Field */}
          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter your email"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Address Field */}
          <div>
            <label
              htmlFor="address"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Address:
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={inputHandler}
              autoComplete="off"
              placeholder="Enter your address"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition duration-150"
            />
          </div>

          {/* Button Group */}
          <div className="pt-4 flex gap-4">
            <button
              type="submit"
              className="w-full bg-blue-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150"
            >
              Submit
            </button>
            <Link
              to="/"
              className="w-full bg-gray-500 text-white font-semibold py-2 px-4 rounded-md text-center hover:bg-gray-600 focus:outline-none transition duration-150"
            >
              Cancel
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddUser;

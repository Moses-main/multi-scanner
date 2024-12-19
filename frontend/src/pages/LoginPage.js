// src/pages/LoginPage.js
import React from "react";

const LoginPage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h2 className="text-3xl font-bold mb-5">Login</h2>
      <form className="bg-gray-900 p-5 rounded shadow-lg w-80 space-y-4">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 rounded bg-gray-700 focus:ring focus:ring-blue-400"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 rounded bg-gray-700 focus:ring focus:ring-blue-400"
        />
        <button
          type="submit"
          className="w-full py-2 rounded bg-blue-500 hover:bg-blue-600 transition"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;

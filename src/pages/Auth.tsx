import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BackendUrl } from "../../constants";

export const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`${BackendUrl}/api/v1/signin/`, {
        username, password
      });
      localStorage.setItem("token", response.data.token);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      alert("Login failed. Please check your credentials.");
    }
  };

  const signup = async (event) => {
    event.preventDefault();
    try {
      await axios.post(`${BackendUrl}/api/v1/signup/`, {
        username, password
      });
      alert("Signup successful");
    } catch (error) {
      console.error("Signup failed:", error);
      alert("Signup failed. Please try again.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center w-full dark:bg-gray-950">
      <div className="bg-white dark:bg-gray-900 shadow-md rounded-lg px-6 py-4 md:px-8 md:py-6 lg:px-10 lg:py-8 max-w-sm md:max-w-md">
        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-center mb-3 md:mb-4 dark:text-gray-200">
          Welcome to Second Brain
        </h1>
        <form>
          <div className="mb-3 md:mb-4">
            <label
              className="block text-xs md:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2"
            >
              Username
            </label>
            <input
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              className="shadow-sm rounded-md w-full px-2 py-1 md:px-3 md:py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your username"
              required
            />
          </div>
          <div className="mb-3 md:mb-4">
            <label
              htmlFor="password"
              className="block text-xs md:text-sm lg:text-base font-medium text-gray-700 dark:text-gray-300 mb-1 md:mb-2"
            >
              Password
            </label>
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-sm rounded-md w-full px-2 py-1 md:px-3 md:py-2 border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="Enter your password"
              required
            />
          </div>
          <div className="flex justify-evenly">
            <button
              onClick={login}
              type="button"
              className="w-1/3 flex justify-center py-1 md:py-2 px-3 md:px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Login
            </button>
            <button
              onClick={signup}
              type="button"
              className="w-1/3 flex justify-center py-1 md:py-2 px-3 md:px-4 border border-transparent rounded-md shadow-sm text-xs md:text-sm font-medium text-indigo-600 bg-white hover:bg-slate-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Signup
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

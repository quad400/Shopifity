import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-20 justify-center flex flex-1 items-center space-x-2 px-16">
        <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-4 w-2/5">
          <h4 className="text-md font-semibold mb-3 text-gray-500">
            Login
          </h4>

          <div className="w-full">
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
              required
            />
          </div>

          <button className="text-xs text-white font-medium bg-primary mt-3 px-5 py-2 rounded-2xl">
            Login
          </button>

          <p className="text-xs text-gray-400 font-medium mt-4">Don't have an account? <Link to="/register" className="text-tertiary">Create Account</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;

import { useFormik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string().email("Invalid email address").required("Required"),
      password: Yup.string()
        .min(6, "Password must be more than 6 characters")
        .required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-20 justify-center flex flex-1 items-center space-x-2 px-16">
        <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-4 w-2/5">
          <h4 className="text-md font-semibold mb-3 text-gray-500">Login</h4>
          <form onSubmit={formik.handleSubmit}>
            <div className="w-full">
              {formik.touched.email && formik.errors.email ? (
                <div className="text-xs text-red-700 mb-1">
                  {formik.errors.email}
                </div>
              ) : null}
              <input
                type="email"
                name="email"
                placeholder="Email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.email}
                className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                required
              />
              {formik.touched.password && formik.errors.password ? (
                <div className="text-xs text-red-700 mb-1">
                  {formik.errors.password}
                </div>
              ) : null}
              <input
                type="password"
                name="password"
                placeholder="Password"
                className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                required
              />
            </div>

            <div className="flex justify-center items-center">
              <button className="text-xs text-white font-medium bg-primary mt-3 px-5 py-2 rounded-2xl">
                Login
              </button>
            </div>
          </form>
          <p className="text-xs text-gray-400 font-medium mt-4">
            Don't have an account?{" "}
            <Link to="/register" className="text-tertiary">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;

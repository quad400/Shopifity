import { Formik } from "formik";
import React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import { message } from "antd";
import { useDispatch } from "react-redux";
import { LoginUser, fetchUser } from "../features/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const handleSubmit = (data) => {
    LoginUser(data)
      .then((res) => {
        console.log(res.status)
        if (res.status === 200) {
          message.success({ content: "Successfully logged in" });
          return;
        } else {
          message.error({ content: "Invalid user details" });
          return;
        }
      })
      .catch((error) => {
        message.error({ content: "Invalid user details" });
      });
    // dispatch(fetchUser());
  };

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-20 justify-center flex flex-1 items-center space-x-2 px-16">
        <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-4 w-2/5">
          <h4 className="text-md font-semibold mb-3 text-gray-500">Login</h4>

          <Formik
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
              password: Yup.string()
                .min(6, "Password must be more than 6 characters")
                .required("Required"),
            })}
            onSubmit={handleSubmit}
            initialValues={{ email: "", password: "" }}
          >
            {(formik) => (
              <form onSubmit={formik.handleSubmit}>
                {/* {console.log(formik)} */}
                <div className="w-full">
                  {formik.touched.email && formik.errors.email ? (
                    <div className="text-xs text-red-700 mb-1">
                      {formik.errors.email}
                    </div>
                  ) : null}
                  <input
                    type="email"
                    name="email"
                    id="email"
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
                    id="password"
                    placeholder="Password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                    required
                  />
                </div>
                <div className="w-full">

                <Link to="/forgot-password" className="text-end flex justify-end text-tertiary underline text-xs">
                  forgot password
                </Link>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    onSubmit={formik.handleSubmit}
                    className="text-xs text-white font-medium bg-primary mt-3 px-5 py-2 rounded-2xl"
                  >
                    Login
                  </button>
                </div>
              </form>
            )}
          </Formik>
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

import { Formik } from "formik";
import React from "react";
import * as Yup from "yup";
import { message } from "antd";
import { ForgotPasswordRequest } from "../features/userSlice";

const ForgotPassword = () => {
  const handleSubmit = (data) => {
    ForgotPasswordRequest(data)
      // .then((res) => {
      //   console.log(res)
      //   if (res.status === 200) {
      //     message.success({ content: "Email has been sent to this account" });
      //     return;
      //   }
      // })
      // .catch((error) => {
      //   message.error({ content: error.message });
      // });
  };

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-20 justify-center flex flex-1 items-center space-x-2 px-16">
        <div className="bg-white flex flex-col justify-center items-center shadow-lg rounded-md p-4 w-2/5">
          <h4 className="text-md font-semibold mb-3 text-gray-500">Forgot Password</h4>

          <Formik
            validationSchema={Yup.object({
              email: Yup.string()
                .email("Invalid email address")
                .required("Required"),
            })}
            onSubmit={handleSubmit}
            initialValues={{ email: ""}}
          >
            {(formik) => (
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
                    id="email"
                    placeholder="Email"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    value={formik.values.email}
                    className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                    required
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    type="submit"
                    onSubmit={formik.handleSubmit}
                    className="text-xs text-white font-medium bg-primary mt-3 px-5 py-2 rounded-2xl"
                  >
                    Retrieve Password
                  </button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;

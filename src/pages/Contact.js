import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaHome, FaEnvelope } from "react-icons/fa";
import { IoIosCall } from "react-icons/io";
import { MdEventAvailable } from "react-icons/md";

const Contact = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phoneNumber: "",
      comment: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
      phoneNumber: Yup.number()
        .min(15, "Phone number must not be more than 15 characters")
        .required("Required"),
      comment: Yup.string().required("Required"),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
        <img
          src={require("../assets/images/location.jpg")}
          alt="location"
          className="w-full h-[350px]"
        />

        <div className="shadow-lg mt-5 grid grid-cols-2 gap-6 p-3 bg-white rounded-md">
          <div className="">
            <h4 className="text-lg font-bold text-black mb-3">Contact</h4>
            <form action="" method="post" onSubmit={formik.handleSubmit}>
              <div className="w-full">
                {formik.touched.name && formik.errors.name ? (
                  <div className="text-xs text-red-700 mb-1">
                    {formik.errors.name}
                  </div>
                ) : null}
                <input
                  type="text"
                  name="name"
                  placeholder="Name*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                  required
                />
                {formik.touched.email && formik.errors.email ? (
                  <div className="text-xs text-red-700 mb-1">
                    {formik.errors.email}
                  </div>
                ) : null}
                <input
                  type="email"
                  name="email"
                  placeholder="Email*"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                  required
                />
                {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                  <div className="text-xs text-red-700 mb-1">
                    {formik.errors.phoneNumber}
                  </div>
                ) : null}
                <input
                  type="text"
                  name="phoneNumber"
                  placeholder="Phone Number"
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  value={formik.values.phoneNumber}
                  className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                  required
                />
                {formik.touched.comment && formik.errors.comment ? (
                  <div className="text-xs text-red-700 mb-1">
                    {formik.errors.comment}
                  </div>
                ) : null}
                <textarea
                  type="text"
                  name="comment"
                  placeholder="Comment"
                  value={formik.values.comment}
                  className="text-sm font-normal text-gray-500 p-2 bg-gray-100 w-full rounded-md outline-none my-2"
                  required
                />
              </div>
              <button
                type="submit"
                className="text-xs hover:bg-tertiary hover:text-black transition-all ease-in-out delay-75 text-white font-medium bg-primary px-3 py-2 rounded-2xl uppercase"
              >
                Send
              </button>{" "}
            </form>
          </div>
          <div className="">
            <h4 className="text-lg font-bold text-black mb-3">
              Get In Touch With Us
            </h4>

            <ul className="space-y-3">
              <li className="space-x-3 flex justify-start items-center">
                <FaHome color="gray" />
                <p className="text-xs text-gray-500 font-medium">
                  Ayekale Otaefun Osoggbo Osun State
                </p>
              </li>
              <li className="space-x-3 flex justify-start items-center">
                <IoIosCall color="gray" />
                <p className="text-xs text-gray-500 font-medium">
                  (+234)81-3959-6749
                </p>
              </li>
              <li className="space-x-3 flex justify-start items-center">
                <FaEnvelope color="gray" />
                <p className="text-xs text-gray-500 font-medium">
                  adedijiabdulquadri@gmail.com
                </p>
              </li>
              <li className="space-x-3 flex justify-start items-center">
                <MdEventAvailable color="gray" />
                <p className="text-xs text-gray-500 font-medium">
                  Monday - Friday 10AM - 8PM
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;

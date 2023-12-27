import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <footer className="bg-primary px-16 py-8">
        <div className="flex justify-evenly items-center">
          <div className="flex items-center justify-normal">
            <img
              src={require("../assets/images/newsletter.png")}
              alt="newsletter"
            />
            <p className="font-semibold text-sm text-white">
              Sign Up For Newsletter{" "}
            </p>
          </div>
          <div className="w-2/4 bg-white py-1 px-1 rounded-md flex justify-between items-center">
            <input
              placeholder="Your Email..."
              type="text"
              className="w-full text-sm outline-none text-black font-medium"
            />
            <button
              type="submit"
              className="p-1 text-sm rounded-md bg-primary text-white font-medium"
            >
              SUBSCRIBE
            </button>
          </div>
        </div>
      </footer>
      <div className="h-[0.5px] w-full bg-gray-500" />
      <footer className="bg-primary px-16 py-8 flex justify-between items-center">
        <ul>
          <h3 className="text-lg text-white font-bold">Contact Us</h3>
          <li className="text-xs mt-4 mb-2 text-white">Coderblack Store</li>
          <li className="text-xs mb-2 text-white">
            <a href="tel:+2348139596749">+234-8139596749</a>
          </li>
          <li className="text-xs mb-2 text-white">
            <a href="mailto: dequad09@gmail.com">dequad09@gmail.com</a>
          </li>
        </ul>

        <ul>
          <h3 className="text-lg text-white font-bold">Information</h3>
          <li className="text-xs mt-4 mb-2 text-white">Privacy Policy</li>
          <li className="text-xs mb-2 text-white">
            <Link>Shipping Policy</Link>
          </li>
          <li className="text-xs mb-2 text-white">
            <Link>Terms of Service</Link>
          </li>
          <li className="text-xs mb-2 text-white">
            <Link>Blogs</Link>
          </li>
        </ul>
        <ul>
          <h3 className="text-lg text-white font-bold">Account</h3>
          <li className="text-xs mt-4 mb-2 text-white">Search</li>
          <li className="text-xs mb-2 text-white">
            <Link>About Us</Link>
          </li>
          <li className="text-xs mb-2 text-white">
            <Link>Faq</Link>
          </li>
          <li className="text-xs mb-2 text-white">
            <Link>Contact</Link>
          </li>
        </ul>
      </footer>
      <div className="h-[1px] w-full bg-gray-500" />
      <footer className="bg-primary px-16 py-3 flex justify-between items-center">
        <p className="text-[10px] font-semibold text-white"> 2023, Shopifity Powered By Coderblack </p>
      </footer>
    </>
  );
};

export default Footer;

import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import countryList from "react-select-country-list";
import { cart } from "../constants/Data";
import { Naira } from "../utils";
import { Divider } from "antd";

const Checkout = () => {
  const options = useMemo(() => countryList().getData(), []);

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
        <div className="grid grid-cols-2 gap-6">
          <div className="shadow-lg p-4 rounded-md bg-white">
            <h4 className="text-sm font-bold text-black">Shipping Address</h4>
            <input
              type="text"
              name="address"
              id="address"
              placeholder="Address"
              className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2"
            />
            <div className="grid grid-cols-2 gap-2">
              <input
                type="text"
                name="firstName"
                id="firstName"
                placeholder="Firstname"
                className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2"
              />
              <input
                type="text"
                name="lastName"
                id="lastName"
                placeholder="Lastname"
                className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2"
              />
            </div>
            <select className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2">
              {options.map((item) => {
                console.log(item);
                return <option value={item.label}>{item.label}</option>;
              })}
            </select>
            <div className="grid grid-cols-3 gap-2">
              <input
                type="text"
                name="city"
                id="city"
                placeholder="City"
                className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2"
              />
              <input
                type="text"
                name="state"
                id="state"
                placeholder="State"
                className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2"
              />
              <input
                type="tel"
                name="zip"
                id="zip"
                placeholder="ZIP Code"
                className="w-full outline-none ring-1 ring-gray-400  py-2 text-sm px-2  rounded-md my-2"
              />
            </div>
            <div className="flex justify-between items-center mt-4">
              <Link className="text-xs hover:bg-tertiary hover:text-black transition-all ease-in-out delay-75 text-white font-medium bg-primary px-3 py-2 rounded-2xl uppercase">
                Return to cart
              </Link>
              <Link className="text-xs hover:bg-tertiary hover:text-black transition-all ease-in-out delay-75 text-white font-medium bg-red-800 px-6 py-4 rounded-2xl uppercase">
                Continue to shipping
              </Link>
            </div>
          </div>

          <div>
            {cart.map((item) => {
              return (
                <div className="w-full flex p-2 justify-between mb-2 space-x-2 items-start">
                  <div className="w-[10%] ring-1 rounded-md relative ring-gray-300">
                    <img
                      src={item.images[0].image}
                      alt={item.id}
                      className="w-full h-full rounded-md"
                    />
                    <span className="text-[8px] absolute font-normal text-white rounded-full px-1.5 py-0.5 bg-gray-700 ring-2 ring-white -top-2 -right-2">
                      3
                    </span>
                  </div>
                  <div className="w-[90%] flex justify-between items-center">
                    <div className="w-[80%]">
                      <h4 className="text-xs font-semibold">{item.name}</h4>
                      <p className="text-[10px] text-gray-400">
                        {item.size} / {item.color}
                      </p>
                    </div>
                    <p className="text-black font-semibold text-xs">
                      {Naira.format(item.price)}
                    </p>
                  </div>
                </div>
              );
            })}
            <Divider />
            <div className="my-2">
              <div className="flex justify-between items-center">
                <p className="text-xs font-medium text-gray-400">Subtotal</p>
                <p className="text-xs font-semibold text-gray-600">
                  {Naira.format(300.0)}
                </p>
              </div>
              <div className="flex justify-between mt-2 items-center">
                <p className="text-xs font-medium text-gray-400">Shipping</p>
                <p className="text-xs font-semibold text-gray-600">
                  {Naira.format(100.0)}
                </p>
              </div>
            </div>
            <Divider />
            <div className="flex justify-between items-center">
              <p className="text-xs font-semibold text-gray-600">Total</p>
              <p className="text-lg font-bold text-gray-600">
                {Naira.format(400.0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;

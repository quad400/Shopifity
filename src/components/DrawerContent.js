import React from "react";
import { cart } from "../constants/Data";
import { Divider } from "antd";
import Button from "./Button";
import { useSelector } from "react-redux";
import { Naira } from "../utils";

const DrawerContent = ({ setShowDrawer }) => {
  const { cart } = useSelector((state) => state.product);

  const handleClick = () => {
    setShowDrawer(false);
  };

  return (
    <div className="mt-3">
      {cart === null && (
        <div>
          <h4 className="text-lg font-semibold text-center">
            No product in cart
          </h4>
        </div>
      )}
      {cart !== null &&
        cart?.products.map((item) => {
          return (
            <div className="w-full flex p-2 justify-between space-x-2 items-start">
              <div className="w-[20%] h-[60px]">
                <img
                  src={item?.product?.images[0]}
                  alt={item?.product?._id}
                  className="w-full h-full"
                />
              </div>
              <div className="w-[80%]">
                <h4 className="text-sm font-semibold">
                  {item?.product?.title}
                </h4>
                <h4 className="text-xs font-medium text-gray-400">
                  {item?.quantity} X {item?.product?.price}
                </h4>
                <p className="text-[10px] text-gray-300">Size: {item?.size}</p>
                <p className="text-[10px] text-gray-300">
                  Color: {item?.color}
                </p>
              </div>
            </div>
          );
        })}
      {cart !== null && (
        <div className="bg-gray-100 p-2">
          <div className="flex mb-2 justify-between items-center">
            <div className="">
              <p className="text-sm font-semibold">Total Item</p>
              <p className="text-xs font-semibold">{cart?.products.length}</p>
            </div>
            <div className="">
              <p className="text-sm font-semibold">Subtotal</p>
              <p className="text-xs font-semibold">
                {Naira.format(cart?.cartTotal)}
              </p>
            </div>
          </div>
          <Divider />
          <div className="flex justify-center items-center space-x-2 mt-3">
            <Button title="View Cart" to="/cart" onClick={handleClick} />
            <Button title="Check out" to="/checkout" onClick={handleClick} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DrawerContent;

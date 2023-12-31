import React from "react";
import { cart } from "../constants/Data";
import { Divider } from "antd";
import Button from "./Button";

const DrawerContent = ({ setShowDrawer }) => {

  const handleClick = () => {
    setShowDrawer(false);
  };

  return (
    <div className="mt-3">
      {cart.map((item) => {
        return (
          <div className="w-full flex p-2 justify-between space-x-2 items-start">
            <div className="w-[20%]">
              <img
                src={item.images[0].image}
                alt={item.id}
                className="w-full h-full"
              />
            </div>
            <div className="w-[80%]">
              <h4 className="text-sm font-semibold">{item.name}</h4>
              <h4 className="text-xs font-medium text-gray-400">
                {item.quantity} X {item.price}
              </h4>
              <p className="text-[10px] text-gray-300">Size: {item.size}</p>
              <p className="text-[10px] text-gray-300">Color: {item.color}</p>
            </div>
          </div>
        );
      })}
      <div className="bg-gray-100 p-2">
        <div className="flex mb-2 justify-between items-center">
          <div className="">
            <p className="text-sm font-semibold">Total Item</p>
            <p className="text-xs font-semibold">{cart.length}</p>
          </div>
          <div className="">
            <p className="text-sm font-semibold">Subtotal</p>
            <p className="text-xs font-semibold">$100.00</p>
          </div>
        </div>
        <Divider />
        <div className="flex justify-center items-center space-x-2 mt-3">
          <Button title="View Cart" to="/cart" onClick={handleClick} />
          <Button title="Check out" to="/checkout" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default DrawerContent;

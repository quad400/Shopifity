import React from "react";
import { cart } from "../constants/Data";
import { Link } from "react-router-dom";

const Cart = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
        <div className="flex justify-start items-center">
          <h4 className="flex-1 text-sm font-bold uppercase text-gray-600">
            Product
          </h4>
          <h4 className="text-sm font-bold uppercase text-gray-600">Price</h4>
          <h4 className="mx-10 text-sm font-bold uppercase text-gray-600">
            Quantity
          </h4>
          <h4 className="text-sm font-bold uppercase text-gray-600">Total</h4>
        </div>
        <div className="">
          {cart.map((item) => {
            return (
              <div className="mb-2 flex justify-between items-center">
                {/* Product */}
                <div className="flex-1  justify-start items-center">
                  <div className="flex space-x-2 justify-start items-center">
                    <img
                      src={item.images[0].image}
                      alt={item.id}
                      className="h-[80px] w-[80px]"
                    />
                    <div className="w-2/4 flex-wrap">
                      <p className="w-full flex-wrap text-xs text-gray-500 font-medium ml-3">
                        {item.name}
                      </p>
                      <p className="w-full flex-wrap text-[10px] mt-2 text-gray-500 font-medium ml-3">
                        Size: {item.size}
                      </p>
                      <p className="w-full flex-wrap text-[10px] text-gray-500 font-medium ml-3">
                        Color: {item.color}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Price */}
                <p className="font-bold text-sm">$ {item.price}</p>

                {/* Quantity */}
                <div className="flex mx-10 bg-white p-2 rounded-md shadow-md justify-center items-center space-x-2">
                  <div className="space-y-2">
                    <div>
                      <button className="border px-2 rounded-md border-gray-400">
                        +
                      </button>
                    </div>
                    <div>
                      <button className="border px-2.5 rounded-md border-gray-400">
                        -
                      </button>
                    </div>
                  </div>
                  <p className="text-sm font-medium">{item.sold}</p>
                </div>

                {/* Total */}
                <p className="font-bold text-sm">$100.00</p>
              </div>
            );
          })}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <Link className="text-xs font-medium text-white bg-primary mt-3 px-5 py-2 rounded-2xl">
            Continue Shopping
          </Link>
          <div>
            <p className="text-xs font-medium text-gray-400">
              Subtotal{" "}
              <strong className="text-gray-400 text-sm">$100.00</strong>
            </p>
            <p className="text-[8px] text-gray-400 my-3">
              Taxes and Shipping calculated at checkout
            </p>
            <Link to="/checkout" className="text-xs font-medium bg-tertiary mt-3 px-10 py-2 rounded-2xl">
              Check Out
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

import React, { useCallback } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { Naira } from "../utils";
import { AddtoCart, DeductFromCart, GetCart } from "../features/productSlice";

const Cart = () => {
  const { cart } = useSelector((state) => state.product);

  const dispatch = useDispatch();
  const handleAddtocart = useCallback(({ id, qty, color, size }) => {
    const body = {
      productId: id,
      quantity: qty,
      color: color,
      size: size,
    };

    dispatch(AddtoCart(body));
    dispatch(GetCart());
  }, []);

  const handleRemovefromcart = useCallback(({ id, color, size }) => {
    const body = {
      productId: id,
      color: color,
      size: size,
    };

    dispatch(DeductFromCart(body));
    dispatch(GetCart());
  }, []);

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
          {cart === null && (
            <div>
              <h4 className="text-lg font-semibold text-center">
                No product in cart
              </h4>
            </div>
          )}
          {cart !== null &&
            cart?.products.map((item) => {
              console.log(item?.quantity);
              return (
                <div
                  key={item?._id}
                  className="mb-2 flex justify-between items-center"
                >
                  {/* Product */}
                  <div className="flex-1  justify-start items-center">
                    <div className="flex space-x-2 justify-start items-center">
                      <img
                        src={item?.product?.images[0]}
                        alt={item?._id}
                        className="h-[80px] w-[80px]"
                      />
                      <div className="w-2/4 flex-wrap">
                        <p className="w-full flex-wrap text-xs text-gray-500 font-medium ml-3">
                          {item?.product?.title}
                        </p>
                        <p className="w-full flex-wrap text-[10px] mt-2 text-gray-500 font-medium ml-3">
                          Size: {item?.size}
                        </p>
                        <p className="w-full flex-wrap text-[10px] text-gray-500 font-medium ml-3">
                          Color: {item?.color}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Price */}
                  <p className="font-bold text-sm">
                    {Naira.format(item?.product?.price)}
                  </p>

                  {/* Quantity */}
                  <div className="flex mx-10 bg-white p-2 rounded-md shadow-md justify-center items-center space-x-2">
                    <div className="space-y-2">
                      <div>
                        <button
                          onClick={() =>
                            handleAddtocart({
                              id: item?.product?._id,
                              qty: item?.quantity,
                              color: item?.color,
                              size: item?.size,
                            })
                          }
                          className="border px-2 rounded-md border-gray-400"
                        >
                          +
                        </button>
                      </div>
                      <div>
                        <button
                          disabled={item?.quantity < 2}
                          onClick={() =>
                            handleRemovefromcart({
                              id: item?.product?._id,
                              color: item?.color,
                              size: item?.size,
                            })
                          }
                          className="border px-2.5 rounded-md border-gray-400"
                        >
                          -
                        </button>
                      </div>
                    </div>
                    <p className="text-sm font-medium">{item?.quantity}</p>
                  </div>

                  {/* Total */}
                  <p className="font-bold text-sm">
                    {Naira.format(item?.quantity * item?.product?.price)}
                  </p>
                </div>
              );
            })}
        </div>
        <div className="mt-5 flex justify-between items-center">
          <Link
            to="/products"
            className="text-xs font-medium text-white bg-primary mt-3 px-5 py-2 rounded-2xl"
          >
            Continue Shopping
          </Link>
          {cart !== null && (
            <div>
              <p className="text-xs font-medium text-gray-400">
                Subtotal{" "}
                <strong className="text-gray-400 text-sm">
                  {Naira.format(cart?.cartTotal)}
                </strong>
              </p>
              <p className="text-[8px] text-black my-3">
                Taxes and Shipping calculated at checkout
              </p>
              <Link
                to="/checkout"
                className="text-xs font-medium bg-tertiary mt-3 px-10 py-2 rounded-2xl"
              >
                Check Out
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Cart;

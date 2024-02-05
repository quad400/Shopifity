import React from "react";
import { MdClose } from "react-icons/md";
import { Naira, calculateDiscount } from "../utils";
import { AddtoWishlist } from "../features/productSlice";
import { useDispatch } from "react-redux";

const WishlistCard = ({ item }) => {

  const dispatch = useDispatch()
  
  return (
    <div className="w-[200px]">
      <div className="bg-white p-2 mb-3 shadow-lg rounded-md">
        <div className="flex justify-end items-start">
          <MdClose onClick={() => dispatch(AddtoWishlist(item?._id))} />
        </div>
        <div className="flex justify-center items-center">
          <img
            src={item?.images[0]}
            alt={item?._id}
            className="h-[120px] w-[120px] mb-4 mt-2"
          />
        </div>
      </div>

      <p className="text-xs font-bold mb-3 line-clamp-2">{item?.title}</p>
      <div>
        {item?.discount_percent ? (
          <>
            <span className="text-red-800 font-semibold text-sm">
              {Naira.format(
                calculateDiscount(item?.price, item?.discount_percent)
              )}
            </span>
            <del className="font-medium text-gray-700 ml-2 text-xs">
              {Naira.format(item?.price)}
            </del>
          </>
        ) : (
          <span className="font-semibold text-sm">
            {Naira.format(item?.price)}
          </span>
        )}
      </div>
    </div>
  );
};

export default WishlistCard;

import { Rating } from "@mui/material";
import React from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { calculateDiscount } from "../utils";

const ProductCard = ({ item }) => {
  return (
    <Link className="bg-white rounded-md shadow-lg w-[280px] p-3">
      <div className="flex justify-between items-center">
        {item?.discount_percent ? (
          <span className="bg-amber-600 py-1 px-2 rounded-lg text-xs font-bold">
            -{item?.discount_percent}%
          </span>
        ) : (
          <div></div>
        )}
        <button className="float-end">
          {item.favourite ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <img
        src={item.image}
        className="h-[120px] w-[120px] my-2"
        alt={item.id}
      />
      <div>
        <p className="text-[10px] font-semibold text-red-700 mb-3">
          {item.brand}
        </p>
        <p className="text-xs font-bold mb-3 line-clamp-2">{item.name}</p>
      </div>
      <Rating name="read-only" value={item.rate} readOnly size="small" />
      <div>
        {item.discount_percent ? (
          <>
            <span className="text-red-800 font-semibold text-sm">
              ${calculateDiscount(item.price, item.discount_percent)}
            </span>
            <del className="font-medium text-gray-700 ml-2 text-xs">
              ${item.price}
            </del>
          </>
        ) : (
          <span className="font-semibold text-sm">${item.price}</span>
        )}
      </div>
    </Link>
  );
};

export default ProductCard;

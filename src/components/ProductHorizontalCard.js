import React from "react";
import { Link } from "react-router-dom";
import { Naira, calculateDiscount } from "../utils";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Rating } from "@mui/material";

const ProductHorizontalCard = ({ item }) => {
  return (
    <Link
      to={`/products/${item.id}`}
      className="bg-white rounded-md shadow-lg w-full p-3"
    >
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
      <div className="flex justify-start items-center space-x-2">
        <img
          src={item.image}
          className="h-[120px] w-[120px] my-2 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300"
          alt={item.id}
        />
        <div className="grid grid-row-1">
          <div className="grid grid-row-1">
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
                  {Naira.format(
                    calculateDiscount(item.price, item.discount_percent)
                  )}{" "}
                </span>
                <del className="font-medium text-gray-700 ml-2 text-xs">
                  {Naira.format(item.price)}
                </del>
              </>
            ) : (
              <span className="font-semibold text-sm">
                {Naira.format(item.price)}
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductHorizontalCard;

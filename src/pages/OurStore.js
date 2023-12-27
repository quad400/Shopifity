import React from "react";
import { Link } from "react-router-dom";
import { Colors } from "../constants/Colors";
import { FaChevronDown, FaGripLinesVertical } from "react-icons/fa6";
import { RxDragHandleVertical, RxDragHandleHorizontal } from "react-icons/rx";
import { featureCollectionData } from "../constants/Data";
import ProductCard2 from "../components/ProductCard2";

const OurStore = () => {

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-4 flex space-x-2 px-16">
        <div className="w-[20%]">
          <ul className="rounded-md shadow-lg bg-white p-2.5 mb-2">
            <h4 className="mb-5 text-sm font-semibold">Shop By Cartegories</h4>
            <li className="mb-1.5">
              <Link className="text-gray-600 text-xs font-normal">Home</Link>
            </li>
            <li className="mb-1.5">
              <Link className="text-gray-600 text-xs font-normal">Store</Link>
            </li>
            <li className="mb-1.5">
              <Link className="text-gray-600 text-xs font-normal">Blog</Link>
            </li>
            <li className="mb-1.5">
              <Link className="text-gray-600 text-xs font-normal">Contact</Link>
            </li>
          </ul>
          <ul className="rounded-md shadow-lg bg-white p-2.5 mb-2">
            <h4 className="mb-5 text-sm font-semibold">Filter By</h4>
            <h5 className="font-semibold text-xs mb-1.5">Availability</h5>
            <div className="flex space-x-2 justify-normal mb-1.5 items-center">
              <input type="checkbox" name="in-stock" />
              <p className="text-[10px] text-gray-400 font-normal">
                In stock(21)
              </p>
            </div>
            <div className="flex space-x-2 justify-normal mb-2 items-center">
              <input type="checkbox" name="in-stock" />
              <p className="text-[10px] text-gray-400 font-normal">
                Out of stock(1)
              </p>
            </div>
            <h5 className="font-semibold text-xs mt-2 mb-1.5">Price</h5>
            <div className="mb-2">
              <p className="text-xs">
                ${" "}
                <input
                  type="number"
                  name="from"
                  placeholder="From"
                  className="text-xs font-medium outline-none w-[80px] bg-gray-200 p-1 rounded-md"
                />
                ${" "}
                <input
                  type="number"
                  name="to"
                  placeholder="To"
                  className="text-xs font-medium w-[80px] outline-none bg-gray-200 p-1 rounded-md"
                />
              </p>
            </div>
            <h5 className="font-semibold text-xs mt-2 mb-1.5">Color</h5>
            <div className="flex flex-wrap">
              {Colors.map((item) => {
                console.log(item);
                return (
                  <button
                    className="h-6 w-6 m-1 shadow-lg rounded-full"
                    style={{
                      backgroundColor: item,
                    }}
                  />
                );
              })}
            </div>
          </ul>
        </div>
        <div className="w-[80%]">
          {/* Sort By */}
          <div className="bg-white shadow-lg flex justify-between p-1.5 rounded-md items-center">
            <div className="flex space-x-2 justify-normal items-center">
              <p className="text-sm font-semibold">Sort By</p>
              <button className="flex space-x-4 justify-between items-center bg-gray-100 rounded-md p-2 ">
                <p className="text-xs font-medium text-gray-500">
                  Best Selling
                </p>
                <FaChevronDown />
              </button>
            </div>
            <div>
              <span className="text-xs text-gray-300 font-medium">21 Products</span>
              <button className="p-2 bg-primary rounded-md ml-1">
                <FaGripLinesVertical color="white" size={18} />
              </button>
              <button className="p-2 bg-gray-200 rounded-md ml-1">
                <RxDragHandleVertical color="black" size={18} />
              </button>
              <button className="p-2 bg-gray-200 rounded-md ml-1">
                <RxDragHandleHorizontal color="black" size={18} />
              </button>
            </div>
          </div>

          {/* Products */}
          <div className="flex flex-wrap space-x-2 mt-4 space-y-2">
          {featureCollectionData.map((item) => {
              return <ProductCard2 item={item} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStore;

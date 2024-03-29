import React, { useEffect, useState } from "react";
import { Colors } from "../constants/Colors";
import {
  FaChevronDown,
  FaGalacticSenate,
  FaGripLinesVertical,
} from "react-icons/fa6";
import { RxDragHandleHorizontal } from "react-icons/rx";
import { featureCollectionData } from "../constants/Data";
import ProductCard2 from "../components/ProductCard2";
import { Pagination } from "antd";
import ProductHorizontalCard from "../components/ProductHorizontalCard";
import { useDispatch, useSelector } from "react-redux";
import { FilterByCategory, ProductList } from "../features/productSlice";
import { useNavigate, useParams } from "react-router-dom";

const ProductCategory = () => {
  const { id } = useParams();
  const [isHorizontal, setIsHorizontal] = useState(FaGalacticSenate);
  const [page, setPage] = useState(1);
  const handleClickHorizontal = () => {
    setIsHorizontal(true);
  };

  const handleClickVertical = () => {
    setIsHorizontal(false);
  };

  const dispatch = useDispatch();

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(FilterByCategory(id, page));
    navigate(`/category/${id}`);
  }, [dispatch, id]);

  const { products, wishlist } = useSelector((state) => state.product);

  const [isFav, setIsFav] = useState(false);

  useEffect(() => {
    if (wishlist.length === 0) {
      return;
    } else {
      wishlist?.find((item) => {
        if (item._id.toString() === item?._id.toString()) {
          setIsFav(true);
        } else {
          setIsFav(false);
        }
      });
    }
  }, []);

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-4 flex space-x-2 px-16">
        <div className="w-[20%] space-y-2">
          <ul className="rounded-md shadow-lg bg-white p-2.5 mb-2">
            <h4 className="mb-5 text-sm font-semibold">Filter By</h4>
            {/* <h5 className="font-semibold text-xs mb-1.5">Availability</h5>
            <div className="flex space-x-2 justify-normal mb-1.5 items-center">
              <input type="checkbox" name="in-stock" />
              <p className="text-xs text-gray-400 font-normal">In stock(21)</p>
            </div>
            <div className="flex space-x-2 justify-normal mb-2 items-center">
              <input type="checkbox" name="in-stock" />
              <p className="text-xs text-gray-400 font-normal">
                Out of stock(1)
              </p>
            </div> */}
            <h5 className="font-semibold text-xs mt-2 mb-1.5">Price</h5>
            <div className="mb-2">
              <div className="text-xs">
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
              </div>
            </div>
            <h5 className="font-semibold text-xs mt-2 mb-1.5">Color</h5>
            <div className="flex flex-wrap">
              {Colors.map((item) => {
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

            <div>
              <h5 className="font-semibold text-xs mt-2 mb-1.5">Sizes</h5>

              <div className="flex space-x-2 justify-normal mb-1.5 items-center">
                <input type="checkbox" name="in-stock" />
                <p className="text-xs text-gray-400 font-normal">40</p>
              </div>
              <div className="flex space-x-2 justify-normal mb-1.5 items-center">
                <input type="checkbox" name="in-stock" />
                <p className="text-xs text-gray-400 font-normal">47</p>
              </div>
              <div className="flex space-x-2 justify-normal mb-1.5 items-center">
                <input type="checkbox" name="in-stock" />
                <p className="text-xs text-gray-400 font-normal">30</p>
              </div>
              <div className="flex space-x-2 justify-normal mb-1.5 items-center">
                <input type="checkbox" name="in-stock" />
                <p className="text-xs text-gray-400 font-normal">XL</p>
              </div>
              <div className="flex space-x-2 justify-normal mb-1.5 items-center">
                <input type="checkbox" name="in-stock" />
                <p className="text-xs text-gray-400 font-normal">XXL</p>
              </div>
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
              <span className="text-xs text-gray-300 font-medium">
                21 Products
              </span>
              <button
                onClick={handleClickVertical}
                className={`${
                  isHorizontal === false
                    ? "bg-primary text-white"
                    : "bg-gray-200 text-black"
                } p-2 rounded-md ml-1 bg-gray-200 `}
              >
                <FaGripLinesVertical
                  color={isHorizontal === false ? "white" : "black"}
                  size={18}
                />
              </button>
              <button
                onClick={handleClickHorizontal}
                className={`${
                  isHorizontal === true
                    ? "bg-primary text-white"
                    : "bg-gray-200 "
                } p-2 rounded-md ml-1 `}
              >
                <RxDragHandleHorizontal
                  color={isHorizontal === true ? "white" : "black"}
                  size={18}
                />
              </button>
            </div>
          </div>

          {/* Products */}
          <div
            className={`isHo  grid ${
              isHorizontal ? "grid-cols-1" : "grid-cols-3 gap-x-2"
            } gap-2 mt-8`}
          >
            {products.length === 0 ? (
              <div className="flex justify-center items-center">
                <h4>No Product in this category</h4>
              </div>
            ) : (
              products.map((item) => {
                return isHorizontal ? (
                  <ProductHorizontalCard
                    isFav={isFav}
                    item={item}
                    setIsFav={setIsFav}
                  />
                ) : (
                  <ProductCard2 item={item} />
                );
              })
            )}
          </div>
          {products.length !== 0 && (
            <div className="bg-white mt-6 shadow-lg flex justify-between p-1.5 rounded-md items-center">
              <Pagination
                hideOnSinglePage={true}
                totalBoundaryShowSizeChanger={40}
                defaultCurrent={1}
                total={11}
                onChange={(page) => {
                  console.log(page);
                }}
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProductCategory;

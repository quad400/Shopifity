import React, { useState } from "react";
// import { useParams } from "react-router-dom";
import { featureCollectionData, product } from "../constants/Data";
import { Rating } from "@mui/material";
import Button from "../components/Button";
import { Link } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Divider } from "antd";
import ProductCard from "../components/ProductCard";
import { Naira } from "../utils";

const Product = () => {
  // const { id } = useParams();
  const [showReview, setShowReview] = useState(false);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const data = product;

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
        <div className="shadow-lg my-5 grid grid-cols-2 gap-6 p-3 bg-white rounded-md">
          <div className="">
            <img
              src={data.images[0].image}
              alt={data.id}
              className="w-full h-[350px]"
            />
            <div className="flex mt-3 space-x-2 justify-center items-center">
              {product.images.map((item) => {
                return (
                  <div className="h-20 ring-black w-20 ring-1 rounded-md">
                    <img
                      src={item.image}
                      alt={item.id}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h4 className="text-lg font-bold my-2">{data.name}</h4>
            <h4 className="text-lg font-bold my-2">
              {Naira.format(data.price)}
            </h4>
            <Rating name="read-only" value={data.rate} readOnly size="small" />
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Type: </strong>
              <span className="text-sm">Headsets</span>
            </div>
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Availability: </strong>
              <span className="text-sm">40 In Stock</span>
            </div>
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Size: </strong>
              <div className="flex justify-normal space-x-2 items-center">
                <span className="text-sm px-2 py-1 border border-gray-700 rounded-md">
                  S
                </span>
                <span className="text-sm bg-primary text-white px-2 py-1 border border-gray-700 rounded-md">
                  M
                </span>
                <span className="text-sm px-2 py-1 border border-gray-700 rounded-md">
                  L
                </span>
                <span className="text-sm px-2 py-1 border border-gray-700 rounded-md">
                  XLL
                </span>
              </div>
            </div>
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Color: </strong>
              <div className="flex justify-normal space-x-2 items-center">
                <button className="text-sm shadow-lg h-6 w-6 ring-offset-2 ring-black ring-1 rounded-full border m-1 border-gray-700 bg-red-900" />
              </div>
              <button className="text-sm shadow-lg h-6 w-6 rounded-full border m-1 border-gray-700 bg-green-900" />
              <button className="text-sm shadow-lg h-6 w-6 rounded-full border m-1 border-gray-700 bg-green-900" />
            </div>

            <div className="flex space-x-2 mt-3">
              <strong className="text-sm mr-7">Quantity </strong>
              <input
                type="number"
                name="qty"
                min={1}
                max={99}
                defaultValue={1}
                className="ring-1 px-1 text-sm ring-offset-2 ring-gray-400 outline-none w-10 rounded-sm"
              />
            </div>
            <div className="flex space-x-2 mt-5">
              <Button title="Add to Cart" />
              <Link className="text-xs hover:bg-primary hover:text-white transition-all ease-in-out delay-75 text-black font-medium bg-tertiary px-3 py-2 rounded-2xl uppercase">
                Buy now
              </Link>
              <CiHeart color="black" size={25} />
              <IoShareSocialOutline color="black" size={25} />
            </div>
          </div>
        </div>
        <h4 className="font-bold text-lg mb-2 text-black">Description</h4>
        <div className="shadow-lg my-5 p-4 bg-white rounded-md">
          <p className="text-sm font-normal text-black">{data.description}</p>
        </div>

        <h4 className="font-bold text-lg mb-2 text-black">Reviews</h4>
        <div className="shadow-lg my-5 p-4 bg-white rounded-md">
          <h4 className="font-semibold text-sm mb-2 text-black">
            Customer Reviews
          </h4>
          <div className="flex justify-between items-center mb-3">
            <div className="flex justify-normal items-center space-x-2">
              <Rating
                name="read-only"
                value={data.rate}
                readOnly
                size="small"
              />
              <p className="font-light text-gray-400 text-xs">
                Based on 2 reviews
              </p>
            </div>
            <Link
              onClick={() => setShowReview(!showReview)}
              className="font-medium text-xs text-primary2 underline"
            >
              Write a review
            </Link>
          </div>

          {showReview && (
            <>
              <h4 className="capitalize font-semibold text-black text-sm mb-2">
                Write a review
              </h4>
              <div className="grid grid-cols-1">
                <Rating
                  name="simple-controlled"
                  onChange={(event, newValue) => {
                    setRate(newValue);
                  }}
                  value={rate}
                  size="small"
                />

                <textarea
                  value={comment}
                  placeholder="Write your comment..."
                  onChange={(e) => setComment(e.target.value)}
                  className="rounded-md p-2 my-2 outline-none text-sm font-normal text-gray-600 ring-1 ring-gray-400"
                />
              </div>
                <Button title="Submit" />
            </>
          )}

          <Divider />
          <div>
            {data.reviews.map((item) => {
              return (
                <>
                  <div className="mt-2">
                    <Rating
                      name="read-only"
                      value={item.rate}
                      readOnly
                      size="small"
                    />
                    <div className="flex space-x-2 justify-normal items-center">
                      <p className="text-sm font-bold text-black">
                        {item.name}
                      </p>
                      <p className="text-sm font-thin text-black"> on </p>
                      <p className="text-sm font-bold text-black">
                        {item.date}
                      </p>
                    </div>
                    <p className="text-sm font-medium mt-2 text-gray-500">
                      {item.comment}
                    </p>
                  </div>
                  <Divider />
                </>
              );
            })}
          </div>
        </div>
        <h4 className="font-bold text-lg mb-2 text-black">You May Also Like</h4>
        <div className="flex gap-2">
          {featureCollectionData.map((item) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

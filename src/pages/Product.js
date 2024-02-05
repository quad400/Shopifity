import React, { useEffect, useState } from "react";
import { featureCollectionData } from "../constants/Data";
import { Rating } from "@mui/material";
import Button from "../components/Button";
import { Link, useParams } from "react-router-dom";
import { CiHeart } from "react-icons/ci";
import { IoShareSocialOutline } from "react-icons/io5";
import { Divider, message } from "antd";
import ProductCard from "../components/ProductCard";
import { Naira, dateConverter } from "../utils";
import { useDispatch, useSelector } from "react-redux";
import { AddtoCart, GetCart, GetProduct } from "../features/productSlice";

const Product = () => {
  const { id } = useParams();
  const [showReview, setShowReview] = useState(false);
  const [rate, setRate] = useState(0);
  const [comment, setComment] = useState("");

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(GetProduct(id));
  }, [dispatch, id]);

  const { product,wishlist } = useSelector((state) => state.product);

  // cart
  const [size, setSize] = useState(null);
  const [color, setColor] = useState(null);
  const [qty, setQty] = useState(1);

  useEffect(() => {
    setColor(product?.colors[0]);
    setSize(product?.sizes[0]);
  }, [product, setColor, setSize]);

  function handleAddToCart() {
    const body = {
      productId: id,
      quantity: qty,
      color: color,
      size: size,
    };

    console.log("click");

    dispatch(AddtoCart(body));
    dispatch(GetCart())
  }

  const [isFav, setIsFav] = useState(false);

  useEffect(()=> {
  if (wishlist.length === 0) {
    return;
  } else {
    wishlist?.find((item) => {
      if (item._id.toString() === item?._id.toString()) {
        setIsFav(true);
        console.log("caller")
      } else {
        setIsFav(false);
      }
    });
  }
  },[])

  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
        <div className="shadow-lg my-5 grid grid-cols-2 gap-6 p-3 bg-white rounded-md">
          <div className="">
            <img
              src={product?.images[0]}
              alt={product?.id}
              className="w-full h-[350px]"
            />
            <div className="flex mt-3 space-x-2 justify-center items-center">
              {product?.images.map((item, index) => {
                return (
                  <div className="h-20 ring-black w-20 ring-1 rounded-md">
                    <img
                      src={item}
                      alt={index}
                      className="w-full h-full rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </div>
          <div className="">
            <h4 className="text-lg font-bold my-2">{product?.title}</h4>
            <h4 className="text-lg font-bold my-2">
              {Naira.format(product?.price)}
            </h4>
            <Rating
              name="read-only"
              value={product?.averageRating}
              readOnly
              size="small"
            />
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Type: </strong>
              <span className="text-sm">Headsets</span>
            </div>
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Availability: </strong>
              <span className="text-sm">{product?.quantity} In Stock</span>
            </div>
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Size: </strong>
              <div className="flex justify-normal space-x-2 items-center">
                {product?.sizes?.map((item) => (
                  <button
                    onClick={() => setSize(item)}
                    className={`text-sm px-2 py-1 border border-gray-700 rounded-md ${
                      item === size ? "bg-blue-950 text-white" : ""
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
            <div className="flex mt-2 justify-normal items-center">
              <strong className="text-sm mr-3">Color: </strong>

              <div className="flex justify-normal space-x-2 items-center">
                {product?.colors?.map((item) => (
                  <button
                    onClick={() => setColor(item)}
                    className={`text-sm shadow-lg h-6 w-6 rounded-full border m-1 ${
                      item === color ? "ring-offset-2 ring-black ring-1" : ""
                    }`}
                    style={{
                      backgroundColor: item,
                    }}
                  />
                ))}
              </div>
            </div>

            <div className="flex space-x-2 mt-3">
              <strong className="text-sm mr-7">Quantity </strong>
              <input
                type="number"
                name="qty"
                min={1}
                max={99}
                value={qty}
                onChange={(e) => setQty(e.target.value)}
                defaultValue={1}
                className="ring-1 px-1 text-sm ring-offset-2 ring-gray-400 outline-none w-10 rounded-sm"
              />
            </div>
            <div className="flex space-x-2 mt-5">
              <Button onClick={handleAddToCart} title="Add to Cart" />
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
          <p className="text-sm font-normal text-black">
            {product?.description}
          </p>
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
                value={product?.averateRating}
                readOnly
                size="small"
              />
              <p className="font-light text-gray-400 text-xs">
                Based on {product?.totalRating} reviews
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
            {product?.ratings.map((item) => {
              return (
                <>
                  <div className="mt-2">
                    <Rating
                      name="read-only"
                      value={item.star}
                      readOnly
                      size="small"
                    />
                    <div className="flex space-x-2 justify-normal items-center">
                      <p className="text-sm font-bold text-black">
                        {item?.postedBy?.name}
                      </p>
                      <p className="text-sm font-thin text-black"> on </p>
                      <p className="text-sm font-bold text-black">
                        {dateConverter(item?.createdAt)}
                      </p>
                    </div>
                    <p className="text-sm font-medium mt-2 text-gray-500">
                      {item?.comment}
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
          {featureCollectionData?.map((item) => {
            return <ProductCard item={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Product;

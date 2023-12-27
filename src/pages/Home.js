import React from "react";
import { Link } from "react-router-dom";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { Rating } from "@mui/material";
import ProductCard from "../components/ProductCard";
import { calculateDiscount } from "../utils";
import {
  categoryList,
  featureCollectionData,
  soloFeatureData,
  specialProduct,
} from "../constants/Data";

const smallbannerdata = [
  {
    id: 1,
    label: "BEST SALE",
    name: "Laptops Max",
    text1: "From $1699.00 or",
    text2: "$64.62/mo.",
    image: require("../assets/images/catbanner-01.jpg"),
  },
  {
    id: 2,
    label: "16% OFF",
    name: "Smartwatch 7",
    text1: "Shop the latest brand",
    text2: "styles and colors",
    image: require("../assets/images/catbanner-02.jpg"),
  },
  {
    id: 3,
    label: "NEW ARRIVAL",
    name: "Buy IPad Air",
    text1: "From $169.00 or",
    text2: "$64.62/mo. for 12mo.",
    image: require("../assets/images/catbanner-03.jpg"),
  },
  {
    id: 4,
    label: "FREE ENGRAVING",
    name: "AirPods Max",
    text1: "High-fidility playback & ",
    text2: "ultra-low distortion",
    image: require("../assets/images/catbanner-04.jpg"),
  },
];

const banners = [
  {
    id: 1,
    image: require("../assets/images/service.png"),
    name: "Free Shipping",
    text: "Soft and Fast goods delivery",
  },
  {
    id: 2,
    image: require("../assets/images/service-02.png"),
    name: "Dailt Surprise Offers",
    text: "Save up to 20% off",
  },
  {
    id: 3,
    image: require("../assets/images/service-03.png"),
    name: "Support 24/7",
    text: "Shop with an export",
  },
  {
    id: 4,
    image: require("../assets/images/service-04.png"),
    name: "Affordable Prices",
    text: "Get factory direct price",
  },
  {
    id: 5,
    image: require("../assets/images/service-05.png"),
    name: "Secure Payment",
    text: "100% Protected Payment",
  },
];

const brand = [
  require("../assets/images/brand-01.png"),
  require("../assets/images/brand-02.png"),
  require("../assets/images/brand-03.png"),
  require("../assets/images/brand-04.png"),
  require("../assets/images/brand-05.png"),
  require("../assets/images/brand-06.png"),
  require("../assets/images/brand-07.png"),
  require("../assets/images/brand-08.png"),
];

const blog = [
  {
    id: 1,
    image: require("../assets/images/blog-1.jpg"),
    date: "11 JUNE, 2023",
    title: "How to increase the sales of yougurt within a week",
    detail:
      "You are only as good as your last collection, which is an Enormous pressure. IThink is Something About begin to make sense",
  },
  {
    id: 2,
    image: require("../assets/images/blog-1.jpg"),
    date: "11 JUNE, 2023",
    title: "How to increase the sales of yougurt within a week",
    detail:
      "You are only as good as your last collection, which is an Enormous pressure. IThink is Something About begin to make sense",
  },
  {
    id: 3,
    image: require("../assets/images/blog-1.jpg"),
    date: "11 JUNE, 2023",
    title: "How to increase the sales of yougurt within a week",
    detail:
      "You are only as good as your last collection, which is an Enormous pressure. IThink is Something About begin to make sense",
  },
  {
    id: 4,
    image: require("../assets/images/blog-1.jpg"),
    date: "11 JUNE, 2023",
    title: "How to increase the sales of yougurt within a week",
    detail:
      "You are only as good as your last collection, which is an Enormous pressure. IThink is Something About begin to make sense",
  },
];

const Home = () => {
  return (
    <section className="bg-white w-full  pt-3">
      <div className="flex w-full px-16">
        <div className="w-[50%] relative ">
          <img
            src={require("../assets/images/main-banner-1.jpg")}
            alt="banner-1"
            className="h-[350px] w-full relative rounded-md"
          />
          <div className="absolute top-7 left-4">
            <p className="text-orange-700 text-sm font-semibold">
              SUPERCHARGED PODS
            </p>
            <p className="text-4xl my-4 font-bold">Special Sale</p>
            <p className="text-xs font-medium">
              From $99.90 to $50.00/mo. <br /> for 24 mo. Footnote{" "}
            </p>
            <div className="mt-4">
              <Link className="bg-primary px-4 text-white text-sm font-medium mt-3 py-2 rounded-lg">
                BUY NOW
              </Link>
            </div>
          </div>
        </div>
        <div className="w-[50%] ml-2 grid grid-rows-2 grid-cols-2 gap-2">
          {smallbannerdata.map((item) => {
            return (
              <div className="relative" key={item.id}>
                <img
                  src={item.image}
                  alt={item.id}
                  className="w-full relative h-[170px] rounded-md"
                />
                <div className="absolute top-7 left-4">
                  <p className="text-orange-700 text-sm font-semibold">
                    {item.label}
                  </p>
                  <p className="text-xl my-2 font-bold">{item.name}</p>
                  <p className="text-xs font-medium">
                    {item.text1}
                    <br /> {item.text2}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className="px-16 mt-5 bg-gray-100">
        <div className="flex justify-between items-center py-7 ">
          {banners.map((item) => {
            return (
              <div className="flex">
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-5 w-5 mr-2"
                />
                <div>
                  <h4 className="text-xs font-bold">{item.name}</h4>
                  <p className="text-xs font-normal">{item.text}</p>
                </div>
              </div>
            );
          })}
        </div>
        <div className="bg-white gap-2 px-2 py-3 shadow-lg grid grid-cols-5">
          {categoryList.map((item) => {
            return (
              <Link className="flex justify-center items-center">
                <h4 className="text-xs font-bold">{item.name}</h4>
                <img src={item.image} alt={item.id} className="h-14 w`-14" />
              </Link>
            );
          })}
        </div>

        {/* Featured Collection */}
        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">Featured Collection</h4>
            <div className="flex space-x-3">
              <FaChevronLeft color="gray" cursor="pointer" />
              <FaChevronRight color="gray" cursor="pointer" />
            </div>
          </div>
          <div className="flex gap-2">
            {featureCollectionData.map((item) => {
              return <ProductCard item={item} />;
            })}
          </div>
        </div>

        <div className="flex justify-between mt-14 items-center">
          {soloFeatureData.map((item) => {
            return (
              <img
                src={item.image}
                alt={item.id}
                className="h-[200px] w-[230px] rounded-md"
              />
            );
          })}
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">Special Products</h4>
            <div className="flex space-x-3">
              <FaChevronLeft color="gray" cursor="pointer" />
              <FaChevronRight color="gray" cursor="pointer" />
            </div>
          </div>
          <div className="grid grid-cols-3 gap-2">
            {specialProduct.map((item) => {
              return (
                <div className="flex w-full bg-white shadow-lg p-3 rounded-md gap-x-2">
                  <div className="w-[45%]">
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
                      src={item.images[0].image}
                      className="h-[160px] w-[160px] my-2"
                      alt={item.id}
                    />
                    <div className="flex justify-center items-center">
                      <button className="border border-gray-200 rounded-md">
                        <img
                          src={item?.images[1]?.image}
                          className="h-10 w-10"
                          alt={item.id}
                        />
                      </button>
                      <button className="border border-gray-200 ml-2 rounded-md">
                        <img
                          src={item?.images[2]?.image}
                          className="h-10 w-10 p-3"
                          alt={item.id}
                        />
                      </button>
                    </div>
                  </div>
                  <div className="w-[55%] mt-4">
                    <div>
                      <p className="text-[10px] font-semibold text-red-700 mb-3">
                        {item.brand}
                      </p>
                      <p className="text-xs font-bold mb-3 line-clamp-2">
                        {item.name}
                      </p>
                    </div>
                    <Rating
                      name="read-only"
                      value={item.rate}
                      readOnly
                      size="small"
                    />
                    <div>
                      {item.discount_percent ? (
                        <>
                          <span className="text-red-800 font-semibold text-sm">
                            $
                            {calculateDiscount(
                              item.price,
                              item.discount_percent
                            )}
                          </span>
                          <del className="font-medium text-gray-700 ml-2 text-xs">
                            ${item.price}
                          </del>
                        </>
                      ) : (
                        <span className="font-semibold text-sm">
                          ${item.price}
                        </span>
                      )}
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs">
                        <strong className="mr-1 text-xs">883</strong>Days
                      </span>
                      <div>
                        <span className="bg-red-600 text-white text-[10px] font-medium p-2 rounded-full">
                          20
                        </span>{" "}
                        <strong>:</strong>{" "}
                        <span className="bg-red-600 text-white text-[10px] font-medium p-2 rounded-full">
                          50
                        </span>{" "}
                        <strong>:</strong>{" "}
                        <span className="bg-red-600 text-white text-[10px] font-medium p-2 rounded-full">
                          40
                        </span>
                      </div>
                    </div>
                    <div className="mt-3">
                      <p className="text-gray-300 text-sm font-medium">
                        Product: {item.sold}/ {item.available}
                      </p>
                      <div className="mt-2">
                        <Link className="text-xs text-white font-medium bg-primary px-3 py-2 rounded-2xl">
                          OPTION
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-8">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">Our Popular Products</h4>
            <div className="flex space-x-3">
              <FaChevronLeft color="gray" cursor="pointer" />
              <FaChevronRight color="gray" cursor="pointer" />
            </div>
          </div>
          <div className="flex gap-2">
            {featureCollectionData.map((item) => {
              return <ProductCard item={item} />;
            })}
          </div>
        </div>
        <div className="bg-white mt-8 flex py-4 px-2 justify-between items-center shadow-lg">
          {brand.map((item, index) => {
            return <img src={item} alt={index} className="h-24 w-24" />;
          })}
        </div>

        <div className="my-8">
          <div className="flex justify-between items-center mb-6">
            <h4 className="font-bold">Our Latest News</h4>
            <div className="flex space-x-3">
              <FaChevronLeft color="gray" cursor="pointer" />
              <FaChevronRight color="gray" cursor="pointer" />
            </div>
          </div>
          <div className="flex gap-2 justify-between items-center">
            {blog.map((item, index) => {
              return (
                <div className="rounded-md shadow-lg">
                  <img src={item.image} alt={item.id} className="" />
                  <div className="py-4 px-3 bg-white">
                    <p className="text-gray-300 text-xs font-medium">
                      {item.date}
                    </p>
                    <h4 className="text-sm font-bold  line-clamp-1">
                      {item.title}
                    </h4>
                    <p className="text-gray-300 text-xs font-medium line-clamp-2">
                      {item.detail}
                    </p>
                    <div className="mt-2">
                      <Link className="text-xs text-white font-medium bg-primary px-3 py-2 rounded-2xl">
                        READ MORE
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;

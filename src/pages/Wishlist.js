import React from "react";
import { featureCollectionData } from "../constants/Data";
import WishlistCard from "../components/WishlistCard";

const Wishlist = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-4 my-10 flex space-x-2 px-16">
        {featureCollectionData.map((item)=> {
            return <WishlistCard item={item} />
        })}
      </div>
    </div>
  );
};

export default Wishlist;

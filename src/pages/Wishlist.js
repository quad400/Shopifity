import React from "react";
import WishlistCard from "../components/WishlistCard";
import { useSelector } from "react-redux";

const Wishlist = () => {

  const {wishlist} = useSelector((state)=> state.product)
  
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-4 my-10 flex space-x-2 px-16">
        {wishlist.length === 0 && <h4>No product in wishlist</h4>}
        {wishlist.map((item)=> {
          
            return <WishlistCard item={item} />
        })}
      </div>
    </div>
  );
};

export default Wishlist;

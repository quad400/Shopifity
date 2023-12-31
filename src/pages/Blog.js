import React from "react";
import { blogPage } from "../constants/Data";

const Blog = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
        
        <h4 className="text-black font-bold text-lg mb-4">

        {blogPage?.title}
        </h4>
        <img src={blogPage?.image} alt={blogPage?.id} className="w-full h-[500px] mb-3" />
        <div>
          <p className="text-sm text-gray-700 font-normal my-3">{blogPage?.detail}</p>
          <p className="text-sm text-gray-700 font-normal">{blogPage?.date}</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;

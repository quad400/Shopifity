import React from "react";
import { blog } from "../constants/Data";
import BlogCard from "../components/BlogCard";

const BlogList = () => {
  return (
    <div className="bg-white w-full h-full">
      <div className="bg-gray-100 py-10 px-16">
      <div class="grid grid-cols-3 gap-4">
            {blog.map((item, index) => {
              return (
               <BlogCard item={item} />
              );
            })}
          </div>
      </div>
    </div>
  );
};

export default BlogList;

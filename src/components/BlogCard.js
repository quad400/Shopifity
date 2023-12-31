import React from "react";
import Button from "./Button";

const BlogCard = ({ item }) => {
  return (
    <div className="rounded-md shadow-lg">
      <img src={item.image} alt={item.id} className="w-full" />
      <div className="py-4 px-3 bg-white">
        <p className="text-gray-300 text-xs font-medium">{item.date}</p>
        <h4 className="text-sm font-bold  line-clamp-1">{item.title}</h4>
        <p className="text-gray-300 text-xs font-medium line-clamp-2">
          {item.detail}
        </p>
        <div className="mt-2">
          <Button to={`/blogs/${item.id}`} title="READ MORE" />
        </div>
      </div>
    </div>
  );
};

export default BlogCard;

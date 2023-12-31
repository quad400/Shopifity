import React from "react";
import { Link } from "react-router-dom";

const Button = ({ title, to, onClick }) => {
  return (
    <Link
      to={to}
      onClick={onClick}
      className="text-xs hover:bg-tertiary hover:text-black transition-all ease-in-out delay-75 text-white font-medium bg-primary px-3 py-2 rounded-2xl uppercase"
    >
      {title}
    </Link>
  );
};

export default Button;

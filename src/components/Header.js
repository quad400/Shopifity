import React, { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { CiHeart } from "react-icons/ci";
import { FaRegUser } from "react-icons/fa";
import { TiShoppingCart } from "react-icons/ti";
import { CgMenuGridR } from "react-icons/cg";
import { MdArrowDropDown } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Drawer, Dropdown } from "antd";
import DrawerContent from "./DrawerContent";
import { Naira } from "../utils";
import { useSelector } from "react-redux";

const account = [
  {
    key: "1",
    label: <a href="/login">Login</a>,
  },
  {
    key: "2",
    label: <a href="/register">Register</a>,
  },
];

const items = ["Phones", "Laptops", "Watches", "Jwelries", "Bags", "Shoes"];

const Header = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [Search, setSearch] = useState("");
  const { cart, category: categoryList } = useSelector(
    (state) => state.product
  );
  const { isAuthenticated } = useSelector((state) => state.user);

  const navigate = useNavigate()

  function handleFilterByCategory(category) {
    console.log(category)
    navigate(`/category/${category}`)
  }

  return (
    <>
      <header className="w-full">
        <div className="bg-primary px-16 py-1 justify-between items-center flex">
          <p className="text-xs text-white">
            Free Shopping Over $100 & Free Returns
          </p>
          <p className="text-xs text-white">
            Hotline: <a href="tel:+2358106490229">+234-8106490229</a>
          </p>
        </div>
        <div className="bg-secondary px-16 py-4 justify-between items-center flex">
          <Link className="text-white text-3xl font-semibold" to="/">
            Shopifity.
          </Link>
          <div className="w-2/5 bg-white flex justify-between items-center rounded-sm">
            <input
              type="text"
              placeholder="Search Product here..."
              aria-label="Search Product here..."
              aria-describedby="basic-addon2"
              className="w-full outline-none px-2 text-sm font-normal"
            />
            <Link className="justify-center items-center bg-tertiary px-2 py-2 flex rounded-r-sm">
              <IoIosSearch size={20} />
            </Link>
          </div>
          <div className="flex justify-center items-center me-3">
            <li className="flex items-center ml-2 mr-2 justify-between">
              <CiHeart color="#c99608" size={40} />
              <Link to="wishlist">
                <p className="text-white text-sm ml-2">
                  Favourite
                  <br /> Wishlist
                </p>
              </Link>
            </li>
            <Dropdown
              menu={{
                items: account,
              }}
              placement="bottom"
              arrow
            >
              {isAuthenticated ? (
                <></>
              ) : (
                <li className="flex items-center justify-between">
                  <FaRegUser color="#c99608" size={30} />
                  <Link>
                    <p className="text-white text-sm ml-2">
                      Log in <br /> My Account
                    </p>
                  </Link>
                </li>
              )}
            </Dropdown>
            <li className="flex items-center justify-between">
              <TiShoppingCart color="#c99608" size={40} />
              <Link onClick={() => setShowDrawer(true)}>
                <div className=" ml-2">
                  <span className="px-1 rounded-sm text-xs bg-white">
                    {cart === null ? 0 : cart?.products.length}
                  </span>
                  <br />{" "}
                  <p className="text-white text-xs">
                    {cart !== null && Naira.format(cart?.cartTotal)}
                  </p>
                </div>
              </Link>
            </li>
            <NavLink to="admin" className="h-10 w-10 justify-center items-center rounded-full bg-tertiary">
              <p className="text-2xl text-white text-center font-semibold">A</p>
            </NavLink>
          </div>
        </div>
        <div className="flex bg-primary2 px-16 py-2 justify-start items-center">
          <Dropdown
            // className="w-40"
            align="center"
            menu={{
              items: categoryList?.map((item, index) => ({
                key: index,
                label: (
                  <button
                    className="capitalize w-full py-1"
                    onClick={() => handleFilterByCategory(item?._id)}
                  >
                    {item?.title}
                  </button>
                ),
              })),
            }}
            placement="bottom"
            arrow
          >
            <Link className="flex items-center justify-center">
              <CgMenuGridR color="white" size={20} />
              <p className="text-white text-sm ml-2 font-semibold mr-6">
                SHOP CARTEGORIES
              </p>
              <MdArrowDropDown color="white" />
            </Link>
          </Dropdown>
          <ul className="flex ml-6">
            <li>
              <Link to="/" className="mx-3 font-semibold text-white text-sm">
                HOME
              </Link>
            </li>
            <li>
              <Link
                to="/products"
                className="mx-3 font-semibold text-white text-sm"
              >
                OUR STORE
              </Link>
            </li>
            <li>
              <Link
                to="/blogs"
                className="mx-3 font-semibold text-white text-sm"
              >
                BLOGS
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                className="mx-3 font-semibold text-white text-sm"
              >
                CONTACT
              </Link>
            </li>
          </ul>
        </div>
      </header>
      <Drawer
        title="Shopping Cart"
        onClose={() => setShowDrawer(false)}
        open={showDrawer}
      >
        <DrawerContent setShowDrawer={setShowDrawer} />
      </Drawer>
    </>
  );
};

export default Header;

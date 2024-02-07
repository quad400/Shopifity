import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { useDispatch } from "react-redux";
import { fetchUser } from "./features/userSlice";
import { GetCart, GetWishlist, ProductCategories } from "./features/productSlice";

const Layout = () => {
  const dispatch = useDispatch();


  useEffect(() => {
    
    const token = localStorage.getItem("token")
  if(token !== null || token !== undefined){
    dispatch(fetchUser());
    dispatch(GetCart())
    dispatch(GetWishlist())
    dispatch(ProductCategories())

  }
  }, [dispatch]);

  return (
    <>
      <Header />
      <Outlet />

      <Footer />
    </>
  );
};

export default Layout;

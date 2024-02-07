import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./pages/Home";
import OurStore from "./pages/OurStore";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import BlogList from "./pages/BlogList";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import Product from "./pages/Product";
import ForgotPassword from "./pages/ForgotPassword";
import ProductCategory from "./pages/ProductCategory";
import AdminLayout from "./pages/admin/AdminLayout";
import Dashboard from "./pages/admin/Dashboard";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="*" element={<NotFound />} />
            <Route index element={<Home />} />
            <Route path="products" element={<OurStore />} />
            <Route path="products/:id" element={<Product />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="category/:id" element={<ProductCategory />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
            <Route path="cart" element={<Cart />} />
            <Route path="checkout" element={<Checkout />} />
            <Route path="blogs" element={<BlogList />} />
            <Route path="blogs/:id" element={<Blog />} />
            <Route path="contact" element={<Contact />} />
          </Route>
          <Route path="admin" element={<AdminLayout />}>
            
            <Route index element={<Dashboard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import AdminRegistration from "../pages/AdminRegistration";
import Home from "../pages/Home";
import Admin from "./ADMIN/admin";
import Cart from "./Cart";
import Block from "../pages/Block/index";
import Product from "../pages/Product";
import ProductDetails from "./ProductDetails";
import SearchPageDetails from "./SearchPageDetails";
import Medicines from "../pages/Medicines";
import Solarpanel from "../pages/Solarpanel";
import Projector from "../pages/Projector";


const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/block" element={<Block />} />
      <Route path="product" element={<Product />} />
      <Route path="/productDetails/:id" element={<ProductDetails />} />
      <Route path="/searchProduct/:query" element={<SearchPageDetails />} />
      <Route path="/productdtls" element={<AdminRegistration />} />
      <Route path="/productdetails/:id" element={<ProductDetails />} />
      <Route path="/searchpage" element={<SearchPageDetails />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/Medicines" element={<Medicines />} />
      <Route path="/solar" element={<Solarpanel />} />
      <Route path="/Projector" element={<Projector />} />
    </Routes>
  );
};

export default Allroutes;

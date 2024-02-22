import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../pages/Home";
import Products from "../pages/ALLproducts";
import ProductDetails from "../pages/ProductDetails";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import LoginSingup from "../pages/LoginSingup";

import  Dashbord from "../admin/Dashbord"
import AddProduct from "../admin/Components/AddProduct/AddProduct";
import ListProduct from "../admin/Components/ListProduct/ListProduct";
import Alluser from "../admin/Components/Allusers/Alluser";
import Orders from "../admin/Components/orders/Orders";
import { useSelector } from "react-redux";
import NotFound from "../pages/NotFound";
import Contact from "../pages/Contact";
const Routers = () => {
  const { role } = useSelector(state => state.user)
  return (
    <Routes>
      <Route  path='/Dashbord' element={<Dashbord/>}/>
      <Route path="/" element={<Navigate to="/home" />} />
      <Route path="/home" element={<Home />} />
      <Route path="/contact" element={<Contact/>} />
      <Route path="/product" element={<Products/>} />
      <Route path="/cart" element={ role==="user" ? <Cart />:<LoginSingup/>} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/product/:_id" element={<ProductDetails />} />
      <Route path="/login" element={<LoginSingup/>} />
      
      <Route  path='/addproduct' element={role==="admin" ? <AddProduct/> :<NotFound/> }/>
    <Route  path='/listproduct' element={ role==="admin" ?  <ListProduct/> :<NotFound/> }/>
    <Route  path='/alluser' element={role==="admin" ? <Alluser/>:<NotFound/> } />
    <Route  path='/orders' element={role==="admin" ? <Orders/>:<NotFound/> } />
    </Routes>
  );
};

export default Routers;

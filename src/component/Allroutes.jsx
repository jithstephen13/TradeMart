import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRegistration from '../pages/AdminRegistration';
import Home from '../pages/Home';
import ProductPop from '../pages/ProductPop';
import Admin from './ADMIN/admin';
import Cart from './Cart';
import ProductDetails from './ProductDetails';

import Block from '../pages/Block/index';
import Product from '../pages/Product';
import { setItem } from '../utility/localStorage';

 

const Allroutes = () => {
    setItem("admin",null)
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>

            <Route path='/block' element={<Block/>} />
            <Route path='product' element={<Product />} />

            <Route path='/admin' element={<Admin/>} />
             


        </Routes>
    );
};

export default Allroutes;
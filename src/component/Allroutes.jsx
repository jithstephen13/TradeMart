import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from './ADMIN/admin';
import Cart from './Cart';
import Block from '../pages/Block/index';
import Product from '../pages/Product';
 

const Allroutes = () => {
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
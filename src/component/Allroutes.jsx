import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AdminRegistration from '../pages/AdminRegistration';
import Home from '../pages/Home';
import ProductPop from '../pages/ProductPop';
import Admin from './ADMIN/admin';
import Cart from './Cart';
import ProductDetails from './ProductDetails';
 

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admin' element={<Admin/>} />
            <Route path='/productdtls' element={<AdminRegistration/>} />

        </Routes>
    );
};

export default Allroutes;
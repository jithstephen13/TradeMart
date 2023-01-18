import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Admin from './ADMIN/admin';
import Cart from './Cart';
 

const Allroutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/cart' element={<Cart/>}/>
            <Route path='/admin' element={<Admin/>} />

        </Routes>
    );
};

export default Allroutes;
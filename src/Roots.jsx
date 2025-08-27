import React from 'react';
import Home from './Home';
import { Outlet } from 'react-router-dom';

const Roots = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Home></Home>
            <Outlet></Outlet>
        </div>
    );
};

export default Roots;
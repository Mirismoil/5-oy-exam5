import React from 'react';
import { Outlet } from 'react-router-dom';

const Hero = () => {
    return (
        <main>
            <div className='container'>
                <Outlet/>
            </div>
        </main>
    );
}

export default Hero;

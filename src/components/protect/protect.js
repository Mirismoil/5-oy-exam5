import React from 'react';
import { Outlet,Navigate } from 'react-router-dom';
const Protect = ({authentication}) => {
    return (
    <>
    {authentication ? <Outlet/> : <Navigate to ="/login"/>}
    </>
    );
}

export default Protect;

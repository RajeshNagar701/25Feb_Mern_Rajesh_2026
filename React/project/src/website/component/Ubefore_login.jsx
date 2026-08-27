import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Ubefore_login() {

    const Aauth_id = sessionStorage.getItem('uid');
    return Aauth_id ? <Navigate to="/" replace /> : <Outlet/>;
}

export default Ubefore_login
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Abefore_login() {

    const Aauth_id = sessionStorage.getItem('aid');
    return Aauth_id ? <Navigate to="/dashboard" replace /> : <Outlet/>;
}

export default Abefore_login
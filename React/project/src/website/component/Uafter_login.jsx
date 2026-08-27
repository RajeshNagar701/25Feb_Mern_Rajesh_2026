import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Aafter_login() {
  
//The <Outlet /> component in react-router-dom is a placeholder that renders the matching 
// child route element inside a parent route layout. It is the foundation for 
// creating nested routes and persistent UI layouts

  const Aauth_id=sessionStorage.getItem('aid');
  return Aauth_id ? <Outlet/> : <Navigate to="/" replace />;
}

export default Aafter_login
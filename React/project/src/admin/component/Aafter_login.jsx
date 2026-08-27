import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function Aafter_login() {
  const aid = sessionStorage.getItem('aid');
  return aid ? <Outlet /> : <Navigate to="/admin-login" replace />;;
}

export default Aafter_login
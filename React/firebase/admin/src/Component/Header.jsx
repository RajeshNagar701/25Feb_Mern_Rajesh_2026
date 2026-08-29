import React,{useContext} from 'react'
import {useNavigate ,Link, Navigate, NavLink} from 'react-router-dom'

import { Logincontext } from '../App';


function Header() {

  const {SetisLogin}=useContext(Logincontext);
  const navigate=useNavigate();
  function logout()
  {
      localStorage.removeItem('auth_token')
      localStorage.removeItem('auth_name')
      alert('Logout Success');
      navigate('/');
  }


  return (
    <div>
  <div>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1" />
    <meta name="description" content />
    <meta name="author" content />
     
    <div className="navbar navbar-inverse set-radius-zero">
      <div className="container">
        <div className="navbar-header">
          <button type="button" className="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
            <span className="icon-bar" />
            <span className="icon-bar" />
            <span className="icon-bar" />
          </button>
          <a className="navbar-brand" href="index.html">
            <img src="assets/img/logo.png" />
          </a>
        </div>
        <div className="right-div">
          <button onClick={logout} className="btn btn-danger pull-right">LOG ME OUT</button>
        </div>
      </div>
    </div>
    {/* LOGO HEADER END*/}
    <section className="menu-section">
      <div className="container">
        <div className="row ">
          <div className="col-md-12">
            <div className="navbar-collapse collapse ">
              <ul id="menu-top" className="nav navbar-nav navbar-right">
                <li><NavLink to="/dashboard" className="menu-top-active">DASHBOARD</NavLink></li>
                <li><NavLink to="/add_product">Add Product</NavLink></li>
                <li><NavLink to="/view_product">Manage Product</NavLink></li>
                <li><NavLink to="/view_contact">Manage Contact</NavLink></li>
                <li><NavLink to="/view_users">Manage User</NavLink></li>
                <li>
                  <a href="#" className="dropdown-toggle" id="ddlmenuItem" data-toggle="dropdown">Product <i className="fa fa-angle-down" /></a>
                  <ul className="dropdown-menu" role="menu" aria-labelledby="ddlmenuItem">
                    <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="add_product">UI ELEMENTS</NavLink></li>
                    <li role="presentation"><NavLink role="menuitem" tabIndex={-1} to="view_peoduct">EXAMPLE LINK</NavLink></li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    {/* MENU SECTION END*/}
  </div>
  </div>
  )

}

export default Header
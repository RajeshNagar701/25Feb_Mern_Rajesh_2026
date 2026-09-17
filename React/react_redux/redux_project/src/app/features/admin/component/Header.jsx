import React from 'react'
import { Link, NavLink } from 'react-router-dom'

function Header() {
  return (
    <div>
      <div className="p-5 bg-primary text-white text-center">
        <h1>React Redux Crud</h1>
        <p>Resize this responsive page to see the effect!</p>
      </div>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">Dashboard</NavLink>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Category</a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/add_category">Add</Link></li>
                <li><Link class="dropdown-item" to="/manage_category">Manage</Link></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown">Product</a>
              <ul class="dropdown-menu">
                <li><Link class="dropdown-item" to="/add_product">Add</Link></li>
                <li><Link class="dropdown-item" to="/manage_product">Manage</Link></li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </div>

  )
}

export default Header
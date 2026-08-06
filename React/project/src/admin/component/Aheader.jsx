import React from 'react'
import ANav from './ANav'
import { Link, NavLink } from 'react-router-dom'

function Aheader() {
  return (
    <div>
      <div className="sidebar-backdrop" data-sidebar-close />

      <aside className="admin-sidebar" id="adminSidebar" aria-label="Main navigation">
        <div className="sidebar-header">
          <Link className="brand-mark" to="/dashboard" aria-label="adminHMD dashboard">
            <span className="brand-icon"><i className="bi bi-grid-1x2-fill" aria-hidden="true" /></span>
            <span className="brand-copy">
              <span className="brand-title">adminHMD</span>
              <span className="brand-subtitle">Admin Template</span>
            </span>
          </Link>
        </div>
        <nav className="sidebar-nav">
          <NavLink className="nav-link" to="/dashboard" aria-current="page">
            <span className="nav-icon"><i className="bi bi-speedometer2" aria-hidden="true" /></span>
            <span className="nav-text">Dashboard</span>
          </NavLink>
          <NavLink className="nav-link" to="/manage_category">
            <span className="nav-icon"><i className="bi bi-people" aria-hidden="true" /></span>
            <span className="nav-text">Category</span>
          </NavLink>

          <NavLink className="nav-link" to="/manage_product">
            <span className="nav-icon"><i className="bi bi-people" aria-hidden="true" /></span>
            <span className="nav-text">Product</span>
          </NavLink>

          <NavLink className="nav-link" to="/manage_user">
            <span className="nav-icon"><i className="bi bi-person-plus" aria-hidden="true" /></span>
            <span className="nav-text">User</span>
          </NavLink>
          
          <a className="nav-link" href="profile.html">
            <span className="nav-icon"><i className="bi bi-person-badge" aria-hidden="true" /></span>
            <span className="nav-text">Profile</span>
          </a>
        </nav>
        <div className="sidebar-user">
          <img className="avatar-img avatar-md sidebar-user-avatar" src="../assets/images/avatar/avatar.jpg" alt="Admin Hasan" />
          <strong>Admin Hasan</strong>
          <small>Active Workspace</small>
        </div>
        <div className="sidebar-footer">
          <span className="status-dot" />
          <span className="sidebar-footer-text">System running smoothly</span>
        </div>
      </aside>
    </div>

  )
}

export default Aheader
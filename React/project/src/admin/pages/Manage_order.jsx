import React from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'

function Manage_order() {
  return (
    <div className="admin-shell">
      <Aheader />
      <div className="admin-main">
        <ANav />

        <main className="dashboard-content">
          <div className="container-fluid px-3 px-lg-4 py-4">
            <div className="page-heading">
              <div className="page-heading-copy">
                <span className="page-icon"><i className="bi bi-ui-checks-grid" aria-hidden="true" /></span>
                <div>
                  <p className="eyebrow mb-1">Order</p>
                  <h1 className="h3 mb-1">Manage Order</h1>
                </div>
              </div>
            </div>
            <section className="panel">
              <div className="panel-header">
                <input className="form-control form-control-sm table-search" type="search" placeholder="Search User" data-table-search="ordersTable" aria-label="Search orders" />
              </div>


              <div className="table-responsive">
                <table className="table align-middle mb-0" id="ordersTable" data-searchable-table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Email</th>
                      <th>Password</th>
                      <th>Mobile</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">#HMD-2048</td>
                      <td>Rajesh</td>
                      <td>rajesh@gmail.com</td>
                      <td>1234</td>
                      <td>9722041171</td>
                      <td className="text-end">
                        <button className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                        <button className="btn btn-primary btn-sm" type="button">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">#HMD-2048</td>
                      <td>Adeeba</td>
                      <td>adeeba@gmail.com</td>
                      <td>1234</td>
                      <td>8822041171</td>
                      <td className="text-end">
                        <button className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                        <button className="btn btn-primary btn-sm" type="button">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">#HMD-2048</td>
                      <td>Mamata</td>
                      <td>mamata@gmail.com</td>
                      <td>1234</td>
                      <td>8822041171</td>
                      <td className="text-end">
                        <button className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                        <button className="btn btn-primary btn-sm" type="button">Edit</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

          </div>
        </main>
        
        <Afooter />
      </div>

    </div>

  )
}

export default Manage_order
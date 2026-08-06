import React from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'

function Manage_product() {
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
                  <p className="eyebrow mb-1">Product</p>
                  <h1 className="h3 mb-1">Manage Product</h1>
                </div>
              </div>
              <div className='text-end'>
                <Link className='btn btn-primary' to="/add_product"><i className="bi bi-person-plus" aria-hidden="true" />Add</Link>
              </div>
            </div>
            <section className="panel">
              <div className="panel-header">
                <input className="form-control form-control-sm table-search" type="search" placeholder="Search orders" data-table-search="ordersTable" aria-label="Search orders" />
              </div>


              <div className="table-responsive">
                <table className="table align-middle mb-0" id="ordersTable" data-searchable-table>
                  <thead>
                    <tr>
                      <th>ID</th>
                      <th>Product Name</th>
                      <th>Product Image</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="fw-semibold">#HMD-2048</td>
                      <td>Pizza</td>
                      <td>
                        <div className="table-media">
                          <img className="product-thumb" src="../assets/images/ecommerce/product-1.jpg" alt="Wireless Headset" />
                        </div>
                      </td>
                      <td className="text-end">
                        <button className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                        <button className="btn btn-primary btn-sm" type="button">Edit</button>
                      </td>
                    </tr>
                    <tr>
                      <td className="fw-semibold">#HMD-2050</td>
                      <td>Burgur</td>
                      <td>
                        <div className="table-media">
                          <img className="product-thumb" src="../assets/images/ecommerce/product-1.jpg" alt="Wireless Headset" />
                        </div>
                      </td>
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

export default Manage_product
import React from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'

function Add_category() {
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
                  <p className="eyebrow mb-1">Category</p>
                  <h1 className="h3 mb-1">Add Category</h1>
                </div>
              </div>
              <div className='text-end'>
                <Link className='btn btn-primary' to="/manage_category">Back</Link>
              </div>
            </div>
            <section className="row g-3">
              <div className="col-12 col-xl-12">
                <div className='panel'>
                  <form className="needs-validation" noValidate>
                    <div className="row g-3">
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formName">Category name</label>
                        <input className="form-control" id="formName" required />
                        <div className="invalid-feedback">Full name is required.</div>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formEmail">Category Image Upload</label>
                        <input className="form-control" id="formEmail" type="file" required />
                        <div className="invalid-feedback">Valid file is required.</div>
                      </div>

                    </div>
                    <div className="d-flex justify-content-end mt-4">
                      <button className="btn btn-primary" type="submit">
                        <i className="bi bi-send" aria-hidden="true" /> Submit Form
                      </button>
                    </div>
                  </form>
                </div>

              </div>
            </section>
          </div>
        </main>


        <Afooter />

      </div>

    </div>

  )
}

export default Add_category
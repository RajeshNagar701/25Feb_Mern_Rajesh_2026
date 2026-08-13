import React, { useState } from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Add_category() {

  const [formValue,setFormvalue]=useState({
    name:"",
    image:""
  });

  const changeHandel=(e)=>{
      setFormvalue({...formValue,id:new Date().getTime().toString(),[e.target.name]:e.target.value});
      console.log(formValue);
  }

  const submitHandel=async(e)=>{
    e.preventDefault();  // not refresh after form submit
    const res=await axios.post(`http://localhost:3000/category`,formValue);
    setFormvalue({...formValue,name:"",image:""});
    alert('Category Added Success');
    return false;
  }


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
                  <form method='post' onSubmit={submitHandel}>
                    <div className="row g-3">
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formName">Category name</label>
                        <input className="form-control" value={formValue.name} onChange={changeHandel} name="name" id="formName" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formEmail">Category Image Upload</label>
                        <input className="form-control" value={formValue.image} onChange={changeHandel} name="image" id="formEmail" type="url" />
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
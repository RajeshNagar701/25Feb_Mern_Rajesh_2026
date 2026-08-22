import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Add_product() {


  useEffect(() => {
    getdata();
  }, []);

  const [data, setData] = useState([]);
  const getdata = async () => {
    const res = await axios.get(`http://localhost:3000/category`);
    setData(res.data);
  }



  const [formValue, setFormvalue] = useState({
    cate_id: "",
    name: "",
    price: "",
    description: "",
    image: ""
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formValue, id: new Date().getTime().toString(), status: "InStock", [e.target.name]: e.target.value });
    console.log(formValue);
  }

  const submitHandel = async (e) => {
    e.preventDefault();  // not refresh after form submit
    const res = await axios.post(`http://localhost:3000/product`, formValue);
    setFormvalue({ ...formValue, name: "", price: "", description: "", image: "" });
    alert('Product Added Success');
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
                  <p className="eyebrow mb-1">Product</p>
                  <h1 className="h3 mb-1">Add Product</h1>
                </div>
              </div>
              <div className='text-end'>
                <Link className='btn btn-primary' to="/manage_product">Back</Link>
              </div>
            </div>
            <section className="row g-3">
              <div className="col-12 col-xl-12">
                <div className='panel'>
                  <form method='post' onSubmit={submitHandel}>
                    <div className="row g-3">
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formName">Select Category</label>
                        <select  className="form-control" name="cate_id" onChange={changeHandel}>
                          <option value="">------ Select Category ------</option>
                          {
                            data.map((value)=>{
                              return(
                                  <option value={value.id}>{value.name}</option>
                              )
                            })
                          }
                          
                        </select>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formName">Product name</label>
                        <input className="form-control" value={formValue.name} onChange={changeHandel} name="name" id="formName" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formName">Product Price</label>
                        <input className="form-control" value={formValue.price} onChange={changeHandel} name="price" id="formName" />
                      </div>
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formName">Product Description</label>
                        <textarea className="form-control" value={formValue.description} onChange={changeHandel} name="description"></textarea>
                      </div>
                      <div className="col-md-12">
                        <label className="form-label" htmlFor="formEmail">Product Image Upload</label>
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

export default Add_product
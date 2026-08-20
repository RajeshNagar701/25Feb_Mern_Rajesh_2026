import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Manage_category() {

  useEffect(() => {
    getdata();
  }, []);

  const [data, setData] = useState([]);
  const getdata = async () => {
    const res = await axios.get(`http://localhost:3000/category`);
    setData(res.data);

    /*
    fetch(`http://localhost:3000/category`)
      .then(response => response.json())
      .then(json => setData(json));
    */
  }

  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/category/${id}`);
    getdata();
    return res;
  }

  const editHandel = async (id) => {
    const res = await axios.get(`http://localhost:3000/category/${id}`);
    console.log(res.data);
    setFormvalue(res.data);
  }

  const [formValue, setFormvalue] = useState({
    name: "",
    image: ""
  });

  const changeHandel = (e) => {
    setFormvalue({ ...formValue, [e.target.name]: e.target.value });
    console.log(formValue);
  }

  const submitHandel = async (e) => {
    e.preventDefault();  // not refresh after form submit
    const res = await axios.put(`http://localhost:3000/category/${formValue.id}`, formValue);
    alert('Category Updated Success');
    getdata();
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
                  <h1 className="h3 mb-1">Manage Category</h1>
                </div>
              </div>
              <div className='text-end'>
                <Link className='btn btn-primary' to="/add_category"><i className="bi bi-person-plus" aria-hidden="true" />Add</Link>
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
                      <th>Category Name</th>
                      <th>Image</th>
                      <th className="text-end">Action</th>
                    </tr>
                  </thead>
                  <tbody>

                    {
                      data.map((value, index, arr) => {
                        return (
                          <tr key={index}>
                            <td className="fw-semibold">#{value.id}</td>
                            <td>{value.name}</td>
                            <td>
                              <div className="table-media">
                                <img className="product-thumb" src={value.image} />
                              </div>
                            </td>
                            <td className="text-end">
                              <button onClick={() => deletedata(value.id)} className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                              <button onClick={() => editHandel(value.id)} data-bs-toggle="modal" data-bs-target="#myModal" className="btn btn-primary btn-sm" type="button">Edit</button>

                              <div className="modal" id="myModal">
                                <div className="modal-dialog">
                                  <div className="modal-content">
                                    {/* Modal Header */}
                                    <div className="modal-header">
                                      <h4 className="modal-title">Modal Heading</h4>
                                      <button type="button" className="btn-close" data-bs-dismiss="modal" />
                                    </div>
                                    {/* Modal body */}
                                    <div className="modal-body">
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
                                                  <i className="bi bi-send" aria-hidden="true"  data-bs-dismiss="modal" /> Save
                                                </button>
                                              </div>
                                            </form>
                                          </div>

                                        </div>
                                      </section>
                                    </div>
                                    {/* Modal footer */}
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-danger" data-bs-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>


                            </td>
                          </tr>
                        )

                      })
                    }



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

export default Manage_category
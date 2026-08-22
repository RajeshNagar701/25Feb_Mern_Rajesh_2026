import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Manage_user() {

  useEffect(() => {
    getdata();
  }, []);

  const [data, setData] = useState([]);

  const getdata = async () => {
    const res = await axios.get(`http://localhost:3000/user`);
    setData(res.data);
  }

  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/user/${id}`);
    getdata();
    return res;
  }

  const changeStatus = async (id) => {
    const res = await axios.get(`http://localhost:3000/user/${id}`);
    if (res.data.status == "Block") {
      const upd_data = { status: "Unblock" }
      const upd = await axios.patch(`http://localhost:3000/user/${id}`, upd_data);
      alert('Status Unblock Success');
      getdata();
      return false;
    }
    else {
      const upd_data = { status: "Block" }
      const upd = await axios.patch(`http://localhost:3000/user/${id}`, upd_data);
      alert('Status Block Success');
      sessionStorage.removeItem('uid');
      sessionStorage.removeItem('uname');
      getdata();
      return false;
    }
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
                  <p className="eyebrow mb-1">User</p>
                  <h1 className="h3 mb-1">Manage User</h1>
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

                    {
                      data.map((value, index, arr) => {
                        return (
                          <tr key={index}>
                            <td className="fw-semibold">#{value.id}</td>
                            <td>{value.name}</td>
                            <td>{value.email}</td>
                            <td>{value.password}</td>
                            <td>{value.mobile}</td>
                            <td className="text-end">
                              <button onClick={() => deletedata(value.id)} className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                              <button onClick={() => changeStatus(value.id)} type="button" className="btn btn-primary btn-sm me-2">{value.status}</button>
                              <button className="btn btn-success btn-sm" type="button">Edit</button>
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

export default Manage_user
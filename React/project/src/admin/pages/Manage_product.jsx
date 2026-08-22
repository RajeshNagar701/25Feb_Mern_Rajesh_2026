import React, { useEffect, useState } from 'react'
import Afooter from '../component/Afooter'
import ANav from '../component/ANav'
import Aheader from '../component/Aheader'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Manage_product() {

  useEffect(() => {
    getdata();
  }, []);

  const [data, setData] = useState([]);

  const getdata = async () => {
    const res = await axios.get(`http://localhost:3000/product`);
    setData(res.data);
  }

  const deletedata = async (id) => {
    const res = await axios.delete(`http://localhost:3000/product/${id}`);
    getdata();
    return res;
  }

  const changeStatus = async (id) => {
    const res = await axios.get(`http://localhost:3000/product/${id}`);
    if(res.data.status=="InStock")
    {
        const upd_data={status:"OutStock"}
        const upd=await axios.patch(`http://localhost:3000/product/${id}`,upd_data);
        alert('Status OutStock Success');
        getdata();
        return false;
    }
    else
    {
        const upd_data={status:"InStock"}
        const upd=await axios.patch(`http://localhost:3000/product/${id}`,upd_data);
        alert('Status InStock Success');
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
                      <th>Category ID</th>
                      <th>Product Name</th>
                      <th>Price</th>
                      <th>Description</th>
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
                            <td>{value.cate_id}</td>
                            <td>{value.name}</td>
                            <td>{value.price}</td>
                            <td>{value.description}</td>
                            <td>
                              <div className="table-media">
                                <img className="product-thumb" src={value.image} />
                              </div>
                            </td>
                            <td className="text-end">
                              <button onClick={()=>deletedata(value.id)} className="btn btn-danger btn-sm me-2" type="button">Delete</button>
                              <button onClick={()=>changeStatus(value.id)} type="button" className="btn btn-primary btn-sm me-2">{value.status}</button>
                              <button className="btn btn-primary btn-sm" type="button">Edit</button>
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

export default Manage_product
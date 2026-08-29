import axios from 'axios';
import React, { useState, useEffect } from 'react'


function View_product() {
  const [allProduct, SetallProduct] = useState([]);

  useEffect(() => {
    viewProducts()
  },[]);

  const viewProducts = async () => {

    const res = await axios.get('https://adeeba-87361-default-rtdb.firebaseio.com/product.json');
    SetallProduct(res.data);
    console.log(res.data);
  }

  const handelDelete = async (prod_id) => {

    let ans = window.confirm("Are you sure want to delete !");
    if (ans) {
      const res = await axios.delete(`https://thoct-73d1c-default-rtdb.firebaseio.com/product/${prod_id}.json`);
      SetallProduct(res.data);
      viewProducts();
	  return false;
    }
  }

  return (
    <div>
      <div className="content-wrapper">
        <div className="container">
          <div className="row pad-botm">
            <div className="col-md-12">
              <h4 className="header-line">View Product By Firebase</h4>
            </div>
          </div>
          <div className="row">
            <div className="col-md-12">
              {/* Advanced Tables */}
              <div className="panel panel-default">
                <div className="panel-heading">
                  Product List
                </div>
                <div className="panel-body">
                  <div className="table-responsive">
                    <table className="table table-striped table-bordered table-hover" id="dataTables-example">
                      <thead>
                        <tr>
                          <th>Product Key</th>
                          <th>Image</th>
                          <th>Title</th>
                          <th>Description</th>
                          <th>Main Price</th>
                          <th>Dis Price</th>
                          <th>Size</th>
                          <th>Category</th>
                          <th>Stock</th>
                          <th>Delete</th>
                          <th>Edit</th>
                        </tr>
                      </thead>
                      <tbody>
                        {
                          Object.keys(allProduct).map((item, index) => {
                            const { title, file, main_price, disc_price, size, category, stock, desc } = allProduct[item];
                            return (
                              <tr key={index} className="odd gradeX">
                                <td>{index + 1}</td>
                                <td><img src={file} width="30px" /></td>
                                <td>{title}</td>
                                <td>{desc}</td>
                                <td>{main_price}</td>
                                <td>{disc_price}</td>
                                <td>{size}</td>
                                <td>{category}</td>
                                <td>{stock}</td>
                                <td className="center"><button onClick={() => handelDelete(item)} className="btn btn-danger">Delete</button></td>
                                <td className="center"><button onClick="" className="btn btn-primary" data-toggle="modal" data-target="#myModal">Edit</button></td>
                              </tr>
                            )

                          })
                        }

                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              {/*End Advanced Tables */}
            </div>
          </div>
        </div>
      </div>
    </div>


  )
}

export default View_product
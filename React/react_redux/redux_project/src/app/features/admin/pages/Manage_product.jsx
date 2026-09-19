import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { del_product, get_product, upd_product } from '../../../productSlice';
import { toast } from 'react-toastify';
import { get_category } from '../../../categorySlice';


function Manage_product() {


    const dispatch = useDispatch(); // we can access any slice function
    useEffect(() => {
        dispatch(get_category())
        dispatch(get_product())
    });

    const { prod_arr } = useSelector((state) => { return state.product });
    const { cate_arr } = useSelector((state) => { return state.category });

    const deletedata = async (id) => {
        dispatch(del_product(id));
        toast.success('Product Deleted Success');
    }


    const editdata = async (id) => {
        const filterData = prod_arr.filter((value) => value.id == id);
        setFormValue(filterData[0]);
    }

    const [formValue, setFormValue] = useState({
        name: "",
        price: "",
        description: "",
        image: "",
    });

    const changeHandel = (e) => {
        setFormValue({ ...formValue, [e.target.name]: e.target.value });
        console.log(formValue);
    }

    function validation() {
        var result = true;
        if (formValue.name == "" || formValue.name == null) {
            toast.error('Name field is required');
            result = false;
            return false;
        }
        if (formValue.price == "" || formValue.price == null) {
            toast.error('price field is required');
            result = false;
            return false;
        }
        if (formValue.description == "" || formValue.description == null) {
            toast.error('description field is required');
            result = false;
            return false;
        }
        if (formValue.image == "" || formValue.image == null) {
            toast.error('image field is required');
            result = false;
            return false;
        }
        return result;
    }

    const submithandel = (e) => {
        e.preventDefault();
        if (validation()) {

            // call cateSlice insert function
            dispatch(upd_product(formValue));
            toast.success('Product Updated Success');
            return false;
        }

    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Manage Product</h2>
                        <div className="container mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category Id</th>
                                        <th>Product Name</th>
                                        <th>Price</th>
                                        <th>Description</th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        prod_arr.map((value) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.cate_id}</td>
                                                    <td>{value.name}</td>
                                                    <td>{value.price}</td>
                                                    <td>{value.description}</td>
                                                    <td><img src={value.image} width="80px" alt="" /></td>
                                                    <td><button onClick={() => deletedata(value.id)} className='btn btn-danger'>Delete</button></td>
                                                    <td><button onClick={() => editdata(value.id)} data-bs-toggle="modal" data-bs-target="#myModal" className='btn btn-danger'>Edit</button></td>
                                                </tr>
                                            )

                                        })
                                    }
                                </tbody>
                            </table>


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
                                                        <form action="" onSubmit={submithandel}>
                                                            <div className="mb-3 mt-3">
                                                                <label htmlFor="email">Choose Category:</label>
                                                                <select type="name" onChange={changeHandel} className="form-control" name="cate_id">
                                                                    {
                                                                        cate_arr.map((value) => {
                                                                            return (
                                                                                <option value={value.id}>{value.name}</option>
                                                                            )
                                                                        })
                                                                    }

                                                                </select>
                                                            </div>
                                                            <div className="mb-3 mt-3">
                                                                <label htmlFor="email">Product Name:</label>
                                                                <input type="text" value={formValue.name} onChange={changeHandel} className="form-control" id="name" placeholder="Enter name" name="name" />
                                                            </div>
                                                            <div className="mb-3 mt-3">
                                                                <label htmlFor="email">Product Price:</label>
                                                                <input type="number" value={formValue.price} onChange={changeHandel} className="form-control" id="name" placeholder="Enter price" name="price" />
                                                            </div>
                                                            <div className="mb-3 mt-3">
                                                                <label htmlFor="email">Product dESCRIPTION:</label>
                                                                <textarea type="number" value={formValue.description} onChange={changeHandel} className="form-control" id="name" placeholder="Enter description" name="description" />
                                                            </div>
                                                            <div className="mb-3">
                                                                <label htmlFor="pwd">Product Image URL:</label>
                                                                <input type="url" value={formValue.image} onChange={changeHandel} className="form-control" id="pwd" placeholder="Enter image URL" name="image" />
                                                            </div>

                                                            <button type="submit" className="btn btn-primary">Submit</button>
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
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Manage_product
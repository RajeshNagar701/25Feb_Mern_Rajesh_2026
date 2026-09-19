import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { del_category, get_category, upd_category } from '../../../categorySlice';
import { toast } from 'react-toastify';

function Manage_category() {


    const dispatch = useDispatch(); // we can access any slice function
    useEffect(() => {
        dispatch(get_category())
    });

    const { cate_arr } = useSelector((state) => { return state.category })

    const deletedata = async (id) => {
        dispatch(del_category(id));
        toast.success('Category Deleted Success');
    }

    
    const editdata = async (id) => {
        const filterData=cate_arr.filter((value)=> value.id==id);
        setFormValue(filterData[0]);
    }

    const [formValue, setFormValue] = useState({
        name: "",
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
            dispatch(upd_category(formValue));
            toast.success('Category Updated Success');
            return false;
        }

    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Manage Category</h2>
                        <div className="container mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category </th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cate_arr.map((value) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
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
                                                        <form method='post' onSubmit={submithandel}>
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
                                                                <button className="btn btn-primary" type="submit" data-bs-dismiss="modal">
                                                                    <i className="bi bi-send" aria-hidden="true" /> Save
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
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Manage_category
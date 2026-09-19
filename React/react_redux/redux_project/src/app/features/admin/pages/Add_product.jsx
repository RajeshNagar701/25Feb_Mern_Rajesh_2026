import React, { useEffect, useState } from 'react'
import { get_category } from '../../../categorySlice';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { add_product } from '../../../productSlice';

function Add_product() {


    const dispatch = useDispatch(); // we can access any slice function
    useEffect(() => {
        dispatch(get_category())
    });

    const { cate_arr } = useSelector((state) => { return state.category })

    const [formValue, setFormValue] = useState({
        cate_id:"",
        name: "",
        price:"",
        description:"",
        image: "",
    });

    const changeHandel = (e) => {
        setFormValue({ ...formValue, id: new Date().getTime().toString(),status:"InStock",[e.target.name]: e.target.value });
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
            dispatch(add_product(formValue));
            setFormValue({ ...formValue, name: "",price:"",description:"", image: "" });
            toast.success('Product Added Success');
            return false;
        }

    }


    return (

        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Product</h2>
                        <div className="container mt-3">
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
                </div>
            </div>
        </div>

    )
}

export default Add_product
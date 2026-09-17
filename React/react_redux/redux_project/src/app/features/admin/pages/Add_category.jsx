import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import { add_category } from '../../../categorySlice';

function Add_category() {

    const [formValue, setFormValue] = useState({
        name: "",
        image: "",
    });

    const changeHandel = (e) => {
        setFormValue({ ...formValue, id: new Date().getTime().toString(),[e.target.name]: e.target.value });
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

    const dispatch=useDispatch();

    const submithandel = (e) => {
        e.preventDefault();
        if (validation()) {

            // call cateSlice insert function
            dispatch(add_category(formValue));
            setFormValue({ ...formValue, name: "", image:""});
            toast.success('Category Added Success');
            return false;
        }

    }


    return (

        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>Add Category</h2>
                        <div className="container mt-3">
                            <form action="" onSubmit={submithandel}>
                                <div className="mb-3 mt-3">
                                    <label htmlFor="email">Category Name:</label>
                                    <input type="name" value={formValue.name} onChange={changeHandel} className="form-control" id="name" placeholder="Enter name" name="name" />
                                </div>
                               
                                <div className="mb-3">
                                    <label htmlFor="pwd">Category Image URL:</label>
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

export default Add_category
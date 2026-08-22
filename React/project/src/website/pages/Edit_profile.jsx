import React, { useEffect, useState } from 'react'
import { Link, redirect, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

function Edit_profile() {

    const redirect = useNavigate();

    useEffect(() => {
        editdata();
    }, []);

    const { id } = useParams();    // we can get id from url as parameter

    const editdata = async () => {
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setFormvalue(res.data);
    }

    const [formValue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, [e.target.name]: e.target.value });
        console.log(formValue);
    }

    const submitHandel = async (e) => {
        e.preventDefault();  // not refresh after form submit
        const res = await axios.patch(`http://localhost:3000/user/${id}`, formValue);
        redirect('/user_profile');
        alert('Update Success');
    }

    return (
        <div>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Edit Profile Here
                        </h2>
                    </div>
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <div className="form_container">
                                <form method='post' onSubmit={submitHandel}>

                                    <div>
                                        <input type="text" value={formValue.name} name='name' onChange={changeHandel} className="form-control" placeholder="Your Name" />
                                    </div>
                                    <div>
                                        <input type="email" value={formValue.email} name='email' onChange={changeHandel} className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <input type="password" value={formValue.password} name='password' onChange={changeHandel} className="form-control" placeholder="Your Password" />
                                    </div>
                                    <div>
                                        <input type="number" value={formValue.mobile} name='mobile' onChange={changeHandel} className="form-control" placeholder="Your Mobile" />
                                    </div>

                                    <div className="btn_box">
                                        <button type='submit'>
                                            Save
                                        </button>
                                    </div>
                                </form>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* end book section */}
        </div>

    )
}

export default Edit_profile
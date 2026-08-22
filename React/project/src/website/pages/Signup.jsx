import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

function Signup() {

    const [formValue, setFormvalue] = useState({
        name: "",
        email: "",
        password: "",
        mobile: ""
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, id: new Date().getTime().toString(),status:"Unblock", [e.target.name]: e.target.value });
        console.log(formValue);
    }

    const submitHandel = async (e) => {
        e.preventDefault();  // not refresh after form submit
        const res = await axios.post(`http://localhost:3000/user`, formValue);
        setFormvalue({ ...formValue, name: "", email: "",password:"",mobile:"" });
        alert('Signup Success');
        return false;
    }



    return (
        <div>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Signup Here for Order
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
                                        <button>
                                            Signup Here
                                        </button>
                                    </div>
                                </form>

                                <div className="text-right mt-3">
                                    <Link to="/login">Login Here</Link>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>
            {/* end book section */}
        </div>

    )
}

export default Signup
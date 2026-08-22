import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import swal from 'sweetalert';

function Login() {

    const [formValue, setFormvalue] = useState({
        email: "",
        password: "",
    });

    const changeHandel = (e) => {
        setFormvalue({ ...formValue, [e.target.name]: e.target.value });
        console.log(formValue);
    }

    const redirect = useNavigate(); // for any page redirect
    const submitHandel = async (e) => {
        e.preventDefault();
        const res = await axios.get(`http://localhost:3000/user?email=${formValue.email}`,);
        //console.log(res.data);
        if (res.data.length > 0) {

            if (res.data[0].password == formValue.password) {
                if (res.data[0].status == "Unblock") {
                    sessionStorage.setItem('uid', res.data[0].id);
                    sessionStorage.setItem('uname', res.data[0].name);
                    swal({
                        title: "Good job!",
                        text: "Login Success !",
                        icon: "success",
                    });
                    return redirect('/');
                }
                else {
                    setFormvalue({ ...formValue, email: "", password: "" });
                    swal({
                        title: "Failed!",
                        text: "Login Failed ! Block Account, Contact Customer Care !",
                        icon: "error",
                    });
                    return false;
                }
            }
            else {
                setFormvalue({ ...formValue, email: "", password: "" });
                swal({
                    title: "Failed!",
                    text: "Login Failed ! Password Missmatch !",
                    icon: "error",
                });
                alert('');
                return false;
            }
        }
        else {
            setFormvalue({ ...formValue, email: "", password: "" });
            swal({
                title: "Failed!",
                text: "Login Failed ! Email dose not exits !",
                icon: "error",
            });
            return false;
        }
    }

    return (
        <div>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Login Here for Order
                        </h2>
                    </div>
                    <div className="row">
                        <div className="offset-md-3 col-md-6">
                            <div className="form_container">
                                <form action="" method='post' onSubmit={submitHandel}>

                                    <div>
                                        <input type="email" value={formValue.email} onChange={changeHandel} name='email' className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <input type="password" value={formValue.password} onChange={changeHandel} name='password' className="form-control" placeholder="Your Password" />
                                    </div>

                                    <div className="btn_box">
                                        <button name='submit' type='submit'>
                                            Login Here
                                        </button>
                                    </div>
                                </form>

                                <div className="text-right mt-3">
                                    <Link to="/signup">Signup Here</Link>
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

export default Login
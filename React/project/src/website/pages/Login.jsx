import React from 'react'
import { Link } from 'react-router-dom'

function Login() {
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
                                <form action>

                                    <div>
                                        <input type="email" className="form-control" placeholder="Your Email" />
                                    </div>
                                    <div>
                                        <input type="password" className="form-control" placeholder="Your Password" />
                                    </div>

                                    <div className="btn_box">
                                        <button>
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
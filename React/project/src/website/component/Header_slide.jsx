import React from 'react'
import { Link, NavLink, useNavigate } from 'react-router-dom'

function Header_slide() {

    const redirect = useNavigate();
    const user_logout = () => {
        sessionStorage.removeItem('uid');
        sessionStorage.removeItem('uname');
        alert('Logout Success !');
        return redirect('/');
    }
    return (
        <div>
            <div className="hero_area">
                <div className="bg-box">
                    <img src="website/images/hero-bg.jpg" alt />
                </div>
                {/* header section strats */}
                <header className="header_section">
                    <div className="container">
                        <nav className="navbar navbar-expand-lg custom_nav-container ">
                            <Link className="navbar-brand" to="/">
                                <span>
                                    Feane
                                </span>
                            </Link>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className> </span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav  mx-auto ">
                                    <li className="nav-item ">
                                        <NavLink className="nav-link" to="/">Home </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/menu">Menu</NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">About </NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/book">Book Table</NavLink>
                                    </li>
                                </ul>
                                <div className="user_option">

                                    {(() => {
                                        if (sessionStorage.getItem('uid')) {
                                            return (
                                                <>
                                                    <Link to="/user_profile" className="user_link">
                                                        Hi.. {sessionStorage.getItem('uname')} <i className="fa fa-user" aria-hidden="true" />
                                                    </Link>
                                                    <Link to="#" onClick={user_logout} className="order_online">
                                                        Logout
                                                    </Link>
                                                </>
                                            )
                                        }
                                        else {
                                            return (
                                                <Link to="/login" className="order_online">
                                                    Order Food
                                                </Link>
                                            )
                                        }
                                    })()}

                                </div>
                            </div>
                        </nav>
                    </div>
                </header>
                {/* end header section */}
                {/* slider section */}
                <section className="slider_section ">
                    <div id="customCarousel1" className="carousel slide" data-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7 col-lg-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Fast Food Restaurant
                                                </h1>
                                                <p>
                                                    Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Order Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item ">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7 col-lg-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Fast Food Restaurant
                                                </h1>
                                                <p>
                                                    Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Order Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <div className="container ">
                                    <div className="row">
                                        <div className="col-md-7 col-lg-6 ">
                                            <div className="detail-box">
                                                <h1>
                                                    Fast Food Restaurant
                                                </h1>
                                                <p>
                                                    Doloremque, itaque aperiam facilis rerum, commodi, temporibus sapiente ad mollitia laborum quam quisquam esse error unde. Tempora ex doloremque, labore, sunt repellat dolore, iste magni quos nihil ducimus libero ipsam.
                                                </p>
                                                <div className="btn-box">
                                                    <a href className="btn1">
                                                        Order Now
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="container">
                            <ol className="carousel-indicators">
                                <li data-target="#customCarousel1" data-slide-to={0} className="active" />
                                <li data-target="#customCarousel1" data-slide-to={1} />
                                <li data-target="#customCarousel1" data-slide-to={2} />
                            </ol>
                        </div>
                    </div>
                </section>
                {/* end slider section */}
            </div>
        </div>

    )
}

export default Header_slide
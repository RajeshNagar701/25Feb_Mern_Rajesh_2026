import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom';

function User_profile() {

    const redirect=useNavigate();
    useEffect(() => {
        getdata();
    }, []);

    const [data, setData] = useState({});
    const getdata = async () => {
        const id=sessionStorage.getItem('uid');
        const res = await axios.get(`http://localhost:3000/user/${id}`);
        setData(res.data);
    }

    return (
        <div>
            <section className="book_section layout_padding">
                <div className="container">
                    <div className="heading_container">
                        <h2>
                            Hi... {sessionStorage.getItem('uname')}
                        </h2>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <section className="offer_section layout_padding-bottom">
                                <div className="offer_container">
                                    <div className="container ">
                                        <div className="row">
                                            <div className="offset-md-3 col-md-6">
                                                <div className="box ">
                                                    <div className="img-box">
                                                        <img src="website/images/o2.jpg" alt />
                                                    </div>
                                                    <div className="detail-box">
                                                        <h5>
                                                           {data.name}
                                                        </h5>
                                                        <h6>
                                                           {data.email}
                                                        </h6>
                                                        <h6>
                                                           {data.mobile}
                                                        </h6>
                                                        <h6>
                                                            <span>Id : {data.id}</span>
                                                        </h6>
                                                        <button className='btn btn-warning' onClick={()=>redirect('/edit_profile/'+ data.id)}>
                                                            Edit Profile
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </div>
                    </div>
                </div>
            </section>
            {/* end book section */}
        </div>

    )
}

export default User_profile
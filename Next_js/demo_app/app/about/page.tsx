'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';

function About() {

    useEffect(() => {
        fetch();
    })
    const [data, setData] = useState([]);
    const fetch = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products`);
        setData(response.data);
    }


    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>View Product</h2>
                        <h5>Photo of me:</h5>
                        <div className="fakeimg">Fake Image</div>
                        <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                        <h3 className="mt-4">Some Links</h3>
                        <p>Lorem ipsum dolor sit ame.</p>
                        <div className='row'>


                            {
                                data.map((value) => {
                                    return (
                                        <div className="col-md-3">
                                            <div className="card" style={{ width: '100%' }}>
                                                <img className="card-img-top" src={value.image} height="200px" alt="Card image" />
                                                <div className="card-body">
                                                    <h4 className="card-title">{value.title}</h4>
                                                    <p className="card-text">{value.category}</p>
                                                    <Link href={`/about/${value.id}`} className="btn btn-primary">See Product</Link>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
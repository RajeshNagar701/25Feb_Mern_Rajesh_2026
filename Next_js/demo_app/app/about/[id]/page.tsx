'use client'
import React, { useEffect, useState } from 'react'
import { useParams } from 'next/navigation';
import Link from 'next/link';
import axios from 'axios';


function About() {

    const { id } = useParams();
     useEffect(() => {
        fetch();
    })
    const [data, setData] = useState({});
    const fetch = async () => {
        const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
        setData(response.data);
    }
    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-12">
                        <h2>View Product</h2>
                        <h5>Id : {data.id}</h5>
                        <h5>title : {data.title}</h5>
                        <h5>price : {data.price}</h5>
                        <h5>description : {data.description}</h5>
                        <h5>category : {data.category}</h5>
                        <img src={data.image} width="100px" alt="" />
                        <Link href="/about">Back</Link>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About
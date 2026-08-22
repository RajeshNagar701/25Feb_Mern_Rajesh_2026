import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Menu() {

    useEffect(() => {
        getdata();
        getdata1("");
    }, []);

    const [category, setCategory] = useState([]);
    const getdata = async () => {
        const res = await axios.get(`http://localhost:3000/category`);
        setCategory(res.data);
    }

    const [product, setProduct] = useState([]);
    const getdata1 = async (id) => {
        if (id) {
            const res = await axios.get(`http://localhost:3000/product?cate_id=${id}`);
            setProduct(res.data);
        }
        else {
            const res = await axios.get(`http://localhost:3000/product`);
            setProduct(res.data);
        }
    }




    return (
        <div>
            <section className="food_section layout_padding">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>
                            Our Menu
                        </h2>
                    </div>
                    <ul className="filters_menu">
                        <li className='active' onClick={() => getdata1("")}>All</li>
                        {
                            category.map((value, index, arr) => {
                                return (

                                    <li key={index} onClick={() => getdata1(value.id)}>
                                        {value.name}
                                    </li>
                                )
                            })
                        }
                    </ul>
                    <div className="filters-content">
                        <div className="row grid">
                            {
                                product.map((value, index, arr) => {
                                    if (value.status == "InStock") {
                                        return (
                                            <div className="col-sm-6 col-lg-4 all pizza">
                                                <div className="box">
                                                    <div>
                                                        <div className="img-box">
                                                            <img src={value.image} class="rounded-circle" alt />
                                                        </div>
                                                        <div className="detail-box">
                                                            <h5>
                                                                {value.name}
                                                            </h5>
                                                            <p>
                                                                {value.description}
                                                            </p>
                                                            <div className="options">
                                                                <h6>
                                                                    ${value.price}
                                                                </h6>
                                                                <a href="">
                                                                    Add
                                                                </a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        )
                                    }
                                })
                            }


                        </div>
                    </div>
                    <div className="btn-box">
                        <a href>
                            View More
                        </a>
                    </div>
                </div>
            </section>
        </div>

    )
}

export default Menu
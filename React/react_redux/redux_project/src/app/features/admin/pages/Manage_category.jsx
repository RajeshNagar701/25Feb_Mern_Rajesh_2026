import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { get_category } from '../../../categorySlice';

function Manage_category() {


    const dispatch = useDispatch(); // we can access any slice function
    useEffect(() => {
        dispatch(get_category())
    });

    const { cate_arr } = useSelector((state) => { return state.category })

    return (
        <div>
            <div className="container mt-5">
                <div className="row">
                    <div className="col-sm-8">
                        <h2>Manage Category</h2>
                        <div className="container mt-3">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Category </th>
                                        <th>Photo</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        cate_arr.map((value) => {
                                            return (
                                                <tr>
                                                    <td>{value.id}</td>
                                                    <td>{value.name}</td>
                                                    <td><img src={value.image} width="80px" alt="" /></td>
                                                </tr>
                                            )

                                        })
                                    }
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    )
}

export default Manage_category
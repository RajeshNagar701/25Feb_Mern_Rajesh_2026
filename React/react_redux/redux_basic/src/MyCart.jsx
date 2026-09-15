import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Change, Minus, Plus } from './app/features/cartSlice';

function MyCart() {

    // we can access any state from slice by useSelecter()
    // we can access any action from slice by useDispatch()


    const {number,name} =useSelector((state)=>{ return state.cart});
    const dispatch=useDispatch();

    return (
        <div className='container mt-5'>
            <button onClick={()=> dispatch(Plus())} className='btn btn-primary'>+</button>
            <h1>{number}</h1>
            <button onClick={()=> dispatch(Minus())} className='btn btn-primary'>-</button>

            <hr />

            <button onClick={()=> dispatch(Change())} className='btn btn-warning'>Change</button>
            <h1>{name}</h1>
        </div>
    )
}

export default MyCart
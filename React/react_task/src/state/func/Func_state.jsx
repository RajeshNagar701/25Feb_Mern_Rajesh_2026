
/*

React components has a built-in state object.
React is mutable state object
The state object is where you store property values that belong to the component.
When the state object changes, the component re-renders.

The React useState Hook allows us to track state in a function component.

Import useState
We initialize our state by calling useState in our function component.
useState accepts an initial state and returns two values:

The current state.
A function that updates the state.

var [name,setName]=usestate("Rajesh nagar");
{name}

var [mydata,setMydata]=usestate({
        id:"1",
        name:"Rajesh nagar",
        age:33,
        mobile:31548799
});

{mydata.name}

*/


import React, { useState } from 'react'
import Func_img from './Func_img'

function Func_state() {


    const [data,setData]=useState("Tops Technologies")

    const [obj, setObj] = useState({
        name: "raj",
        number: 1,
        isImage: true
    })

    return (
        <div>
            <button onClick={() => setData("Tops Tech")} className='btn btn-primary'>Change</button>
            <h1>{data}</h1>

            <hr />

            <button onClick={() => setObj({ ...obj, name: "Raj Nagar" })} className='btn btn-primary'>Change</button>
            <h1>Hi i am {obj.name}</h1>
            <hr />

            <button onClick={() => setObj({ ...obj, number: obj.number + 1 })} className='btn btn-primary'>+</button>
            <h1>{obj.number}</h1>
            <button onClick={() => setObj({ ...obj, number: obj.number - 1 })} className='btn btn-primary'>-</button>

            <hr />
            <button onClick={() => setObj({ ...obj, isImage: false })} className='btn btn-primary me-2'>Hide</button>
            <button onClick={() => setObj({ ...obj, isImage: true })} className='btn btn-primary me-2'>Show</button>
            <button onClick={() => setObj({ ...obj, isImage: !obj.isImage })} className='btn btn-primary me-2'>Hide/Show</button>
            {
                obj.isImage ? <Func_img/> : null
            }

        </div>
    )
}

export default Func_state
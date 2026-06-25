/*
There are 3 phases in the React Component LifeCycle


Mounting Phase
Updating Phase
Unmounting Phase

The useEffect Hook allows you to perform side effects in your components.

Some examples of side effects are: fetching data, directly updating the DOM, and timers.

useEffect accepts two arguments. The second argument is optional.

useEffect(<function>, <dependency>)

1. No dependency passed:

useEffect(() => {
  //Runs on every render
});


2. An empty array:

useEffect(() => {
  //Runs only on the first render & dependancy pass state
}, []);


3. Props or state values:

useEffect(() => {
  //Runs on the first render
  //And any time any dependency value changes
}, [prop, state])

*/

import React, { useEffect, useState } from 'react'
import LifeImg_func from './LifeImg_func'

function LifeFunc() {

    const [obj, setObj] = useState({
        number: 1,
        isImage: false
    })

    // mounting/updating
    useEffect(() => {
        console.log("Hello i am mount/updating");
    }, [obj.isImage]);


    return (
        <div>
            <button onClick={() => setObj({ ...obj, number: obj.number + 1 })} className='btn btn-primary'>+</button>
            <h1>{obj.number}</h1>
            <button onClick={() => setObj({ ...obj, number: obj.number - 1 })} className='btn btn-primary'>-</button>


            <hr />
            <button onClick={() => setObj({ ...obj, isImage: !obj.isImage })} className='btn btn-primary me-2'>Hide/Show</button>
            {
                obj.isImage ? <LifeImg_func /> : null
            }
        </div>
    )
}

export default LifeFunc
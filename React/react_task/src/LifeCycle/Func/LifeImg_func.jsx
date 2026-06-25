import React, { useEffect } from 'react'
function LifeImg_func() {

    /*
    // Mounting
    useEffect(()=>{
        console.log("Hello i am Mounting/loading");
    })
    */  

    // Unmounting/unload
    /*
    
    useEffect(()=>{
        return(()=>{
            console.log("Hello i am Unmounting/loading");
        })
    })

    */    
    return (
        <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQEwL84l73tWyp5uQltmrdAN_FxIlZdPwafGw&s" alt="" width="100px" />
        </div>
    )
}

export default LifeImg_func
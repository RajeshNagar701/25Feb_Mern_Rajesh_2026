import React from 'react'
import './Css_apply.css'  // import external css


// all css merge in index.html & conflict all class in app then solution is module.css

function Css_apply() {

  const myhead={color:'pink',backgroundColor:'red'}

  return (
    <div className='container'>
        <h1 style={{color:'red',backgroundColor:'yellow'}}>Inline css</h1>

        <h1 style={myhead}>Inline css</h1>

        <h1 className='big_box'>Inline css</h1>
    </div>
  )
}

export default Css_apply
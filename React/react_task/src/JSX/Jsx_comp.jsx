
/*

JSX stands for JavaScript XML.
JSX allows us to write HTML in React.
JSX makes it easier to write and add HTML in React.

JSX allows us to write HTML elements in JavaScript and place them in the DOM without any 
createElement()  and/or appendChild() methods.

JSX converts HTML tags into react elements.

*/


import React from 'react'
import './jsx_style.css' // import external css


function Jsx_comp() {

    var name = "Raj Nagar";
    const myelement = <h1>I Love JSX!</h1>;
    const myelement1 = <h1>React is {5 + 5} times better with JSX</h1>;
    const myelement2 = (
        <ul>
            <li>Apples</li>
            <li>Bananas</li>
            <li>Cherries</li>
        </ul>
    );
    const mystyle = { color: 'pink', backgroundColor: 'red' }

    return (
        <div className='p-5'>
            <h1>{name}</h1>
            {myelement}
            {myelement1}
            {myelement2}
            <hr />
            <h1 style={{ color: 'red', backgroundColor: 'pink' }}>Hello i am jsx style</h1>
            <h1 style={mystyle}>Hello i am jsx style</h1>

            <hr />

            <h1 className='box'>Hi i am external css</h1>
            <h1 class="box">Hi i am external css</h1>

        </div>
    )
}

export default Jsx_comp
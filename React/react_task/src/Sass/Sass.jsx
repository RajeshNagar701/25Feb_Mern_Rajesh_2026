/*

Sass is a CSS pre-processor.
Sass (Syntactically Awesome Stylesheets) is a CSS preprocessor 
that extends CSS by adding features like 

variables, 
nesting,
mixins, 
and more, making it easier to write and maintain stylesheets. 

Sass files are executed on the server and sends CSS to the browser.

npm i sass

Create a Sass file : mystyle.scss

import : import './mystyle.scss'

*/

import React from 'react'

import './mystyles.scss';

function Sass() {
    return (
        <div>
            <div className='box1'>hello</div>
            <hr />
            <nav>
                <ul>
                    <li><a href="#">HTML</a></li>
                    <li><a href="#">CSS</a></li>
                    <li><a href="#">SASS</a></li>
                </ul>
            </nav>

            <hr />

            <h1></h1>
            <h1 className='myproperties'>Hi i am SASS nested properties</h1>
            <h1 className='myproperties1'>Hi i am SASS nested properties</h1>

            <hr />

            <button className='button-basic'>Basic Button</button>
            <button className='red-basic'>Red Button</button>
            <button className='green-basic'>Green Button</button>
            <button className='blue-basic'>Basic Button</button>
            <button className='orange-basic'>Basic Button</button>
            <button className='purple-basic'>Basic Button</button>

        </div>


    )
}

export default Sass
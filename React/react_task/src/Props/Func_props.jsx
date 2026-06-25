/*
Props are arguments passed into React components.

Props are passed to components via HTML attributes.
props stands for properties/argument.

======================================================

prop-types

React applications to validate the data types of properties (props) passed from parent 
to child components

npm install prop-types

// Assign the special propTypes property
UserProfile.propTypes = {
  username: PropTypes.string.isRequired, // Enforces a required string
  age: PropTypes.number,                  // Optional number
  isAdmin: PropTypes.bool                 // Optional boolean
};

*/

import React from 'react'
import PropTypes from 'prop-types';

function Func_props({img,title,desc}) {
    return (
        <div className='col-md-3'>
            <div className="card" style={{ width: '100%' }}>
                <img className="card-img-top" src={img} alt="Card image" />
                <div className="card-body">
                    <h4 className="card-title">{title}</h4>
                    <p className="card-text">{desc}</p>
                    <a href="#" className="btn btn-primary">See Profile</a>
                </div>
            </div>
        </div>
    )
}

// Assign the special propTypes property
Func_props.propTypes = {
  img: PropTypes.string.isRequired, // Enforces a required string
  title: PropTypes.string,                // Optional number
  desc: PropTypes.bool                    // Optional boolean
};

export default Func_props
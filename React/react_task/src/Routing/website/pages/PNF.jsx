import React from 'react'
import { Link } from 'react-router-dom'

function PNF() {
    return (
        <div>
            <div className="p-5 bg-primary text-white text-center">
                <h1>404</h1>
                <p>Page Not Found</p>
            </div>
            <div className="container mt-5 mb-5">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h1>404</h1>
                        <p>Page Not Found</p>
                        <Link to="/" className='btn btn-primary'>Back</Link>
                    </div>
                </div>
            </div>
            <div className="mt-5 p-4 bg-dark text-white text-center">
                <p>Footer</p>
            </div>
        </div>
    )
}

export default PNF
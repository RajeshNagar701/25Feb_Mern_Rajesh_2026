/*

Lifecycle of Components
Each component in React has a lifecycle which you can monitor and manipulate during 
its three main phases.

The three phases are: 

Mounting,   => componentDidMount() =>method is called after the component is rendered.
Updating => componentDidUpdate() => method is called after the component is updated in the DOM. 
Unmounting => componentWillUnmount() => method is called after the component is remove in the DOM.

Note : Before use Remove <React.StrictMode> from index.js

*/



import React, { Component } from 'react'
import LifeImg_class from './LifeImg_class'

export class LifeClass extends Component {
    constructor() {
        super()
        this.state = {
            isImage: false
        }
    }

    // Component Update 
    componentDidUpdate() {
        console.log('Main Component Updating (update)');
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setState({ isImage: !this.state.isImage })} className='btn btn-primary me-2'>Hide/Show</button>
                {
                    this.state.isImage ? <LifeImg_class /> : null
                }
            </div>
        )
    }
}

export default LifeClass
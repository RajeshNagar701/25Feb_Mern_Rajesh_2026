
/*
Using the state Object
Refer to the state object anywhere in the component by using the 

constructor(){
    super();
    this.state = {
            name: "Rajesh Nagar",
    }
}
print : {this.state.name}

Changing the state Object
To change a value in the state object, use the this.setState() method.

this.setState({color: "blue"})


*/


import React, { Component } from 'react'
import Class_img from './Class_img'
export class Class_state extends Component {

    constructor() {
        super()
        this.state = {
            name: "raj",
            number: 1,
            isImage:true
        }
    }
    render() {
        return (
            <div>
                <button onClick={() => this.setState({ name: "Raj Nagar" })}>Change</button>
                <h1>Hi i am {this.state.name}</h1>

                <hr />

                <button onClick={()=>this.setState({number:this.state.number+1})} className='btn btn-primary'>+</button>
                <h1>{this.state.number}</h1>
                <button  onClick={()=>this.setState({number:this.state.number-1})} className='btn btn-primary'>-</button>

                <hr />
                <button  onClick={()=>this.setState({isImage:false})} className='btn btn-primary me-2'>Hide</button>
                <button  onClick={()=>this.setState({isImage:true})} className='btn btn-primary me-2'>Show</button>
                <button  onClick={()=>this.setState({isImage:!this.state.isImage})} className='btn btn-primary me-2'>Hide/Show</button>
                {
                    this.state.isImage? <Class_img/> : null
                }
                
            </div>
        )
    }
}

export default Class_state
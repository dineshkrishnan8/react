import React,{ Component } from 'react'
 class State8 extends Component{
    constructor(){
        super()
        this.state={
            msg:'sample state method'
        }
    }
    render(){
        return<h1>{this.state.msg}</h1>
    }
} 
export default State8

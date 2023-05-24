import React ,{Component} from 'react'
class Car7 extends Component{
    render()
    {
        const {name,city}=this.props
        return<div><h1>hai{name}from{city}</h1></div>
    }
}
export default Car7
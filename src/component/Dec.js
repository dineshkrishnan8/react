import React,{Component} from "react"
export default class Dec extends Component{
    constructor(){
        super()
        this.state={
            count:5

        }
}

inc(){
    if (this.state.count > 0)
    {
        this.setState({
            count:this.state.count-1
            
        })
    }
}
render(){
    return(
    <div>
    <h1>count={this.state.count}</h1>
    <button onClick={()=>this.inc()}>click</button>
    </div>

    )
}
}
//export default State10

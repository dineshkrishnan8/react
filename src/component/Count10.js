import React,{Component} from "react"
export default class Count10 extends Component{
    constructor(){
        super()
        this.state={
            count:0
        }
}
inc(){
    this.setState({
        count:this.state.count+1
    })
}
render(){
    return(
    <div>
    <h1>count-{this.state.count}</h1>
    <button onClick={()=>this.inc()}>click</button>
    </div>

    )
}
}
//export default State10

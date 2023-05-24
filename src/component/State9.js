import React,{Component} from "react";
class State9 extends Component
{
    constructor(){
        super()
        this.state={
            msg:'welcome'
        }
    }
    dispmsg(){
        this.setState({
            msg:'thank you'
        })
    }
    render(){
        return(<div><h1>{this.state.msg}
        <button onClick={()=>this.dispmsg()}>submit</button></h1></div>)
    }
}
export default State9
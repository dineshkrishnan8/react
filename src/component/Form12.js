import React,{Component} from "react";
class Form12 extends Component
{
constructor(props)
{
    super(props)
    this.state={
        sname:'',
        gender:'',
        addr:'',
        gen:''
    }   
}
nameHandler=(event)=>{
    this.setState({
        sname:event.target.value})
}
genderHandler=(event)=>{
    this.setState({
        gender:event.target.value})
} 
addrHandler=(event)=>{
    this.setState({
        addr:event.target.value})
}
genHandler=(event)=>{
    this.setState({
        gen:event.target.value})
}
submitHandler=(event)=>{
    alert(
        "name:"+`${this.state.sname}`+
        "address:"+`${this.state.addr}`+
        "radiogender:"+`${this.state.gen}`+
        "gender:"+`${this.state.gender}`
        )
    }
render()
{
    return(<form onSubmit={this.submitHandler}>
     <div>
        <label> enter the name</label>
        <input type="text" value={this.state.sname} onChange={this.nameHandler}></input>
     </div>
     <div>
        <label>gender</label>
        <select value={this.state.gender}onChange={this.genderHandler}>
            <option>male</option>
            <option>female</option>
        </select>
     </div>
     <div value={this.state.gen}onChange={this.genHandler}>
        <lable>choose the gender</lable>
        <input type="radio" name="gen" value="male"/>male
        <input type="radio" name="gen" value="female"/>female
     </div>
     <div>
        <label>enter your address</label>
        <textarea row="3" value={this.state.addr}
        onChange={this.addrHandler}>

        </textarea>
     </div>
     <div>
        <button>submit</button>
     </div>
    </form>)
}
}
export default Form12
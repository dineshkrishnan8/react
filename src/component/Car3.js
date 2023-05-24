import React,{Component} from "react"
class Car3 extends Component
{
    render()
    {
        return React.createElement(
            'div',
            { class:"sample",id:"h1id"},
            React.createElement('h1',null,"MCA")
        )
    }
}
export default Car3
import React,{Component}from "react";
class Auto extends Component {
    constructor(props) {
        super(props);
        this.state = { counter: 0 };
    }
    increment() {
        setTimeout(() => {
            this.setState((prev,props)=>({ counter: prev.counter + 1 }));
        }, 3000);
    }
    render() {
        this.increment();
        return (
                <div>
                    <p>{this.state.counter}</p>
                </div>
        );
    }
}

// export default Auto;
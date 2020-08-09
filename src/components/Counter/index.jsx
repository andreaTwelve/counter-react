import React, {Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
        console.log(props)
    }
    increment = () => {
        this.setState((prevState) => ({
            value: prevState.value + 1
        }));
        this.props.increment();
    };
    decrement = () => {
        this.setState((prevState) => ({
            value: prevState.value - 1
        }));
        this.props.decrement();
    };

    render() {
        return (
            <div>
                <button onClick={ this.increment }>+</button>
                <mark>{this.state.value}</mark>
                <button onClick={ this.decrement }>-</button>
            </div>
        )
    }
    componentWillUnmount() {
        this.props.clearZero(this.state.value)
    }
}

export default Counter
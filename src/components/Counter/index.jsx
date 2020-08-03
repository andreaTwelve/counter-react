import React, {Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    increment = () => {
        this.setState({ number: this.state.number + 1 })
    };
    decrement = () => {
        this.setState({ number: this.state.number - 1 })
    };
    render() {
        return (
            <div>
                <button onClick={ this.increment }>+</button>
                <mark>{this.state.number}</mark>
                <button onClick={ this.decrement }>-</button>
            </div>
        )
    }
}

export default Counter
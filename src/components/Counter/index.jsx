import React, {Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: 0
        }
    }
    increment = () => {
        this.setState({ number: this.state.number + 1 });
        this.props['increment']()
    };
    decrement = () => {
        this.setState({ number: this.state.number - 1 });
        this.props['decrement']()
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
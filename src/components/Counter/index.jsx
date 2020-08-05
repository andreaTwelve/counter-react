import React, {Component} from "react";
class Counter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            number: props.number
        };
        console.log(props)
    }
    increment = () => {
        this.props.increment();
        // this.setState({ number: this.state.number + 1 });
        // this.props['increment']()
    };
    decrement = () => {
        this.setState({ number: this.state.number - 1 });
        this.props['decrement']()
    };
    // static getDerivedStateFromProps(props, state) {
    //     if (props.number !== state.number) {
    //         this.setState({number: 0})
    //     }
    // }
    render() {
        //const {number, increment, decrement} = this.props;
        return (
            <div>
                <button onClick={ this.increment }>+</button>
                <mark>{this.state.number}</mark>
                {/*<button onClick={ this.decrement }>-</button>*/}
            </div>
        )
    }
}

export default Counter
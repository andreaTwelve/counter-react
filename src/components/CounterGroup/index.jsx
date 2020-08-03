import React, {Component} from "react";
import Counter from "../Counter";
class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0,
            total: 0
        }
    }
    inputChange = (event) => {
        let value = event.target.value;
        if (value !== '') {
            this.setState({
                count: parseInt(value)
            })
        } else {
            this.setState({
                count: 1
            })
        }
    };
    handleIncrement = () => {
        this.setState({
            total: this.state.total + 1
        })
    };

    handleDecrement = () =>{
        this.setState({
            total: this.state.total - 1
        })
    };
    render() {
        return (
            <div>
                <p>
                    <label>number of counters</label>
                    <input value={ this.state.count } onChange = { this.inputChange }/>
                </p>
                <p>
                    <label>total</label>
                    <input value = { this.state.total } readOnly/>
                </p>
                { new Array(this.state.count).fill(0).map((value, index) => <Counter key = {index} increment = {this.handleIncrement} decrement = {this.handleDecrement}/>) }
            </div>
        )
    }
}

export default CounterGroup
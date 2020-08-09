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
        this.setState({
            count: value ? parseInt(value) : 0,
            total: 0
        })
    };
    clearZero = (count) => {
        this.props.clearZero(count ? parseInt(count) : 0)
    };
    render() {
        return (
            <div>
                <p>
                    <label>number of counters</label>
                    <input defaultValue={0} onChange = { this.inputChange }/>
                </p>
                <p>
                    <label>total</label>
                    <input value = { this.props.state } readOnly/>
                </p>
                { new Array(this.state.count).fill(0).map((value, index) =>
                    <Counter key = {index}
                             increment = {this.props.increment}
                             decrement = {this.props.decrement}
                             clearZero = {this.clearZero}

                    />) }
            </div>
        )
    }
}

export default CounterGroup
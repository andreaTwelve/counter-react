import React, {Component} from "react";
import Counter from "../Counter";
class CounterGroup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }
    inputChange(event) {
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
    }
    render() {
        return (
            <div>
                <label>counters of number</label>
                <input value={ this.state.count } onChange={ event => this.inputChange(event) }/>
                { new Array(this.state.count).fill(0).map((value, index) => <Counter key = {index}/>) }
            </div>
        )
    }
}

export default CounterGroup
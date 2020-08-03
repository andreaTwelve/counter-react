import React, {Component} from "react";
import Counter from "../Counter";
class CounterGroup extends Component {
    render() {
        return (
            new Array(6).fill(0).map((value, index) => <Counter key = {index}/>)
        )
    }
}

export default CounterGroup
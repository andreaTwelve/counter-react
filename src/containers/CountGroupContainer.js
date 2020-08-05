import { increment, decrement, totalIncrement } from "../actions/action";
import { connect } from "react-redux";
import CounterGroup from "../components/CounterGroup";

const mapStateToProps = state => {
    console.log(state.calculateTotal.numberOfCounters);
    return {
        number: state.counter.number,
        numberOfCounters: state.calculateTotal.numberOfCounters,
        total: state.calculateTotal.total
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        handleIncrement: () => dispatch(totalIncrement())
    }
};

const CounterGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup);

export default CounterGroupContainer
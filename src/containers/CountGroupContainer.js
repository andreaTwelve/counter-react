import { increment, decrement, totalIncrement, clearZero } from "../actions/action";
import { connect } from "react-redux";
import CounterGroup from "../components/CounterGroup";

const mapStateToProps = state => {
    return {
        numberOfCounters: state.calculateTotal.numberOfCounters,
        total: state.calculateTotal.total,
        state: state.counter
    }
};

const mapDispatchToProps = dispatch => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        handleIncrement: () => dispatch(totalIncrement()),
        clearZero: count => dispatch(clearZero(count))
    }
};

const CounterGroupContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CounterGroup);

export default CounterGroupContainer
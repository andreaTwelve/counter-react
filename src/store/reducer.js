import {INCREMENT, DECREMENT, TOTALINCREMENT} from "../actions/action";
import { combineReducers } from "redux";
const initialState = {
    number: 0
};

const initialGroupState = {
    numberOfCounters: 0,
    total: 0
};
function counter(state = initialState, action) {
    switch (action.type) {
        case INCREMENT:
            return {
                number: state.number + 1
            };
        case DECREMENT:
            return {
                number: state.number - 1
            };
        default:
            return state
    }
}

function calculateTotal(state = initialGroupState, action) {
    switch(action.type) {
        case TOTALINCREMENT:
            return {
                total: state.total + 1
            };
        default:
            return state
    }
}

const todoApp = combineReducers({
    counter,
    calculateTotal
});

export default todoApp
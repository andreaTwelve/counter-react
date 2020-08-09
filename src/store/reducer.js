import {INCREMENT, DECREMENT, TOTALINCREMENT, CLEARZERO} from "../actions/action";
import { combineReducers } from "redux";

const initialGroupState = {
    numberOfCounters: 0,
    total: 0
};
function counter(state = 0, action) {
    switch (action.type) {
        case INCREMENT:
            return state + 1;
        case DECREMENT:
            return state - 1;
        case CLEARZERO:
            return state - action.count;
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
import { generateState } from "./utils";

export default (state, action) => {
    switch (action.type) {
        case "UPDATE":
            return updateCounter(state, action.value);

        default:
            return state;
    }
}

const updateCounter = (state, value) => {
    const counter = state.counter + value;
    return generateState({
        counter
    });
}
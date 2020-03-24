import { generateState } from "./utils";

export default (state, action) => {
    switch (action.type) {
        case "INCREASE_COUNTER":
            return increaseCounter(state, action.value);

        case "UPDATE_COUNTER":
            return updateCounter(state, action.value);

        case "UPDATE_SHOWS":
            return updateShows(state, action.value);

        default:
            return state;
    }
}

const increaseCounter = (state, value) => {
    const counter = state.counter + value;
    return generateState({
        counter,
        shows: state.shows
    });
}

const updateCounter = (state, value) => {
    return generateState({
        counter: value,
        shows: state.shows
    });
}

const updateShows = (state, shows) => {
    return generateState({
        counter: state.counter,
        shows
    });
}
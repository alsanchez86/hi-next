export const generateState = (
    state = {
        counter: 0,
        shows: []
    }
) => {
    return {
        counter: state.counter,
        shows: state.shows
    }
};
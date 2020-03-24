export const increaseCounter = (counter = 0) => ({
    type: "INCREASE_COUNTER",
    value: counter
});

export const updateCounter = (counter = 0) => ({
    type: "UPDATE_COUNTER",
    value: counter
});

export const updateShows = (shows = []) => ({
    type: "UPDATE_SHOWS",
    value: shows
});
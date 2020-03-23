export default (state, action) => {
    switch (action.type) {
        case 'INCREASE':
            return state + 1
        case 'DECREASE':
            return state - 1
        case 'INCREASE_BY':
            return state + action.payload
        default:
            throw new Error(`Unknown action: ${action.type}`)
    }
}
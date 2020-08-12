const initialState = {
}

export default (state = initialState, action) => {
    switch (action.type) {
    case "FETCH_DETAILS":
        return action.payload
    default:
        return state
    }
}

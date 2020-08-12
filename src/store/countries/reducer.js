const initialState = []

export default (state = initialState, action) => {
    console.log("Reducer", action)
    switch (action.type) {
        
        case "ALL_COUNTRIES":
            console.log("Got here (all countries)")
            return [ ...state, ...action.payload ]

    default:
        return state
    }
}

const initialState = []

export default (state = initialState, action) => {
    // console.log("Reducer", action)
    console.log("step 6: inside the reducer", action.type, action.payload)
    switch (action.type) {
        
        case "ALL_COUNTRIES":
            console.log("step 7: inside the case", action.payload)
            // console.log("Got here (all countries)")
            return [ ...state, ...action.payload ]

    default:
        return state
    }
}

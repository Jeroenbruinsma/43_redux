const initialState = {
    jwt: null
}

export default (state = initialState, action) => {
    switch (action.type) {
    case "LOGIN":
        console.log("step 7: login case")
        return { ...state, jwt: action.payload.jwt} 
    case "PROFILE":
        return {...state, name: action.payload.name, profileImage: action.payload.image}    
   
    case "LOGOUT":
        return initialState

    default:
        return state
    }
}

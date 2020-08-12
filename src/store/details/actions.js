import Axios from "axios"

export const fetchDetails = () => {
    return async (dispatch, getState ) => {

        // console.log("___________________________")
        // console.log("what is this getState thing -> function???", getState() )
        // console.log("___________________________")
        // console.log("___________________________")

        const response = await Axios.get("https://restcountries.eu/rest/v2/alpha/NL")
        dispatch({type: "FETCH_DETAILS", payload: response.data})
    }
}
import Axios from "axios"

export const fetchDetails = (alphaCode) => {
    return async (dispatch, getState ) => {
        const response = await Axios.get(`https://restcountries.eu/rest/v2/alpha/${alphaCode}`)
        dispatch({type: "FETCH_DETAILS", payload: response.data})
    }
}
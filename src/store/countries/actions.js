import Axios from "axios"

export const fetchCountries  = () => {
    console.log("step 3: inside my actions file")
    return async (dispatch) => {
        console.log("step 4: redux is (trying to) get the data from the api")
        
        const response = await Axios.get("https://restcountries.eu/rest/v2/all")
        console.log("step 5: receiving the data from the api", response)
        dispatch({type: "ALL_COUNTRIES", payload: response.data})
    }
}

export const fetchCountryInfo  = (countryCode) => {
    return async (dispatch) => {
        const response = await Axios.get(`https://restcountries.eu/rest/v2/alpha/${countryCode}`)
        dispatch({type: "COUNTRY_DETAILS", payload: response.data})
    }
}
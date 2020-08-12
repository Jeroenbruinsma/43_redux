import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCountries, getFilterdCountries } from '../store/countries/selectors'

export default function Countries() {

    const dispatch = useDispatch()
    // const countries = useSelector( getAllCountries)
    const countries = useSelector( getFilterdCountries)

    useEffect( async ()=>{
        const response = await Axios.get("https://restcountries.eu/rest/v2/all")
        dispatch({type: "ALL_COUNTRIES", payload: response.data})
    }, [])


    return (
        <div>
            {countries.map(countryCard => {
                return <p> {countryCard.name} </p> 
            })}
        </div>
    )
}

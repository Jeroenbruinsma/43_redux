import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  getFilterdCountries } from '../store/countries/selectors'
import { fetchCountries } from '../store/countries/actions'

export default function Countries() {

    const dispatch = useDispatch()
    const countries = useSelector( getFilterdCountries)
    
    useEffect( async ()=>{
        console.log("step 2: useEffect fires to ask the redux store to get the data")
        dispatch ( fetchCountries()   )
    }, [])
    
    console.log("step 1: component is being put on the page")
    console.log("step 9: did countries update?????", countries)

    if(countries.length <= 0 ) return "Loading"
    return (
        <div>

            {countries.map(( countryCard, i) => {
                return <p key={i}> {countryCard.name} </p> 
            })}
        </div>
    )
}

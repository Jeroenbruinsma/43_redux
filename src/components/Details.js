import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { fetchDetails } from '../store/details/actions'
import { getDetails } from '../store/details/selectors'

export default function Details() {

    const params = useParams()
    const dispatch =  useDispatch()
    const details =  useSelector(getDetails)

    useEffect(()=>{
        console.log("use effect of details page")
        dispatch(fetchDetails())    
    },[])

    console.log("what is step 9 for details??", details)
    return (
        <div>
            details page for country: {params.id}

            <ul>
                <li>Name: {details.name}</li>
                <li>Population: {details.population}</li>
                { details.altSpellings ? <li>alternative spellings: <ul> {details.altSpellings.map(alternativeSpellingsCard =>{
                    return <li>{alternativeSpellingsCard }</li> 
                })} </ul></li>  : "no alternative spellings"}
                { details.languages ?  <li> languages: {details.languages.map(langsCard => {
                    return langsCard.name
                })}</li> : null }
            </ul>
        </div>
    )
}

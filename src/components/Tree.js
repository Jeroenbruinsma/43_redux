import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { fetchTree } from '../store/tree/actions'

export default function Tree() {

    const dispatch = useDispatch()

    useEffect(()=> {
        console.log("step 2 useeffect tree ")
        dispatch(fetchTree())
    },[])

    return (
        <div>
            
        </div>
    )
}

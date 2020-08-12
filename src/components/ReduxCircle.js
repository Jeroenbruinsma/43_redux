import React from 'react'

export default function ReduxCircle() {
    return (
        <div>
            <ul>
                <li>step 1: component is being put on the page  %components/Countries.js%</li>
                <li>step 2: useEffect fires to ask the redux store to get the data %components/Countries.js%</li>
                <li>step 3: inside my actions file %store/countries/actions.js%</li>
                <li>step 4: redux is (trying to) get the data from the api %store/countries/actions.js%</li>
                <li>step 5: receiving the data from the api %store/countries/actions.js%</li>
                <li>step 6: inside the reducer", action.type %store/countries/reducer.js%</li>
                <li>step 7: inside the case(update the redux store) %store/countries/reducer.js%</li>
                <li>step 8: selecting the correct data from the store(selector) %store/countries/selector.js%</li>
                <li>step 9: did countries update? %components/Countries.js%</li>
            </ul>
            
        </div>
    )
}

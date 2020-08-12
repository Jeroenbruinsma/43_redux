

export const getAllCountries = (reduxState) => reduxState.countries 


export const getFilterdCountries = (reduxState) => {
    console.log("step 8: selecting the correct data from the store")
   const all =  [...reduxState.countries]
   all.length = 20
   return all
}
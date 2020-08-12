

export const getAllCountries = (reduxState) => reduxState.countries 


export const getFilterdCountries = (reduxState) => {
   const all =  [...reduxState.countries]
   all.length = 20
   return all
}
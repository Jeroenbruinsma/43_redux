import { combineReducers } from "redux";
// import someFeatureReducer from "./someFeature/reducer";
import countriesReducer from './countries/reducer'
import detailsReducer from './details/reducer'

const reducer = combineReducers({
  countries: countriesReducer,
  details : detailsReducer
});

export default reducer;